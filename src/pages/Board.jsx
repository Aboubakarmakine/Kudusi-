import { Link } from 'react-router-dom';

export default function Board() {
  return (
    <main id="main-content">
      <div className="page-hero">
        <div className="page-hero-pattern" aria-hidden="true"></div>
        <div className="container page-hero-inner">
          <nav className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><Link to="/about">About</Link><span>/</span><span className="current">Board</span>
          </nav>
          <h1 className="page-title">Board of <span>Directors</span></h1>
          <p className="page-subtitle">Meet the passionate leaders and professionals guiding Kudusi's mission to break barriers and build futures for every student.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <header className="section-header fade-up">
            <span className="eyebrow">Leadership</span>
            <h2 className="section-title">The People Behind Kudusi</h2>
          </header>
          <div className="team-grid">
            {[
              { id: '1', initials: 'AM', name: 'Abdulrazik Mohamed', role: 'President', delay: '0s' },
              { id: '2', initials: 'NA', name: 'Nejmadin Ahmed', role: 'Vice President', delay: '0.1s' },
              { id: '3', initials: 'SD', name: 'Sadia Daldoum', role: 'Secretary', delay: '0.2s' },
              { id: '4', initials: 'NS', name: 'Nadjwa Saboun', role: 'Assistant Secretary', delay: '0s' },
              { id: '5', initials: 'IA', name: 'Ishak Ali Abdullkarim', role: 'Treasurer', delay: '0.1s' },
              { id: '6', initials: 'MM', name: 'Mohamed Mohamed', role: 'Assistant Treasurer', delay: '0.2s' },
              { id: '7', initials: 'YY', name: 'Yassine M Yakhoub', role: 'Education Chair', delay: '0s' },
              { id: '8', initials: 'MM', name: 'Mouna Mohammed', role: 'Education Chair - Co', delay: '0.1s' },
              { id: '9', initials: 'SA', name: 'Seifadine Abdoulaye', role: 'External Relations Chair', delay: '0.2s' },
              { id: '10', initials: 'YA', name: 'Yassir Ahmed', role: 'Assistant External Relations', delay: '0s' },
              { id: '11', initials: 'SY', name: 'Sirajadin Yahya Abdallah', role: 'Social Event Outreach', delay: '0.1s' },
              { id: '12', initials: 'SA', name: 'Samira Abdoulaye', role: 'Assistant Social Event', delay: '0.2s' },
              { id: '13', initials: 'SA', name: 'Samia Ali', role: 'Social Media Management', delay: '0s' },
              { id: '14', initials: 'SA', name: 'Sharif Ahmed', role: 'Assistant Social Media', delay: '0.1s' },
              { id: '15', initials: 'A', name: 'Aboubakar', role: 'Technology & Innovation', delay: '0.2s' },
              { id: '16', initials: 'IA', name: 'Issah Abakar', role: 'Technology & Innovation', delay: '0s' },
              { id: '17', initials: 'AA', name: 'Abougassim Abdallah', role: 'Business Development', delay: '0.1s' },
              { id: '18', initials: 'AY', name: 'Alhafiz Yacoub', role: 'Associate Analysis(s)', delay: '0.2s' }
            ].map((member, i) => (
              <div key={member.id} className="team-card fade-up" style={member.delay !== '0s' ? { transitionDelay: member.delay } : {}}>
                <div style={{ 
                  width: '100%', 
                  height: '320px', 
                  background: `linear-gradient(135deg, rgba(5,5,10,1) 0%, rgba(${20 + (i * 10) % 30},${20 + (i * 15) % 30},${25 + (i * 20) % 40},1) 100%)`, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.1,
                    backgroundImage: 'radial-gradient(circle at 50% 50%, var(--color-gold) 0%, transparent 60%)'
                  }}></div>
                  <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(197, 160, 58, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-gold)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '42px',
                    fontWeight: 900,
                    boxShadow: '0 12px 32px rgba(0,0,0,0.5)',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {member.initials}
                  </div>
                </div>
                <div className="team-card-body" style={{ textAlign: 'center', padding: '32px 24px' }}>
                  <div className="team-name" style={{ fontSize: '20px', marginBottom: '8px' }}>{member.name}</div>
                  <div className="team-role" style={{ fontSize: '12px', letterSpacing: '0.15em' }}>{member.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '72px' }} className="fade-up">
            <span className="eyebrow">Join the Team</span>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>Interested in Volunteering?</h2>
            <p style={{ color: '#555', fontSize: '17px', maxWidth: '560px', margin: '0 auto 32px' }}>We're always looking for passionate mentors, tutors, and community leaders to join our mission.</p>
            <Link to="/contact" className="btn btn-gold">Get in Touch →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
