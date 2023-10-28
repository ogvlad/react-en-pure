import { BoxState } from "./BoxState"

export interface IApi {
  swap: (index1: number, index2: number) => void
  swapCss: (params: any) => void
  setDragging: (id: string | null) => void
  setItem: (id: string, item: BoxState) => void
  setRef: (id: string, ref: any) => void
  setTransform: (id: string, value: any) => void
  resetTransform: () => void
}
