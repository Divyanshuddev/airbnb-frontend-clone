import { Box, Stack } from "@mui/material"
import airbnb from '../../assets/AirbnbLogo.png';
import { useNavigate } from "react-router-dom";

const styles={
    root:{
        width:"fit-content",
        cursor:"pointer",
        backgroundColor:"white",
        border:"none",
        
    },
    logo:{
        width:100,
        height:80,
        objectFit:"contain"
    }
}
const AirbnbLogo = () => {
    const navigate= useNavigate();
  return (
    <Stack sx={styles.root} component={'button'} onClick={()=>navigate('/')}>
        <Box component={'img'} src={airbnb} sx={styles.logo} />
    </Stack>
  )
}

export default AirbnbLogo
