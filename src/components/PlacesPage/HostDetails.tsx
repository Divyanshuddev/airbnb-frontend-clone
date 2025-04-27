import { Stack, Typography } from "@mui/material"
import HostProfileCard from "./HostProfileCard"
import HostResponse from "./HostResponse"

const styles={
    title:{
        color: "black",
        fontSize: 30,
        fontFamily: "Microsoft JhengHei",
        fontWeight: "bold",
    }
}
const HostDetails = () => {
  return (
    <Stack spacing={3}>
      <Typography sx={styles.title}>Meet your host</Typography>
      <Stack direction={'row'} spacing={10}>
        <HostProfileCard />
        <HostResponse />
      </Stack>
    </Stack>
  )
}

export default HostDetails
