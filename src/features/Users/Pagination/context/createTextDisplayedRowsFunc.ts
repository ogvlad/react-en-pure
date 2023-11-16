import { TextDisplayedRowsFunc } from "../types/TextDisplayedRowsFunc"
import { PageCounts } from "../types/PageCounts"
import { IPaginationProps } from "../types/IPaginationProps"

export const createTextDisplayedRowsFunc = (props: IPaginationProps): TextDisplayedRowsFunc => {
  
  const { getTextDisplayedRows } = props
  
  const defaultFunc = (page: number, pageSize: number, total: number, counts: PageCounts) => {
    const start = page * pageSize + 1
    const end = Math.min(start + pageSize, total)
    return `${start}-${end} of ${total}`
  }
  
  return getTextDisplayedRows ?? defaultFunc
}
