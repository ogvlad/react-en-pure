import React from "react"
import { styled } from "@mui/material"

export const PaginationRoot = styled("div")({
  display: "flex",
  flexWrap: "nowrap",
  alignItems: "center",
  // fontSize: "1.4rem",
  
  "& div, & p": {
    fontFamily: "\"Open Sans Eas\", \"Open Sans\", sans-serif",
    // fontSize: "1.4rem",
  },
  "& svg": {
    // fontSize: "2.4rem",
  },
  
  "& .MuiToolbar-root": {
    // fontSize: "1.4rem",
  }
})
