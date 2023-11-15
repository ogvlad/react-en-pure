import { CharacterType } from "./CharacterType"

export interface Character {
  id: string;
  pid?: string;
  index?: number;
  firstName: string;
  lastName: string;
  realm?: string;
  family?: Character[];
  type: CharacterType | CharacterType[];
}
