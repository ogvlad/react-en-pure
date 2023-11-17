import { TextDisplayedRowsFunc } from "../types/TextDisplayedRowsFunc"
import { IPaginationProps } from "../types/IPaginationProps"

export const createTextDisplayedRowsFunc = (props: IPaginationProps): TextDisplayedRowsFunc => {
  
  const { getTextDisplayedRows } = props
  
  const defaultFunc: TextDisplayedRowsFunc = ({ page, pageSize, totalRows}) => {
    const start = page * pageSize + 1
    const end = Math.min(start + pageSize, totalRows)
    return `${start}-${end} of ${totalRows}`
  }
  
  return getTextDisplayedRows ?? defaultFunc
}
