import { Link } from 'react-router-dom';

export default function History() {
  return (
    <main id="main-content">
      <div className="page-hero">
        <div className="page-hero-pattern" aria-hidden="true"></div>
        <div className="container page-hero-inner fade-up">
          <nav className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><Link to="/about">About</Link><span>/</span><span className="current">History</span>
          </nav>
          <h1 className="page-title">Our <span>History</span></h1>
          <p className="page-subtitle">Founded in 2020 by young visionaries who recognized a critical need for accessible education and cultural preservation in the diaspora.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="two-col fade-up" style={{ marginBottom: '80px', alignItems: 'flex-start' }}>
            <div className="prose">
              <h2>The Founding of Kudusi</h2>
              <p>Kudusi was born out of a shared vision in 2020 by a group of young, passionate individuals residing in Phoenix, Arizona. Recognizing the growing challenges faced by students—particularly those from immigrant and refugee backgrounds—they saw a critical need for an organization that could bridge the gap between academic hurdles and cultural disconnection.</p>
              <p>The name "Kudusi" itself represents moving forward with purpose. From day one, the mission was clear: to create a 100% free, accessible platform where students could receive high-quality tutoring, expert mentorship, and a safe space to celebrate their heritage.</p>
            </div>
            <img src="/assets/images/ahmed-hoodie.jpg" alt="Founding team members of Kudusi" loading="lazy" style={{ borderRadius: '24px', boxShadow: 'var(--shadow-card)', height: 'auto' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="fade-up">
            <div>
              <span className="eyebrow">Our Journey</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,3.5vw,42px)', fontWeight: 900, color: 'var(--color-black)', marginBottom: '40px', lineHeight: 1.1 }}>Built on Purpose.<br /><span style={{ color: 'var(--color-gold)' }}>Driven by Community.</span></h2>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-year">2020</div>
                  <div className="timeline-title">Kudusi is Founded</div>
                  <p className="timeline-body">Kudusi was established in Phoenix, AZ with a simple but powerful belief: every student deserves access to free academic support and mentorship, regardless of their background or income.</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-year">2020</div>
                  <div className="timeline-title">501(c)(3) Status Approved</div>
                  <p className="timeline-body">Kudusi received official recognition as a registered 501(c)(3) nonprofit organization under EIN 88-2434510, enabling tax-deductible donations and formal grant eligibility.</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-year">2021</div>
                  <div className="timeline-title">First Mentorship Cohort</div>
                  <p className="timeline-body">Launched our first cohort of one-on-one mentorship sessions, connecting students in Phoenix with dedicated professionals for career, academic, and personal guidance.</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-year">2022</div>
                  <div className="timeline-title">Cultural Empowerment Program Launched</div>
                  <p className="timeline-body">Introduced our Cultural Empowerment program — including language classes, community events, and cultural heritage programming to help students embrace their identity with pride.</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-year">2023</div>
                  <div className="timeline-title">500+ Students Served</div>
                  <p className="timeline-body">A major milestone: Kudusi surpassed 500 students served across all programs, with support reaching students in Phoenix, Boston, Dayton, and beyond.</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-year">2024–2026</div>
                  <div className="timeline-title">Growing Impact</div>
                  <p className="timeline-body">Kudusi continues to expand its reach, launching new partnerships, deepening community roots, and strengthening its commitment to free, 24/7 academic and mentorship support for all students.</p>
                </div>
              </div>
            </div>
            <div>
              <img src="/assets/images/dc-protest.jpg" alt="Kudusi community and students" loading="lazy" style={{ width: '100%', height: 'auto', borderRadius: '20px', position: 'sticky', top: '120px' }} />
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-primary)', padding: '100px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ color: 'rgba(232,168,56,0.8)' }}>Be Part of the Story</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px,4vw,48px)', fontWeight: 900, color: 'var(--color-white)', marginBottom: '16px' }}>The Next Chapter <span style={{ color: 'var(--color-gold)' }}>Starts With You</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '17px', maxWidth: '560px', margin: '0 auto 40px', lineHeight: 1.7 }}>Whether you're a student seeking support, a volunteer ready to give back, or a donor who believes in our mission — there's a place for you in Kudusi's story.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://kudusi.org/?fluent-booking=calendar&host=mentorship-team&event=60min" className="btn btn-gold" target="_blank" rel="noopener noreferrer">Get Free Support</a>
            <Link to="/sponsor" className="btn btn-outline-gold">Donate Today</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
