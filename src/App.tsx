import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Detail from "./components/DetailsPage/Detail"
import Place from "./pages/Place"


function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Detail />} />
      <Route path="/place" element={<Place />} />
      </Routes> 
    </>
  )
}

export default App
