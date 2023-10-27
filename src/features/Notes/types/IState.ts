import { BoxState } from "./BoxState"

export interface IState {
  itemsList: BoxState[]
  itemsRefMap: Record<string, any>
  itemsTransformMap: Record<string, any>
  dragging: {
    id: string | null
  }
}

