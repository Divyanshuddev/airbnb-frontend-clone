import { Stack, Switch, Typography } from "@mui/material"
import { useState } from "react";

const styles={
    root:{
        border:"1px solid rgba(211, 202, 207, 0.8)",
        padding:0.7,
        borderRadius:2,
        "&:hover":{
            backgroundColor:"#F7F7F7",
            border:"1.5px solid black",
        }
    },
    title:{
        fontSize:15
    }
}
const Taxes = () => {
    const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Stack sx={styles.root} direction={'row'} alignItems={'center'} justifyContent={'center'}>
      <Typography sx={styles.title}>Display total before taxes</Typography>
      <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
    </Stack>
  )
}

export default Taxes
