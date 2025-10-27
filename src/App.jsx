import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Demo from './pages/Demo'
import HelpCenter from './pages/HelpCenter'
import ContactUs from './pages/ContactUs'
import Auth from './pages/Auth'
import Download from './pages/Download'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </Router>
  )
}

export default App