import React, { FC, useContext, useState } from "react";
import { COORDINATES_LIST_SIZE, SQUARE_COLORS } from "../../consts/consts";
import { ISquareCoords } from "../../interfaces/square-coords";
import { HoveredSquaresContext } from "../../context/hovered-squares-context";
import "./square.css";

interface Props {
  squareSize: number;
  coords: ISquareCoords;
}

export const Square: FC<Props> = ({ squareSize, coords }) => {
  const [color, setColor] = useState<typeof SQUARE_COLORS[number]>("white");
  const { hoveredSquaresList, setHoveredSquaresList } = useContext(
    HoveredSquaresContext
  );

  const onHover = () => {
    setColor(SQUARE_COLORS.find((curColor) => curColor !== color)!);
    setHoveredSquaresList([
      ...hoveredSquaresList.slice(-COORDINATES_LIST_SIZE),
      coords,
    ]);
  };

  return (
    <div
      className="square"
      style={{
        width: squareSize,
        height: squareSize,
        backgroundColor: color,
      }}
      onMouseOver={onHover}
    ></div>
  );
};
