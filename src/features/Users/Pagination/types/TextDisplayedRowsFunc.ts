import { PageCounts } from "./PageCounts"

export type TextDisplayedRowsFunc = (page: number, pageSize: number, total: number, counts: PageCounts) => string
