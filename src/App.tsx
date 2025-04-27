import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Place from "./pages/Place"


function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/place" element={<Place />} />
      </Routes> 
    </>
  )
}

export default App
