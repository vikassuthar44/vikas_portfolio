import { motion as Motion } from 'framer-motion'
import './App.css'

const apps = [
  {
    title: 'Pocket Games',
    subtitle: 'All Board Games',
    type: 'Board & casual games',
    description:
      'One lightweight app for classic favourites including 8 Ball Pool, Call Break, Chess, Snake & Ladder, and Sudoku—with offline play and smart AI opponents.',
    image:
      'https://play-lh.googleusercontent.com/t9SOeEknv6I7dEhZPCqYsnS-uzRCLXUIqb1SQcVHh1USiT3J5nQG7N1jBqCJtQXNY0m4yHCBBKkaHi6LGJujbg',
    link: 'https://play.google.com/store/apps/details?id=best.app.pocketgames',
    tags: ['Offline play', 'Game AI', 'Multi-game'],
    accent: '#ffb84d',
    featured: true,
  },
  {
    title: 'Ludo Khel',
    subtitle: 'Play & Win Coins',
    type: 'Multiplayer game',
    description:
      'A colourful Ludo experience with online matches, friend invites, Google sign-in, coins, rankings, and smooth gameplay designed for every device.',
    image:
      'https://play-lh.googleusercontent.com/3ZPnUamCUnhgrzoVNWrw1G31OP_0bJT45wntPSXgyBKTmFJZYuGrCDutAEEcJTisGIw7DM4tQxAX8ryaQrdrfQ',
    link: 'https://play.google.com/store/apps/details?id=best.app.ludo',
    website: 'https://ludokhel.in/',
    tags: ['Multiplayer', 'Firebase', 'Coins & ranks'],
    accent: '#ef5a5a',
    featured: true,
  },
  {
    title: 'SplitEase',
    subtitle: 'Shared Expenses',
    type: 'Finance utility',
    description:
      'A clean way for friends, travellers, and roommates to split bills, track group expenses, see who owes whom, and settle balances without spreadsheets.',
    image:
      'https://play-lh.googleusercontent.com/sVGnwDxDlTvF4IWrN6RpUL3_auqdvMygYnbwvBk0rSVRhlMps3Y-DlBMwL7O6OzU8wuvlv7V6dPYWtwd5ff4RA',
    link: 'https://play.google.com/store/apps/details?id=com.best.splitwise',
    tags: ['Groups', 'Smart splits', 'Settlements'],
    accent: '#6c63ff',
  },
  {
    title: 'Cashbook',
    subtitle: 'Cash & Expense App',
    type: 'Business finance',
    description:
      'Daily cash-in, cash-out, customer ledgers, expense categories, reports, and PDF exports for shop owners, freelancers, and small businesses.',
    image:
      'https://play-lh.googleusercontent.com/rrWZcetl36NfgyB-LAHn04vEmRXp5xRRNC1yyvh91aSJVtZRSTl4tsJ5x639jBtzGuD6biNkWunp6EE7_u5_HA',
    link: 'https://play.google.com/store/apps/details?id=best.cashbook.split',
    tags: ['Offline first', 'PDF reports', 'Ledgers'],
    accent: '#1eb980',
  },
  {
    title: 'Vyaapar Book',
    subtitle: 'Invoice Maker',
    type: 'Business toolkit',
    description:
      'A fast mobile toolkit to create GST-ready invoices and estimates, manage products and stock, export PDFs, and share with customers.',
    image:
      'https://play-lh.googleusercontent.com/KzYqIA920VbUhvNo6C5ui1i4C8xJqzIzt9DKBdzFLMXOvN3qRU-chUgOY4yJ5U6VRzsaDg3INJWjimyvikhu3A',
    link: 'https://play.google.com/store/apps/details?id=best.business.vyaaparbook',
    tags: ['Invoices', 'Inventory', 'GST & PDF'],
    accent: '#3282f6',
  },
  {
    title: 'Moodify',
    subtitle: 'Quotes with Photo',
    type: 'Creative app',
    description:
      'A simple creative studio for turning meaningful quotes and personal photos into polished, shareable visuals with expressive typography.',
    image:
      'https://play-lh.googleusercontent.com/RZIySfyTgNWV48Ba_GuH6JiIJQE4ZjGMKgYbD1jYbeM79d4AFW-x9gvuSd_I4S2NLZ2TluvsLuaySnKtAD2NGg',
    link: 'https://play.google.com/store/apps/details?id=com.vikassuthar.moodify',
    tags: ['Photo editor', 'Quotes', 'Social sharing'],
    accent: '#d858d6',
  },
]

const upcoming = [
  {
    number: '01',
    title: 'E-Billing',
    label: 'Business · In development',
    description:
      'A faster billing workflow for modern Indian businesses—estimates, invoices, payments, and clear business insights in one place.',
    gradient: 'linear-gradient(135deg, #ffca6b, #ff7a59)',
  },
  {
    number: '02',
    title: 'E-Commerce',
    label: 'Commerce · Exploring',
    description:
      'A mobile-first shopping experience focused on fast discovery, frictionless checkout, and a simple seller workflow.',
    gradient: 'linear-gradient(135deg, #7ee8c7, #3da7ff)',
  },
  {
    number: '03',
    title: 'AI Product',
    label: 'AI · Researching',
    description:
      'A practical AI-powered product that turns everyday work into a shorter, smarter, and more personal workflow.',
    gradient: 'linear-gradient(135deg, #c69cff, #7048ff)',
  },
]

const capabilities = [
  ['01', 'Product strategy', 'Turning an early idea into a focused feature set and a launchable roadmap.'],
  ['02', 'UI/UX design', 'Clear flows, purposeful visual systems, and interfaces that feel natural on real devices.'],
  ['03', 'Android development', 'Reliable, maintainable mobile apps built for performance, scale, and Play Store delivery.'],
  ['04', 'Web experiences', 'Fast responsive websites and web apps that extend the product beyond mobile.'],
]

const Arrow = () => <span aria-hidden="true">↗</span>

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3.7 2.8a2 2 0 0 0-.7 1.5v15.4a2 2 0 0 0 .7 1.5l9.1-9.2-9.1-9.2Zm10.5 10.6-2.3 2.3 5.7 3.2 2.9-1.6c.8-.5.8-1.5 0-2l-3.6-2-2.7.1Zm2.7-2.7 3.6-2c.8-.5.8-1.5 0-2l-2.9-1.6-5.7 3.2 2.3 2.3 2.7.1ZM4.8 2.3l8 4.5-2.3 2.3-5.7-6.8Zm0 19.4 5.7-6.8 2.3 2.3-8 4.5Z" />
  </svg>
)

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Vikas Suthar home">
          <span className="brand-mark">VS</span>
          <span>Vikas Suthar</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#next">What's next</a>
        </nav>
        <a className="nav-cta" href="mailto:prsuthar44@gmail.com">
          Let's talk <Arrow />
        </a>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <Motion.div initial="hidden" animate="show" variants={fade}>
              <span className="eyebrow"><i /> Available for new projects</span>
              <h1>I build useful digital products people enjoy using.</h1>
              <p className="hero-lede">
                Android developer and product builder creating thoughtful mobile apps,
                web experiences, and UI/UX—from the first sketch to the Play Store.
              </p>
              <div className="hero-actions">
                <a className="button button-light" href="#work">Explore my work <Arrow /></a>
                <a className="text-link" href="mailto:prsuthar44@gmail.com">Start a conversation <Arrow /></a>
              </div>
            </Motion.div>
          </div>

          <Motion.div
            className="hero-stage"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease: 'easeOut', delay: 0.15 }}
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="phone-stack">
              {apps.slice(0, 3).map((app, index) => (
                <a
                  key={app.title}
                  className={`floating-app floating-app-${index + 1}`}
                  href={app.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${app.title} on Google Play`}
                >
                  <img src={app.image} alt={`${app.title} app icon`} />
                </a>
              ))}
              <div className="phone">
                <div className="phone-top"><span /><span /></div>
                <p>Published work</p>
                <strong>6 apps.<br />One product mindset.</strong>
                <div className="mini-app-grid">
                  {apps.slice(3).map((app) => (
                    <img key={app.title} src={app.image} alt="" />
                  ))}
                </div>
                <small>Designed. Built. Shipped.</small>
              </div>
            </div>
          </Motion.div>

          <div className="hero-proof">
            <span>6 live apps</span><b>•</b><span>Product to Play Store</span><b>•</b><span>Mobile + Web</span>
          </div>
        </section>

        <section id="work" className="work section-pad">
          <Motion.div className="section-heading" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fade}>
            <div>
              <span className="section-index">01 / Selected work</span>
              <h2>Products made for<br />real everyday needs.</h2>
            </div>
            <p>Games, money tools, business utilities, and creative apps—each built around a clear job to be done.</p>
          </Motion.div>

          <div className="project-grid">
            {apps.map((app, index) => (
              <Motion.article
                className={`project-card ${app.featured ? 'project-featured' : ''}`}
                key={app.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                variants={fade}
                style={{ '--project-accent': app.accent }}
              >
                <div className="project-visual">
                  <span className="project-number">0{index + 1}</span>
                  <div className="app-icon-wrap"><img src={app.image} alt={`${app.title} icon`} /></div>
                  <span className="project-type">{app.type}</span>
                </div>
                <div className="project-content">
                  <div>
                    <p className="project-kicker">{app.subtitle}</p>
                    <h3>{app.title}</h3>
                  </div>
                  <p>{app.description}</p>
                  <div className="tag-row">
                    {app.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <div className="project-actions">
                    <a className="store-link" href={app.link} target="_blank" rel="noreferrer">
                      <PlayIcon /><span><small>GET IT ON</small>Google Play</span>
                    </a>
                    {app.website && <a className="circle-link" href={app.website} target="_blank" rel="noreferrer" aria-label={`${app.title} website`}><Arrow /></a>}
                  </div>
                </div>
              </Motion.article>
            ))}
          </div>
        </section>

        <section id="about" className="about section-pad">
          <Motion.div className="about-lead" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={fade}>
            <span className="section-index">02 / How I work</span>
            <h2>Design sense.<br />Engineering discipline.<br /><em>Founder energy.</em></h2>
          </Motion.div>
          <div className="capability-list">
            {capabilities.map(([number, title, description]) => (
              <Motion.div className="capability" key={number} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fade}>
                <span>{number}</span><h3>{title}</h3><p>{description}</p>
              </Motion.div>
            ))}
          </div>
        </section>

        <section id="next" className="next section-pad">
          <Motion.div className="section-heading" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fade}>
            <div><span className="section-index">03 / In the lab</span><h2>What I'm<br />building next.</h2></div>
            <p>Three new product directions, grounded in practical problems and shaped through rapid experiments.</p>
          </Motion.div>
          <div className="upcoming-grid">
            {upcoming.map((item) => (
              <Motion.article className="upcoming-card" key={item.number} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fade}>
                <div className="upcoming-art" style={{ background: item.gradient }}>
                  <span>{item.number}</span><i /><i /><i />
                </div>
                <p className="project-kicker">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact section-pad">
          <Motion.div className="contact-inner" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fade}>
            <span className="eyebrow"><i /> Have an idea?</span>
            <h2>Let's turn it into<br />something people use.</h2>
            <a className="button button-dark" href="mailto:prsuthar44@gmail.com">prsuthar44@gmail.com <Arrow /></a>
            <div className="social-row">
              <a href="https://www.linkedin.com/in/prsuthar" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
              <a href="https://github.com/vikassuthar44" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
              <a href="https://www.instagram.com/dev_vikas44/" target="_blank" rel="noreferrer">Instagram <Arrow /></a>
            </div>
          </Motion.div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark">VS</span><span>Vikas Suthar</span></a>
        <p>Android developer & product builder · India</p>
        <p>© 2026</p>
      </footer>
    </div>
  )
}
