import { Link } from 'react-router-dom';

export default function Gallery() {
  return (
    <main id="main-content">
      <div className="page-hero">
        <div className="page-hero-pattern" aria-hidden="true"></div>
        <div className="container page-hero-inner">
          <nav className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Media</span><span>/</span><span className="current">Gallery</span>
          </nav>
          <h1 className="page-title">Our <span>Gallery</span></h1>
          <p className="page-subtitle">Moments of connection, learning, and celebration from across the Kudusi community — captured in photos.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <header className="section-header fade-up">
            <span className="eyebrow">Community Moments</span>
            <h2 className="section-title">Every Photo Tells a Story</h2>
          </header>
          <div className="gallery-grid">
            <div className="gallery-item fade-up"><img src="/assets/images/dc-protest.jpg" alt="Gallery image" loading="lazy" /></div>
            <div className="gallery-item fade-up" style={{ transitionDelay: '0.1s' }}><img src="/assets/images/dc-protest-march.jpg" alt="Gallery image" loading="lazy" /></div>
            <div className="gallery-item fade-up" style={{ transitionDelay: '0.2s' }}><img src="/assets/images/traditional-dance.jpg" alt="Gallery image" loading="lazy" /></div>
            <div className="gallery-item fade-up"><img src="/assets/images/traditional-dance-boys.jpg" alt="Gallery image" loading="lazy" /></div>
            <div className="gallery-item fade-up" style={{ transitionDelay: '0.1s' }}><img src="/assets/images/ohio-meeting.jpg" alt="Gallery image" loading="lazy" /></div>
            <div className="gallery-item fade-up" style={{ transitionDelay: '0.2s' }}><img src="/assets/images/graduate-single.jpg" alt="Gallery image" loading="lazy" /></div>
            <div className="gallery-item fade-up"><img src="/assets/images/grad-group.jpg" alt="Gallery image" loading="lazy" /></div>
            <div className="gallery-item fade-up" style={{ transitionDelay: '0.1s' }}><img src="/assets/images/first-conference.jpg" alt="Gallery image" loading="lazy" /></div>
            <div className="gallery-item fade-up" style={{ transitionDelay: '0.2s' }}><img src="/assets/images/dc-protest-mohammed.jpg" alt="Gallery image" loading="lazy" /></div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '56px' }} className="fade-up">
            <p style={{ color: '#888', fontSize: '15px', marginBottom: '20px' }}>Follow us on social media for more photos and moments from our community.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://www.instagram.com/kudusi_rising/" className="btn btn-outline-gold" target="_blank" rel="noopener noreferrer">Instagram @kudusi_rising</a>
              <a href="https://www.facebook.com/Kudussi" className="btn btn-outline-gold" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.youtube.com/@kudusifortheadvancementofr9098" className="btn btn-outline-gold" target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
