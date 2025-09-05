import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.page}>
      {/* Top ribbon */}
      <div className={styles.ribbon}>
        <div className={styles.container}>
          <span className={styles.ribbonEmoji}>🚀</span>
          Innoweg — build faster with clean UI & strong engineering.
        </div>
      </div>

      {/* Header / Nav */}
      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <a href="#home" className={styles.brand}>
              <span className={styles.logoDot} />
              <span>Innoweg</span>
            </a>

            <div className={styles.links}>
              <a href="#features">Features</a>
              <a href="#process">Process</a>
              <a href="#showcase">Showcase</a>
              <a href="#faq">FAQ</a>
            </div>

            <div className={styles.actions}>
              <a
                className={styles.ghost}
                href="https://github.com/jfaza/InnoW"
                target="_blank"
                rel="noreferrer"
              >
                Repo
              </a>
              <a className={styles.solid} href="#contact">
                Get Started
                <svg viewBox="0 0 24 24" className={styles.icon}>
                  <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div>
              <div className={styles.kicker}>Design-system studio</div>
              <h1 className={styles.title}>
                Ship <span className={styles.accent}>beautiful UIs</span> with
                {" "}
                <span className={styles.underline}>rock-solid code</span>.
              </h1>
              <p className={styles.lead}>
                Innoweg blends modern design systems with disciplined engineering —
                faster delivery, fewer regressions, better UX.
              </p>
              <div className={styles.ctaRow}>
                <a className={styles.btnGhost} href="#showcase">See Work</a>
                <a className={styles.btnSolid} href="#contact">Start a Project</a>
              </div>
              <ul className={styles.metaRow}>
                <li>Security-minded</li>
                <li>Performance-first</li>
                <li>Design-system driven</li>
              </ul>
            </div>

            <aside className={styles.panel}>
              <div className={styles.cardGrid}>
                <div className={styles.card}>
                  <div className={styles.cardIcon}>🎨</div>
                  <div className={styles.cardTitle}>Brand System</div>
                  <div className={styles.cardText}>Tokens, palette, typography</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardIcon}>📦</div>
                  <div className={styles.cardTitle}>UI Library</div>
                  <div className={styles.cardText}>Cards, forms, tables, nav</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardIcon}>🛡️</div>
                  <div className={styles.cardTitle}>Security</div>
                  <div className={styles.cardText}>Auth, CSRF, best practices</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardIcon}>♿</div>
                  <div className={styles.cardTitle}>Accessibility</div>
                  <div className={styles.cardText}>WCAG 2.2 compliant</div>
                </div>
              </div>

              <div className={styles.inlineNote}>
                <code>npm i @innoweg/ui</code>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.h2}>Features</h2>
          <div className={styles.grid3}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>⚡</div>
              <div className={styles.featureTitle}>Blazing build</div>
              <p className={styles.featureText}>Vite + React for rapid iteration and small bundles.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>📐</div>
              <div className={styles.featureTitle}>Design tokens</div>
              <p className={styles.featureText}>Consistent spacing, color, and type scales.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🔒</div>
              <div className={styles.featureTitle}>Hardened defaults</div>
              <p className={styles.featureText}>Security headers, form protections, dependency hygiene.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.h2}>Process that ships</h2>
          <div className={styles.grid4}>
            {[
              {step: "01", title: "Discovery", desc: "Clarify goals, risks, constraints. Align on scope."},
              {step: "02", title: "Design System", desc: "Tokens, components, flows. A11y & perf built-in."},
              {step: "03", title: "Build", desc: "MVP pages + CMS + integrations. CI ready."},
              {step: "04", title: "Launch", desc: "Deploy, measure, iterate. Handover docs."},
            ].map((s) => (
              <div key={s.step} className={styles.stepCard}>
                <div className={styles.stepNum}>{s.step}</div>
                <div className={styles.stepTitle}>{s.title}</div>
                <div className={styles.stepText}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section id="showcase" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Recent Work</h2>
            <a className={styles.link} href="#">View all</a>
          </div>
          <div className={styles.grid3}>
            {[1,2,3].map((i) => (
              <a key={i} className={styles.case} href="#">
                <div className={styles.thumb} />
                <div className={styles.caseContent}>
                  <div className={styles.caseTitle}>Project {i}</div>
                  <div className={styles.caseText}>Short summary of business value and tech stack.</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / CTA */}
      <section id="contact" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.ctaBand}>
            <div>
              <h3 className={styles.h3}>Let’s ship your MVP in weeks, not months.</h3>
              <p className={styles.ctaText}>
                Fixed-scope packages: design system + core pages + deployment.
              </p>
              <ul className={styles.ctaList}>
                <li>Discovery & IA workshop</li>
                <li>Brand tokens & UI library</li>
                <li>3 core pages + CMS wiring</li>
                <li>Basic analytics & SEO</li>
              </ul>
            </div>
            <div className={styles.priceCard}>
              <div className={styles.price}>$2,450</div>
              <div className={styles.priceMeta}>Starter Package</div>
              <a className={styles.btnSolidWide} href="#">Book a call</a>
              <p className={styles.priceNote}>Custom quotes for complex apps and data work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.h2}>FAQs</h2>
          <div className={styles.grid2}>
            {[
              {q: "Do you handle backend work?", a: "Yes. APIs, auth, data modeling, and integrations are part of delivery."},
              {q: "Tech stack preferences?", a: "React on the front; PHP/EE, Node, or Python on the back depending on fit."},
              {q: "Do you migrate old sites?", a: "We modernize legacy UIs and port content into clean CMS structures."},
              {q: "Timeline & process?", a: "Week 1 discovery, Week 2 design system, Weeks 3-4 build & launch (scope-dependent)."},
            ].map((item, idx) => (
              <div key={idx} className={styles.faqCard}>
                <div className={styles.faqQ}>{item.q}</div>
                <div className={styles.faqA}>{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerRow}>
            <div className={styles.brandFoot}>
              <span className={styles.logoDot} />
              <span>Innoweg</span>
            </div>
            <div className={styles.footLinks}>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className={styles.copy}>© {new Date().getFullYear()} Innoweg. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
