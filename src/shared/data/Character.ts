import { DndTypes } from "./DndTypes"

export interface Character {
  id: string;
  pid?: string;
  firstName: string;
  lastName: string;
  type: DndTypes;
  family?: Character[];
}