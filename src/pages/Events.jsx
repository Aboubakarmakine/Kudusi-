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
              <div className="event-date-badge"><div className="ev-month">MAR</div><div className="ev-day">15</div></div>
              <div className="event-body">
                <div className="event-tag">Workshop</div>
                <h3 className="event-title">College Prep Kickoff: Application &amp; Scholarship Workshop</h3>
                <p className="event-desc">A free session to walk students through the college application process, scholarship search, and FAFSA navigation — hosted by Kudusi mentors.</p>
                <div className="event-meta"><span>📍 Online via Zoom</span><span>🕐 3:00 PM – 5:00 PM EST</span><span>🆓 Free</span></div>
              </div>
              <div className="event-cta"><a href="https://kudusi.org/?fluent-booking=calendar&host=mentorship-team&event=60min" className="btn btn-outline-gold" target="_blank" rel="noopener noreferrer">Register Free</a></div>
            </article>
            <article className="event-card fade-up" style={{ transitionDelay: '0.1s' }}>
              <div className="event-date-badge"><div className="ev-month">APR</div><div class="ev-day">05</div></div>
              <div className="event-body">
                <div className="event-tag">Cultural</div>
                <h3 className="event-title">Cultural Heritage Day 2026</h3>
                <p className="event-desc">A community celebration of African cultures — featuring music, traditional foods, language workshops, storytelling, and arts. All are welcome!</p>
                <div className="event-meta"><span>📍 Phoenix Community Center, AZ</span><span>🕐 12:00 PM – 6:00 PM MST</span><span>🆓 Free Admission</span></div>
              </div>
              <div className="event-cta"><Link to="/contact" className="btn btn-outline-gold">Express Interest</Link></div>
            </article>
            <article className="event-card fade-up" style={{ transitionDelay: '0.2s' }}>
              <div className="event-date-badge"><div className="ev-month">APR</div><div className="ev-day">22</div></div>
              <div className="event-body">
                <div className="event-tag">Mentorship</div>
                <h3 className="event-title">Mentor Mixer: Meet Your Future Guide</h3>
                <p className="event-desc">An informal networking event where students meet potential mentors, hear their career stories, and learn how to get matched with a Kudusi mentor.</p>
                <div className="event-meta"><span>📍 Online + Phoenix, AZ</span><span>🕐 6:00 PM – 8:00 PM MST</span><span>🆓 Free</span></div>
              </div>
              <div className="event-cta"><a href="https://kudusi.org/?fluent-booking=calendar&host=mentorship-team&event=60min" className="btn btn-outline-gold" target="_blank" rel="noopener noreferrer">Register Free</a></div>
            </article>
            <article className="event-card fade-up">
              <div className="event-date-badge"><div className="ev-month">MAY</div><div className="ev-day">10</div></div>
              <div className="event-body">
                <div className="event-tag">Masalit Language</div>
                <h3 className="event-title">Masalit Language Beginner Series — Session 1</h3>
                <p className="event-desc">A free online beginner's class in the Masalit language — open to all interested students, community members, and families looking to reconnect with their heritage.</p>
                <div className="event-meta"><span>📍 Online via Zoom</span><span>🕐 5:00 PM – 6:30 PM EST</span><span>🆓 Free</span></div>
              </div>
              <div className="event-cta"><Link to="/contact" className="btn btn-outline-gold">Sign Up</Link></div>
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
