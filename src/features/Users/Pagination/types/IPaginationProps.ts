import { GetPagesCountFunc } from "./GetPagesCountFunc"
import { TextDisplayedRowsFunc } from "./TextDisplayedRowsFunc"

export interface IPaginationProps {
  initialPageSize: number
  options: number[]
  total: number
  getPagesCount?: GetPagesCountFunc
  getTextDisplayedRows?: TextDisplayedRowsFunc
}
