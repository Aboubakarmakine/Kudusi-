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

function ScrollObserver() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Use a small timeout to allow React to render the new page's DOM elements
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll('.fade-up');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollObserver />
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
