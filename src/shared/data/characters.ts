import { Character } from "./Character"
import { DndTypes } from "./DndTypes"

export const Characters: Character[] = [
  { id: "s-1", lastName: "Snow", firstName: "Jon", type: DndTypes.Item },
  
  {
    id: "a-0", lastName: "The Lannisters", firstName: "", type: DndTypes.Section,
    family: [
      { id: "a-1", lastName: "Lannister", firstName: "Cersei", type: DndTypes.SectionItem },
      { id: "a-2", lastName: "Lannister", firstName: "Jaime", type: DndTypes.SectionItem },
      { id: "a-3", lastName: "Lannister", firstName: "Tyrion", type: DndTypes.SectionItem },
    ]
  },
  
  {
    id: "b-0", lastName: "The Starks", firstName: "", type: DndTypes.Section,
    family: [
      { id: "b-1", lastName: "Stark", firstName: "Arya", type: DndTypes.SectionItem },
      { id: "b-2", lastName: "Stark", firstName: "Sansa", type: DndTypes.SectionItem },
      { id: "b-3", lastName: "Stark", firstName: "Ned", type: DndTypes.SectionItem },
    ]
  },
  
  {
    id: "t-0", lastName: "The Targaryens", firstName: "", type: DndTypes.SowisoSet,
    family: [
      { id: "t-1", lastName: "Targaryen", firstName: "Daenerys", type: DndTypes.SowisoItem },
      { id: "t-2", lastName: "Targaryen", firstName: "Brother", type: DndTypes.SowisoItem },
    ]
  },
  
  { id: "c-1", lastName: "Melisandre", firstName: null, type: DndTypes.Item },
  { id: "c-2", lastName: "Clifford", firstName: "Ferrara", type: DndTypes.Item },
  { id: "c-3", lastName: "Frances", firstName: "Rossini", type: DndTypes.Item },
  { id: "c-4", lastName: "Roxie", firstName: "Harvey", type: DndTypes.Item },
  
  {
    id: "hp-0", lastName: "Harry Potter World", firstName: "", type: DndTypes.SowisoSet,
    family: [
      { id: "hp-1", lastName: "Potter", firstName: "Harry", type: DndTypes.SowisoItem },
      { id: "hp-2", lastName: "Weasley", firstName: "Ron", type: DndTypes.SowisoItem },
      { id: "hp-3", lastName: "Granger", firstName: "Hermione", type: DndTypes.SowisoItem },
      { id: "hp-4", lastName: "Hagrid", firstName: "Rubeus", type: DndTypes.SowisoItem },
    ]
  },
  
  {
    id: "lotr-1", lastName: "Baggins", firstName: "Frodo", type: DndTypes.Item
  },
  {
    id: "lotr-2", lastName: "Gamgee", firstName: "Samwise", type: DndTypes.Item
  },
  {
    id: "lotr-3", lastName: "Gandalf", firstName: "", type: DndTypes.Item
  },
  {
    id: "lotr-4", lastName: "Aragorn", firstName: "", type: DndTypes.Item
  },
  {
    id: "lotr-5", lastName: "Legolas", firstName: "", type: DndTypes.Item
  },
  {
    id: "lotr-6", lastName: "Gimli", firstName: "", type: DndTypes.Item
  },
  {
    id: "lotr-7", lastName: "Boromir", firstName: "", type: DndTypes.Item
  },
  {
    id: "lotr-8", lastName: "Elrond", firstName: "", type: DndTypes.Section,
    family: [
      { id: "lotr-8-1", lastName: "Elrond", firstName: "Arwen", type: DndTypes.SectionItem }
    ]
  },
  {
    id: "pnp-1", lastName: "Bennet", firstName: "Elizabeth", type: DndTypes.Section,
    family: [
      { id: "pnp-1-1", lastName: "Bennet", firstName: "Jane", type: DndTypes.SectionItem },
      { id: "pnp-1-2", lastName: "Bennet", firstName: "Mary", type: DndTypes.SectionItem },
      { id: "pnp-1-3", lastName: "Bennet", firstName: "Kitty", type: DndTypes.SectionItem },
      { id: "pnp-1-4", lastName: "Bennet", firstName: "Lydia", type: DndTypes.SectionItem }
    ]
  },
  {
    id: "pnp-2", lastName: "Darcy", firstName: "Mr.", type: DndTypes.Item
  },
  {
    id: "tkam-1", lastName: "Finch", firstName: "Scout", type: DndTypes.Section,
    family: [
      { id: "tkam-1-1", lastName: "Finch", firstName: "Jem", type: DndTypes.SectionItem },
      { id: "tkam-1-2", lastName: "Finch", firstName: "Atticus", type: DndTypes.SectionItem }
    ]
  },
  {
    id: "1984-1", lastName: "Smith", firstName: "Winston", type: DndTypes.Item
  },
  {
    id: "gatsby-1", lastName: "Gatsby", firstName: "Jay", type: DndTypes.Item
  },
  {
    id: "gatsby-2", lastName: "Buchanan", firstName: "Daisy", type: DndTypes.Item
  },
  {
    id: "mobyd-1", lastName: "", firstName: "Ahab", type: DndTypes.Item
  },
  {
    id: "littlew-1", lastName: "March", firstName: "Jo", type: DndTypes.Section,
    family: [
      { id: "littlew-1-1", lastName: "March", firstName: "Meg", type: DndTypes.SectionItem },
      { id: "littlew-1-2", lastName: "March", firstName: "Beth", type: DndTypes.SectionItem },
      { id: "littlew-1-3", lastName: "March", firstName: "Amy", type: DndTypes.SectionItem }
    ]
  },
  {
    id: "catcher-1", lastName: "Caulfield", firstName: "Holden", type: DndTypes.Item
  },
  {
    id: "grapes-1", lastName: "Joad", firstName: "Tom", type: DndTypes.Item
  },
  // Continued from your existing Characters array...
  {
    id: "sherlock-1", lastName: "Holmes", firstName: "Sherlock", type: DndTypes.Item
  },
  {
    id: "sherlock-2", lastName: "Watson", firstName: "John", type: DndTypes.Item
  },
  {
    id: "expectations-1", lastName: "Pip", firstName: "", type: DndTypes.Item
  },
  {
    id: "mockingbird-1", lastName: "Finch", firstName: "Atticus", type: DndTypes.Item
  },
  {
    id: "dune-1", lastName: "Atreides", firstName: "Paul", type: DndTypes.Item
  },
  {
    id: "dune-2", lastName: "Harkonnen", firstName: "Baron", type: DndTypes.Item
  },
  {
    id: "dracula-1", lastName: "", firstName: "Dracula", type: DndTypes.Item
  },
  {
    id: "frankenstein-1", lastName: "", firstName: "Frankenstein", type: DndTypes.Item
  },
  {
    id: "odyssey-1", lastName: "", firstName: "Odysseus", type: DndTypes.Item
  },
  {
    id: "f451-1", lastName: "Montag", firstName: "Guy", type: DndTypes.Item
  },
  {
    id: "anna-1", lastName: "Karenina", firstName: "Anna", type: DndTypes.Item
  },
  {
    id: "donquixote-1", lastName: "Quixote", firstName: "Don", type: DndTypes.Item
  },
  {
    id: "warpeace-1", lastName: "Bezukhov", firstName: "Pierre", type: DndTypes.Item
  },
  {
    id: "warpeace-2", lastName: "Rostova", firstName: "Natasha", type: DndTypes.Item
  },
  {
    id: "hobbit-1", lastName: "Baggins", firstName: "Bilbo", type: DndTypes.Item
  },

]