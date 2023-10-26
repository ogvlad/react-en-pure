import { ItemTypes } from "./ItemTypes"

export const Accepts = {
  [ItemTypes.Item]: [ItemTypes.Item, ItemTypes.Section, ItemTypes.SowisoSet],
  [ItemTypes.Table]: [ItemTypes.Item, ItemTypes.Section, ItemTypes.SowisoSet],
  [ItemTypes.Section]: [ItemTypes.SectionItem],
  [ItemTypes.SectionItem]: [ItemTypes.SectionItem],
  [ItemTypes.SowisoSet]: [ItemTypes.SowisoItem],
  [ItemTypes.SowisoItem]: [ItemTypes.SowisoItem],
}