import { Id } from "./Id"
import { Task } from "./Task"


export interface Column {
  id: Id
  title: string
  taskIds: Id[]
}

export interface ColumnMap {
  [columnId: Id]: Column
}

export interface TaskMap {
  [taskId: Id]: Task
}

export interface Entities {
  columnOrder: Id[]
  columns: ColumnMap
  tasks: TaskMap
}
