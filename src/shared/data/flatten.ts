import { Character } from "./Character"

export function flattenCharacters(characters: Character[], parentID?: string): Character[] {
  let flatList: Character[] = [];
  
  characters.forEach(character => {
    const flatCharacter: Character = {
      ...character,
      pid: parentID,  // Set the parent ID if available
      family: undefined  // Remove the family to flatten the structure
    };
    
    // Add the current character to the flat list
    flatList.push(flatCharacter);
    
    // If the character has a family, recursively flatten it and add to the list
    if (character.family && character.family.length > 0) {
      const flattenedFamily = flattenCharacters(character.family, character.id);
      flatList = flatList.concat(flattenedFamily);
    }
  });
  
  return flatList;
}
