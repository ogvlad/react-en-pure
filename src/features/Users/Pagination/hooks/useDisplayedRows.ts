import { IPaginationProps, PageCounts, TextDisplayedRowsFunc } from "../types"

export const useDisplayedRows = (props: IPaginationProps): TextDisplayedRowsFunc => {

  const { getTextDisplayedRows } = props
  
  const defaultFunc = (page: number, pageSize: number, total: number, counts: PageCounts) => {
    const start = page * pageSize + 1
    const end = Math.min(start + pageSize, total)
    return `${start}-${end} of ${total}`
  }
  
  return getTextDisplayedRows ?? defaultFunc
}
