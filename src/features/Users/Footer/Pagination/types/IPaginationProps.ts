import { GetPagesCountFunc } from "./GetPagesCountFunc"
import { TextDisplayedRowsFunc } from "./TextDisplayedRowsFunc"

export interface IPaginationProps {
  initialPageSize: number
  options: number[]
  totalRows: number
  getPagesCount?: GetPagesCountFunc
  getTextDisplayedRows?: TextDisplayedRowsFunc
}
