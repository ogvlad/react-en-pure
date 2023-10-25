import React, { Component, useState } from "react"
import styled from "@emotion/styled"
import { DragDropContext } from "react-beautiful-dnd"
import { Task, Id, Entities } from "../../types"
import Column from "./column"
import { initialData } from "./data"

const Container = styled.div`
  display: flex;
  user-select: none;
`

interface State {
  entities: Entities
  selectedTaskIds: Id[]
  // sad times
  draggingTaskId: Id
}

const getTasks = (entities: Entities, columnId: Id): Task[] =>
  entities.columns[columnId].taskIds.map(
    (taskId: Id): Task => entities.tasks[taskId],
  )

export const TheTasks = () => {
  
  const [state, setState] = useState<State>({
    entities: initialData,
    selectedTaskIds: [],
    draggingTaskId: null,
  })
  
  const { entities, selectedTaskIds } = state
  
  return (
    <DragDropContext
      onDragStart={() => {}}
      onDragEnd={() => {}}
    >
      <Container>
        {entities.columnOrder.map((columnId: Id) => (
          <Column
            column={entities.columns[columnId]}
            tasks={getTasks(entities, columnId)}
            selectedTaskIds={selectedTaskIds}
            key={columnId}
            draggingTaskId={state.draggingTaskId}
            toggleSelection={() => {}}
            toggleSelectionInGroup={() => {}}
            multiSelectTo={() => {}}
          />
        ))}
      </Container>
    </DragDropContext>
  )
}
