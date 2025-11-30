import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Research from './pages/Research'
import Publications from './pages/Publications'
import Projects from './pages/Projects'
import Teaching from './pages/Teaching'
import Contact from './pages/Contact'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/contact" element={<About />} />
      </Routes>
    </div>
  )
}

export default App

