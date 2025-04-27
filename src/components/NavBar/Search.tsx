import { Button, Stack } from "@mui/material"
import { useState } from "react"
import SearchBar from "./SearchBar"

const styles={
    button:{
        textTransform:"capitalize",
        color:"#737373",
        fontSize:17,
        borderRadius:5,
        "&:hover":{
            backgroundColor:"rgba(246, 246, 246, 0.8)",
            color:"#595959",
        },
    },
    selectedButton:{
        color:"black",
        fontSize:17,
        borderRadius:5,
        textTransform:"capitalize",
        "&:hover":{
            backgroundColor:"white",
        },
    }
}
const menuButton=[
    'Homes',
    'Experiences'
]
const Search = () => {
    const [selectedButton,setSelectedButton]=useState<string>('Homes');
  return (
    <Stack spacing={3} alignItems={'center'} >
        <Stack direction={'row'} spacing={4} >
            {
                menuButton.map((value,index)=>{
                    return(
                        <Button key={index} sx={selectedButton===value?styles.selectedButton:styles.button} onClick={()=>setSelectedButton(value)} disableTouchRipple>{value}</Button>
                    )
                })
            }
        </Stack>
        <SearchBar currentTab={selectedButton} />
    </Stack>
  )
}

export default Search
