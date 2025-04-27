import {  Stack, Typography } from "@mui/material"
import StarIcon from '@mui/icons-material/Star';

const styles = {
    root: {
        color: 'black',
        paddingBottom:3,
    },
    text:{
        textDecoration:"underline"
    },
    icon:{
        width:20,
        height:30
    }
}
const Review = () => {
    return (
        <Stack sx={styles.root} direction={'row'} alignItems={'center'}>
            <StarIcon sx={styles.icon} />
            <Typography sx={styles.text}>1 review</Typography>
        </Stack>
    )
}

export default Review
