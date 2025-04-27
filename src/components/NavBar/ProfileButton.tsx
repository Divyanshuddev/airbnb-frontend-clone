import { Button, Divider, Menu, MenuItem, Stack } from "@mui/material"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react";
const styles={
    root:{
        backgroundColor:"white",
        padding:1.8,
        borderRadius:10,
        width:"fit-content",
        alignSelf:"flex-end !important"
    },
    menu:{
        width:"100%",
        borderRadius:2,
        marginTop:2,
        padding:"10px !important"
    }
}
const ProfileButton = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <Stack direction={'column'} spacing={2}>
    <Button variant="contained" startIcon={<MenuOutlinedIcon style={{color:"black"}} fontSize="large" />} sx={styles.root} size="large" 
    id="basic-button"
    aria-controls={open ? 'basic-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
    onClick={handleClick} >
      <AccountCircleIcon style={{color:"black"}}     />
    </Button>
    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={styles.menu}
        slotProps={{
            paper: {
                  style: {
                        width: "200px",
                        borderRadius:7
                    },
             },
        }}
      >
        <MenuItem onClick={handleClose}>Log in</MenuItem>
        <MenuItem onClick={handleClose}>Sign up</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Airbnb your home</MenuItem>
        <MenuItem onClick={handleClose}>Host an experience</MenuItem>
        <MenuItem onClick={handleClose}>Help Center</MenuItem>
      </Menu>
    </Stack>
    
  )
}

export default ProfileButton
