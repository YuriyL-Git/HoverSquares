import { IFieldData } from "../interfaces/field-data";
import { FIELDS_DATA_URL } from "../consts/consts";

export async function getFieldsData(): Promise<Array<IFieldData>> {
  const response: Response = await fetch(FIELDS_DATA_URL);
  return response.json();
}
