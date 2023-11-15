import { Character } from "./Character"
import { CharacterType } from "./CharacterType"

export const SampleList: Character[] = [
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
        type: [CharacterType.Protagonist, CharacterType.Dynamic]
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
  
  {
    id: "baratheon-family",
    firstName: "",
    lastName: "The Baratheons",
    realm: "Game of Thrones",
    type: CharacterType.Other,
    family: [
      {
        id: "b-1",
        firstName: "Robert",
        lastName: "Baratheon",
        type: CharacterType.Protagonist
      },
      {
        id: "b-2",
        firstName: "Stannis",
        lastName: "Baratheon",
        type: CharacterType.Antagonist
      },
      {
        id: "b-3",
        firstName: "Renly",
        lastName: "Baratheon",
        type: CharacterType.Tritagonist
      }
    ]
  },
  
  {
    id: "tully-family",
    firstName: "",
    lastName: "The Tullys",
    realm: "Game of Thrones",
    type: CharacterType.Other,
    family: [
      {
        id: "tully-1",
        firstName: "Catelyn",
        lastName: "Stark",
        type: CharacterType.Deuteragonist
      },
      {
        id: "tully-2",
        firstName: "Lysa",
        lastName: "Arryn",
        type: CharacterType.Static
      },
      {
        id: "tully-3",
        firstName: "Edmure",
        lastName: "Tully",
        type: CharacterType.Tritagonist
      }
    ]
  },
  
  {
    id: "greyjoy-family",
    firstName: "",
    lastName: "The Greyjoys",
    realm: "Game of Thrones",
    type: CharacterType.Other,
    family: [
      {
        id: "greyjoy-1",
        firstName: "Balon",
        lastName: "Greyjoy",
        type: CharacterType.Antagonist
      },
      {
        id: "greyjoy-2",
        firstName: "Yara",
        lastName: "Greyjoy",
        type: CharacterType.Deuteragonist
      },
      {
        id: "greyjoy-3",
        firstName: "Theon",
        lastName: "Greyjoy",
        type: CharacterType.Tritagonist
      }
    ]
  },
  
  {
    id: "martell-family",
    firstName: "",
    lastName: "The Martells",
    realm: "Game of Thrones",
    type: CharacterType.Other,
    family: [
      {
        id: "martell-1",
        firstName: "Doran",
        lastName: "Martell",
        type: CharacterType.Static
      },
      {
        id: "martell-2",
        firstName: "Oberyn",
        lastName: "Martell",
        type: CharacterType.Dynamic
      }
      // Additional Martell family members can be included
    ]
  },
  
  {
    id: "tyrell-family",
    firstName: "",
    lastName: "The Tyrells",
    realm: "Game of Thrones",
    type: CharacterType.Other,
    family: [
      {
        id: "tyrell-1",
        firstName: "Margaery",
        lastName: "Tyrell",
        type: CharacterType.Deuteragonist
      },
      {
        id: "tyrell-2",
        firstName: "Loras",
        lastName: "Tyrell",
        type: CharacterType.Tritagonist
      },
      {
        id: "tyrell-3",
        firstName: "Olenna",
        lastName: "Tyrell",
        type: CharacterType.Dynamic
      }
    ]
  },
  
  {
    id: "bolton-family",
    firstName: "",
    lastName: "The Boltons",
    realm: "Game of Thrones",
    type: CharacterType.Other,
    family: [
      {
        id: "bolton-1",
        firstName: "Roose",
        lastName: "Bolton",
        type: CharacterType.Antagonist
      },
      {
        id: "bolton-2",
        firstName: "Ramsay",
        lastName: "Bolton",
        type: CharacterType.Antagonist
      }
    ]
  },
  
  
  {
    id: "frey-family",
    firstName: "",
    lastName: "The Freys",
    realm: "Game of Thrones",
    type: CharacterType.Other,
    family: [
      {
        id: "frey-1",
        firstName: "Walder",
        lastName: "Frey",
        type: CharacterType.Antagonist
      },
    ]
  },
  
  {
    id: "arryn-family",
    firstName: "",
    lastName: "The Arryns",
    realm: "Game of Thrones",
    type: CharacterType.Other,
    family: [
      {
        id: "arryn-1",
        firstName: "Jon",
        lastName: "Arryn",
        type: CharacterType.Static
      },
      {
        id: "arryn-2",
        firstName: "Lysa",
        lastName: "Arryn",
        type: CharacterType.Tritagonist
      },
      {
        id: "arryn-3",
        firstName: "Robin",
        lastName: "Arryn",
        type: CharacterType.Static
      }
    ]
  },
  
  {
    id: "littlefinger",
    firstName: "Petyr",
    lastName: "Baelish",
    realm: "Game of Thrones",
    type: [CharacterType.Antagonist, CharacterType.Dynamic]
  },
  {
    id: "varys",
    firstName: "Varys",
    lastName: "",
    realm: "Game of Thrones",
    type: [CharacterType.Tritagonist, CharacterType.Dynamic]
  },
  {
    id: "brienne",
    firstName: "Brienne",
    lastName: "of Tarth",
    realm: "Game of Thrones",
    type: [CharacterType.Deuteragonist, CharacterType.Dynamic]
  },
  {
    id: "hound",
    firstName: "Sandor",
    lastName: "Clegane",
    realm: "Game of Thrones",
    type: [CharacterType.Dynamic, CharacterType.Tritagonist]
  },
  {
    id: "mountain",
    firstName: "Gregor",
    lastName: "Clegane",
    realm: "Game of Thrones",
    type: CharacterType.Antagonist
  },
  {
    id: "melisandre",
    firstName: "Melisandre",
    lastName: "",
    realm: "Game of Thrones",
    type: CharacterType.Dynamic
  },
  {
    id: "davos",
    firstName: "Davos",
    lastName: "Seaworth",
    realm: "Game of Thrones",
    type: CharacterType.Dynamic
  },
  {
    id: "jaqen",
    firstName: "Jaqen",
    lastName: "H'ghar",
    realm: "Game of Thrones",
    type: [CharacterType.Dynamic, CharacterType.Other]
  },
  {
    id: "gendry",
    firstName: "Gendry",
    lastName: "", // Empty lastName
    realm: "Game of Thrones",
    type: [CharacterType.Deuteragonist, CharacterType.Static]
  },
  {
    id: "jorah",
    firstName: "Jorah",
    lastName: "Mormont",
    realm: "Game of Thrones",
    type: [CharacterType.Deuteragonist, CharacterType.Dynamic]
  },
  {
    id: "tormund",
    firstName: "Tormund",
    lastName: "Giantsbane",
    realm: "Game of Thrones",
    type: [CharacterType.Tritagonist, CharacterType.Dynamic]
  },
  {
    id: "missandei",
    firstName: "Missandei",
    lastName: "", // Empty lastName
    realm: "Game of Thrones",
    type: [CharacterType.Deuteragonist, CharacterType.Static]
  },
  {
    id: "greyworm",
    firstName: "Grey Worm",
    lastName: "", // Empty lastName
    realm: "Game of Thrones",
    type: [CharacterType.Deuteragonist, CharacterType.Static]
  },
]