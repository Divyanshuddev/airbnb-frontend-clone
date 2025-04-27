import { Stack, Typography } from "@mui/material"
import HouseboatIcon from '@mui/icons-material/Houseboat';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';

const Data=[
    {
        icon:<HouseboatIcon fontSize="large" />,
        title:"13-min walk to the lake",
        details:"This home is by Lake Pichola."
    },
    {
        icon:<KingBedOutlinedIcon fontSize="large" />,
        title:"Room in a castle",
        details:"Your own room in a home, plus access to shared spaces."
    },
    {
        icon:<InsertInvitationOutlinedIcon fontSize="large" />,
        title:"Free cancellation before 30 Apr",
        details:"Get a full refund if you change your mind."
    },
];

const styles={
    title:{
        fontFamily:"Microsoft JhengHei",
        fontWeight:"bold",
        fontSize:16
    },
    details:{
        color:"gray",
      fontSize:12,
      fontFamily:"Microsoft JhengHei",
      fontWeight:"bold",
    }
}
const Neighbourhood = () => {
  return (
    <Stack padding={3} spacing={2}>
      {
        Data.map((value,index)=>{
            return(
                <Stack key={index} direction={'row'} alignItems={'center'} spacing={2}>
                    <Stack>
                        {value.icon}
                    </Stack>
                    <Stack>
                        <Typography sx={styles.title}>{value.title}</Typography>
                        <Typography sx={styles.details}>{value.details}</Typography>
                    </Stack>
                </Stack>
            )
        })
      }
    </Stack>
  )
}

export default Neighbourhood
