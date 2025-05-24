import { Routes, Route } from 'react-router-dom'

// Import pages
import Homepage from "./pages/Homepage/Homepage.jsx"
import About from "./pages/About/About.jsx"
import Projects from "./pages/Project/Project.jsx"
import Contact from "./pages/Contact/Contact.jsx";

import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App
