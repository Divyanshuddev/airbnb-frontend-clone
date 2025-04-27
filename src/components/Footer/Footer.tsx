import { Stack } from "@mui/material"
import Inspirations from "./Inspirations"
import FooterMenu from "./FooterMenu"

const styles={
    root:{
        backgroundColor:"#F7F7F7",
        paddingTop:2,
        paddingLeft:7,
        paddingRight:7
    }
}
const Footer = () => {
  return (
    <Stack sx={styles.root} spacing={7}>
      <Inspirations />
      <FooterMenu />
    </Stack>
  )
}

export default Footer
