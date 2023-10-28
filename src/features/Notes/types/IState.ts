import { BoxState } from "./BoxState"

export interface IState {
  itemsList: BoxState[]
  itemsMap: Record<string, BoxState>
  itemsRefMap: Record<string, any>
  itemsTransformMap: Record<string, any>
  dragging: {
    id: string | null
  }
  currentHoverIndex: number | null
}

