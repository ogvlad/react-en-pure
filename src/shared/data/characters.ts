import { Character } from "./Character"
import { CharacterType } from "./CharacterType"

export const Characters: Character[] = [
  {
    id: "lannister-family",
    firstName: "",
    lastName: "The Lannisters",
    realm: "Game of Thrones",
    type: CharacterType.Other, // Using 'Other' for the family group
    family: [
      {
        id: "l-1",
        firstName: "Cersei",
        lastName: "Lannister",
        type: CharacterType.Antagonist
      },
      {
        id: "l-2",
        firstName: "Jaime",
        lastName: "Lannister",
        type: CharacterType.Deuteragonist
      },
      {
        id: "l-3",
        firstName: "Tyrion",
        lastName: "Lannister",
        type: CharacterType.Tritagonist
      }
    ]
  },
  
  {
    id: "stark-family",
    firstName: "",
    lastName: "The Starks",
    realm: "Game of Thrones",
    type: CharacterType.Other,
    family: [
      {
        id: "s-1",
        firstName: "Rickon",
        lastName: "Stark",
        type: CharacterType.Deuteragonist
      },
      {
        id: "s-2",
        firstName: "Eddard",
        lastName: "Stark",
        type: CharacterType.Deuteragonist
      },
      {
        id: "s-3",
        firstName: "Catelyn",
        lastName: "Stark",
        type: CharacterType.Deuteragonist
      },
      {
        id: "s-4",
        firstName: "Robb",
        lastName: "Stark",
        type: CharacterType.Deuteragonist
      },
      {
        id: "s-5",
        firstName: "Sansa",
        lastName: "Stark",
        type: CharacterType.Deuteragonist
      },
      {
        id: "s-6",
        firstName: "Arya",
        lastName: "Stark",
        type: CharacterType.Deuteragonist
      },
      {
        id: "s-7",
        firstName: "Bran",
        lastName: "Stark",
        type: CharacterType.Deuteragonist
      },
    ]
  },
  
  {
    id: "targaryen-family",
    firstName: "",
    lastName: "The Targaryens",
    realm: "Game of Thrones",
    type: CharacterType.Other,
    family: [
      {
        id: "t-1",
        firstName: "Daenerys",
        lastName: "Targaryen",
        type: CharacterType.Protagonist
      },
      {
        id: "t-2",
        firstName: "Viserys",
        lastName: "Targaryen",
        type: CharacterType.Antagonist
      }
    ]
  },

]