import { Stack, Typography } from "@mui/material"

const style={
  locationText:{
     fontFamily:"Microsoft JhengHei",
     fontSize:18,
     fontWeight:"bolder"
  }
}
const Location = () => {
  return (
    <Stack>
      <Typography sx={style.locationText}>Room in Bujra, India</Typography>
      <Stack direction={'row'} alignItems={'center'} spacing={2}>
      <Typography component={'li'} typeof="bullet">8 bedrooms</Typography>
      <Typography component={'li'} typeof="bullet">8 beds</Typography>
      <Typography component={'li'} typeof="bullet">Dedicated bathroom</Typography>
      </Stack>
    </Stack>
  )
}

export default Location
