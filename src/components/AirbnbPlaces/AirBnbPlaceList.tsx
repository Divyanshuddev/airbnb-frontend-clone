import { Button, Grid, Stack } from "@mui/material"
import data from '../DB/db.json'
import { lazy, Suspense, useState } from "react"
import Loading from "./Loading"

const Card= lazy(()=> import('./Card'))
const styles={
    root:{
        padding:6,
    },
    button:{
        width:"10%",
        alignSelf:"center",
        backgroundColor:"#222222",
        borderRadius:4
    }
}
const AirBnbPlaceList = () => {
    const [end,setEnd]=useState<number>(12);
  return (
    <Stack padding={2}>
    <Grid container sx={styles.root} spacing={4}>
      {
        data.slice(0,end).map((value,index)=>{
            return(
                <Grid size={{lg:3,md:3,sm:12,xs:12}} key={index}>
                    <Suspense fallback={<Loading />}>
                    <Card id={value.id} image={value.picture_url} name={value.name} price={value.price} maxNights={value.maximum_nights} />
                    </Suspense>
                </Grid>
            )
        })
      }
    </Grid>
    <Button onClick={()=>setEnd(end+8)} variant="contained" sx={styles.button}>Show more</Button>
    </Stack>
  )
}

export default AirBnbPlaceList
