import { Divider, Stack } from "@mui/material"
import AirbnbLogo from "./AirbnbLogo"
import Search from "./Search"
import Join from "./Join"

const styles={
    root:{
        padding:2
    },
}
const Navbar = () => {
  return (
    <Stack>
    <Stack sx={styles.root} direction={'row'} justifyContent={'space-evenly'} alignItems={'flex-start'}>
    <AirbnbLogo />
    <Stack direction={'row'} alignItems={'flex-start'}>
    <Search />
    <Join />
    </Stack>
    </Stack>
    <Divider sx={{marginTop:1,zIndex:0}} />
    </Stack>
  )
}

export default Navbar
