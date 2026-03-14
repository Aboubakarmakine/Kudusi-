import { Link } from 'react-router-dom';

export default function Mentorship() {
  return (
    <main id="main-content">
      <div className="page-hero">
        <div className="page-hero-pattern" aria-hidden="true"></div>
        <div className="container page-hero-inner fade-up">
          <nav className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Services</span><span>/</span><span className="current">Mentorship</span>
          </nav>
          <span className="eyebrow" style={{ color: 'rgba(232,168,56,0.8)' }}>Program 02</span>
          <h1 className="page-title">Mentorship <span>Programs</span></h1>
          <p className="page-subtitle">One-on-one mentorship, scholarship guidance, financial aid navigation, and career development from real professionals who care — 100% free.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="two-col fade-up">
            <img src="/assets/images/omaha-group.jpg" alt="Student meeting with a mentor" loading="lazy" style={{ borderRadius: '24px', boxShadow: 'var(--shadow-card)' }} />
            <div className="prose">
              <h2>Real Mentors. Real Guidance.</h2>
              <p>Our mentorship program connects students and young adults with experienced professionals who are passionate about giving back. Every mentor is vetted, dedicated, and available on your schedule — at no cost to you.</p>
              <h3>1:1 Mentorship Sessions</h3>
              <p>Work directly with a mentor matched to your goals — from career exploration to academic planning to personal development. Sessions available via video, phone, or in-person.</p>
              <h3>Scholarship Guidance</h3>
              <p>Our mentors help you find and apply for scholarships that fit your profile — maximizing your chances of funding your education without debt.</p>
              <h3>Career Development</h3>
              <p>From resume writing and interview prep to professional networking and industry insights, we help you get career-ready while still in school.</p>
              <h3>Financial Aid Support</h3>
              <p>Navigating FAFSA, grants, and aid packages can be overwhelming. Our advisors break it down step by step so you know exactly what you're eligible for.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="content-section" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <header className="section-header fade-up">
            <span className="eyebrow">Our Experts</span>
            <h2 className="section-title">Meet Our Mentors</h2>
          </header>
          <div className="team-grid">
            {[
              { id: '1', initials: 'IH', name: 'Ilias Hassan', role: 'Banking and Finance', delay: '0s' },
              { id: '2', initials: 'NA', name: 'Nejmadin Ahmed', role: 'Economics & Accounting', delay: '0.1s' },
              { id: '3', initials: 'MM', name: 'Mouna Mohammed', role: 'Biology | Lab Technician', delay: '0.2s' },
              { id: '4', initials: 'SA', name: 'Sadia Adam', role: 'Biology | Certified Phlebotomist', delay: '0s' }
            ].map((mentor, i) => (
              <div key={mentor.id} className="team-card fade-up" style={mentor.delay !== '0s' ? { transitionDelay: mentor.delay } : {}}>
                <div style={{ 
                  width: '100%', 
                  height: '240px', 
                  background: `linear-gradient(135deg, rgba(8,8,12,1) 0%, rgba(${40 + (i * 10) % 30},${35 + (i * 15) % 30},${30 + (i * 20) % 40},1) 100%)`, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.15,
                    backgroundImage: 'radial-gradient(circle at 50% 50%, var(--color-gold) 0%, transparent 70%)'
                  }}></div>
                  <div style={{
                    width: '90px',
                    height: '90px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(197, 160, 58, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-gold)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '32px',
                    fontWeight: 900,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {mentor.initials}
                  </div>
                </div>
                <div className="team-card-body" style={{ textAlign: 'center', padding: '28px 20px' }}>
                  <div className="team-name" style={{ fontSize: '18px', marginBottom: '6px' }}>{mentor.name}</div>
                  <div className="team-role" style={{ fontSize: '12px', letterSpacing: '0.1em' }}>{mentor.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-primary)', padding: 'var(--section-padding)' }}>
        <div className="container">
          <header className="section-header fade-up">
            <span className="eyebrow" style={{ color: 'rgba(232,168,56,0.8)' }}>How It Works</span>
            <h2 className="section-title" style={{ color: 'var(--color-white)' }}>Get Matched in <span style={{ color: 'var(--color-gold)' }}>3 Simple Steps</span></h2>
          </header>
          <div className="steps-wrap">
            <div className="steps-line" aria-hidden="true"></div>
            <div className="step fade-up">
              <div className="step-num">1</div>
              <h3 className="step-title">Book a Session</h3>
              <p className="step-body">Use our free scheduling tool to pick a time that works for you. No waitlists.</p>
            </div>
            <div className="step fade-up" style={{ transitionDelay: '0.15s' }}>
              <div className="step-num">2</div>
              <h3 className="step-title">Get Matched</h3>
              <p className="step-body">We pair you with a mentor aligned to your goals, background, and schedule.</p>
            </div>
            <div className="step fade-up" style={{ transitionDelay: '0.3s' }}>
              <div className="step-num">3</div>
              <h3 className="step-title">Start Growing</h3>
              <p className="step-body">Meet regularly, track your progress, and thrive — at your own pace, for free.</p>
            </div>
          </div>
          <div className="howitworks-cta fade-up">
            <a href="https://kudusi.org/?fluent-booking=calendar&host=mentorship-team&event=60min" className="btn btn-gold" target="_blank" rel="noopener noreferrer">Book Free Mentorship →</a>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <header className="section-header fade-up">
            <span className="eyebrow">Student Voices</span>
            <h2 className="section-title">What Students Are Saying</h2>
          </header>
          <div className="testimonials-grid">
            <article className="testimonial-card fade-up">
              <div className="t-quote-decor">"</div>
              <div className="t-stars">★★★★★</div>
              <p className="t-text">"The mentorship program changed my life by helping me discover my career path and providing the guidance I needed every step of the way."</p>
              <footer className="t-author"><div className="t-avatar">BT</div><div><div className="t-name">Bousseyna T.</div><div className="t-location">Current Student · Phoenix, AZ</div></div></footer>
            </article>
            <article className="testimonial-card fade-up" style={{ transitionDelay: '0.12s' }}>
              <div className="t-quote-decor">"</div>
              <div className="t-stars">★★★★★</div>
              <p className="t-text">"I have been working with these guys for years now! With lots of hard work and timely communication, they made sure they delivered the best to me."</p>
              <footer className="t-author"><div className="t-avatar">AM</div><div><div className="t-name">Adam M.</div><div className="t-location">BS Graduate · Boston, MA</div></div></footer>
            </article>
            <article className="testimonial-card fade-up" style={{ transitionDelay: '0.24s' }}>
              <div className="t-quote-decor">"</div>
              <div className="t-stars">★★★★★</div>
              <p className="t-text">"Thanks to Kudusi, I've not only achieved my academic goals but also found a mentor who truly cares about my success."</p>
              <footer className="t-author"><div className="t-avatar">IM</div><div><div className="t-name">Ibrahim M.</div><div className="t-location">Current Student · Dayton, OH</div></div></footer>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
