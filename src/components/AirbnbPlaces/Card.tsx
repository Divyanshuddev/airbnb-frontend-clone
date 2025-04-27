import { IconButton, Stack, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


type CardProps = {
    id:number;
    image:string;
    name:string;
    price:string;
    maxNights:number
}

const styles = {
    root: {
        backgroundColor: "white",
        border: "none",
        cursor: "pointer"
    },
    image: {
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        height: 300,
        borderRadius: 6,
        boxSizing: "border-box",
        padding: 1
    },
    name: {
        fontSize: 15,
        // width: "70%",
        fontFamily: "Arial",
        color: "black",
    },
    distance: {
        color: "gray"
    }
}
const Card: React.FC<CardProps> = ({ id,name,image,maxNights,price }) => {
    const [like, setLike] = useState<boolean>(false);
    const navigate = useNavigate();

    return (
        <Stack spacing={1}  >
            <Stack sx={styles.image} style={{ backgroundImage: `url(${image})` }} alignItems={'flex-end'}>
                <IconButton onClick={() => setLike(!like)}>
                    <FavoriteIcon style={{ color: like ? "red" : "rgba(163, 156, 160, 0.8)" }} sx={{ stroke: "#ffffff", strokeWidth: 1 }} />
                </IconButton>
            </Stack>
            <Stack component={'button'} sx={styles.root} alignItems={'flex-start'} onClick={() => navigate('/place', { state: id })}>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                    <Stack width={'70%'} alignItems={'flex-start'} >
                        <Typography sx={styles.name} align="left">{name}</Typography>
                    </Stack>
                    <Stack direction={'row'} spacing={0.5} alignItems={'center'} alignSelf={'flex-start'}>
                        <StarIcon fontSize="small" style={{ color: "black" }} />
                        <Typography fontSize={14} color="black">4.2</Typography>
                    </Stack>
                </Stack>
                <Typography sx={styles.distance}>185 kilometers away</Typography>
                <Typography sx={styles.distance}>1-6 May</Typography>
                <Typography color="black">
                    <u>{price}</u> for {maxNights} nights
                </Typography>
            </Stack>
        </Stack>
    )
}

export default Card
