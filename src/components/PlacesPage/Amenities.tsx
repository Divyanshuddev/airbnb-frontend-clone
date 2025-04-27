import { Button, Grid, Stack, Typography } from "@mui/material"
import DynamicIcon from "./DynamicIcon"
const data = [
  "Microwave",
  "Pool table",
  "Dishwasher",
  "Free parking on premises",
  "Central air conditioning",
  "Cleaning products",
  "Free washer – In building",
  "Bed linens",
  "Pool view",
  "Stainless steel oven",
  "Carbon monoxide alarm",
  "Bathtub",
  "Exterior security cameras on property",
  "Hammock",
  "Private hot tub",
  "Wine glasses",
  "Blender",
  "Shampoo",
  "Ceiling fan",
  "Wifi",
  "Mini fridge",
  "Dishes and silverware",
  "Outdoor dining area",
  "Smoke alarm",
  "Private outdoor pool - available seasonally, open 24 hours, heated",
  "Kitchen",
  "BBQ grill",
  "Outdoor shower",
  "Free dryer – In unit",
  "Self check-in",
  "Board games",
  "Fire pit",
  "Pets allowed",
  "Books and reading material",
  "Head and Shoulders conditioner",
  "Cooking basics",
  "Clothing storage: closet",
  "Coffee maker: drip coffee maker",
  "Outdoor furniture",
  "65 inch HDTV with Amazon Prime Video",
  "Essentials",
  "Rad body soap",
  "Crib",
  "Hangers",
  "Indoor fireplace: gas",
  "Refrigerator",
  "Keypad",
  "Radiant heating",
  "Hot water kettle",
  "Private backyard – Fully fenced",
  "Extra pillows and blankets",
  "Hair dryer",
  "Iron",
  "Dedicated workspace",
  "Noise decibel monitors on property",
  "Bluetooth sound system",
  "Coffee",
  "Portable fans",
  "Fire extinguisher",
  "Private patio or balcony",
  "Hot water"
];
const styles = {
  title: {
    color: "black",
    fontSize: 30,
    fontFamily: "Microsoft JhengHei",
    fontWeight: "bold",
  },
  items: {
    fontSize: 18,
    fontFamily: "Microsoft JhengHei",
  },
  button: {
    width: "30%",
    color: "black",
    textTransform: "capitalize",
    borderColor: "black",
    "&:hover": {
      backgroundColor: "white"
    }
  }
}
const Amenities = () => {
  return (
    <Stack padding={3} spacing={3}>
      <Typography sx={styles.title}>What this place offers</Typography>
      <Grid container spacing={2}>
        {
          data.slice(0, 10).map((value, index) => {
            return (
              <Grid size={6} key={index}>
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                  <DynamicIcon iconName={value} />
                  <Typography sx={styles.items}>{value}</Typography>
                </Stack>
              </Grid>
            )
          })
        }
      </Grid>
      <Button variant="outlined" sx={styles.button}>Show all {data.length} amenities</Button>
    </Stack>
  )
}

export default Amenities
