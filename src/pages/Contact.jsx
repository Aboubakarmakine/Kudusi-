import { Link } from 'react-router-dom';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    form.innerHTML = '<p style="color:var(--color-gold);font-family:var(--font-heading);font-weight:700;font-size:20px;text-align:center;padding:40px">🎉 Thank you! We\'ll be in touch within 24 hours.</p>';
  };

  return (
    <main id="main-content">
      <div className="page-hero">
        <div className="page-hero-pattern" aria-hidden="true"></div>
        <div className="container page-hero-inner">
          <nav className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span className="current">Contact</span>
          </nav>
          <h1 className="page-title">Get in <span>Touch</span></h1>
          <p className="page-subtitle">Whether you're a student seeking support, a volunteer ready to give back, or a partner looking to collaborate — we'd love to hear from you.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="contact-grid fade-up">
            <div>
              <span className="eyebrow">Contact Information</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,3vw,36px)', fontWeight: 900, color: 'var(--color-black)', marginBottom: '40px', lineHeight: 1.1 }}>We're Here for <span style={{ color: 'var(--color-gold)' }}>You</span></h2>
              <div className="contact-info-item">
                <div className="contact-icon">📧</div>
                <div><div className="contact-label">Email</div><a href="mailto:contact@kudusi.org" className="contact-value">contact@kudusi.org</a></div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">📞</div>
                <div><div className="contact-label">Phone</div><a href="tel:+18444355447" className="contact-value">(844) 435-5447</a></div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">📍</div>
                <div><div className="contact-label">Location</div><div className="contact-value">Phoenix, Arizona</div></div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">🕐</div>
                <div><div className="contact-label">Availability</div><div className="contact-value">24/7 — Always Available</div></div>
              </div>
              <div style={{ marginTop: '40px' }}>
                <div className="contact-label" style={{ display: 'block', marginBottom: '16px' }}>Follow Us</div>
                <nav className="social-links" style={{ justifyContent: 'flex-start' }}>
                  <a href="https://www.facebook.com/Kudussi" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
                  <a href="https://www.instagram.com/kudusi_rising/" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
                  <a href="https://www.youtube.com/@kudusifortheadvancementofr9098" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0D0D1A"/></svg></a>
                  <a href="https://www.tiktok.com/@kudusi2020" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg></a>
                </nav>
              </div>
            </div>
            <div className="contact-form">
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: 800, marginBottom: '32px' }}>Send Us a Message</h3>
              <form id="contact-form" noValidate onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group"><label htmlFor="first-name">First Name</label><input type="text" id="first-name" placeholder="Your first name" required /></div>
                  <div className="form-group"><label htmlFor="last-name">Last Name</label><input type="text" id="last-name" placeholder="Your last name" required /></div>
                </div>
                <div className="form-group"><label htmlFor="email">Email Address</label><input type="email" id="email" placeholder="your@email.com" required /></div>
                <div className="form-group"><label htmlFor="subject">I am a...</label>
                  <select id="subject">
                    <option value="">Select your role</option>
                    <option>Student seeking support</option>
                    <option>Potential volunteer/mentor</option>
                    <option>Corporate/organizational partner</option>
                    <option>Donor/supporter</option>
                    <option>Media/press</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group"><label htmlFor="message">Message</label><textarea id="message" placeholder="Tell us how we can help or how you'd like to get involved..." required></textarea></div>
                <button type="submit" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>Send Message →</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
