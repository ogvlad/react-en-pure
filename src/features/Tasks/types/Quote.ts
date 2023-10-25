import { Id } from "./Id"
import { Author } from "./Author"

export interface Quote {
  id: Id
  content: string
  author: Author
}
