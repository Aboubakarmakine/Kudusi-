import { Link } from 'react-router-dom';

export default function Academic() {
  return (
    <main id="main-content">
      <div className="page-hero">
        <div className="page-hero-pattern" aria-hidden="true"></div>
        <div className="container page-hero-inner fade-up">
          <nav className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Services</span><span>/</span><span className="current">Academic Support</span>
          </nav>
          <span className="eyebrow" style={{ color: 'rgba(232,168,56,0.8)' }}>Program 01</span>
          <h1 className="page-title">Academic <span>Support</span></h1>
          <p className="page-subtitle">Comprehensive tutoring, academic advising, college counseling and personal guidance — all free, all personalized, available 24/7.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="two-col fade-up">
            <div className="prose">
              <h2>What We Offer</h2>
              <p>Our Academic Support program connects students with dedicated tutors and academic advisors who are committed to helping every student reach their full potential. Whether you need help with a specific subject, college applications, or navigating financial aid — we've got you.</p>
              <h3>Tutoring &amp; Subject Help</h3>
              <p>Get one-on-one or group tutoring in math, science, English, history, and more — matched to your curriculum and learning pace.</p>
              <h3>College Counseling</h3>
              <p>From choosing the right school to writing your personal statement and applying for scholarships, our counselors walk you through every step.</p>
              <h3>Financial Aid Navigation</h3>
              <p>We help students and families understand FAFSA, grants, and scholarship opportunities so cost is never a barrier to higher education.</p>
              <h3>Academic Advising</h3>
              <p>Create a personalized academic plan with an advisor who knows your goals and can help you stay on track to achieve them.</p>
            </div>
            <img src="/assets/images/graduate-single.jpg" alt="Student working with academic tutor" loading="lazy" style={{ borderRadius: '24px', boxShadow: 'var(--shadow-card)' }} />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-black)', padding: '80px 0' }}>
        <div className="container">
          <div className="impact-grid fade-up">
            <div className="impact-item"><div className="impact-number" data-target="500+">500+</div><div className="impact-label">Students Supported</div></div>
            <div className="impact-item"><div className="impact-number" data-target="24/7">24/7</div><div className="impact-label">Availability</div></div>
            <div className="impact-item"><div className="impact-number" data-target="100%">100%</div><div className="impact-label">Free Always</div></div>
            <div className="impact-item"><div className="impact-number" data-target="10+">10+</div><div className="impact-label">Subjects Covered</div></div>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ background: 'var(--color-cream)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow">Ready to Start?</span>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>Get Academic Help Today</h2>
          <p style={{ color: '#555', fontSize: '17px', maxWidth: '540px', margin: '0 auto 36px' }}>Book a free session now. No fees, no waiting lists, no barriers.</p>
          <a href="https://kudusi.org/?fluent-booking=calendar&host=mentorship-team&event=60min" className="btn btn-gold" target="_blank" rel="noopener noreferrer">Book Free Session →</a>
        </div>
      </section>
    </main>
  );
}
