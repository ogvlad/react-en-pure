import { IPaginationProps } from "./IPaginationProps"

export interface IContext {
  props: IPaginationProps
  state: {
    page: number
    pageSize: number
  },
  api: {
    setPage: any
    setPageSize: any
    getPagesCount: () => number
    getTextDisplayedRows: () => string
  }
}
