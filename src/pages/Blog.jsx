import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <main id="main-content">
      <div className="page-hero">
        <div className="page-hero-pattern" aria-hidden="true"></div>
        <div className="container page-hero-inner">
          <nav className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Media</span><span>/</span><span className="current">Blog</span>
          </nav>
          <h1 className="page-title">Kudusi <span>Blog</span></h1>
          <p className="page-subtitle">Stories, insights, student spotlights, and community updates from across the Kudusi family.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <header className="section-header fade-up">
            <span className="eyebrow">Latest Posts</span>
            <h2 className="section-title">From Our Community</h2>
          </header>
          <div className="blog-grid">
            <article className="blog-card fade-up">
              <img src="/assets/images/dc-protest.jpg" alt="Student success story" loading="lazy" />
              <div className="blog-card-body">
                <div className="blog-tag">Student Spotlight</div>
                <h3 className="blog-title">How One Student Used Kudusi to Earn a Full Scholarship</h3>
                <p className="blog-excerpt">Adam's journey from struggling academically to landing a full scholarship is a testament to what's possible with the right support system.</p>
                <div className="blog-meta">February 2026 · 4 min read</div>
              </div>
            </article>
            <article className="blog-card fade-up" style={{ transitionDelay: '0.1s' }}>
              <img src="https://picsum.photos/seed/blog2/600/400" alt="Cultural event recap" loading="lazy" />
              <div className="blog-card-body">
                <div className="blog-tag">Culture</div>
                <h3 className="blog-title">Celebrating Heritage: A Recap of Our Cultural Empowerment Day</h3>
                <p className="blog-excerpt">Our annual Cultural Empowerment Day brought together 100+ community members for an afternoon of music, food, language, and pride.</p>
                <div className="blog-meta">January 2026 · 3 min read</div>
              </div>
            </article>
            <article className="blog-card fade-up" style={{ transitionDelay: '0.2s' }}>
              <img src="https://picsum.photos/seed/blog3/600/400" alt="Mentorship tips" loading="lazy" />
              <div className="blog-card-body">
                <div className="blog-tag">Mentorship</div>
                <h3 className="blog-title">5 Things Every Student Should Know Before Applying to College</h3>
                <p className="blog-excerpt">Our mentors share their top tips for navigating the college application process — from essays to financial aid to campus visits.</p>
                <div className="blog-meta">December 2025 · 6 min read</div>
              </div>
            </article>
            <article className="blog-card fade-up">
              <img src="https://picsum.photos/seed/blog4/600/400" alt="Volunteer spotlight" loading="lazy" />
              <div className="blog-card-body">
                <div className="blog-tag">Volunteer Spotlight</div>
                <h3 className="blog-title">Meet the Mentors: Why Professionals Choose to Give Back</h3>
                <p className="blog-excerpt">Three Kudusi mentors share their stories of why they volunteer and what they get out of it — just as much as their students do.</p>
                <div className="blog-meta">November 2025 · 5 min read</div>
              </div>
            </article>
            <article className="blog-card fade-up" style={{ transitionDelay: '0.1s' }}>
              <img src="https://picsum.photos/seed/blog5/600/400" alt="Financial aid guide" loading="lazy" />
              <div className="blog-card-body">
                <div className="blog-tag">Resources</div>
                <h3 className="blog-title">FAFSA 2025–2026: Everything Students &amp; Families Need to Know</h3>
                <p className="blog-excerpt">Our complete guide to the FAFSA process — deadlines, common mistakes, and how Kudusi can help you maximize your aid package.</p>
                <div className="blog-meta">October 2025 · 7 min read</div>
              </div>
            </article>
            <article className="blog-card fade-up" style={{ transitionDelay: '0.2s' }}>
              <img src="https://picsum.photos/seed/blog6/600/400" alt="Masalit language" loading="lazy" />
              <div className="blog-card-body">
                <div className="blog-tag">Culture</div>
                <h3 className="blog-title">Why Learning Masalit Matters: Language as a Bridge to Heritage</h3>
                <p className="blog-excerpt">Exploring why Kudusi invested in Masalit language education — and what it means for students reconnecting with their cultural roots.</p>
                <div className="blog-meta">September 2025 · 4 min read</div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-primary)', padding: '80px 0' }}>
        <div className="container">
          <div className="newsletter-inner fade-up">
            <span className="eyebrow">Never Miss a Post</span>
            <h2 className="newsletter-title">Subscribe to Our Newsletter</h2>
            <p className="newsletter-body">Get our latest stories, resources, and event updates delivered straight to your inbox.</p>
            <form className="newsletter-form" id="newsletter-form" noValidate>
              <input type="email" placeholder="Enter your email address" aria-label="Email" required />
              <button type="submit" className="btn btn-gold">Subscribe</button>
            </form>
            <p className="newsletter-fine">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
