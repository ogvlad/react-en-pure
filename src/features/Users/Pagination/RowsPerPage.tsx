import React from "react"
import { styled } from "@mui/material"
import { FormControl, InputLabel, MenuItem, Select, SelectProps } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

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

const DisplayedRows = styled("p")({
  display: "flex",
  alignItems: "center",
})

const PaginationActions = styled("div")({
  display: "flex",
  alignItems: "center",
  marginLeft: "20px",
  marginRight: "0",
})

export const RowsPerPage = () => {
  return (
    <Container>
      <LabelText>Rows per page:</LabelText>
      <PageSizeSelector
        variant={"standard"}
        value={30}
        onChange={() => {}}
        label=""
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.title}
          </MenuItem>
        ))}
      </PageSizeSelector>
      <DisplayedRows className={"MuiTablePagination-displayedRows"}>1&ndash;13 of 65</DisplayedRows>
      <PaginationActions className={"MuiTablePagination-actions"}>
        <IconButton aria-label="Go to previous page">
          <KeyboardArrowLeftIcon />
        </IconButton>
        <IconButton aria-label="Go to next page">
        <KeyboardArrowRightIcon />
      </IconButton>
      </PaginationActions>
    </Container>
  )
}

const options = [
  { value: 10, title: "10" },
  { value: 30, title: "30" },
  { value: 50, title: "50" },
  { value: 100, title: "100" },
]