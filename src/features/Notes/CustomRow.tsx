import React, { useEffect, useState } from "react"
import { GridRow } from "@mui/x-data-grid"

export const CustomRow = (props: any) => {
  
  const { row } = props
  console.debug("CustomRow", row)
  
  return (
    <GridRow {...props} />
  )
}
