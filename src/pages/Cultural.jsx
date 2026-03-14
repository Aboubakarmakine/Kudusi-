import { Link } from 'react-router-dom';

export default function Cultural() {
  return (
    <main id="main-content">
      <div className="page-hero">
        <div className="page-hero-pattern" aria-hidden="true"></div>
        <div className="container page-hero-inner fade-up">
          <nav className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Services</span><span>/</span><span className="current">Cultural Empowerment</span>
          </nav>
          <span className="eyebrow" style={{ color: 'rgba(232,168,56,0.8)' }}>Program 03</span>
          <h1 className="page-title">Cultural <span>Empowerment</span></h1>
          <p className="page-subtitle">Celebrating, preserving, and honoring African cultural heritage through community events, language classes, and cultural awareness programming — 100% free.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="two-col fade-up">
            <div className="prose">
              <h2>Heritage as Strength</h2>
              <p>At Kudusi, we believe cultural identity is not a barrier — it is a source of strength, resilience, and pride. Our Cultural Empowerment program is designed to help students stay connected to their roots while building bridges to the future.</p>
              <h3>Kudusi Academy: Language Classes</h3>
              <p>We offer free language and cultural education courses including Beginner &amp; Intermediate Arabic, Beginner Turkish, and ESL (English as a Second Language). Learn directly from our dedicated instructors: Zainab Yusuf, Ahmed Malik, Fatima Khan, and Lisa Chen.</p>
              <h3>Community Events</h3>
              <p>From cultural celebrations and heritage days to storytelling circles and traditional arts — our events bring communities together in joyful, meaningful ways.</p>
              <h3>Cultural Awareness Programs</h3>
              <p>Workshops and programming that educate students on African history, diaspora experiences, and the rich diversity of cultures that shape who they are.</p>
              <h3>Identity &amp; Pride</h3>
              <p>We create safe spaces for students to explore, express, and celebrate their identities — building confidence, belonging, and a sense of purpose.</p>
            </div>
            <img src="/assets/images/traditional-dance.jpg" alt="Students celebrating cultural heritage at a Kudusi event" loading="lazy" style={{ borderRadius: '24px', boxShadow: 'var(--shadow-card)' }} />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-red)', padding: 'var(--section-padding)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Our Upcoming Events</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, color: 'var(--color-white)', marginBottom: '16px' }}>Join the <span style={{ color: 'var(--color-gold)' }}>Community</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '17px', maxWidth: '540px', margin: '0 auto 36px' }}>Come celebrate, learn, and grow with us. Our events are free and open to all.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/events" className="btn btn-gold">View All Events →</Link>
            <Link to="/contact" className="btn btn-white">Get Involved</Link>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ background: 'var(--color-cream)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow">Masalit Language</span>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>Learn Your Language</h2>
          <p style={{ color: '#555', fontSize: '17px', maxWidth: '560px', margin: '0 auto 36px', lineHeight: 1.7 }}>We offer free Masalit language learning sessions — connecting students to one of Sudan's vibrant indigenous languages and cultures.</p>
          <a href="https://kudusi.org/learn-masalit" className="btn btn-gold" target="_blank" rel="noopener noreferrer">Start Learning →</a>
        </div>
      </section>
    </main>
  );
}
