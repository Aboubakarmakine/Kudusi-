import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>

      <nav id="main-nav" aria-label="Primary navigation">
        <div className="container nav-inner">
          <Link to="/" className="nav-logo">
            <img src="/assets/images/logo.png" alt="Kudusi Logo" style={{ height: '48px', width: 'auto' }} />
          </Link>
          <ul className="nav-links" role="list">
            <li><Link to="/">Home</Link></li>
            <li className="has-dropdown">
              <Link to="/about">About</Link>
              <div className="dropdown-menu">
                <Link to="/about">About Kudusi</Link>
                <Link to="/board">Board</Link>
                <Link to="/history">History</Link>
              </div>
            </li>
            <li className="has-dropdown">
              <Link to="/academic">Services</Link>
              <div className="dropdown-menu">
                <Link to="/mentorship">Mentorship</Link>
                <Link to="/academic">Academic</Link>
                <Link to="/cultural">Cultural</Link>
              </div>
            </li>
            <li className="has-dropdown">
              <Link to="/gallery">Media</Link>
              <div className="dropdown-menu">
                <Link to="/gallery">Gallery</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/newsletter">Newsletter</Link>
                <Link to="/events">Calendar/Past Events</Link>
              </div>
            </li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/sponsor">Sponsor</Link></li>
          </ul>
          <div className="nav-actions">
            <a href="https://kudusi.org/?fluent-booking=calendar&host=mentorship-team&event=60min" className="btn btn-outline-gold" target="_blank" rel="noopener noreferrer">Get Support</a>
            <Link to="/sponsor" className="btn btn-gold">Donate</Link>
          </div>
          <button 
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} 
            id="hamburger" 
            aria-label="Open mobile menu" 
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div id="mobile-nav" className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile navigation">
        <ul>
          <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMobileMenu}>About Kudusi</Link></li>
          <li><Link to="/board" onClick={toggleMobileMenu}>Board</Link></li>
          <li><Link to="/history" onClick={toggleMobileMenu}>History</Link></li>
          <li><Link to="/mentorship" onClick={toggleMobileMenu}>Mentorship</Link></li>
          <li><Link to="/academic" onClick={toggleMobileMenu}>Academic</Link></li>
          <li><Link to="/cultural" onClick={toggleMobileMenu}>Cultural</Link></li>
          <li><Link to="/gallery" onClick={toggleMobileMenu}>Gallery</Link></li>
          <li><Link to="/blog" onClick={toggleMobileMenu}>Blog</Link></li>
          <li><Link to="/contact" onClick={toggleMobileMenu}>Contact</Link></li>
          <li><Link to="/sponsor" onClick={toggleMobileMenu}>Sponsor</Link></li>
        </ul>
        <div className="mobile-nav-actions">
          <a href="https://kudusi.org/?fluent-booking=calendar&host=mentorship-team&event=60min" className="btn btn-outline-gold" target="_blank" rel="noopener noreferrer">Get Support</a>
          <Link to="/sponsor" className="btn btn-gold" onClick={toggleMobileMenu}>Donate Now</Link>
        </div>
      </div>
    </>
  );
}
