import { Link } from 'react-router-dom';

export default function Events() {
  return (
    <main id="main-content">
      <div className="page-hero">
        <div className="page-hero-pattern" aria-hidden="true"></div>
        <div className="container page-hero-inner">
          <nav className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Media</span><span>/</span><span className="current">Events</span>
          </nav>
          <h1 className="page-title">Events &amp; <span>Calendar</span></h1>
          <p className="page-subtitle">Join us for community workshops, cultural celebrations, mentorship meetups, and student showcases — all free, all welcome.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <header className="section-header fade-up">
            <span className="eyebrow">Coming Up</span>
            <h2 className="section-title">Upcoming Events</h2>
          </header>
          <div className="events-list">
            <article className="event-card fade-up">
              <div className="event-date-badge"><div className="ev-month">NOV</div><div className="ev-day">30</div></div>
              <div className="event-body">
                <div className="event-tag">Workshop</div>
                <h3 className="event-title">Visual Arts Workshop</h3>
                <p className="event-desc">Join us for a hands-on visual arts workshop exploring traditional African art forms, open to all skill levels.</p>
                <div className="event-meta"><span>📍 Phoenix Community Center</span><span>🕐 2:00 PM – 5:00 PM MST</span><span>🆓 Free</span></div>
              </div>
              <div className="event-cta"><a href="https://kudusi.org/?fluent-booking=calendar&host=mentorship-team&event=60min" className="btn btn-outline-gold" target="_blank" rel="noopener noreferrer">Register Free</a></div>
            </article>
            <article className="event-card fade-up" style={{ transitionDelay: '0.1s' }}>
              <div className="event-date-badge"><div className="ev-month">DEC</div><div className="ev-day">14</div></div>
              <div className="event-body">
                <div className="event-tag">Cultural</div>
                <h3 className="event-title">Cultural Heritage Day</h3>
                <p className="event-desc">A magnificent community celebration of our shared heritage — featuring traditional music, language immersion, and authentic storytelling.</p>
                <div className="event-meta"><span>📍 Kudusi Center</span><span>🕐 12:00 PM – 6:00 PM MST</span><span>🆓 Free Admission</span></div>
              </div>
              <div className="event-cta"><Link to="/contact" className="btn btn-outline-gold">Express Interest</Link></div>
            </article>
            <article className="event-card fade-up" style={{ transitionDelay: '0.2s' }}>
              <div className="event-date-badge"><div className="ev-month">JAN</div><div className="ev-day">15</div></div>
              <div className="event-body">
                <div className="event-tag">Mentorship</div>
                <h3 className="event-title">Youth Leadership Forum</h3>
                <p className="event-desc">An interactive webinar focused on youth empowerment, building essential leadership skills, and guiding the rising generation into successful careers.</p>
                <div className="event-meta"><span>📍 Online / Webinar</span><span>🕐 6:00 PM – 8:00 PM EST</span><span>🆓 Free</span></div>
              </div>
              <div className="event-cta"><a href="https://kudusi.org/?fluent-booking=calendar&host=mentorship-team&event=60min" className="btn btn-outline-gold" target="_blank" rel="noopener noreferrer">Register Free</a></div>
            </article>
          </div>

          <header className="section-header fade-up" style={{ marginTop: '80px' }}>
            <span className="eyebrow">Archive</span>
            <h2 className="section-title">Past Events</h2>
          </header>
          <div className="events-list past-events">
            <article className="event-card fade-up past">
              <div className="event-date-badge past"><div className="ev-month">DEC</div><div className="ev-day">14</div></div>
              <div className="event-body">
                <div className="event-tag">Workshop</div>
                <h3 className="event-title">FAFSA Open Help Session 2025</h3>
                <p className="event-desc">Guided FAFSA completion session with Kudusi advisors — 50+ students attended and received personalized support.</p>
                <div className="event-meta"><span>📍 Online</span><span>✅ Completed</span></div>
              </div>
              <div className="event-cta"><Link to="/gallery" className="btn btn-outline-gold" style={{ opacity: 0.6 }}>View Photos</Link></div>
            </article>
            <article className="event-card fade-up past" style={{ transitionDelay: '0.1s' }}>
              <div className="event-date-badge past"><div className="ev-month">OCT</div><div className="ev-day">19</div></div>
              <div className="event-body">
                <div className="event-tag">Cultural</div>
                <h3 className="event-title">Cultural Awareness Month Kickoff — Phoenix</h3>
                <p className="event-desc">A month-long series of events celebrating African heritage during Global Cultural Awareness Month.</p>
                <div className="event-meta"><span>📍 Phoenix, AZ</span><span>✅ Completed</span></div>
              </div>
              <div className="event-cta"><Link to="/gallery" className="btn btn-outline-gold" style={{ opacity: 0.6 }}>View Photos</Link></div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
