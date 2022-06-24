import { FC } from "react";
import { ISquareCoords } from "../../interfaces/square-coords";
import "./coords-list.css";

interface Props {
  hoveredSquaresList: Array<ISquareCoords>;
}

export const CoordsList: FC<Props> = ({ hoveredSquaresList }) => {
  return (
    <div className="coords-list-container">
      <p className="coords-list-title">Hover squares</p>
      {hoveredSquaresList.map((coords, index) => (
        <div className="coords-list-item" key={index}>
          <span>row {coords.rowIndex + 1}&nbsp;</span>
          <span>col {coords.columnIndex + 1}</span>
        </div>
      ))}
    </div>
  );
};
