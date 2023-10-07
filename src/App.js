import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="main">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About /> } />
          <Route path="/experience" element={<Experience />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
