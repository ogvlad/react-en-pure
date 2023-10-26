import { AuthorColors, Id } from "./index"

export interface Author {
  id: Id,
  name: string,
  avatarUrl: string,
  url: string,
  colors: AuthorColors,
}
