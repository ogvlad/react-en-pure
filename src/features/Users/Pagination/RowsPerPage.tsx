import React from "react"
import { styled } from "@mui/material"
import { MenuItem, Select } from "@mui/material"
import { SelectChangeEvent } from "@mui/material/Select/SelectInput"

export const RowsPerPage = (props: RowsPerPageProps) => {
  
  const { options, onChange, defaultPageSize } = props
  return (
    <Container>
      <LabelText>Rows per page:</LabelText>
      <PageSizeSelector
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
      </PageSizeSelector>
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
})

const LabelText = styled("p")({
  display: "flex",
  alignItems: "center",
})

const PageSizeSelector = styled(Select)({
  display: "flex",
  alignItems: "center",
  marginLeft: "8px",
  marginRight: "32px",
})
