import { IconButton, Stack } from "@mui/material"
import AirbnbYourHome from "./AirbnbYourHome"
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ProfileButton from "./ProfileButton";
const Join = () => {
  return (
    <Stack direction={'row'} spacing={2}>
      <AirbnbYourHome />
      <IconButton>
        <LanguageOutlinedIcon />
      </IconButton>
      <ProfileButton />
    </Stack>
  )
}

export default Join
