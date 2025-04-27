import { Stack, Typography } from "@mui/material"

const styles={
  about:{
    color:"black",
      fontSize:30,
      fontFamily:"Microsoft JhengHei",
      fontWeight:"bold",
  },
  details:{
    fontSize:16,
      fontFamily:"Microsoft JhengHei",
      textAlign:"justify"
  }
}
const AboutThisPlace = () => {
  return (
    <Stack padding={3} spacing={2}>
      <Typography sx={styles.about}>About this place</Typography>
      <Typography component={'p'} sx={styles.details}>Castle Oodeypore is a palatial homestay, offering a unique experience. It is a home that hosts beautiful people and connects families, friends, and travelers alike, a castle that reminds you of the bygone era, a place for our guests to revel in the timeless beauty of nature. Built-in the year 2021 Castle Oodeypore is an architectural marvel amidst the foothills of the Aravallis, made from the red sandstone of Bikaner, making it the only red sandstone property in Udaipur.</Typography>

    </Stack>
  )
}

export default AboutThisPlace
