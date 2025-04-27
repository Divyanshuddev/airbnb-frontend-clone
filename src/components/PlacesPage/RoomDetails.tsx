import { Divider, Stack} from "@mui/material"
import Location from "./Location"
import Review from "./Review"
import HostProfile from "./HostProfile"
import Neighbourhood from "./Neighbourhood"
import Amenities from "./Amenities"
import AboutThisPlace from "./AboutThisPlace"


const RoomDetails = () => {
  return (
    <Stack width={'60%'}>
      <Stack spacing={1}>
        <Location />
        <Review />
      </Stack>
        <Divider />
        <HostProfile />
        <Divider />
        <Neighbourhood />
        <Divider />
        <AboutThisPlace />
        <Divider />
        <Amenities />
        
    </Stack>
  )
}

export default RoomDetails
