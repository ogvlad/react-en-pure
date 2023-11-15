import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid"
import { CellIndex } from "./CellIndex"

export const getColumns = (): GridColDef[] => [
  {
    field: 'index',
    headerName: '#',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    renderCell: CellIndex
  },
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ''} ${params.row.lastName || ''}`
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'realm',
    headerName: 'Realm',
    type: 'string',
    width: 210,
    editable: true,
  },
  {
    field: 'type',
    headerName: 'Type',
    type: 'string',
    width: 110,
  },

];
