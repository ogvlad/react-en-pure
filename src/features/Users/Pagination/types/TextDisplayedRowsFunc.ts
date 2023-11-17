import { PageCounts } from "./PageCounts"

interface Args {
  page: number
  pageSize: number
  totalRows: number
  counts: PageCounts
}

export type TextDisplayedRowsFunc = (args: Args) => string
