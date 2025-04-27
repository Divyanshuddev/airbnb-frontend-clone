import {  Grid } from "@mui/material"
import Category from "./Category"
import Filter from "./Filter"
import Taxes from "./Taxes"

const styles={
    root:{
        paddingTop:2,
        // paddingLeft:3,
        // paddingRight:3,
        alignItems:"center",
    }
}
const CategoryBar = () => {

  return (
    <Grid container direction={'row'} alignItems={'center'} sx={styles.root} spacing={1}>
        <Grid size={8}>
            <Category />
        </Grid>
        <Grid size={1}>
            <Filter />
        </Grid>
        <Grid size={2.2}>
            <Taxes />
        </Grid>
    </Grid>
  )
}

export default CategoryBar
