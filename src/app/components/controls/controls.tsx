import { ChangeEvent, FC, memo, useState } from "react";
import { IFieldData } from "../../interfaces/field-data";
import "./controls.css";

interface Props {
  onUpdateField: (fieldSize: number | null) => void;
  fieldsData: Array<IFieldData>;
}

export const Controls: FC<Props> = memo(({ fieldsData, onUpdateField }) => {
  const [fieldSize, setFieldSize] = useState<null | number>(null);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedFieldSize =
      fieldsData.find((fieldData) => fieldData.name === event.target.value)
        ?.field || null;
    setFieldSize(selectedFieldSize);
  };

  const handleButtonStartClick = () => {
    onUpdateField(fieldSize);
  };

  return (
    <div className="controls-container">
      <select className="field-size-select" onChange={handleSelectChange}>
        <option>Pick mode</option>
        {fieldsData.map((fieldData) => (
          <option key={fieldData.name} value={fieldData.name}>
            {fieldData.name}
          </option>
        ))}
      </select>
      <button className="btn-start" onClick={handleButtonStartClick}>
        Start
      </button>
    </div>
  );
});
