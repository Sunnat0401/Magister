import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage/HomePage"
import About from "./Pages/About/About"

const App = () => {
  return (
    <>
    <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/about" element={<About />} />
    </Routes>
    </>
  )
}

export default App