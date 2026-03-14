import { Link } from 'react-router-dom';

export default function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    form.innerHTML = '<p style="color:var(--color-gold);font-family:var(--font-heading);font-weight:700;font-size:20px;text-align:center;padding:40px">🎉 You\'re subscribed! Welcome to the Kudusi community.</p>';
  };

  return (
    <main id="main-content">
      <div className="page-hero">
        <div className="page-hero-pattern" aria-hidden="true"></div>
        <div className="container page-hero-inner">
          <nav className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Media</span><span>/</span><span className="current">Newsletter</span>
          </nav>
          <h1 className="page-title">Stay <span>Connected</span></h1>
          <p className="page-subtitle">Subscribe to the Kudusi newsletter for program updates, student stories, upcoming events, and resources — delivered to your inbox.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="fade-up">
            <div>
              <span className="eyebrow">Why Subscribe</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,3.5vw,42px)', fontWeight: 900, color: 'var(--color-black)', marginBottom: '32px', lineHeight: 1.1 }}>Be the First to <span style={{ color: 'var(--color-gold)' }}>Know</span></h2>
              <div className="newsletter-benefit"><div className="nl-icon">📰</div><div><strong>Stories</strong><p>Student spotlights, mentor features, and community impact stories that inspire.</p></div></div>
              <div className="newsletter-benefit"><div className="nl-icon">📅</div><div><strong>Events</strong><p>Invitations to cultural celebrations, workshops, and community gatherings before anyone else.</p></div></div>
              <div className="newsletter-benefit"><div className="nl-icon">🎓</div><div><strong>Resources</strong><p>Scholarship deadlines, FAFSA tips, college prep guides, and academic tools.</p></div></div>
              <div className="newsletter-benefit"><div className="nl-icon">🌍</div><div><strong>Program Updates</strong><p>New partnerships, program expansions, and impact milestones from across Kudusi.</p></div></div>
              <p style={{ color: '#888', fontSize: '14px', marginTop: '32px' }}>No spam, ever. Unsubscribe with one click at any time.</p>
            </div>
            <div className="contact-form">
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: 800, marginBottom: '32px' }}>Subscribe to Our Newsletter</h3>
              <form id="nl-subscribe-form" noValidate onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group"><label htmlFor="nl-fname">First Name</label><input type="text" id="nl-fname" placeholder="Your name" required /></div>
                  <div className="form-group"><label htmlFor="nl-lname">Last Name</label><input type="text" id="nl-lname" placeholder="Your last name" /></div>
                </div>
                <div className="form-group"><label htmlFor="nl-email">Email Address</label><input type="email" id="nl-email" placeholder="your@email.com" required /></div>
                <div className="form-group"><label htmlFor="nl-role">I am a...</label>
                  <select id="nl-role">
                    <option value="">Select your role</option>
                    <option>Student</option>
                    <option>Parent/Guardian</option>
                    <option>Mentor/Volunteer</option>
                    <option>Donor/Supporter</option>
                    <option>Community Partner</option>
                    <option>Other</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>Subscribe Now →</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-cream)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow">Follow Along</span>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>Also Follow Us on Social</h2>
          <p style={{ color: '#555', fontSize: '17px', maxWidth: '540px', margin: '0 auto 36px' }}>Get daily updates, behind-the-scenes moments, and community content on our social channels.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://www.instagram.com/kudusi_rising/" className="btn btn-outline-gold" target="_blank" rel="noopener noreferrer">Instagram @kudusi_rising</a>
            <a href="https://www.facebook.com/Kudussi" className="btn btn-outline-gold" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.tiktok.com/@kudusi2020" className="btn btn-outline-gold" target="_blank" rel="noopener noreferrer">TikTok @kudusi2020</a>
            <a href="https://www.youtube.com/@kudusifortheadvancementofr9098" className="btn btn-outline-gold" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
      </section>
    </main>
  );
}
