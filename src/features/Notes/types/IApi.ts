
export interface IApi {
  swap: (index1: number, index2: number) => void
  setDragging: (id: string | null) => void
  setRef: (id: string, ref: HTMLDivElement | null) => void
}
