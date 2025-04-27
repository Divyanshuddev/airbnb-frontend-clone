import {  Stack} from "@mui/material"
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import  { Dayjs } from "dayjs";
import { useEffect, useState } from "react";

const styles = {
    root: {
        width: "fit-content",
        padding: 2,
        borderRadius: 10,
        boxShadow: "1px 1px 4px gray",
        backgroundColor:"white"
    },
    button:{
        width:"50%",
        alignSelf:"center"
    }
};
type CheckInProps={
    checkInData:(date:string)=>void;
}
const CheckIn:React.FC<CheckInProps> = ({checkInData}) => {
    const [checkInDate,setCheckInDate]=useState<Dayjs | null>();
    useEffect(()=>{
        checkInData(checkInDate ? checkInDate.format("MMMM D, YYYY") : "Add dates")
    },[checkInDate])
    return (
        <Stack sx={styles.root} my={2} position={'relative'} zIndex={1} >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar value={checkInDate} onChange={(newValue)=> setCheckInDate(newValue)} disablePast />
            </LocalizationProvider>
           
        </Stack>
    )
}

export default CheckIn
