import { Box, Stack, Tab, Tabs, Typography } from "@mui/material"
import { useState } from "react";
const categoryData = [
    {
        image: "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
        title: "Rooms"
    },
    {
        image: "https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png",
        title: "Icons"
    },
    {
        image: "https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg",
        title: "Treehouses"
    },
    {
        image: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
        title: "OMG!"
    },
    {
        image: "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
        title: "Earth homes"
    },
    {
        image: "https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg",
        title: "New"
    },
    {
        image: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
        title: "Amazing pools"
    },
    {
        image: "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
        title: "Farms"
    },
    {
        image: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
        title: "Amazing view"
    },
    {
        image: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
        title: "Cabins"
    },
    {
        image: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
        title: "Countryside"
    },
    {
        image: "https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg",
        title: "Luxe"
    },
    {
        image: "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg",
        title: "Beach"
    },
    {
        image: "https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg",
        title: "Historical homes"
    },
    {
        image: "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg",
        title: "Mansion"
    },
    {
        image: "https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg",
        title: "Domes"
    },
    {
        image: "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg",
        title: "National Parks"
    },
    {
        image: "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
        title: "Castles"
    },
    {
        image: "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
        title: "Lakefront"
    },
    {
        image: "https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg",
        title: "Tiny homes"
    },
    {
        image: "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
        title: "Beachfront"
    },
    {
        image: "https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg",
        title: "Lake"
    },
    {
        image: "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg",
        title: "Islands"
    },
    {
        image: "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg",
        title: "Design"
    },
    {
        image: "https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg",
        title: "off-the-grid"
    },
    {
        image: "https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg",
        title: "Top of the world"
    },
    {
        image: "https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg",
        title: "Bed & breakfasts"
    },
    {
        image: "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg",
        title: "Tropical"
    },
    {
        image: "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
        title: "Trending"
    },
    {
        image: "https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg",
        title: "Top cites"
    },
    {
        image: "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg",
        title: "Camping"
    },
    {
        image: "https://a0.muscache.com/pictures/a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg",
        title: "Desert"
    },
    {
        image: "https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg",
        title: "Caves"
    },
    {
        image: "https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg",
        title: "Golfing"
    },
    {
        image: "https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg",
        title: "A-frames"
    },
    {
        image: "https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg",
        title: "Arctic"
    },
    {
        image: "https://a0.muscache.com/pictures/0ff9740e-52a2-4cd5-ae5a-94e1bfb560d6.jpg",
        title: "Containers"
    },
    {
        image: "https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg",
        title: "Boats"
    },
    {
        image: "https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg",
        title: "Creative spaces"
    },
    {
        image: "https://a0.muscache.com/pictures/ddd13204-a5ae-4532-898c-2e595b1bb15f.jpg",
        title: "Chef's kitchens"
    },
    {
        image: "https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg",
        title: "Skiing"
    },
    {
        image: "https://a0.muscache.com/pictures/f0c5ca0f-5aa0-4fe5-b38d-654264bacddf.jpg",
        title: "Play"
    },
    {
        image: "https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg",
        title: "Surfing"
    },
    {
        image: "https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg",
        title: "Houseboats"
    },
    {
        image: "https://a0.muscache.com/pictures/48b55f09-f51c-4ff5-b2c6-7f6bd4d1e049.jpg",
        title: "Minsus"
    },
    {
        image: "https://a0.muscache.com/pictures/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg",
        title: "Ski-in/out"
    },
    {
        image: "https://a0.muscache.com/pictures/4759a0a7-96a8-4dcd-9490-ed785af6df14.jpg",
        title: "Yurts"
    },
    {
        image: "https://a0.muscache.com/pictures/c9157d0a-98fe-4516-af81-44022118fbc7.jpg",
        title: "Dammusi"
    },
    {
        image: "https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg",
        title: "Ryokans"
    },
    {
        image: "https://a0.muscache.com/pictures/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg",
        title: "Trulli"
    },
    {
        image: "https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg",
        title: "Vineyards"
    },
    {
        image: "https://a0.muscache.com/pictures/251c0635-cc91-4ef7-bb13-1084d5229446.jpg",
        title: "Casas particulares"
    },
    {
        image: "https://a0.muscache.com/pictures/e22b0816-f0f3-42a0-a5db-e0f1fa93292b.jpg",
        title: "Adapted"
    },
    {
        image: "https://a0.muscache.com/pictures/8eccb972-4bd6-43c5-ac83-27822c0d3dcd.jpg",
        title: "Grand pianos"
    },
    {
        image: "https://a0.muscache.com/pictures/e4b12c1b-409b-4cb6-a674-7c1284449f6e.jpg",
        title: "Cycladic homes"
    },
    {
        image: "https://a0.muscache.com/pictures/d721318f-4752-417d-b4fa-77da3cbc3269.jpg",
        title: "Towers"
    },
    {
        image: "https://a0.muscache.com/pictures/5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg",
        title: "Windmills"
    },
    {
        image: "https://a0.muscache.com/pictures/7ff6e4a1-51b4-4671-bc9a-6f523f196c61.jpg",
        title: "Riads"
    },
    {
        image: "https://a0.muscache.com/pictures/747b326c-cb8f-41cf-a7f9-809ab646e10c.jpg",
        title: "Shepherd's huts"
    },
    {
        image: "https://a0.muscache.com/pictures/f60700bc-8ab5-424c-912b-6ef17abc479a.jpg",
        title: "Barns"
    },
    {
        image: "https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg",
        title: "Camper vans"
    },
    {
        image: "https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg",
        title: "Hanoks"
    }
];

const styles = {
    title: {
        fontSize: 13,
        textTransform: "capitalize",
        fontFamily: 'Roboto;'
    },
    tabs: {
        '& .MuiTabs-indicator': {
            backgroundColor: 'black',
            color: "black"
        },
    },
    tab: {
        '&.Mui-selected': {
            color: 'black',
        },
    }
}
const Category = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        console.log(event);

    };

    return (
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-evenly'}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                sx={styles.tabs}

            >
                {
                    categoryData.map((value, index) => {
                        return (
                            <Tab key={index} sx={styles.tab} label={
                                <Stack alignItems={'center'} spacing={1}>
                                    <Box component={'img'} src={value.image} color={'gray'} sx={{ width: 20, height: 20 }} />
                                    <Typography sx={styles.title}>{value.title}</Typography>
                                </Stack>
                            } />

                        )
                    })
                }
            </Tabs>
        </Stack>
    )
}

export default Category
