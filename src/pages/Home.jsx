import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main id="main-content">
      {/* HERO */}
      <section id="hero">
        <div className="hero-bg-pattern" aria-hidden="true"></div>
        <div className="container">
          <div className="hero-inner">
            <div className="hero-text fade-up">
              <div className="hero-eyebrow">NONPROFIT · PHOENIX, AZ · EST. 2020</div>
              <h1 className="hero-title">Every Student<br />Deserves to<br /><span>Thrive.</span></h1>
              <p className="hero-subtitle">Free academic support, mentorship, and cultural empowerment for students and youth — available 24/7, no cost, ever.</p>
              <div className="hero-cta">
                <a href="https://kudusi.org/?fluent-booking=calendar&host=mentorship-team&event=60min" className="btn btn-gold" target="_blank" rel="noopener noreferrer">Get Free Support →</a>
                <a href="https://www.youtube.com/@kudusifortheadvancementofr9098" className="hero-watch" target="_blank" rel="noopener noreferrer">
                  <span className="play-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  </span> Watch Our Story
                </a>
              </div>
              <div className="trust-bar">
                <div className="trust-item"><span className="trust-check">✓</span> 100% Free</div>
                <div className="trust-item"><span className="trust-check">✓</span> 24/7 Available</div>
                <div className="trust-item"><span className="trust-check">✓</span> Registered 501(c)(3)</div>
              </div>
            </div>
            <div className="hero-image-wrap fade-up" style={{ transitionDelay: '0.2s' }}>
              <img src="/assets/images/dc-protest.jpg" alt="Students thriving with Kudusi support" className="hero-img" loading="eager" fetchPriority="high" />
              <div className="hero-float-card">
                <div className="card-stat"><span className="stat-icon">🎓</span> 500+ Students Served</div>
                <div className="card-stat"><span className="stat-icon">📚</span> 3 Core Programs</div>
                <div className="card-stat"><span className="stat-icon">💛</span> 100% Free, Always</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" aria-label="Impact statistics">
        <div className="container">
          <div className="impact-grid">
            <div className="impact-item fade-up"><div className="impact-number" data-target="500+">500+</div><div className="impact-label">Students Served</div></div>
            <div className="impact-item fade-up" style={{ transitionDelay: '0.1s' }}><div className="impact-number" data-target="3">3</div><div className="impact-label">Core Programs</div></div>
            <div className="impact-item fade-up" style={{ transitionDelay: '0.2s' }}><div className="impact-number" data-target="100%">100%</div><div className="impact-label">Free to All Students</div></div>
            <div className="impact-item fade-up" style={{ transitionDelay: '0.3s' }}><div className="impact-number" data-target="24/7">24/7</div><div className="impact-label">Mentor Availability</div></div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" style={{ background: 'var(--color-cream)', padding: 'var(--section-padding)' }}>
        <div className="container">
          <div className="mission-inner fade-up">
            <span className="eyebrow">Our Mission</span>
            <div className="mission-quote-decor" aria-hidden="true">"</div>
            <blockquote className="mission-quote">"We believe every student — regardless of background — deserves access to the tools, mentors, and community that unlock their full potential."</blockquote>
            <p className="mission-body">Founded in 2020 and based in Phoenix, AZ, Kudusi is a registered 501(c)(3) nonprofit dedicated to breaking barriers for students and youth through free academic support, one-on-one mentorship, and cultural empowerment programs.</p>
            <Link to="/about" className="text-link">Learn Our Story →</Link>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" style={{ padding: 'var(--section-padding)' }}>
        <div className="container">
          <header className="section-header fade-up">
            <span className="eyebrow">What We Offer</span>
            <h2 className="section-title">Programs Built for You</h2>
          </header>
          <div className="programs-grid">
            <article className="program-card fade-up">
              <div className="card-num" aria-hidden="true">01</div>
              <div className="card-icon-badge">📚</div>
              <h3 className="card-title">Academic Support</h3>
              <p className="card-body">Comprehensive tutoring, academic advising, college counseling, and personal guidance — all free, all personalized.</p>
              <Link to="/academic" className="text-link">Explore Academic →</Link>
            </article>
            <article className="program-card fade-up" style={{ transitionDelay: '0.1s' }}>
              <div className="card-num" aria-hidden="true">02</div>
              <div className="card-icon-badge">🤝</div>
              <h3 className="card-title">Mentorship Programs</h3>
              <p className="card-body">One-on-one mentorship, scholarship guidance, financial aid navigation, and career development from real professionals.</p>
              <Link to="/mentorship" className="text-link">Meet Mentors →</Link>
            </article>
            <article className="program-card fade-up" style={{ transitionDelay: '0.2s' }}>
              <div className="card-num" aria-hidden="true">03</div>
              <div className="card-icon-badge">🌍</div>
              <h3 className="card-title">Cultural Empowerment</h3>
              <p className="card-body">Celebrating and preserving cultural heritage through community events, language classes, and cultural awareness programming.</p>
              <Link to="/cultural" className="text-link">Explore Culture →</Link>
            </article>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: 'var(--color-cream)', padding: 'var(--section-padding)' }}>
        <div className="container">
          <header className="section-header fade-up">
            <span className="eyebrow">Student Voices</span>
            <h2 className="section-title">Real Stories. Real Impact.</h2>
          </header>
          <div className="testimonials-grid">
            <article className="testimonial-card fade-up">
              <div className="t-quote-decor">"</div>
              <div className="t-stars">★★★★★</div>
              <p className="t-text">"I have been working with these guys for years now! With lots of hard work and timely communication, they made sure they delivered the best to me."</p>
              <footer className="t-author"><div className="t-avatar">AM</div><div><div className="t-name">Adam M.</div><div className="t-location">BS Graduate · Boston, MA</div></div></footer>
            </article>
            <article className="testimonial-card fade-up" style={{ transitionDelay: '0.12s' }}>
              <div className="t-quote-decor">"</div>
              <div className="t-stars">★★★★★</div>
              <p className="t-text">"The mentorship program changed my life by helping me discover my career path and providing the guidance I needed every step of the way."</p>
              <footer className="t-author"><div className="t-avatar">BT</div><div><div className="t-name">Bousseyna T.</div><div className="t-location">Current Student · Phoenix, AZ</div></div></footer>
            </article>
            <article className="testimonial-card fade-up" style={{ transitionDelay: '0.24s' }}>
              <div className="t-quote-decor">"</div>
              <div className="t-stars">★★★★★</div>
              <p className="t-text">"Thanks to Kudusi, I've not only achieved my academic goals but also embraced my culture with pride and found a community that truly supports me."</p>
              <footer className="t-author"><div className="t-avatar">IM</div><div><div className="t-name">Ibrahim M.</div><div className="t-location">Current Student · Dayton, OH</div></div></footer>
            </article>
          </div>
        </div>
      </section>

      {/* SPLIT CTA */}
      <section id="split-cta">
        <div className="split-left">
          <div className="split-pattern" aria-hidden="true"></div>
          <h2 className="split-headline">Need Support?</h2>
          <p className="split-body">Get free academic help, mentorship, and guidance — starting today. No fees. No barriers.</p>
          <div className="split-btn-wrap"><a href="https://kudusi.org/?fluent-booking=calendar&host=mentorship-team&event=60min" className="btn btn-gold" target="_blank" rel="noopener noreferrer">Get Help Now →</a></div>
        </div>
        <div className="split-right">
          <div className="split-pattern" aria-hidden="true"></div>
          <h2 className="split-headline">Make a Difference?</h2>
          <p className="split-body">Your time and expertise can change a student's life — anytime, anywhere. Join our mentor network.</p>
          <div className="split-btn-wrap"><Link to="/contact" className="btn btn-white">Become a Mentor →</Link></div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ background: 'var(--color-primary)', padding: '100px 0' }}>
        <div className="container">
          <div className="newsletter-inner fade-up">
            <span className="eyebrow">Stay Connected</span>
            <h2 className="newsletter-title">Get Updates, Events &amp; Resources</h2>
            <p className="newsletter-body">Join our community and be the first to know about new programs, events, and opportunities.</p>
            <form className="newsletter-form" id="newsletter-form" noValidate>
              <input type="email" placeholder="Enter your email address" aria-label="Email address" required />
              <button type="submit" className="btn btn-gold">Subscribe</button>
            </form>
            <p className="newsletter-fine">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

    </main>
  );
}
