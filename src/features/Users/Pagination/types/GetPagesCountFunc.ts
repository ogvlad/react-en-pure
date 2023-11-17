interface Args {
  totalRows: number
  pageSize: number
}

export type GetPagesCountFunc = (args: Args) => number
