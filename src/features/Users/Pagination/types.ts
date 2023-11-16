export interface IPaginationProps {
  initialPageSize: number
  options: number[]
  total: number
  getPagesCount?: GetPagesCountFunc
  getTextDisplayedRows?: TextDisplayedRowsFunc
}

export class PageCounts {
  [page: number]: number
}

export type GetPagesCountFunc = (pageSize: number, total: number, counts: PageCounts) => number
export type TextDisplayedRowsFunc = (page: number, pageSize: number, total: number, counts: PageCounts) => string
