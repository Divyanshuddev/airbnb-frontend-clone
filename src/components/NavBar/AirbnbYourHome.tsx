import { Button } from "@mui/material"

const styles={
    root:{
        color:"black",
        textTransform:"capitalize",
        borderRadius:4,
        "&:hover":{
            backgroundColor:"rgba(246, 246, 246, 0.8)"
        }
    },
}
const AirbnbYourHome = () => {
  return (
    <Button sx={styles.root}>Airbnb your home</Button>
  )
}

export default AirbnbYourHome
