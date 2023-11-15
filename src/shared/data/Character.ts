import { DndTypes } from "./DndTypes"

export interface Character {
  id: string;
  pid: string;
  firstName: string;
  lastName: string;
  age: number;
  type: DndTypes;
  family?: Character[];
}