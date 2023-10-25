import React, { useEffect, useState } from "react"
import { GridRow } from "@mui/x-data-grid"
import { DraggableProvided, DraggableStateSnapshot, Draggable } from "react-beautiful-dnd"

export const CustomRow = (props: any) => {
  
  const { row } = props
  console.debug("CustomRow", props)
  
  // if (!ctx.state.isDragging) return <GridRow {...props} />
  
  // if (!row.isSection && row.treeDataPath && row.treeDataPath.length === 1) return "Assessments-ItemRow"
  // if (row.isSection && row.treeDataPath && row.treeDataPath.length === 1) return "Assessments-ItemRow Assessments-SectionTitle"
  // if (row.treeDataPath && row.treeDataPath.length > 1) return null
  
  const onStart = () => {
  }
  const onDrag = () => {
  }
  const onStop = () => {
  }
  
  return (
    <Draggable draggableId={row.id} index={props.index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => {
        return (
          <GridRow
            {...props}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          />)
      }}
    </Draggable>
  )
}