import { Grid, Link, Stack, Typography } from "@mui/material"

const menuData = [
    {
        title: "Support",
        items: [
            "Help Centre",
            "AirCover",
            "Anti-discrimination",
            "Disability support",
            "Cancellation options",
            "Report neighbourhood concern"
        ]
    },
    {
        title: "Hosting",
        items: [
            "Airbnb your home",
            "AirCover for Hosts",
            "Hosting resources",
            "Community forum",
            "Hosting responsibly",
            "Join a free Hosting class",
            "Find a co‑host"
        ]
    },
    {
        title: "Airbnb",
        items: [
            "Newsroom",
            "New features",
            "Careers",
            "Investors",
            "Airbnb.org emergency stays"
        ]
    },
    
];

const styles={
    link:{
        textDecoration:"none",
        color:"black",
        fontSize:14,
        "&:hover":{
            textDecoration:"underline",   
        }
    }
}
const FooterMenu = () => {
    return (
        <Grid container >
            {
                menuData.map((value,index)=>{
                    return(
                        <Grid size={4} key={index}>
                            <Typography>{value.title}</Typography>
                            <Stack spacing={1} my={2}>
                            {
                                value.items.map((value,index)=>{
                                    return(
                                        <Link sx={styles.link} key={index}>{value}</Link>
                                    )
                                })
                            }
                            </Stack>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default FooterMenu
