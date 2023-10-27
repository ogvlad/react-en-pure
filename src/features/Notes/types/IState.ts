import { BoxState } from "./BoxState"

export interface IState {
  items: BoxState[]
  dragging: {
    id: string | null
  }
}

