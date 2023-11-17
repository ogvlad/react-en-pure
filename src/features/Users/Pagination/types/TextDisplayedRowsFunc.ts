interface Args {
  page: number
  pageSize: number
  totalRows: number
}

export type TextDisplayedRowsFunc = (args: Args) => string
