import { Grid, IconButton, Input, Stack, Typography } from "@mui/material"
import { ChangeEvent, useEffect, useState } from "react"
import SearchIcon from '@mui/icons-material/Search';
import SearchDestination from "./SearchDestination";
import ClearIcon from '@mui/icons-material/Clear';
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import Guest from "./Guest";
const styles = {
    root: {
        width: 800,
        border: "1px solid rgba(198, 199, 201, 0.8)",
        height: 70,
        boxShadow: "1px 1px 7px rgba(198, 199, 201, 0.8)",
        borderRadius: 10
    },
    searchSection: {
        border: "none",
        borderRadius: 10,
        height: 70,
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "white",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#EBEBEB "
        }
    },
    searchSectionSelected: {
        border: "none",
        borderRadius: 10,
        height: 70,
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "white",
        boxShadow: "1px 1px 4px rgba(198, 199, 201, 0.8)",
    },
    searchSelectionNotSelected: {
        border: "none",
        borderRadius: 10,
        height: 70,
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "#EBEBEB",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#DDDDDD"
        }
    },
    title: {
        fontSize: 14,
        color: "black",
        fontWeight: "310"
    },
    content: {
        color: "gray",
        fontSize: 14
    },
    searchButton: {
        backgroundColor: "#ff002f",
        width: 50,
        height: 50,
        borderRadius: "50%",
        border: "none",
        cursor: 'pointer',
        "&:hover": {
            backgroundColor: "#FF385C"
        }
    },
    searchButtonText: {
        backgroundColor: "#ff002f",
        width: "fit-contend",
        height: 40,
        padding: 1,
        borderRadius: 15,
        border: "none",
        cursor: 'pointer',
        "&:hover": {
            backgroundColor: "#FF385C"
        }
    },
    input: {
        color: "black",
        fontSize: 14,
    },
    clearIcon: {
        backgroundColor: "white",
    }
};

type SearchBarProps = {
    currentTab: string;
}
const SearchBar: React.FC<SearchBarProps> = ({ currentTab }) => {
    const [selectedType, setSelectedType] = useState<string>('');
    const [openDestination, setOpenDestination] = useState<boolean>(false);
    const [openCheckIn, setOpenCheckIn] = useState<boolean>(false);
    const [openCheckOut, setOpenCheckOut] = useState<boolean>(false);
    const [openGuest, setOpenGuest] = useState<boolean>(false);
    const [destination, setDestination] = useState<string>('');
    const [checkIn, setCheckIn] = useState<string>('Add dates')
    const [checkOut, setCheckOut] = useState<string>('Add dates')
    const [search, setSearch] = useState<string>('');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDestination(e.target.value)
        setSearch(e.target.value);
    }
    const handleSelectLocation = (location: string) => {
        setDestination(location)
    }
    const handleCheckIn = (date: string) => {
        setCheckIn(date)
    }
    const handleCheckOut = (date: string) => {
        setCheckOut(date)
    }
    const handleCloseDestination = () => {
        setSelectedType('');
        setOpenDestination(false)
    }
    useEffect(() => {
        setSelectedType('')
    }, [currentTab])
    return (
        <Stack sx={styles.root} style={{ backgroundColor: selectedType !== '' && ('#EBEBEB'), boxShadow: selectedType !== '' && "none" }}>
            <Grid container spacing={0.5}>
                <Grid size={4} >
                    <Stack sx={selectedType === '' ? styles.searchSection : (selectedType === '1' ? styles.searchSectionSelected : styles.searchSelectionNotSelected)} component={'button'} justifyContent={'center'} alignItems={'flex-start'} paddingLeft={3} onClick={() => { setSelectedType('1'); setOpenDestination(true) }}  >
                        <Typography sx={styles.title}>Where</Typography>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                            <Input disableUnderline sx={styles.input} placeholder="Search destinations" value={destination} onChange={handleChange} />
                            {
                                destination !== '' && (
                                    <IconButton size="small" onClick={() => { setDestination(''); setSearch(''); }}>
                                        <ClearIcon style={{ color: "black" }} fontSize="small" />
                                    </IconButton>
                                )
                            }
                        </Stack>
                    </Stack>
                    {
                        (openDestination && selectedType === '1') && (<SearchDestination selectedLocation={handleSelectLocation} search={search} close={handleCloseDestination} />)
                    }
                </Grid>
                {
                    currentTab === 'Homes' ? (
                        <>
                            <Grid size={2}>
                                <Stack sx={selectedType === '' ? styles.searchSection : (selectedType === '2' ? styles.searchSectionSelected : styles.searchSelectionNotSelected)} component={'button'} justifyContent={'center'} alignItems={'center'} onClick={() => { setSelectedType('2'); setOpenCheckIn(true) }} >
                                    <Typography sx={styles.title}>Check in</Typography>
                                    <Typography sx={styles.content}>{checkIn}</Typography>
                                </Stack>
                                {
                                    (openCheckIn && selectedType === '2') && (<CheckIn checkInData={handleCheckIn} />)
                                }
                            </Grid>
                            <Grid size={2}>
                                <Stack sx={selectedType === '' ? styles.searchSection : (selectedType === '3' ? styles.searchSectionSelected : styles.searchSelectionNotSelected)} component={'button'} justifyContent={'center'} alignItems={'center'} onClick={() => { setSelectedType('3'); setOpenCheckOut(true) }} >
                                    <Typography sx={styles.title}>Check out</Typography>
                                    <Typography sx={styles.content}>{checkOut}</Typography>
                                </Stack>
                                {
                                    (openCheckOut && selectedType === '3') && (<CheckOut checkOutData={handleCheckOut} />)
                                }
                            </Grid>
                        </>
                    ) : (
                        <Grid size={4}>
                            <Stack sx={selectedType === '' ? styles.searchSection : (selectedType === '3' ? styles.searchSectionSelected : styles.searchSelectionNotSelected)} component={'button'} justifyContent={'center'} alignItems={'flex-start'} paddingLeft={3} onClick={() => setSelectedType('3')} >
                                <Typography sx={styles.title}>Date</Typography>
                                <Typography sx={styles.content}>Add dates</Typography>
                            </Stack>
                        </Grid>
                    )
                }

                <Grid size={4}>
                    <Stack sx={selectedType === '' ? styles.searchSection : (selectedType === '4' ? styles.searchSectionSelected : styles.searchSelectionNotSelected)} component={'button'} direction={'row'} justifyContent={'space-between'} alignItems={'center'} paddingLeft={3} onClick={() => { setSelectedType('4'); setOpenGuest(true) }} >
                        <Stack alignItems={'flex-start'}>
                            <Typography sx={styles.title}>Who</Typography>
                            <Typography sx={styles.content}>Add guests</Typography>
                        </Stack>
                        <Stack>
                            <Stack sx={selectedType !== '' ? styles.searchButtonText : styles.searchButton} justifyContent={'center'} alignItems={'center'}  >
                                {
                                    selectedType !== '' ? (
                                        <Stack direction={'row'} alignItems={'center'} >
                                            <SearchIcon />
                                            <Typography>Search</Typography>
                                        </Stack>
                                    ) : (
                                        <SearchIcon />
                                    )
                                }

                            </Stack>
                        </Stack>
                    </Stack>
                    {
                        (openGuest && selectedType === '4') && (<Guest />)
                    }
                </Grid>

            </Grid>

        </Stack>
    )
}

export default SearchBar
