import { GetPagesCountFunc } from "./Pagination/types/GetPagesCountFunc"
import { TextDisplayedRowsFunc } from "./Pagination/types/TextDisplayedRowsFunc"

export interface ITableFooterProps {
  getPagesCount?: GetPagesCountFunc
  getTextDisplayedRows?: TextDisplayedRowsFunc
}