import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDownRight, ArrowRight, Menu, Minus, Plus, X } from 'lucide-react'
import './styles.css'

const faq = [
  ['How long does catering last?', 'Standard catering service is four hours from the listed start time. An attendant stays on site throughout the session managing coals, bowls, setup, and breakdown.'],
  ['How is catering pricing structured?', 'Catering uses tiered per-hookah pricing. The first 10 are $100 each, 11–20 are $80 each, and quantities above 20 are $70 each.'],
  ['How far do you deliver?', 'Delivery is free within 25 miles. Travel fees apply outside the local service area: $50 for 25–50 miles and $100 for 50–100 miles.'],
  ['Can I request a specific brand or flavor?', 'Yes. Brand, flavor, and mix preferences can be discussed directly. Specialty requests depend on availability and are confirmed before the event.'],
  ['Is there an age requirement?', 'Yes. Service is for adults 21 and older. Hookah smoking involves tobacco and carries health risks, including exposure to carbon monoxide.'],
]

const steps = [
  ['01', 'Choose the service', 'Decide whether you want full-service catering or prepared delivery.'],
  ['02', 'Share the night', 'Send the date, location, guest count, and any flavor or setup preferences.'],
  ['03', 'Confirm the details', 'Hov confirms availability, timing, travel, and any specialty requests directly.'],
  ['04', 'Enjoy the event', 'The setup arrives ready, and hosted events are managed from setup through breakdown.'],
]

function App() {
  const [menu, setMenu] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="page" id="top">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Hookah By Hov home">
          <span className="wordmark-main">HookahByHov</span>
          <span className="wordmark-sub">EST. 2020 · LOS ANGELES</span>
        </a>
        <nav className="nav-desktop" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#process">How it works</a>
          <a href="#faq">FAQ</a>
          <a className="nav-contact" href="#contact">Contact</a>
        </nav>
        <button className="menu-toggle" aria-label="Open navigation" onClick={() => setMenu(true)}><Menu size={20} /></button>
      </header>

      {menu && (
        <div className="mobile-nav">
          <button onClick={() => setMenu(false)} aria-label="Close navigation"><X size={22} /></button>
          <div className="mobile-nav-links">
            {['services','pricing','process','faq','contact'].map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setMenu(false)}>{item}</a>
            ))}
          </div>
          <span>21+ · Los Angeles & The Valley</span>
        </div>
      )}

      <main>
        <section className="hero">
          <div className="hero-rail hero-rail-left">PRIVATE EVENTS · WEDDINGS · HOUSE PARTIES</div>
          <div className="hero-inner">
            <p className="eyebrow">Full-service hookah catering & delivery</p>
            <h1>The hookah shows up.<br /><span>The night takes care of itself.</span></h1>
            <p className="hero-copy">For parties, weddings, lounges, and everything in between. Choose the level of service you want, tell us the night, and we’ll handle the setup from there.</p>
            <div className="hero-ctas">
              <a className="primary-cta" href="#services">See the services <ArrowDownRight size={17} /></a>
              <a className="secondary-cta" href="#pricing">View pricing</a>
            </div>
          </div>
          <div className="hero-rail hero-rail-right">LOS ANGELES · THE VALLEY · EST. 2020</div>
          <div className="hero-stats">
            <div><strong>4 hrs</strong><span>standard catering service</span></div>
            <div><strong>$60</strong><span>per hookah, delivered</span></div>
            <div><strong>25 mi</strong><span>free delivery radius</span></div>
          </div>
        </section>

        <section className="ticker" aria-label="Event types">
          <div>BACHELOR & BACHELORETTE <i>◆</i> HOUSE PARTIES <i>◆</i> WEDDINGS <i>◆</i> PRIVATE EVENTS <i>◆</i> LOUNGES <i>◆</i></div>
        </section>

        <section id="services" className="section services">
          <div className="section-intro">
            <p className="eyebrow">Two ways to book</p>
            <h2>Catering or delivery.<br />Your call.</h2>
            <p>Want someone there running the session all night? That’s catering. Just want the hookahs dropped off ready to smoke? That’s delivery.</p>
          </div>

          <div className="service-layout">
            <article className="service-panel service-panel-featured">
              <div className="panel-topline"><span>01</span><span>FULL-SERVICE</span></div>
              <div className="panel-copy">
                <p className="service-kicker">Catering</p>
                <h3>We run the setup.<br />You run the night.</h3>
                <p>Our team arrives, sets up, and stays for the entire event, managing coals, changing bowls, and keeping every hookah running.</p>
              </div>
              <div className="panel-list">
                <span>4 hours on site</span><span>Dedicated attendant</span><span>Setup + breakdown</span><span>Volume pricing</span>
              </div>
            </article>

            <article className="service-panel service-panel-dark">
              <div className="panel-topline"><span>02</span><span>PREPARED DELIVERY</span></div>
              <div className="panel-copy">
                <p className="service-kicker">Delivery</p>
                <h3>Lit, ready,<br />and at your door.</h3>
                <p>Prepared hookahs are delivered ready for the event, with coals, foil, and an extra bowl packed in. Pickup is coordinated afterward.</p>
              </div>
              <div className="panel-list">
                <span>$60 flat rate</span><span>Any quantity</span><span>Free within 25 miles</span><span>Pickup arranged</span>
              </div>
            </article>
          </div>
        </section>

        <section id="pricing" className="section pricing">
          <div className="pricing-head">
            <div>
              <p className="eyebrow">Straight numbers</p>
              <h2>Transparent pricing.<br />No mystery math.</h2>
            </div>
            <p>Clear service rates, clear travel fees, and no online payment required. Final event details are confirmed directly.</p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-card-head"><span>Catering rates</span><small>4-hour standard service</small></div>
              <div className="rate-row rate-header"><span>Hookahs</span><span>Rate each</span><span>Example</span></div>
              <div className="rate-row"><span>1–10</span><strong>$100</strong><span>10 = $1,000</span></div>
              <div className="rate-row"><span>11–20</span><strong>$80</strong><span>20 = $1,800</span></div>
              <div className="rate-row"><span>21+</span><strong>$70</strong><span>25 = $2,150</span></div>
              <p className="pricing-note">Tiered pricing applies progressively. The first 10 are billed at $100 each, the next 10 at $80 each, and quantities above 20 at $70 each.</p>
            </div>

            <div className="pricing-side">
              <div className="delivery-price">
                <span>Delivery</span>
                <strong>$60</strong>
                <small>per hookah · any quantity</small>
              </div>
              <div className="travel-table">
                <div><span>Within 25 miles</span><strong>Free</strong></div>
                <div><span>25–50 miles</span><strong>+$50</strong></div>
                <div><span>50–100 miles</span><strong>+$100</strong></div>
                <div><span>Over 100 miles</span><strong>Call us</strong></div>
              </div>
              <div className="fee-note"><span>Holiday catering surcharge</span><strong>+$200</strong></div>
              <div className="fee-note"><span>Same-day catering fee</span><strong>+$200</strong></div>
            </div>
          </div>
        </section>

        <section className="flavors">
          <div className="flavors-heading">
            <p className="eyebrow">Tobacco requests</p>
            <h2>Ask for what you actually want.</h2>
            <p>We stock crowd-pleasers and can discuss specialty brands, flavors, or mixes directly before the event.</p>
          </div>
          <div className="flavor-field" aria-hidden="true">
            <span>Double Apple</span><span>Love 66</span><span>Blueberry Mint</span><span>White Peach</span><span>Watermelon</span><span>Lemon Mint</span><span>Grape</span><span>Ambrosia</span><span>Al Fakher</span><span>Fumari</span><span>Adalya</span><span>Tangiers</span><span>Starbuzz</span><span>Trifecta</span><span>Mighty Freeze</span><span>Cane Mint</span>
          </div>
        </section>

        <section id="process" className="section process">
          <div className="process-title">
            <p className="eyebrow">Simple as it gets</p>
            <h2>Four steps.<br />One less thing to worry about.</h2>
          </div>
          <div className="steps">
            {steps.map(([n, title, copy]) => (
              <div className="step" key={n}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <ArrowRight size={17} />
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="section faq">
          <div className="faq-title">
            <p className="eyebrow">Good to know</p>
            <h2>Before the night.</h2>
          </div>
          <div className="faq-list">
            {faq.map(([q,a], index) => {
              const open = openFaq === index
              return (
                <div className={`faq-item ${open ? 'open' : ''}`} key={q}>
                  <button onClick={() => setOpenFaq(open ? -1 : index)} aria-expanded={open}>
                    <span>{String(index + 1).padStart(2,'0')}</span>
                    <strong>{q}</strong>
                    {open ? <Minus size={19}/> : <Plus size={19}/>} 
                  </button>
                  {open && <p>{a}</p>}
                </div>
              )
            })}
          </div>
        </section>

        <section id="contact" className="contact">
          <p className="eyebrow">Got a date in mind?</p>
          <h2>Lock in the details<br />before the night fills up.</h2>
          <p>Call or text Hov for availability, event details, service-area questions, and specialty requests.</p>
          <a href="tel:+18188078008">818-807-8008 <ArrowRight size={18}/></a>
        </section>
      </main>

      <footer>
        <div className="footer-top">
          <div className="wordmark footer-wordmark"><span className="wordmark-main">HookahByHov</span><span className="wordmark-sub">EST. 2020 · LOS ANGELES</span></div>
          <div className="footer-links"><a href="#services">Services</a><a href="#pricing">Pricing</a><a href="#process">How it works</a><a href="#faq">FAQ</a></div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Hookah By Hov. All rights reserved.</span>
          <span>21+ only. Hookah smoking involves tobacco and carries health risks, including exposure to carbon monoxide.</span>
        </div>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
