import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

// Pages to be created
const About = () => <div className="container" style={{padding: '120px 0', minHeight: '60vh'}}><h2>About Us</h2><p>Page coming soon!</p></div>;
const Board = () => <div className="container" style={{padding: '120px 0', minHeight: '60vh'}}><h2>Board</h2><p>Page coming soon!</p></div>;
const History = () => <div className="container" style={{padding: '120px 0', minHeight: '60vh'}}><h2>History</h2><p>Page coming soon!</p></div>;
const Mentorship = () => <div className="container" style={{padding: '120px 0', minHeight: '60vh'}}><h2>Mentorship</h2><p>Page coming soon!</p></div>;
const Academic = () => <div className="container" style={{padding: '120px 0', minHeight: '60vh'}}><h2>Academic Support</h2><p>Page coming soon!</p></div>;
const Cultural = () => <div className="container" style={{padding: '120px 0', minHeight: '60vh'}}><h2>Cultural Empowerment</h2><p>Page coming soon!</p></div>;
const Gallery = () => <div className="container" style={{padding: '120px 0', minHeight: '60vh'}}><h2>Gallery</h2><p>Page coming soon!</p></div>;
const Blog = () => <div className="container" style={{padding: '120px 0', minHeight: '60vh'}}><h2>Blog</h2><p>Page coming soon!</p></div>;
const Newsletter = () => <div className="container" style={{padding: '120px 0', minHeight: '60vh'}}><h2>Newsletter</h2><p>Page coming soon!</p></div>;
const Events = () => <div className="container" style={{padding: '120px 0', minHeight: '60vh'}}><h2>Events</h2><p>Page coming soon!</p></div>;
const Contact = () => <div className="container" style={{padding: '120px 0', minHeight: '60vh'}}><h2>Contact Us</h2><p>Page coming soon!</p></div>;
const Sponsor = () => <div className="container" style={{padding: '120px 0', minHeight: '60vh'}}><h2>Sponsor</h2><p>Page coming soon!</p></div>;

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
