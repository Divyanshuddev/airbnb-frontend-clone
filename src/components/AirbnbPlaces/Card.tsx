import { IconButton, Stack, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
type CardType = {
    id: number;
    listing_url: string;
    scrape_id: number;
    last_scraped: string;
    source: string;
    name: string;
    description: string;
    neighborhood_overview: string;
    picture_url: string;
    host_id: number;
    host_url: string;
    host_name: string;
    host_since: string;
    host_location: string;
    host_about: string;
    host_response_time: string;
    host_response_rate: string;
    host_acceptance_rate: string;
    host_is_superhost: string;
    host_thumbnail_url: string;
    host_picture_url: string;
    host_neighbourhood: string;
    host_listings_count: number;
    host_total_listings_count: number;
    host_verifications: string;
    host_has_profile_pic: string;
    host_identity_verified: string;
    neighbourhood: string;
    neighbourhood_cleansed: string;
    neighbourhood_group_cleansed: string;
    latitude: number;
    longitude: number;
    property_type: string;
    room_type: string;
    accommodates: number;
    bathrooms: number;
    bathrooms_text: string;
    bedrooms: number;
    beds: number;
    amenities: string[];
    price: string;
    minimum_nights: number;
    maximum_nights: number;
    minimum_minimum_nights: number;
    maximum_minimum_nights: number;
    minimum_maximum_nights: number;
    maximum_maximum_nights: number;
    minimum_nights_avg_ntm: number;
    maximum_nights_avg_ntm: number;
    calendar_updated: string;
    has_availability: string;
    availability_30: number;
    availability_60: number;
    availability_90: number;
    availability_365: number;
    calendar_last_scraped: string;
    number_of_reviews: number;
    number_of_reviews_ltm: number;
    number_of_reviews_l30d: number;
    availability_eoy: number;
    number_of_reviews_ly: number;
    estimated_occupancy_l365d: number;
    estimated_revenue_l365d: number;
    first_review: string;
    last_review: string;
    review_scores_rating: number;
    review_scores_accuracy: number;
    review_scores_cleanliness: number;
    review_scores_checkin: number;
    review_scores_communication: number;
    review_scores_location: number;
    review_scores_value: number;
    license: string;
    instant_bookable: string;
    calculated_host_listings_count: number;
    calculated_host_listings_count_entire_homes: number;
    calculated_host_listings_count_private_rooms: number;
    calculated_host_listings_count_shared_rooms: number;
    reviews_per_month: number;
};

type CardProps = {
    data: CardType;
}

const styles = {
    root: {
        backgroundColor: "white",
        border: "none",
        cursor: "pointer"
    },
    image: {
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        height: 300,
        borderRadius: 6,
        boxSizing: "border-box",
        padding: 1
    },
    name: {
        fontSize: 15,
        // width: "70%",
        fontFamily: "Arial",
        color: "black",
    },
    distance: {
        color: "gray"
    }
}
const Card: React.FC<CardProps> = ({ data }) => {
    const [like, setLike] = useState<boolean>(false);
    const navigate=useNavigate();

    return (
        <Stack spacing={1}  >
            <Stack sx={styles.image} style={{ backgroundImage: `url(${data.picture_url})` }} alignItems={'flex-end'}>
                <IconButton onClick={() => setLike(!like)}>
                    <FavoriteIcon style={{ color: like ? "red" : "rgba(163, 156, 160, 0.8)" }} sx={{ stroke: "#ffffff", strokeWidth: 1 }} />
                </IconButton>
            </Stack>
            <Stack component={'button'} sx={styles.root} alignItems={'flex-start'} onClick={()=>navigate('/place',{state:data.id})}>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                    <Stack width={'70%'} alignItems={'flex-start'} >
                    <Typography sx={styles.name} align="left">{data.name}</Typography>
                    </Stack>
                    <Stack direction={'row'} spacing={0.5} alignItems={'center'} alignSelf={'flex-start'}>
                        <StarIcon fontSize="small" style={{ color: "black" }} />
                        <Typography fontSize={14} color="black">{data.review_scores_rating}</Typography>
                    </Stack>
                </Stack>
                <Typography sx={styles.distance}>185 kilometers away</Typography>
                <Typography sx={styles.distance}>1-6 May</Typography>
                <Typography color="black">
                    <u>{data.price}</u> for {data.maximum_nights} nights
                </Typography>
            </Stack>
        </Stack>
    )
}

export default Card
