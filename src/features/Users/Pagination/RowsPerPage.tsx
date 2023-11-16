import React from "react"
import { styled } from "@mui/material"
import { MenuItem, Select } from "@mui/material"
import { SelectChangeEvent } from "@mui/material/Select/SelectInput"

export const RowsPerPage = (props: RowsPerPageProps) => {
  
  const { options, onChange, defaultPageSize } = props
  return (
    <Container>
      <p>Rows per page:</p>
      <Select
        variant={"standard"}
        value={defaultPageSize}
        onChange={onChange}
        label=""
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
  onChange?: (event: SelectChangeEvent<number>, child: React.ReactNode) => void = () => {}
  defaultPageSize?: number = 10
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
