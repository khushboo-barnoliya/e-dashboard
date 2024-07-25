import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Signup from "./Components/Signup"
import Private from "./Components/Private"


const App = () => {
  return (
    <>
      <div className="">
        <BrowserRouter >
        <Navbar />
        <Routes>

          <Route element={<Private />}>
          <Route path="/" element={<h1>Product Component</h1>} />
          <Route path="/add" element={<h1>Add Component</h1>} />
          <Route path="/update" element={<h1>Update Component</h1>} />
          <Route path="/logout" element={<h1>Logout Component</h1>} />
          <Route path="/profile" element={<h1>Profile Component</h1>} />
          </Route>

          <Route path="/register" element={<Signup />} />
        </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  )
}

export default App
