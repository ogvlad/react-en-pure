import React, { useEffect, useState } from "react"
import { GridRow } from "@mui/x-data-grid"
import Draggable from "react-draggable"

export const CustomRow = (props: any) => {
  
  const { row } = props
  console.debug("CustomRow", row)
  
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
    // @ts-ignore
    <Draggable
      axis="y"
      onStart={onStart}
      onDrag={onDrag}
      onStop={onStop}
    >
      <GridRow {...props} />
    </Draggable>
  )
}
