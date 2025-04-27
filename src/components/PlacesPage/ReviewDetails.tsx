import { Avatar, Grid, Rating, Stack, Typography } from "@mui/material"

const data = [
    {
        image: "https://www.mazaindia.com/wallpapers/Deeksha-Seth-Beautiful-Face-88877392.jpg",
        name: "Deeksha",
        location: "8 years on Airbnb",
        rating: 4.3,
        reviewTime: "1 week ago",
        review: "If you want an awesome stay with hassle free communication and an amazing view, please stay here. Sumit has been extremely helpful and responsive when it came to our concerns. The place is super clean and the location is also very very accessible to everything, truly in the heart of the city."
    },
    {
        image: "https://th.bing.com/th/id/OIP.E8piOWhHReXrTRVO6fJ2tQHaNK?rs=1&pid=ImgDetMain",
        name: "Tanishka Tomar",
        location: "6 years on Airbnb",
        rating: 4.3,
        reviewTime: "March 2025",
        review: "Great place to stay, its kind of a studio terrace apartment. Everything was neat and clean and well maintained. Just a suggestion if a full length mirror could be placed in the room it will be helpful."
    },
    {
        image: "https://profile-images.xing.com/images/5ca3ca87ede263c73c8569873a5abf27-14/andreas-wei%C3%9F.1024x1024.jpg",
        name: "Andreas",
        location: "6 years on Airbnb",
        rating: 4.3,
        reviewTime: "May 2024",
        review: "Very sweet small accommodation on top of the house. I had very relaxed time with a buitful garden in front. Everything was well organised."
    },
    {
        image: "https://img.freepik.com/premium-photo/happy-joyful-smiling-young-indian-man-looking-aside-up-thinking_773922-10965.jpg",
        name: "Krishna Mohan Rao",
        location: "6 years on Airbnb",
        rating: 4.3,
        reviewTime: "March 2025",
        review: "Had an amazing stay at Ameet's place. It's a cozy retreat in a quiet neighborhood. Felt like a perfect place to unwind after a long day of exploring Delhi. Will strongly recommend this place and hope to return in the future."
    },
];

const styles = {
    review: {
        color: "black",
        fontSize: 30,
        fontFamily: "Microsoft JhengHei",
        fontWeight: "bold",
    },
    avatar:{
        width:60,
        height:60
    },
    name:{
        fontSize: 16,
        fontFamily: "Microsoft JhengHei",
        fontWeight: "bold", 
    },
    location:{
        fontSize: 12,
        fontFamily: "Microsoft JhengHei",
        color:"gray",
        fontWeight: "bold", 
    },
    rating:{
        '& .MuiRating-iconFilled': {
            color: 'black',
          },
          '& .MuiRating-iconHover': {
            color: 'black',
          },
          
    },
    reviewTime:{
        fontSize: 12,
        fontFamily: "Microsoft JhengHei",
        color:"black",
        fontWeight: "bold",   
    }
}
const ReviewDetails = () => {
    return (
        <Stack padding={3} spacing={3}>
            <Typography sx={styles.review}>Review</Typography>
            <Grid container spacing={8}>
                {
                    data.map((value, index) => {
                        return (
                            <Grid size={6} key={index}>
                                <Stack spacing={1}>
                                    <Stack direction={'row'} alignItems={'center'} spacing={2}>
                                        <Avatar src={value.image} sx={styles.avatar} />
                                        <Stack>
                                            <Typography sx={styles.name}>{value.name}</Typography>
                                            <Typography sx={styles.location}>{value.location}</Typography>
                                        </Stack>
                                    </Stack>
                                    <Stack direction={'row'} alignItems={'center'} spacing={1}>
                                        <Rating defaultValue={value.rating} precision={value.rating} readOnly sx={styles.rating} size="small" />
                                        <Typography sx={styles.reviewTime}>{value.reviewTime}</Typography>
                                    </Stack>
                                    <Typography >{value.review}</Typography>
                                </Stack>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Stack>
    )
}

export default ReviewDetails
