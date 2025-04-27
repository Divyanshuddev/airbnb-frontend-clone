import { Box, Button, Grid, Stack, Tab, Tabs, Typography } from "@mui/material"
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const UniqueStaysData = [
    { title: "Yurt Rentals", place: "United States" },
    { title: "Yurt Rentals", place: "United Kingdom" },
    { title: "Castle Rentals", place: "United States" },
    { title: "Houseboats", place: "United States" },
    { title: "Holiday Caravans", place: "United Kingdom" },
    { title: "Private Island Rentals", place: "United States" },
    { title: "Farm Houses", place: "United States" },
    { title: "Farm Cottages", place: "United Kingdom" },
    { title: "Cabin Rentals", place: "Australia" },
    { title: "Luxury Cabins", place: "United Kingdom" },
    { title: "Luxury Cabins", place: "United States" },
    { title: "Holiday Chalets", place: "United Kingdom" },
    { title: "Cottage Rentals", place: "United States" },
    { title: "Holiday Cottages", place: "United Kingdom" },
    { title: "Mansion Rentals", place: "United States" },
    { title: "Villa Rentals", place: "United Kingdom" },
    { title: "Holiday Bungalows", place: "United Kingdom" },
    { title: "Bungalow Rentals", place: "United States" },
    { title: "Condo Rentals", place: "United States" },
    { title: "Holiday Apartments", place: "Australia" },
    { title: "Holiday Houses", place: "United States" },
    { title: "Holiday Houses", place: "United Kingdom" },
    { title: "Private Holiday Rentals", place: "United Kingdom" },
    { title: "Big House Rentals", place: "United States" },
    { title: "Big Cottages", place: "Australia" },
    { title: "Large Villas", place: "United Kingdom" },
    { title: "House Rentals with a Pool", place: "United States" },
    { title: "Cabin Rentals with a Pool", place: "United States" },
    { title: "Villas with a Pool", place: "United Kingdom" },
    { title: "Apartments with a Hot Tub", place: "United States" },
    { title: "Holiday Cottages with a Hot Tub", place: "United Kingdom" },
    { title: "Beach Cabins", place: "United States" },
    { title: "Beach Condos", place: "United States" },
    { title: "Beachfront Rentals", place: "United States" },
    { title: "Beach Houses", place: "United Kingdom" },
    { title: "Beach Villas", place: "United Kingdom" },
    { title: "Coastal Cottages", place: "United Kingdom" },
    { title: "Pet-Friendly Vacation Rentals", place: "United States" },
    { title: "Pet-Friendly Beach Rentals", place: "United States" },
    { title: "Pet-Friendly Cabin Rentals", place: "United States" },
    { title: "Dog-Friendly Cottages", place: "United Kingdom" },
    { title: "Luxury Dog-Friendly Cottages", place: "United Kingdom" }
]

const Categories = [
    "Amazing pools",
    "Arctic",
    "Camping",
    "Camper vans",
    "Castles",
    "Containers",
    "Countryside",
    "Design",
    "Earth homes",
    "Farms",
    "National parks",
    "Vineyards",
    "OMG!",
    "Tiny homes",
    "Towers",
    "Windmills",
    "Luxe"
];

const styles = {
    title: {
        color: "black",
        fontSize: 15,
    },
    places: {
        color: "gray",
        fontSize: 13
    },
    showMore: {
        textTransform: "capitalize",
        color: "#222222",
        "&:hover": {
            backgroundColor: "#F7F7F7",
            textDecoration: "underline"
        }
    },
    inspiration: {
        fontSize: 25,
        fontWeight: "bold",
        fontFamily:"Microsoft JhengHei",
    },
    tabs: {
        color: "black",
        textTransform: "capitalize"
    }
}
const Inspirations = () => {
    const [value, setValue] = useState(0);
    const [showMore, setShowMore] = useState<boolean>(false)
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Stack spacing={2}>
            <Typography sx={styles.inspiration}>Inspiration for future getaways</Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{
                    '& .MuiTabs-indicator': {
                        backgroundColor: 'black',
                    },
                    '& .Mui-selected': { 
                        color: 'black !important', 
                    },
                }} >
                    <Tab label="Unique stays" {...a11yProps(0)} sx={styles.tabs} disableFocusRipple disableTouchRipple />
                    <Tab label="Categories" {...a11yProps(1)} sx={styles.tabs} disableFocusRipple disableTouchRipple />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Grid container columnSpacing={4} rowSpacing={4}>
                    {
                        UniqueStaysData.slice(0, showMore ? UniqueStaysData.length : 17).map((value, index) => {
                            return (
                                <Grid size={2} key={index} >
                                    <Stack>
                                        <Typography sx={styles.title}>{value.title}</Typography>
                                        <Typography sx={styles.places}>{value.place}</Typography>
                                    </Stack>
                                </Grid>
                            )
                        })
                    }
                    <Grid size={2}>
                        <Button sx={styles.showMore} disableFocusRipple disableTouchRipple endIcon={<KeyboardArrowDownIcon />} onClick={() => setShowMore(!showMore)}>Show {showMore === true ? "less" : "more"}</Button>
                    </Grid>
                </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Grid container columnSpacing={4} rowSpacing={4}>
                    {
                        Categories.map((value, index) => {
                            return (
                                <Grid size={2} key={index}>
                                    <Stack>
                                        <Typography>{value}</Typography>
                                    </Stack>

                                </Grid>
                            )
                        })
                    }
                </Grid>
            </CustomTabPanel>
        </Stack >
    )
}

export default Inspirations
