import { Button, Stack, Typography } from "@mui/material"
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const styles={
    name:{
        color:'black',
        fontSize:25,
        fontWeight:"bold",
        fontFamily:"Microsoft JhengHei"
    },
    button:{
        color:"black",
        textTransform:"capitalize",
        fontSize:15,
        "&:hover":{
            backgroundColor:"#F7F7F7"
        }
    }
};

type HeaderProps={
    name:string | undefined;
}
const Header:React.FC<HeaderProps> = ({name}) => {
  return (
    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
      <Typography sx={styles.name}>{name}</Typography>
      <Stack direction={'row'} spacing={3}>
        <Button sx={styles.button} size="small" startIcon={<IosShareIcon />}><u>Share</u></Button>
        <Button sx={styles.button} size="small" startIcon={<FavoriteBorderIcon />}><u>Save</u></Button>
      </Stack>
    </Stack>
  )
}

export default Header
