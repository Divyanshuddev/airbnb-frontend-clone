import { Stack } from '@mui/material';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import React, { useEffect, useState } from 'react'

const styles = {
    root: {
        width: "fit-content",
        padding: 1,
        borderRadius: 10,
        boxShadow: "1px 1px 4px gray",
        backgroundColor:"white"
    },
};
type CheckOutProps={
    checkOutData:(date:string)=>void;
}
const CheckOut:React.FC<CheckOutProps> = ({checkOutData}) => {
    const [checkOutDate,setCheckOutDate]=useState<Dayjs | null>();
        useEffect(()=>{
            checkOutData(checkOutDate ? checkOutDate.format("MMMM D, YYYY") : "Add dates")
        },[checkOutDate])
  return (
    <Stack sx={styles.root} my={2} position={'relative'} zIndex={1}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar value={checkOutDate} onChange={(newValue)=> setCheckOutDate(newValue)} disablePast />
            </LocalizationProvider>
        </Stack>
  )
}

export default CheckOut
