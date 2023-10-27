import React, { useEffect, useState } from "react"
import { GridRow } from "@mui/x-data-grid"
import { DraggableProvided, DraggableStateSnapshot, Draggable } from "react-beautiful-dnd"
import { useItemsContext } from "../Notes/context"

export const CustomRow = (props: any) => {
  
  const { state, api } = useItemsContext()
  const { row } = props
  // console.debug("CustomRow", props)
  
  // if (!ctx.state.isDragging) return <GridRow {...props} />
  
  // if (!row.isSection && row.treeDataPath && row.treeDataPath.length === 1) return "Assessments-ItemRow"
  // if (row.isSection && row.treeDataPath && row.treeDataPath.length === 1) return "Assessments-ItemRow Assessments-SectionTitle"
  // if (row.treeDataPath && row.treeDataPath.length > 1) return null
  if (row.pid !== "") return null
  
  return (
    <Draggable draggableId={row.id} index={props.index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => {
        return (
        <div             ref={provided.innerRef}
                         {...provided.draggableProps}
                         {...provided.dragHandleProps}
                         style={{ ...provided.draggableProps.style, position: 'static' }}
        >
          <GridRow
            {...props}
          />
          {state.itemsList.map((item, index) => {
            // console.debug(item)
            if (item.pid !== row.id) return null
          
            const childProps = {
              ...props,
              index,
              key: item.id,
              rowId: item.id,
            }
            return (<GridRow {...childProps} style={{  }} />)
          })}
        </div>
        )
      }}
    </Draggable>
  )
}
