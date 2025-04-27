import AirBnbPlaceList from "../components/AirbnbPlaces/AirBnbPlaceList"
import CategoryBar from "../components/CategoryBar/CategoryBar"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/NavBar/Navbar"
const Home = () => {
  return (
    <>
      <Navbar />
      <CategoryBar />
      <AirBnbPlaceList />
      <Footer />
    </>
  )
}

export default Home
