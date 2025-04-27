import { Avatar, Divider, Stack, Typography } from "@mui/material"
import VerifiedIcon from '@mui/icons-material/Verified';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
const styles = {
    root: {
        width: "20%",
        border: "1px solid rgba(244, 234, 239, 0.8)",
        boxShadow: "1px 1px 5px gray",
        padding: 5,
        borderRadius: 5,
    },
    avatar: {
        width: 100,
        height: 100
    },
    name:{
        fontSize: 25,
        fontFamily: "Microsoft JhengHei",
        fontWeight: "bold",
    },
    host:{
        fontSize: 15,
        fontFamily: "Microsoft JhengHei",
        fontWeight: "bold",
    },
    status:{
        fontSize: 25,
        fontFamily: "Microsoft JhengHei",
        fontWeight: "1000",
    },
    title:{
        fontSize: 10,
        fontFamily: "Microsoft JhengHei",
        fontWeight: "1000",
    }
}
const HostProfileCard = () => {
    return (
        <Stack sx={styles.root} justifyContent={'center'} alignItems={'center'}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between !important'} width={'100%'}>
                <Stack  alignItems={'center'} spacing={2}>
                    <Stack position={'relative'}>
                    <Avatar sx={styles.avatar} src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg" />
                    <Stack position={'absolute'} right={-10} bottom={-5}>
                        <VerifiedIcon style={{ color: "#E31C5E" }} fontSize="large" />
                    </Stack>
                    </Stack>
                    <Stack alignItems={'center'}> 
                        <Typography sx={styles.name}>Pulkit</Typography>
                        <Stack direction={'row'} alignItems={'center'}>
                            <PersonIcon />
                            <Typography sx={styles.host}>Host</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack spacing={1}>
                    <Stack>
                        <Typography sx={styles.status}>677</Typography>
                        <Typography sx={styles.title}>Reviews</Typography>
                    </Stack>
                    <Divider />
                    <Stack>
                        <Stack direction={'row'} alignItems={'center'}>
                        <Typography sx={styles.status}>4.99</Typography>
                        <StarIcon fontSize="small" style={{color:'black'}} />
                        </Stack>
                        <Typography sx={styles.title}>Rating</Typography>
                    </Stack>
                    <Divider />
                    <Stack>
                        <Typography sx={styles.status}>1</Typography>
                        <Typography sx={styles.title}>Year hosting</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default HostProfileCard
