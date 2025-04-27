import { Button } from "@mui/material"
import TuneIcon from '@mui/icons-material/Tune';

const styles={
    root:{
        backgroundColor:"white",
        border:"1px solid rgba(211, 202, 207, 0.8)",
        color:"black",
        textTransform:"capitalize",
        padding:1.5,
        borderRadius:2,
        "&:hover":{
            backgroundColor:"#F7F7F7",
            border:"1.5px solid black",
        }
        
    }
}
const Filter = () => {
  return (
    <Button startIcon={<TuneIcon style={{color:"black"}} />} variant="contained" sx={styles.root} disableElevation>
      Filters
    </Button>
  )
}

export default Filter
