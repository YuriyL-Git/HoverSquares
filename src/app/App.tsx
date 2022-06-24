import React, { useCallback, useEffect, useState } from "react";
import { getFieldsData } from "./api/get-fields-data";
import { IFieldData } from "./interfaces/field-data";
import { Field } from "./components/field/field";
import { Controls } from "./components/controls/controls";
import { CoordsList } from "./components/coords-list/coords-list";
import { ISquareCoords } from "./interfaces/square-coords";
import { HoveredSquaresContext } from "./context/hovered-squares-context";
import "./App.css";

function App() {
  const [fieldsData, setFieldsData] = useState<Array<IFieldData>>([]);
  const [fieldSize, setFieldSize] = useState(0);
  const [fieldUpdateTrigger, setFieldUpdateTrigger] = useState(0);
  const [hoveredSquaresList, setHoveredSquaresList] = useState<
    Array<ISquareCoords>
  >([]);

  const onUpdateField = useCallback(
    (newFieldSize: number | null) => {
      if (newFieldSize === fieldSize || newFieldSize === null) {
        setFieldUpdateTrigger((prevState) => prevState + 1);
      } else {
        setFieldSize(newFieldSize);
      }
      setHoveredSquaresList([]);
    },
    [fieldSize]
  );

  useEffect(() => {
    getFieldsData().then((result) => {
      setFieldsData(result);
    });
  }, []);

  return (
    <HoveredSquaresContext.Provider
      value={{ hoveredSquaresList, setHoveredSquaresList }}
    >
      <div className="App">
        <div className="main-container">
          <div className="field-section">
            <Controls fieldsData={fieldsData} onUpdateField={onUpdateField} />
            <Field fieldSize={fieldSize} updateTrigger={fieldUpdateTrigger} />
          </div>
          <div className="coords-section">
            <CoordsList hoveredSquaresList={hoveredSquaresList} />
          </div>
        </div>
      </div>
    </HoveredSquaresContext.Provider>
  );
}

export default App;
