import { Button, Grid, Stack, Typography, } from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from "react";
import CheckIn from "../components/NavBar/CheckIn";
import CheckOut from "../components/NavBar/CheckOut";
import Guest from "../components/NavBar/Guest";
const styles = {
  root: {
    width: "80%",
    border: "1px solid rgba(244, 234, 239, 0.8)",
    boxShadow: "1px 1px 10px gray",
    padding: 3,
    borderRadius: 5,
  },
  grid: {
    border: "1px solid black",
    backgroundColor: "black",
    borderRadius: 2
  },
  gridItems: {
    padding: 1,
    backgroundColor: "white",
    width: "100%",
    border: "none",
    cursor: "pointer"
  },
  button: {
    backgroundColor: "#F73058",
    color: "white"
  },
  label: {
    fontSize: 14,
    color: "black",
    fontFamily: "Microsoft JhengHei",
    fontWeight: "bold"
  }
}
const Price = () => {
  const [selected, setSelected] = useState<string>('');
  const [checkIn, setCheckIn] = useState<boolean>(false);
  const [checkOut, setCheckOut] = useState<boolean>(false);
  const [guest, setGuest] = useState<boolean>(false);
  const handleCheckIn = (date: string) => {
    console.log(date);
  }
  const handleCheckOut = (date: string) => {
    console.log(date);
  }
  return (
    <Stack width={'40%'}    >
      <Stack sx={styles.root} spacing={2} position={'sticky'} top={0} zIndex={10}>
        <Typography><b><u style={{ fontSize: 20 }}>$285,600</u></b> for 5 nights</Typography>
        <Grid container sx={styles.grid} spacing={0.1}>
          <Grid size={6}>
            <Stack component={'button'} sx={styles.gridItems} style={{ borderTopLeftRadius: 7.3 }} alignItems={'flex-start'} onClick={() => { setCheckIn(!checkIn); setSelected('1') }}>
              <Typography sx={styles.label}>CHECK-IN </Typography>
              <Typography sx={styles.label}>5/3/2025</Typography>
            </Stack>
          </Grid>
          {
            (selected === '1' && checkIn) && (
              <Stack position={'absolute'} top={120}>
                <CheckIn checkInData={handleCheckIn} />
              </Stack>)
          }
          <Grid size={6}>
            <Stack component={'button'} sx={styles.gridItems} style={{ borderTopRightRadius: 7.3 }} alignItems={'flex-start'} onClick={() => { setCheckOut(!checkOut); setSelected('2') }}>
              <Typography sx={styles.label}>CHECK-OUT </Typography>
              <Typography sx={styles.label}>5/3/2025</Typography>
            </Stack>
          </Grid>
          {
            (selected === '2' && checkOut) && (
              <Stack position={'absolute'} top={120}>
                <CheckOut checkOutData={handleCheckOut} />
              </Stack>)
          }
          <Grid size={12}>
            <Stack component={'button'} sx={styles.gridItems} style={{ borderBottomLeftRadius: 7.3, borderBottomRightRadius: 7.3 }} direction={'row'} justifyContent={'space-between'} alignItems={'center'} onClick={() => { setGuest(!guest); setSelected('3') }}>
              <Stack>
                <Typography sx={styles.label} >Guest </Typography>
                <Typography sx={styles.label}>1 guest</Typography>
              </Stack>
              {
                guest?<KeyboardArrowUpIcon style={{ color: 'black' }} />:<KeyboardArrowDownIcon style={{ color: 'black' }} />
              }
              
            </Stack>
          </Grid>
          {
            (selected === '3' && guest) && (
              <Stack position={'absolute'} top={180}>
                <Guest />
              </Stack>)
          }
        </Grid>
        <Button variant="contained" sx={styles.button}>Reserve</Button>
        <Typography>You won't be charged yet</Typography>
      </Stack>
    </Stack>
  )
}

export default Price
