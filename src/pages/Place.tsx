import { useLocation } from "react-router-dom"
import Navbar from "../components/NavBar/Navbar"
import { useEffect, useState } from "react";
import db from '../components/DB/db.json'
import { Divider, Stack } from "@mui/material";
import Header from "../components/PlacesPage/Header";
import PlacePics from "../components/PlacesPage/PlacePics";
import Details from "./Details";
import Footer from "../components/Footer/Footer";
import ReviewDetails from "../components/PlacesPage/ReviewDetails";
import HostDetails from "../components/PlacesPage/HostDetails";
const styles = {
  root: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 2,
    paddingBottom: 10,
  }
}
const Place = () => {
  const location = useLocation();
  const id = location.state;
  const [placeDataImage, setPlaceDataImage] = useState<string | undefined>('');
  const [placeDataName, setPlaceDataName] = useState<string | undefined>('');
  useEffect(() => {
    const newData = db.find(item => item.id === id)
    setPlaceDataImage(newData?.picture_url);
    setPlaceDataName(newData?.name)
  }, [id])
  return (
    <div>
      <Navbar />
      <Stack sx={styles.root} spacing={4} >
        <Header name={placeDataName} />
        <PlacePics picture={placeDataImage} />
        <Details />
        <Divider />
        <ReviewDetails />
        <Divider />
        <HostDetails />
      </Stack>
      <Footer />
    </div>
  )
}

export default Place
