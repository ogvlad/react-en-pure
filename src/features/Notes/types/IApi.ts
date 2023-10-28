import { BoxState } from "./BoxState"

export interface IApi {
  getIndexById: (id: any) => any
  swap: (index1: number, index2: number) => void
  swapByIds: (id1: any, id2: any) => void
  swapCss: (params: any) => void
  setDragging: (id: string | null) => void
  setCurrentHoverIndex: (index: number | null) => void
  setItem: (id: string, item: BoxState) => void
  setRef: (id: string, ref: any) => void
  setTransform: (id: string, value: any) => void
  resetTransform: () => void
}
