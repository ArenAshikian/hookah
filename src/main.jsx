import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDown, ArrowUpRight, Clock3, MapPin, Menu, ShieldCheck, Sparkles, X } from 'lucide-react'
import './styles.css'

const services = [
  {
    eyebrow: 'Hosted service',
    title: 'Full-service catering',
    copy: 'A dedicated attendant handles setup, coals, bowl changes, and breakdown throughout the event so the host can stay present with guests.',
    meta: ['4-hour standard service', 'On-site attendant', 'Setup and breakdown'],
  },
  {
    eyebrow: 'Prepared service',
    title: 'Event delivery',
    copy: 'Prepared setups arrive ready for your event, with pickup coordinated afterward. Availability and service area are confirmed directly.',
    meta: ['Los Angeles & Valley', 'Prepared before arrival', 'Pickup coordinated'],
  },
]

const steps = [
  ['01', 'Tell us about the event', 'Share the date, location, guest count, and the kind of atmosphere you want.'],
  ['02', 'We shape the setup', 'We confirm service availability and recommend the right event format for your space.'],
  ['03', 'Details get locked in', 'Timing, access, setup requirements, and event notes are confirmed directly.'],
  ['04', 'We handle the night', 'Our team arrives, sets up, stays focused on service, and leaves the space clean.'],
]

const faqs = [
  ['How long does catering last?', 'Standard hosted service is four hours from the agreed start time. Longer events can be discussed when the event details are confirmed.'],
  ['Where do you serve?', 'Hookah By Hov serves Los Angeles, the San Fernando Valley, and surrounding areas. Exact availability depends on the event location.'],
  ['Can I request a specific brand or flavor?', 'Preferences can be discussed when you contact the team. Availability varies, so special requests are confirmed directly.'],
  ['Is this website for online purchases?', 'No. This site is for service information and event inquiries only. Payments and event details are handled directly with the team.'],
  ['Is there an age requirement?', 'Yes. Service is intended for adults 21 and older. Tobacco use carries health risks, including exposure to carbon monoxide.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  useEffect(() => {
    const onKey = (event) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Hookah By Hov home">
          <span className="brand-mark">H</span>
          <span className="brand-copy"><strong>Hookah By Hov</strong><small>Los Angeles · Est. 2020</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#faq">FAQ</a>
          <a className="nav-cta" href="#contact">Contact</a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={20} /></button>
      </header>

      {menuOpen && (
        <div className="mobile-panel" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <button className="close-button" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X size={20} /></button>
          <div className="mobile-links">
            {['services', 'process', 'faq', 'contact'].map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}</a>
            ))}
          </div>
        </div>
      )}

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="kicker"><Sparkles size={14} /> Private events · Los Angeles</p>
              <h1>The lounge<br /><em>comes to you.</em></h1>
              <p className="lede">A polished hookah service built around the event, not around a template. Hosted catering and prepared delivery for private gatherings, celebrations, and nightlife.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#services">Explore services <ArrowDown size={16} /></a>
                <a className="text-link" href="#contact">Contact the team <ArrowUpRight size={16} /></a>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="orb orb-one" />
              <div className="orb orb-two" />
              <div className="monogram-card">
                <span className="micro">HOOKAH BY HOV</span>
                <div className="monogram">H</div>
                <span className="micro">EST. 2020 · LOS ANGELES</span>
              </div>
              <div className="floating-note note-one"><Clock3 size={15} /> 4-hour hosted service</div>
              <div className="floating-note note-two"><MapPin size={15} /> LA + The Valley</div>
            </div>
          </div>
          <div className="hero-footer">
            <span>21+ only</span><span>Private events</span><span>Hosted or prepared service</span>
          </div>
        </section>

        <section id="services" className="section-pad services-section">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Two ways to host</p><h2>Choose the level<br />of service.</h2></div>
            <p>Both options are designed around one thing: making the event feel effortless. The difference is whether the team stays on site or prepares the setup for you.</p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <div className="service-index">0{index + 1}</div>
                <p className="eyebrow">{service.eyebrow}</p>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <ul>{service.meta.map((item) => <li key={item}><span>◆</span>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="statement-band">
          <div className="marquee" aria-hidden="true">PRIVATE EVENTS · HOUSE PARTIES · WEDDINGS · CELEBRATIONS · LOS ANGELES · THE VALLEY ·</div>
        </section>

        <section id="process" className="section-pad process-section">
          <div className="process-intro">
            <p className="eyebrow">Simple by design</p>
            <h2>Good service should feel almost invisible.</h2>
            <p>The logistics happen in the background so guests only notice the atmosphere.</p>
          </div>
          <div className="process-list">
            {steps.map(([number, title, copy]) => (
              <div className="process-row" key={number}>
                <span className="step-number">{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-pad detail-section">
          <div className="detail-card">
            <div>
              <p className="eyebrow">A better event experience</p>
              <h2>Designed for hosts who don't want to babysit the setup.</h2>
            </div>
            <div className="detail-points">
              <div><ShieldCheck size={20} /><strong>Attentive service</strong><span>Setup, maintenance, and breakdown are handled with care.</span></div>
              <div><Sparkles size={20} /><strong>Clean presentation</strong><span>The setup is treated like part of the event, not an afterthought.</span></div>
              <div><Clock3 size={20} /><strong>Clear timing</strong><span>Arrival and service details are agreed on before the event.</span></div>
            </div>
          </div>
        </section>

        <section id="faq" className="section-pad faq-section">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Good to know</p><h2>Frequently asked.</h2></div>
            <p>Short answers to the practical questions that usually come up before an event.</p>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index
              return (
                <div className={`faq-item ${isOpen ? 'open' : ''}`} key={question}>
                  <button onClick={() => setOpenFaq(isOpen ? -1 : index)} aria-expanded={isOpen}>
                    <span>{question}</span><span className="faq-symbol">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && <p>{answer}</p>}
                </div>
              )
            })}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-card">
            <p className="eyebrow">Have a date in mind?</p>
            <h2>Tell Hov about the event.</h2>
            <p>For availability, service-area questions, and event details, contact the team directly.</p>
            <a className="button button-primary" href="tel:+18188078008">818-807-8008 <ArrowUpRight size={16} /></a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><span className="brand-mark">H</span><div><strong>Hookah By Hov</strong><small>Est. 2020 · Los Angeles, California</small></div></div>
        <div className="footer-note">21+ only. Hookah smoking involves tobacco and carries health risks, including exposure to carbon monoxide. Please enjoy responsibly.</div>
        <div className="footer-bottom"><span>© 2026 Hookah By Hov</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
