import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Board from './pages/Board';
import History from './pages/History';
import Mentorship from './pages/Mentorship';
import Academic from './pages/Academic';
import Cultural from './pages/Cultural';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Newsletter from './pages/Newsletter';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Sponsor from './pages/Sponsor';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/board" element={<Board />} />
        <Route path="/history" element={<History />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/cultural" element={<Cultural />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sponsor" element={<Sponsor />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
