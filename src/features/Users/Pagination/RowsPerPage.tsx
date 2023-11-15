import React from "react"
import { styled } from "@mui/material"
import { FormControl, InputLabel, MenuItem, Select, SelectProps } from "@mui/material"

const Container = styled("div")({})

export const RowsPerPage = () => {
  return (
    <Container>
      <div>Rows per page</div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 48 }}>
        <Select
          value={30}
          onChange={() => {}}
          label=""
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  )
}

const options = [
  { value: 10, title: "10" },
  { value: 30, title: "30" },
  { value: 50, title: "50" },
  { value: 100, title: "100" },
]