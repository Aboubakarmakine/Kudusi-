import { Link } from 'react-router-dom';

export default function Sponsor() {
  return (
    <main id="main-content">
      <div className="page-hero">
        <div className="page-hero-pattern" aria-hidden="true"></div>
        <div className="container page-hero-inner">
          <nav className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span className="current">Sponsor</span>
          </nav>
          <h1 className="page-title">Make a <span>Difference</span></h1>
          <p className="page-subtitle">Your support keeps Kudusi's programs 100% free for every student who needs them. Every dollar makes an impact.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <header className="section-header fade-up">
            <span className="eyebrow">Individual Giving</span>
            <h2 className="section-title">Choose Your <span style={{ color: 'var(--color-gold)' }}>Impact</span></h2>
          </header>
          <div className="donation-grid">
            <article className="donation-tier fade-up">
              <div className="tier-badge">Friend</div>
              <div className="tier-amount">$25</div>
              <p className="tier-tagline">Every bit helps</p>
              <ul className="tier-benefits">
                <li>✓ Helps fund tutoring materials</li>
                <li>✓ Supports one student for a session</li>
                <li>✓ Tax-deductible receipt</li>
              </ul>
              <a href="https://www.paypal.com/donate" className="btn btn-outline-gold" target="_blank" rel="noopener noreferrer" style={{ width: '100%', justifyContent: 'center', marginTop: '28px' }}>Donate $25</a>
            </article>
            <article className="donation-tier featured fade-up" style={{ transitionDelay: '0.1s' }}>
              <div className="tier-popular-badge">Most Popular</div>
              <div className="tier-badge" style={{ background: 'var(--color-gold)', color: 'var(--color-black)' }}>Champion</div>
              <div className="tier-amount">$100</div>
              <p className="tier-tagline">Make real change</p>
              <ul className="tier-benefits">
                <li>✓ Sponsors a full month of tutoring</li>
                <li>✓ Supports mentorship session costs</li>
                <li>✓ Named recognition on our website</li>
                <li>✓ Impact update email</li>
                <li>✓ Tax-deductible receipt</li>
              </ul>
              <a href="https://www.paypal.com/donate" className="btn btn-gold" target="_blank" rel="noopener noreferrer" style={{ width: '100%', justifyContent: 'center', marginTop: '28px' }}>Donate $100</a>
            </article>
            <article className="donation-tier fade-up" style={{ transitionDelay: '0.2s' }}>
              <div className="tier-badge">Patron</div>
              <div className="tier-amount">$500</div>
              <p className="tier-tagline">Become a cornerstone</p>
              <ul className="tier-benefits">
                <li>✓ Funds a full program cohort</li>
                <li>✓ Premium recognition on website</li>
                <li>✓ Quarterly impact report</li>
                <li>✓ Invite to exclusive Kudusi events</li>
                <li>✓ Tax-deductible receipt</li>
              </ul>
              <a href="https://www.paypal.com/donate" className="btn btn-outline-gold" target="_blank" rel="noopener noreferrer" style={{ width: '100%', justifyContent: 'center', marginTop: '28px' }}>Donate $500</a>
            </article>
            <article className="donation-tier fade-up" style={{ transitionDelay: '0.3s' }}>
              <div className="tier-badge">Custom</div>
              <div className="tier-amount">Your Choice</div>
              <p className="tier-tagline">Any amount matters</p>
              <ul className="tier-benefits">
                <li>✓ Give any amount you choose</li>
                <li>✓ 100% goes to student programs</li>
                <li>✓ Tax-deductible receipt</li>
              </ul>
              <a href="https://www.paypal.com/donate" className="btn btn-outline-gold" target="_blank" rel="noopener noreferrer" style={{ width: '100%', justifyContent: 'center', marginTop: '28px' }}>Donate Custom</a>
            </article>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-cream)', padding: 'var(--section-padding)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="fade-up">
            <div>
              <span className="eyebrow">Corporate Giving</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,3.5vw,42px)', fontWeight: 900, color: 'var(--color-black)', marginBottom: '20px', lineHeight: 1.1 }}>Partner With <span style={{ color: 'var(--color-gold)' }}>Kudusi</span></h2>
              <p style={{ color: '#555', fontSize: '17px', lineHeight: 1.8, marginBottom: '20px' }}>We work with companies, foundations, and organizations to create meaningful partnerships that drive real impact for students and communities.</p>
              <p style={{ color: '#555', fontSize: '17px', lineHeight: 1.8, marginBottom: '32px' }}>Corporate sponsorships include co-branding opportunities, employee volunteer matching, impact reports, and invitations to exclusive community events.</p>
              <Link to="/contact" className="btn btn-gold">Discuss Partnership →</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="sponsor-feature-item"><div className="sf-icon">🎯</div><div><strong>Targeted Impact</strong><p>Your donation goes directly to free programs for students — zero admin waste.</p></div></div>
              <div className="sponsor-feature-item"><div className="sf-icon">📊</div><div><strong>Transparent Reporting</strong><p>Quarterly impact reports showing exactly how your contribution is used.</p></div></div>
              <div className="sponsor-feature-item"><div className="sf-icon">💼</div><div><strong>Brand Visibility</strong><p>Logo placement on Kudusi's website, materials, and events alongside our mission.</p></div></div>
              <div className="sponsor-feature-item"><div className="sf-icon">✅</div><div><strong>Tax Deductible</strong><p>Kudusi is a registered 501(c)(3) — all donations are fully tax-deductible. EIN: 88-2434510</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-primary)', padding: '100px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="impact-grid fade-up">
            <div className="impact-item"><div className="impact-number" data-target="$25">$25</div><div className="impact-label">Funds a tutoring session</div></div>
            <div className="impact-item"><div className="impact-number" data-target="$100">$100</div><div className="impact-label">Sponsors a month of support</div></div>
            <div className="impact-item"><div className="impact-number" data-target="$500">$500</div><div className="impact-label">Funds a full program cohort</div></div>
            <div className="impact-item"><div className="impact-number" data-target="100%">100%</div><div className="impact-label">Goes to student programs</div></div>
          </div>
        </div>
      </section>
    </main>
  );
}
