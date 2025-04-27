import { Avatar, Stack, Typography } from "@mui/material"

const style={
    root:{
        padding:3
    },
    hostName:{
      fontFamily:"Microsoft JhengHei",
      fontWeight:"bold",
      fontSize:20
    },
    experience:{
      color:"gray",
      fontSize:15,
      fontFamily:"Microsoft JhengHei",
      fontWeight:"bold",
    }
}
const HostProfile = () => {
  return (
    <Stack direction={'row'} alignItems={'center'} spacing={2} sx={style.root}>
      <Avatar />
      <Stack>
        <Typography sx={style.hostName}>Stay with Nirmal</Typography>
        <Typography sx={style.experience}>5 years hosting</Typography>
      </Stack>
    </Stack>
  )
}

export default HostProfile
