import { Divider, IconButton, Stack, Typography } from "@mui/material"
import { useState } from "react";
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
const styles = {
    root: {
        width: 350,
        padding: 3,
        borderRadius: 10,
        boxShadow: "1px 1px 4px gray",
        backgroundColor:"white"
    },
    iconButton:{
        border:"1px solid black"
    },
    title:{
        color:"black",
        fontSize:18
    },
    details:{
        color:"gray",
        fontSize:15
    }
};
const Guest = () => {
    const [adults, setAdults] = useState<number>(0);
    const [children, setChildren] = useState<number>(0);
    const [infants, setInfants] = useState<number>(0);
    const [pets, setPets] = useState<number>(0);
    return (
        <Stack sx={styles.root} my={2} spacing={2} position={'relative'} zIndex={1}>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Stack>
                    <Typography sx={styles.title}>Adults</Typography>
                    <Typography sx={styles.details}>Ages 13 or above</Typography>
                </Stack>
                <Stack direction={'row'} alignItems={'center'}>
                    <IconButton onClick={() => setAdults(adults - 1)} disabled={adults === 0} >
                        <RemoveOutlinedIcon />
                    </IconButton>
                    <Typography>{adults}</Typography>
                    <IconButton onClick={() => setAdults(adults + 1)}>
                        <AddOutlinedIcon />
                    </IconButton>
                </Stack>
            </Stack>
            <Divider />

            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Stack>
                    <Typography sx={styles.title}>Children</Typography>
                    <Typography sx={styles.details}>Ages 2–12</Typography>
                </Stack>
                <Stack direction={'row'} alignItems={'center'}>
                    <IconButton onClick={() => setChildren(children - 1)} disabled={children === 0}>
                        <RemoveOutlinedIcon />
                    </IconButton>
                    <Typography>{children}</Typography>
                    <IconButton onClick={() => setChildren(children + 1)}>
                        <AddOutlinedIcon />
                    </IconButton>
                </Stack>
            </Stack>
            <Divider />

            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Stack>
                    <Typography sx={styles.title}>Infants</Typography>
                    <Typography sx={styles.details}>Under 2</Typography>
                </Stack>
                <Stack direction={'row'} alignItems={'center'}>
                    <IconButton onClick={() => setInfants(infants - 1)} disabled={infants === 0}>
                        <RemoveOutlinedIcon />
                    </IconButton>
                    <Typography>{infants}</Typography>
                    <IconButton onClick={() => setInfants(infants + 1)}>
                        <AddOutlinedIcon />
                    </IconButton>
                </Stack>
            </Stack>
            <Divider />

            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Stack>
                    <Typography sx={styles.title}>Pets</Typography>
                    <Typography sx={styles.details}>Bringing a service animal?</Typography>
                </Stack>
                <Stack direction={'row'} alignItems={'center'}>
                    <IconButton onClick={() => setPets(pets - 1)} disabled={pets === 0}>
                        <RemoveOutlinedIcon />
                    </IconButton>
                    <Typography>{pets}</Typography>
                    <IconButton onClick={() => setPets(pets + 1)}>
                        <AddOutlinedIcon />
                    </IconButton>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Guest
