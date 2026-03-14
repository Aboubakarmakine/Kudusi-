import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main id="main-content">
      <div className="page-hero">
        <div className="page-hero-pattern" aria-hidden="true"></div>
        <div className="container page-hero-inner fade-up">
          <nav className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span className="current">About</span>
          </nav>
          <h1 className="page-title">About <span>Kudusi</span></h1>
          <p className="page-subtitle">A community-driven 501(c)(3) nonprofit breaking barriers for students and youth through education, mentorship, and cultural pride.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="two-col fade-up">
            <div className="prose">
              <h2>Who We Are</h2>
              <p>Kudusi is a registered 501(c)(3) nonprofit organization based in Phoenix, Arizona, founded in 2020. Our name reflects our roots and purpose: a commitment to lifting every student — regardless of background, income, or circumstance — and giving them the tools they need to thrive.</p>
              <p>We serve students and youth across the United States with three core programs: free academic support, one-on-one mentorship, and cultural empowerment. Every service we offer is 100% free. We believe cost should never be a barrier to opportunity.</p>
              <h2>Our Values</h2>
              <ul>
                <li><strong>Equity:</strong> Every student deserves a fair chance regardless of their background.</li>
                <li><strong>Community:</strong> We grow stronger together — students, mentors, families, and partners.</li>
                <li><strong>Heritage:</strong> Cultural identity is a source of strength, not a barrier to overcome.</li>
                <li><strong>Excellence:</strong> We hold ourselves to the highest standard so our students can too.</li>
                <li><strong>Accessibility:</strong> No fees, no gatekeeping — open to all, always.</li>
              </ul>
            </div>
            <img src="/assets/images/first-meeting-ohio.jpg" alt="Kudusi team and students in the community" loading="lazy" style={{ borderRadius: '24px', boxShadow: 'var(--shadow-card)' }} />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-cream)', padding: 'var(--section-padding)' }}>
        <div className="container">
          <div className="mission-inner fade-up">
            <span className="eyebrow">Our Mission</span>
            <div className="mission-quote-decor" aria-hidden="true">"</div>
            <blockquote className="mission-quote">"We believe every student — regardless of background — deserves access to the tools, mentors, and community that unlock their full potential."</blockquote>
            <p className="mission-body">We work tirelessly to ensure that no student is left behind. Through our programs — available 24/7 at no cost — we connect young people with the mentors, resources, and community they need to succeed academically and grow personally.</p>
            <Link to="/history" className="text-link">Read Our History →</Link>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ background: 'var(--color-primary)' }}>
        <div className="container">
          <div className="impact-grid fade-up">
            <div className="impact-item"><div className="impact-number" data-target="500+">500+</div><div className="impact-label">Students Served</div></div>
            <div className="impact-item"><div className="impact-number" data-target="3">3</div><div className="impact-label">Core Programs</div></div>
            <div className="impact-item"><div className="impact-number" data-target="100%">100%</div><div className="impact-label">Free to All</div></div>
            <div className="impact-item"><div className="impact-number" data-target="24/7">24/7</div><div className="impact-label">Availability</div></div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow">Get Involved</span>
          <h2 className="section-title" style={{ marginBottom: '32px' }}>Join the Kudusi Community</h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://kudusi.org/?fluent-booking=calendar&host=mentorship-team&event=60min" className="btn btn-gold" target="_blank" rel="noopener noreferrer">Get Free Support →</a>
            <Link to="/contact" className="btn btn-outline-gold">Become a Volunteer</Link>
            <Link to="/sponsor" className="btn btn-outline-gold">Donate Today</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
