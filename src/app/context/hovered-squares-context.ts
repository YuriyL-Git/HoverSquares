import { createContext } from "react";
import { ISquareCoords } from "../interfaces/square-coords";

export interface IHoveredSquaresContext {
  hoveredSquaresList: Array<ISquareCoords>;
  setHoveredSquaresList: (coordsList: Array<ISquareCoords>) => void;
}

export const HoveredSquaresContext = createContext<IHoveredSquaresContext>({
  hoveredSquaresList: [] as Array<ISquareCoords>,
  setHoveredSquaresList: () => {},
});
