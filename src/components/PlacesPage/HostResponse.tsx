import { Stack, Typography } from "@mui/material"

const styles = {
    title: {
        color: "black",
        fontSize: 20,
        fontFamily: "Microsoft JhengHei",
        fontWeight: "bold",
    },
    details: {
        color: "black",
        fontSize: 15,
        fontFamily: "Microsoft JhengHei",
    }
}
const HostResponse = () => {
    return (
        <Stack spacing={2}>
            <Stack spacing={2}>
                <Typography sx={styles.title}>Pulkit is a Host</Typography>
                <Typography sx={styles.details}>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</Typography>
            </Stack>
            <Stack spacing={2}>
                <Typography sx={styles.title}>Host details</Typography>
                <Stack>
                <Typography sx={styles.details}>Response rate: 100%</Typography>
                <Typography sx={styles.details}>Responds within an hour</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default HostResponse
