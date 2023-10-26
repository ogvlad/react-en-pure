import { ItemTypes } from "./types/ItemTypes"
import { BoxState } from "./types/BoxState"

export const getData = (): BoxState[] => [
  { id: "s-1", lastName: 'Snow', firstName: 'Jon', age: 35, type: ItemTypes.Item },
  
  { id: "a-0", lastName: 'The Lannisters', firstName: '', age: null, type: ItemTypes.Section },
  { id: "a-1", lastName: 'Lannister', firstName: 'Cersei', age: 42, type: ItemTypes.SectionItem },
  { id: "a-2", lastName: 'Lannister', firstName: 'Jaime', age: 45, type: ItemTypes.SectionItem },
  { id: "a-3", lastName: 'Lannister', firstName: 'Tyrion', age: 45, type: ItemTypes.SectionItem },
  
  { id: "b-0", lastName: 'The Starks', firstName: '', age: null, type: ItemTypes.Section },
  { id: "b-1", lastName: 'Stark', firstName: 'Arya', age: 16, type: ItemTypes.SectionItem },
  { id: "b-2", lastName: 'Stark', firstName: 'Sansa', age: 16, type: ItemTypes.SectionItem },
  { id: "b-3", lastName: 'Stark', firstName: 'Ned', age: 16, type: ItemTypes.SectionItem },
  
  { id: "t-0", lastName: 'The Targaryens', firstName: '', age: null, type: ItemTypes.SowisoSet },
  { id: "t-1", lastName: 'Targaryen', firstName: 'Daenerys', age: 25, type: ItemTypes.SowisoItem },
  { id: "t-2", lastName: 'Targaryen', firstName: 'Brother', age: 50, type: ItemTypes.SowisoItem },
  
  { id: "c-1", lastName: 'Melisandre', firstName: null, age: 150, type: ItemTypes.Item },
  { id: "c-2", lastName: 'Clifford', firstName: 'Ferrara', age: 44, type: ItemTypes.Item },
  { id: "c-3", lastName: 'Frances', firstName: 'Rossini', age: 36, type: ItemTypes.Item },
  { id: "c-4", lastName: 'Roxie', firstName: 'Harvey', age: 65, type: ItemTypes.Item },
];