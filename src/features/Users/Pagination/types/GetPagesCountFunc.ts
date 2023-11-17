import { PageCounts } from "./PageCounts"

interface Args {
  totalRows: number
  pageSize: number
  counts: PageCounts
}

export type GetPagesCountFunc = (args: Args) => number
