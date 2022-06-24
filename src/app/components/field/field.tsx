import { FC, memo } from "react";
import { Square } from "../square/square";
import "./field.css";
import { FIELD_SIZE_TO_SCREEN_HEIGHT_PROPORTIONS } from "../../consts/consts";

interface Props {
  fieldSize: number;
  updateTrigger: number;
}

export const Field: FC<Props> = memo(({ fieldSize, updateTrigger }) => {
  const squareSize =
    window.innerHeight / (fieldSize * FIELD_SIZE_TO_SCREEN_HEIGHT_PROPORTIONS);
  const mapArray = [...Array(fieldSize)];

  return (
    <div
      className="field"
      style={{ gridTemplateColumns: `repeat(${fieldSize}, 1fr)` }}
    >
      {mapArray.map((_, rowIndex) =>
        mapArray.map((_, columnIndex) => {
          return (
            <Square
              squareSize={squareSize}
              coords={{ rowIndex, columnIndex }}
              key={`${updateTrigger}${fieldSize}${rowIndex}${columnIndex}`}
            />
          );
        })
      )}
    </div>
  );
});
