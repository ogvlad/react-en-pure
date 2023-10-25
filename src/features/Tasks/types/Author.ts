import { AuthorColors, Id } from "./types"

export interface Author {
  id: Id,
  name: string,
  avatarUrl: string,
  url: string,
  colors: AuthorColors,
}
