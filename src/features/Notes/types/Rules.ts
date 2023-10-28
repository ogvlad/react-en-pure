import { DndTypes } from "./DndTypes"

export const Accepts = {
  [DndTypes.Table]: [DndTypes.Item, DndTypes.Section, DndTypes.SowisoSet],
  [DndTypes.Item]: [DndTypes.Item, DndTypes.Section, DndTypes.SowisoSet],
  
  [DndTypes.Section]: [DndTypes.Item, DndTypes.Section, DndTypes.SowisoSet],
  [DndTypes.SectionItem]: [DndTypes.SectionItem],
  
  [DndTypes.SowisoSet]: [DndTypes.Item, DndTypes.SowisoSet, DndTypes.Section],
  [DndTypes.SowisoItem]: [DndTypes.SowisoItem],
}