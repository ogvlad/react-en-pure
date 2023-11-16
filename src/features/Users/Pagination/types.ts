export interface IPaginationProps {
  initialPageSize: number
  options: number[]
  total: number
  getPagesCount?: () => number
  getTextDisplayedRows?: () => string
}

// constructor(options: number[], pageSize: number, total: number, getPagesCount?: () => number) {
//   this.options = options
//   this.pageSize = pageSize
//   this.total = total
//   this.getPagesCount = getPagesCount ?? this.getPagesCountDefault
// }
//
// private getPagesCountDefault() {
//   return this.total / this.pageSize
// }
export class PageCounts {
  [page: number]: number
}
