import { ItemTypes } from "./ItemTypes"

export const Accepts = {
  [ItemTypes.Table]: [ItemTypes.Item, ItemTypes.Section, ItemTypes.SowisoSet],
  [ItemTypes.Item]: [ItemTypes.Item, ItemTypes.Section, ItemTypes.SowisoSet],
  
  [ItemTypes.Section]: [ItemTypes.Item, ItemTypes.Section, ItemTypes.SowisoSet],
  [ItemTypes.SectionItem]: [ItemTypes.SectionItem],
  
  [ItemTypes.SowisoSet]: [ItemTypes.Item, ItemTypes.SowisoSet, ItemTypes.Section],
  [ItemTypes.SowisoItem]: [ItemTypes.SowisoItem],
}