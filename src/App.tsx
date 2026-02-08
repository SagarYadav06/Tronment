import { BrowserRouter, Route, Routes } from "react-router-dom"
import Hero from "./components/Hero"
import About from "./components/Aout"
import Services from "./components/Services"
import Contact from "./components/Contact"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
