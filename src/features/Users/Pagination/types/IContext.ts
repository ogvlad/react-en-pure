import { IPaginationProps } from "./IPaginationProps"
import { PageCounts } from "./PageCounts"

export interface IContext {
  props: IPaginationProps
  state: {
    page: number
    pageSize: number
    counts: PageCounts
  },
  api: {
    setPage: any
    setPageSize: any
    setCounts: any
    getPagesCount: () => number
    getTextDisplayedRows: () => string
  }
}
