import React from "react"
import { styled } from "@mui/material"
import { MenuItem, Select } from "@mui/material"
import { SelectChangeEvent } from "@mui/material/Select/SelectInput"
import { usePaginationContext } from "./context"

export const RowsPerPage = () => {
  
  const ctx = usePaginationContext()
  const { options } = ctx.props
  const { pageSize } = ctx.state
  const { setPage, setPageSize } = ctx.api
  
  const onChange = (event: any) => {
    setPageSize(event.target.value)
    setPage(0)
  }
  
  return (
    <Container>
      <p>Rows per page:</p>
      <Select
        variant={"standard"}
        value={pageSize}
        onChange={onChange}
        label=""
        disableUnderline
      >
        {options.map((value) => (
          <MenuItem key={value} value={value}>
            {value.toString()}
          </MenuItem>
        ))}
      </Select>
    </Container>
  )
}

export class RowsPerPageProps {
  options: number[] = [10, 30, 50, 100]
  value?: number = 10
  onChange?: (event: SelectChangeEvent<number>, child: React.ReactNode) => void = () => {}
}

const Container = styled("div")({
  display: "flex",
  
  "p": {
    display: "flex",
    alignItems: "center",
  },
  
  ".MuiInputBase-root": {
    display: "flex",
    alignItems: "center",
    marginLeft: "8px",
    marginRight: "32px",
  }
})
