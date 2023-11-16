import { PageCounts } from "./PageCounts"

interface Args {
  pageSize: number
  total: number
  counts: PageCounts
}

export type GetPagesCountFunc = (args: Args) => number
