import { Stack } from "@mui/material"
import Price from "./Price"
import RoomDetails from "../components/PlacesPage/RoomDetails"

const Details = () => {
  return (
    <Stack direction={'row'} spacing={10}>
      <RoomDetails />
      <Price />
    </Stack>
  )
}

export default Details
