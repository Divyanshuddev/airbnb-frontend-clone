import { Box, IconButton, Stack, Typography, } from "@mui/material"
import { useEffect, useState } from "react";
import locations from './indian_cities.json';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
const styles = {
    root: {
        width: 350,
        padding: 3,
        borderRadius: 10,
        boxShadow: "1px 1px 4px gray",
        zIndex:1,
        backgroundColor:"white"
    },
    suggested: {
        fontSize: 12
    },
    icon: {
        width: 60,
        height: 60,
        objectFit: "cover"
    },
    location: {
        fontSize: 16,
        color: "black"
    },
    tagLine: {
        fontSize: 12,
        color: "gray"
    },
    locationStack: {
        "::-webkit-scrollbar": {
            width: "6px"
        },
        "::-webkit-scrollbar-thumb": {
            backgroundColor: "#cee6fd",
            borderRadius: "20px",
        }
    },
    locationBox: {
        padding: 1,
        borderRadius: 3,
        backgroundColor: "white",
        border: "none",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#F4F4F4",

        }
    },
    searchLocationIcon:{
        backgroundColor:"#F4F4F4",
        padding:1
    }

};

const suggestedDestination = [
    {
        icon: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/ea5e5ee3-e9d8-48a1-b7e9-1003bf6fe850.png",
        location: "Nearby",
        tagLine: "Find what's around you"
    },
    {
        icon: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/b5648dad-1d76-43e4-9bbd-18ebce84ab7f.png",
        location: "New Delhi, Delhi",
        tagLine: "For sights like India Gate"
    },
    {
        icon: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/c9333e22-1d8d-4d6c-80db-615f4c2d4cc4.png",
        location: "Noida, Uttar Pradesh",
        tagLine: "Near you"
    },
    {
        icon: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/ed75c050-042b-44ba-a991-54044d93a91b.png",
        location: "Jaipur, Rajasthan",
        tagLine: "Because your wishlist has stays in Jaipur"
    },
    {
        icon: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/067f0eaa-0c0f-4eee-b7e9-1a539b8cb48b.png",
        location: "Gurgaon District, Haryana",
        tagLine: "Popular with travellers near you"
    },
    {
        icon: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/0dffff5d-721f-4ca3-abb7-dbee55a72ff8.png",
        location: "Dehradun, Uttarakhand",
        tagLine: "For nature lovers"
    },
    {
        icon: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/06f0f050-c167-4d1e-89e1-2775be94f82a.png",
        location: "North Goa, Goa",
        tagLine: "Popular beach destination"
    },
    {
        icon: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/c55dbbcd-905d-4a5c-9a99-8698aacbbbc5.png",
        location: "South Delhi, Delhi",
        tagLine: "Popular with travellers near you"
    },
    {
        icon: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/0b3135d3-9eaa-4186-ba90-a3bb16f32945.png",
        location: "Guwahati, Assam",
        tagLine: "For sights like Kamakhya Temple"
    },
    {
        icon: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/af70e151-7bfc-4743-b257-b950b06c259b.png",
        location: "Chandigarh",
        tagLine: "Popular with travellers near you"
    },
    {
        icon: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/07869b83-5328-4f3d-8087-a7d1e9782434.png",
        location: "Shimla, Himachal Pradesh",
        tagLine: "For nature lovers"
    },
    {
        icon: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/dd61b8e6-7fa1-46d7-9284-7f3977e5da31.png",
        location: "Manali, Himachal Pradesh",
        tagLine: "Popular with travellers near you"
    },
    {
        icon: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/413b4f49-cb3f-4dd3-addf-c16c9f93e129.png",
        location: "Nainital, Uttarakhand",
        tagLine: "Great for a weekend getaway"
    },
    {
        icon: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/c9333e22-1d8d-4d6c-80db-615f4c2d4cc4.png",
        location: "Rishikesh, Uttarakhand",
        tagLine: "Popular with travellers near you"
    },
    {
        icon: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/836b8df4-a0fd-491c-91ad-006a767db97a.png",
        location: "Kolkata, West Bengal",
        tagLine: "For sights like Victoria Memorial"
    },
    {
        icon: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/ebb968b2-3fb6-45d3-b675-7765e487f7b9.png",
        location: "Mumbai, Maharashtra",
        tagLine: "For its top-notch dining"
    },
    {
        icon: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/ebb968b2-3fb6-45d3-b675-7765e487f7b9.png",
        location: "South Goa, Goa",
        tagLine: "Popular beach destination"
    },
    {
        icon: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/1f9cf4a3-3653-4a28-992d-efcbbf5fd2ba.png",
        location: "Kasauli, Himachal Pradesh",
        tagLine: "Great for winter getaways"
    },
    {
        icon: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/cbe71b0e-fd84-489b-ae97-7c79ebab4424.png",
        location: "Amritsar, Punjab",
        tagLine: "Popular with travellers near you"
    },
    {
        icon: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/8f39e6df-a319-4a1e-834e-60cd0230b643.png",
        location: "Jibhi, Himachal Pradesh",
        tagLine: "A hidden gem"
    },
    {
        icon: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/c23eddbf-55e4-4e3d-ab64-85c11f551be3.png",
        location: "Vrindavan, Uttar Pradesh",
        tagLine: "Off the beaten path"
    },
]

type Location={
    state:string;
    city:string;
}

type SearchDestinationProps = {
    selectedLocation: (location: string) => void;
    search: string;
    close:()=>void;
}
const SearchDestination: React.FC<SearchDestinationProps> = ({ selectedLocation, search,close }) => {
    const [filteredLocation,setFilteredLocation]=useState<Location[]>([])
    useEffect(() => {
        if (search !== '') {
            setFilteredLocation(
                locations.filter(data => {
                    return data.city.includes(search)
                })
            )
            console.log(search);
            
        }
    }, [search])
    return (
        <Stack sx={styles.root} my={2} spacing={2} position={'relative'} zIndex={1}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography sx={styles.suggested}>Suggested destinations</Typography>
            <IconButton onClick={close}>
            <CancelIcon style={{color:"black"}} fontSize="small"  />
            </IconButton>
            </Stack>
            <Stack spacing={1} height={450} overflow={'auto'} sx={styles.locationStack}>
                {
                    search !== '' ? (
                        filteredLocation.map((value, index) => {
                            return (
                                <Stack key={index} direction={'row'} alignItems={'center'} spacing={3} sx={styles.locationBox} component={'button'} onClick={()=>selectedLocation(value.city+', '+value.state)}>
                                    <Stack sx={styles.searchLocationIcon}>
                                        <FmdGoodOutlinedIcon style={{color:"#1565c0"}} fontSize="large" />
                                    </Stack>
                                    <Typography sx={styles.location}>{value.city}, {value.state}</Typography>
                                </Stack>
                            )
                        })

                    ) : (
                        suggestedDestination.map((value, index) => {
                            return (
                                <Stack key={index} direction={'row'} alignItems={'center'} spacing={3} sx={styles.locationBox} component={'button'} onClick={() => selectedLocation(value.location)} >
                                    <Box component={'img'} src={value.icon} sx={styles.icon} />
                                    <Stack alignItems={'flex-start'}>
                                        <Typography sx={styles.location}>{value.location}</Typography>
                                        <Typography sx={styles.tagLine}>{value.tagLine}</Typography>
                                    </Stack>
                                </Stack>
                            )
                        })
                    )

                }
            </Stack>
        </Stack>
    )
}

export default SearchDestination
