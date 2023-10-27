import { BoxState } from "./BoxState"

export interface IState {
  itemsList: BoxState[]
  itemsMap: Record<string, any>
  dragging: {
    id: string | null
  }
}

