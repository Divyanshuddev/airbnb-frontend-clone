import { Box, Grid, Stack } from "@mui/material"

type PlacePicsProps={
    picture:string | undefined
};

const styles={
    picture:{
        width:"100%",
        height:400,
        objectFit:"cover",
        borderTopLeftRadius:12,
        borderBottomLeftRadius:12
    },
    otherPic:{
        width:"100%",
        height:190,
        objectFit:"cover",
    }
}
const PlacePics:React.FC<PlacePicsProps> = ({picture}) => {
  return (
    <Grid container spacing={2}>
      <Grid size={6}>
        <Box component={'img'} src={picture} sx={styles.picture} />
      </Grid>
      <Grid size={3}>
        <Stack spacing={2}>
            <Box component={'img'} src={'https://a0.muscache.com/im/pictures/miso/Hosting-53519419/original/1feaf4a1-e316-431e-b1d6-eb21321333de.jpeg?im_w=720'} sx={styles.otherPic} />
            <Box component={'img'} src={'https://a0.muscache.com/im/pictures/miso/Hosting-53519419/original/ad0a54d5-65ac-4cc3-b202-07cc99d2f081.jpeg?im_w=720'} sx={styles.otherPic} />
        </Stack>
      </Grid>
      <Grid size={3}>
        <Stack spacing={2}>
        <Box component={'img'} src={'https://a0.muscache.com/im/pictures/miso/Hosting-53519419/original/2053fa60-6687-4690-a0ed-5e9fd7b0d91b.jpeg?im_w=720'} sx={styles.otherPic} style={{ borderTopRightRadius:12, borderBottomRightRadius:12}} />
        <Box component={'img'} src={'https://a0.muscache.com/im/pictures/miso/Hosting-53519419/original/e55c2b96-966b-4016-8c64-d3d13d85d0f1.jpeg?im_w=720'} sx={styles.otherPic} style={{ borderTopRightRadius:12, borderBottomRightRadius:12}} />
        </Stack>
      </Grid>
    </Grid>
  )
}

export default PlacePics
