import * as React from "react"
import Box from "@mui/material/Box"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import RestoreIcon from "@mui/icons-material/Restore"
import FavoriteIcon from "@mui/icons-material/Favorite"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import PersonIcon from "@mui/icons-material/Person"
import { useNavigate } from "react-router-dom"

export function TheNavigation() {
  const navigate = useNavigate()
  const [value, setValue] = React.useState(0)
  
  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
          navigate(newValue)
          
        }}
      >
        <BottomNavigationAction label="Home" value={"/"} icon={<RestoreIcon />} />
        <BottomNavigationAction label="Notes" value={"/notes"} icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Tasks" value={"/tasks"} icon={<LocationOnIcon />} />
        {/*<BottomNavigationAction label="Users" value={"/users"} icon={<PersonIcon />} />*/}
      </BottomNavigation>
    </Box>
  )
}