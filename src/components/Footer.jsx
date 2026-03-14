import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer aria-label="Site footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-logo">
              <Link to="/">
                <img src="/assets/images/logo.png" alt="Kudusi Logo" style={{ height: '48px', width: 'auto' }} />
              </Link>
            </div>
            <p className="footer-tagline">Breaking Barriers. Building Futures. Honoring Heritage.</p>
            <nav className="social-links" aria-label="Social media">
              <a href="https://www.facebook.com/Kudussi" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="https://www.instagram.com/kudusi_rising/" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
              <a href="https://www.youtube.com/@kudusifortheadvancementofr9098" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0D0D1A"/></svg></a>
              <a href="https://www.tiktok.com/@kudusi2020" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg></a>
            </nav>
            <p className="ein-badge">Registered Nonprofit · EIN: 88-2434510</p>
          </div>
          <div>
            <h3 className="footer-col-title">About</h3>
            <ul className="footer-links">
              <li><Link to="/about">About Kudusi</Link></li>
              <li><Link to="/history">Our History</Link></li>
              <li><Link to="/board">Board of Directors</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-col-title">Programs</h3>
            <ul className="footer-links">
              <li><Link to="/academic">Academic Support</Link></li>
              <li><Link to="/mentorship">Mentorship Programs</Link></li>
              <li><Link to="/cultural">Cultural Empowerment</Link></li>
              <li><Link to="/sponsor">Sponsored Programs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-col-title">Connect</h3>
            <ul className="footer-links">
              <li><a href="mailto:contact@kudusi.org">contact@kudusi.org</a></li>
              <li><a href="tel:+18444355447">(844) 435-5447</a></li>
              <li><Link to="/contact">Volunteer</Link></li>
              <li><Link to="/contact">Partner With Us</Link></li>
              <li><Link to="/sponsor">Donate</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2026 Kudusi. All rights reserved. Phoenix, AZ</p>
          <nav className="footer-legal"><Link to="#">Privacy Policy</Link><Link to="#">Terms of Use</Link><Link to="/sponsor">Donate</Link></nav>
        </div>
      </div>
    </footer>
  );
}
