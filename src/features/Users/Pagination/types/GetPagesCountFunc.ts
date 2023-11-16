import { PageCounts } from "./PageCounts"

export type GetPagesCountFunc = (pageSize: number, total: number, counts: PageCounts) => number
