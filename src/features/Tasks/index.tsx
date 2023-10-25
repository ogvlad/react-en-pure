import React, { Component, useEffect, useState } from "react"
import styled from "@emotion/styled"
import { DragDropContext, DraggableLocation, DragStart, DropResult } from "react-beautiful-dnd"
import { Task, Id, Entities } from "./types"
import Column from "./column"
import { initialData } from "./data"
import { mutliDragAwareReorder, multiSelectTo as multiSelect, Result as ReorderResult } from './utils';
import { Root } from "../../shared/Root"

const Container = styled.div`
  display: flex;
  user-select: none;
`

interface State {
  entities: Entities
  selectedTaskIds: Id[]
  // sad times
  draggingTaskId: Id | null
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
  
  const onDragStart = (start: DragStart) => {
    console.debug("onDragStart", start)
    const id: string = start.draggableId
    const selected: Id | null = state.selectedTaskIds.find(
      (taskId: Id): boolean => taskId === id,
    )
    
    // if dragging an item that is not selected - unselect all items
    if (!selected) {
      unselectAll()
    }
    setState((prev) => ({
      ...prev,
      draggingTaskId: start.draggableId
    }))
  }
  
  const onDragEnd = (result: DropResult) => {
    const destination: DraggableLocation = result.destination
    const source: DraggableLocation = result.source
    
    // nothing to do
    if (!destination || result.reason === "CANCEL") {
      setState((prev) => ({
        ...prev,
        draggingTaskId: null
      }))
      return
    }
    
    const processed: ReorderResult = mutliDragAwareReorder({
      entities: state.entities,
      selectedTaskIds: state.selectedTaskIds,
      source,
      destination,
    })
    
    setState({
      ...processed,
      draggingTaskId: null,
    })
  }
  
  const onWindowKeyDown = (event: KeyboardEvent) => {
    if (event.defaultPrevented) {
      return
    }
    
    if (event.key === "Escape") {
      unselectAll()
    }
  }
  
  const onWindowClick = (event: KeyboardEvent) => {
    if (event.defaultPrevented) {
      return
    }
    unselectAll()
  }
  
  const onWindowTouchEnd = (event: TouchEvent) => {
    if (event.defaultPrevented) {
      return
    }
    unselectAll()
  }
  
  const toggleSelection = (taskId: Id) => {
    console.debug("toggleSelection", taskId)
    const selectedTaskIds: Id[] = state.selectedTaskIds
    const wasSelected: boolean = selectedTaskIds.includes(taskId)
    
    const newTaskIds: Id[] = (() => {
      // Task was not previously selected
      // now will be the only selected item
      if (!wasSelected) {
        return [taskId]
      }
      
      // Task was part of a selected group
      // will now become the only selected item
      if (selectedTaskIds.length > 1) {
        return [taskId]
      }
      
      // task was previously selected but not in a group
      // we will now clear the selection
      return []
    })()
    
    setState((prev) => ({
      ...prev,
      selectedTaskIds: newTaskIds
    }))
  }
  
  const toggleSelectionInGroup = (taskId: Id) => {
    const selectedTaskIds: Id[] = state.selectedTaskIds
    const index: number = selectedTaskIds.indexOf(taskId)
    
    // if not selected - add it to the selected items
    if (index === -1) {
      setState((prev) => ({
        ...prev,
        selectedTaskIds: [...selectedTaskIds, taskId],
      }))
      return
    }
    
    // it was previously selected and now needs to be removed from the group
    const shallow: Id[] = [...selectedTaskIds]
    shallow.splice(index, 1)
    setState((prev) => ({
      ...prev,
      selectedTaskIds: shallow,
    }))
  }
  
  // This behaviour matches the MacOSX finder selection
  const multiSelectTo = (newTaskId: Id) => {
    const updated: Id[] | null = multiSelect(
      state.entities,
      state.selectedTaskIds,
      newTaskId,
    )
    
    if (updated == null) {
      return
    }
    
    setState((prev) => ({
      ...prev,
      selectedTaskIds: updated,
    }))
  }
  
  const unselect = () => {
    unselectAll()
  }
  
  const unselectAll = () => {
    setState((prev) => ({
      ...prev,
      selectedTaskIds: [],
    }))
  }
  
  useEffect(() => {
  
    window.addEventListener("click", onWindowClick)
    window.addEventListener("keydown", onWindowKeyDown)
    window.addEventListener("touchend", onWindowTouchEnd)
    
    return () => {
      window.removeEventListener("click", onWindowClick)
      window.removeEventListener("keydown", onWindowKeyDown)
      window.removeEventListener("touchend", onWindowTouchEnd)
    }
  }, [])
  
  return (
    <Root>
      <DragDropContext
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        <Container>
          {entities.columnOrder.map((columnId: Id) => (
            <Column
              column={entities.columns[columnId]}
              tasks={getTasks(entities, columnId)}
              selectedTaskIds={selectedTaskIds}
              key={columnId}
              draggingTaskId={state.draggingTaskId}
              toggleSelection={toggleSelection}
              toggleSelectionInGroup={toggleSelectionInGroup}
              multiSelectTo={multiSelectTo}
            />
          ))}
        </Container>
      </DragDropContext>
    </Root>
  )
}
