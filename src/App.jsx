import { motion } from 'framer-motion'
import './App.css'

const projects = [
  {
    title: 'Ludo Khel',
    category: 'Multiplayer Game',
    description:
      'A vibrant Ludo experience with real time rooms, fast matchmaking, and smooth in game animations.',
    link: 'https://play.google.com/store/apps/details?id=best.app.ludo',
    gradient: 'from-[#ff6b6b] via-[#ffd166] to-[#06d6a0]',
    emoji: '🎲',
    stack: ['Realtime rooms', 'Kotlin', 'Leaderboards'],
  },
  {
    title: 'Cashbook',
    category: 'Finance App',
    description:
      'Daily expense tracking and split management with smart summaries and reminders.',
    link: 'https://play.google.com/store/apps/details?id=best.cashbook.split',
    gradient: 'from-[#43aa8b] via-[#4d908e] to-[#277da1]',
    emoji: '💸',
    stack: ['Offline first', 'Charts', 'Cloud sync'],
  },
  {
    title: 'Vyaapar Book',
    category: 'Business App',
    description:
      'Invoice creation, GST ready billing, and customer history designed for busy shop owners.',
    link: 'https://play.google.com/store/apps/details?id=best.business.vyaaparbook',
    gradient: 'from-[#f8961e] via-[#f3722c] to-[#f94144]',
    emoji: '🧾',
    stack: ['PDF export', 'WhatsApp share', 'Inventory'],
  },
  {
    title: 'Moodify',
    category: 'Design App',
    description:
      'Create quotes, posters, and social assets with beautiful typography presets.',
    link: 'https://play.google.com/store/apps/details?id=com.vikassuthar.moodify',
    gradient: 'from-[#f4a261] via-[#e76f51] to-[#2a9d8f]',
    emoji: '✨',
    stack: ['Templates', 'Fonts', 'Export'],
  },
  {
    title: 'Medical Vidyarthi',
    category: 'Education App',
    description:
      'Structured learning paths, quiz packs, and revision support for medical students.',
    link: 'https://play.google.com/store/apps/details?id=com.medical.vidhyarthi',
    gradient: 'from-[#219ebc] via-[#8ecae6] to-[#023047]',
    emoji: '📚',
    stack: ['Quiz bank', 'Progress', 'Downloads'],
  },
]

const skills = [
  {
    title: 'Android & iOS Apps',
    description: 'Native builds with reliable architecture and silky performance.',
    items: ['Kotlin', 'Swift', 'Jetpack Compose', 'SwiftUI'],
  },
  {
    title: 'Websites & Web Apps',
    description: 'Fast, responsive sites that feel like products.',
    items: ['React', 'Vite', 'Next.js', 'Performance'],
  },
  {
    title: 'UI/UX Design',
    description: 'Human centered flows with crisp visuals and motion.',
    items: ['User research', 'Wireframes', 'Design systems', 'Prototyping'],
  },
]

const testimonials = [
  {
    quote:
      'Vikas moved fast and still cared about every tiny detail. Our launch felt premium.',
    name: 'Aarav Mehta',
    role: 'Founder, Dice Labs',
  },
  {
    quote:
      'Clear communication, beautiful UI, and great suggestions for product improvements.',
    name: 'Riya Sharma',
    role: 'Product Lead, Finwise',
  },
  {
    quote:
      'We hit the Play Store deadline with a polished build and strong early reviews.',
    name: 'Kabir Singh',
    role: 'Growth, Ludo Khel',
  },
]

const stats = [
  { value: 'Android + iOS', label: 'Mobile platforms' },
  { value: 'Web', label: 'Responsive websites' },
  { value: 'UI/UX', label: 'Design systems' },
]

const milestones = [
  'Strategy and design sprints with rapid prototyping.',
  'Reliable engineering using scalable architecture.',
  'Launch support with ASO, assets, and analytics.',
]

const platforms = ['Android', 'iOS', 'Websites', 'UI/UX Design']

const SocialIcon = ({ type }) => {
  if (type === 'linkedin') {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 fill-current"
      >
        <path d="M4.98 3.5A2.49 2.49 0 1 0 5 8.48 2.49 2.49 0 0 0 4.98 3.5Zm.02 5.72H2.5V21h2.5V9.22ZM9.5 9.22H7V21h2.5v-6.25c0-3.6 4.5-3.9 4.5 0V21h2.5v-7.06c0-5.37-6.02-5.17-7.5-2.53V9.22Z" />
      </svg>
    )
  }
  if (type === 'instagram') {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 fill-current"
      >
        <path d="M7 3.5h10A3.5 3.5 0 0 1 20.5 7v10A3.5 3.5 0 0 1 17 20.5H7A3.5 3.5 0 0 1 3.5 17V7A3.5 3.5 0 0 1 7 3.5Zm0 2A1.5 1.5 0 0 0 5.5 7v10A1.5 1.5 0 0 0 7 18.5h10a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 17 5.5H7Zm5 2.75A4.75 4.75 0 1 1 7.25 13 4.75 4.75 0 0 1 12 8.25Zm0 2A2.75 2.75 0 1 0 14.75 13 2.75 2.75 0 0 0 12 10.25Zm5.5-.9a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1Z" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M12 2.5A9.5 9.5 0 0 0 2.5 12c0 4.17 2.69 7.71 6.42 8.96.47.08.66-.2.66-.46v-1.63c-2.61.56-3.16-1.1-3.16-1.1-.43-1.08-1.05-1.37-1.05-1.37-.86-.59.07-.58.07-.58.95.07 1.45.98 1.45.98.85 1.45 2.23 1.03 2.78.79.08-.62.33-1.03.6-1.27-2.08-.24-4.26-1.04-4.26-4.62 0-1.02.36-1.86.96-2.52-.1-.23-.42-1.16.09-2.42 0 0 .78-.25 2.55.96.74-.2 1.54-.3 2.33-.3s1.59.1 2.33.3c1.77-1.21 2.55-.96 2.55-.96.51 1.26.19 2.19.1 2.42.6.66.96 1.5.96 2.52 0 3.59-2.18 4.38-4.27 4.62.34.3.64.9.64 1.82v2.21c0 .26.18.54.66.46A9.5 9.5 0 0 0 21.5 12 9.5 9.5 0 0 0 12 2.5Z" />
    </svg>
  )
}

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/prsuthar',
    handle: 'linkedin.com/in/prsuthar',
    type: 'linkedin',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/dev_vikas44/',
    handle: '@dev_vikas44',
    type: 'instagram',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/vikassuthar44',
    handle: 'github.com/vikassuthar44',
    type: 'github',
  },
]

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function App() {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="glow-orb glow-warm -left-40 top-10 h-72 w-72"
        animate={{ y: [0, -20, 0], x: [0, 12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="glow-orb glow-cool -right-32 top-24 h-80 w-80"
        animate={{ y: [0, 24, 0], x: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="glow-orb glow-deep left-24 top-[65%] h-64 w-64"
        animate={{ y: [0, -18, 0], x: [0, -6, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <header className="relative z-20">
        <div className="container-shell flex items-center justify-between py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--ink)] text-sm font-semibold text-white">
              VS
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Portfolio
              </p>
              <p className="text-base font-semibold">Vikas Suthar</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-[color:var(--muted)] md:flex">
            <a className="transition hover:text-[color:var(--ink)]" href="#about">
              About
            </a>
            <a className="transition hover:text-[color:var(--ink)]" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-[color:var(--ink)]" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-[color:var(--ink)]" href="#testimonials">
              Testimonials
            </a>
          </nav>
          <a className="btn-ghost hidden md:inline-flex" href="#contact">
            Let's talk
          </a>
        </div>
      </header>

      <section id="home" className="relative z-10">
        <div className="container-shell grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="show"
            variants={sectionVariants}
          >
            <motion.span className="pill" variants={itemVariants}>
              Android • iOS • Websites • UI/UX
            </motion.span>
            <motion.h1
              className="text-4xl leading-tight md:text-5xl lg:text-6xl"
              variants={itemVariants}
            >
              Crafting{' '}
              <span className="gradient-text">Android, iOS, and Web</span> products
              with UI/UX that feels premium and performs fast.
            </motion.h1>
            <motion.p
              className="max-w-xl text-base text-[color:var(--muted)] md:text-lg"
              variants={itemVariants}
            >
              I design UI/UX and ship production ready Android, iOS, and web
              experiences end to end. Expect polished flows, clean architecture,
              and launch ready assets.
            </motion.p>
            <motion.div className="flex flex-wrap gap-2" variants={itemVariants}>
              {platforms.map((platform) => (
                <span key={platform} className="tag">
                  {platform}
                </span>
              ))}
            </motion.div>
            <motion.div className="flex flex-wrap gap-3" variants={itemVariants}>
              <a className="btn-primary" href="#projects">
                View apps
              </a>
              <a className="btn-ghost" href="#contact">
                Start a project
              </a>
            </motion.div>
            <motion.div
              className="grid gap-4 pt-2 sm:grid-cols-3"
              variants={itemVariants}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="card text-left">
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="text-sm text-[color:var(--muted)]">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="grid gap-4"
            initial="hidden"
            animate="show"
            variants={sectionVariants}
          >
            <motion.div className="card" variants={itemVariants}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Focus areas
              </p>
              <h3 className="mt-3 text-xl font-semibold">
                Experiences that feel fast, friendly, and consistent everywhere.
              </h3>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                UI/UX polish across Android, iOS, and web with onboarding clarity
                and delightful micro flows that drive retention.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Android', 'iOS', 'Web', 'UI/UX'].map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div className="card" variants={itemVariants}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Working style
              </p>
              <h3 className="mt-3 text-xl font-semibold">
                Lean, collaborative, and focused on shipping.
              </h3>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                Weekly demos, tight feedback loops, and measurable outcomes.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Weekly updates', 'Build reviews', 'Launch checklist'].map(
                  (item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ),
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.section
        id="about"
        className="relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container-shell grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div variants={itemVariants}>
            <span className="pill">About</span>
            <h2 className="mt-4 text-3xl md:text-4xl">
              I blend engineering, UI/UX design, and growth to deliver Android,
              iOS, and web products built for real people.
            </h2>
            <p className="mt-4 text-[color:var(--muted)]">
              From multiplayer games to finance tools, I focus on clarity and
              trust. Every project ships with a clean visual system, thoughtful
              onboarding, and performance tuned for real devices and browsers.
            </p>
          </motion.div>
          <motion.div className="card" variants={itemVariants}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
              How I work
            </p>
            <ul className="mt-4 space-y-4 text-left text-sm text-[color:var(--muted)]">
              {milestones.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Strategy', 'Design', 'Build', 'Launch'].map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="skills"
        className="relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container-shell py-16">
          <motion.div className="flex flex-col gap-3" variants={itemVariants}>
            <span className="pill">Skills</span>
            <h2 className="text-3xl md:text-4xl">Everything needed to ship.</h2>
            <p className="max-w-2xl text-[color:var(--muted)]">
              A full stack of Android, iOS, web, and UI/UX delivery skills to
              move your product from idea to launch with speed and quality.
            </p>
          </motion.div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {skills.map((skill) => (
              <motion.div key={skill.title} className="card" variants={itemVariants}>
                <h3 className="text-lg font-semibold">{skill.title}</h3>
                <p className="mt-3 text-sm text-[color:var(--muted)]">
                  {skill.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="projects"
        className="relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container-shell py-16">
          <motion.div className="flex flex-col gap-3" variants={itemVariants}>
            <span className="pill">Projects</span>
            <h2 className="text-3xl md:text-4xl">Selected app launches.</h2>
            <p className="max-w-2xl text-[color:var(--muted)]">
              Recent Android, iOS, and web products focused on retention,
              usability, and a strong store presence.
            </p>
          </motion.div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <motion.div key={project.title} className="card" variants={itemVariants}>
                <div
                  className={`rounded-2xl bg-gradient-to-r ${project.gradient} p-5 text-white`}
                >
                  <div className="text-3xl">{project.emoji}</div>
                  <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/80">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                </div>
                <p className="mt-5 text-sm text-[color:var(--muted)]">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  className="btn-ghost mt-6 w-full"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on Play Store
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="testimonials"
        className="relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container-shell py-16">
          <motion.div className="flex flex-col gap-3" variants={itemVariants}>
            <span className="pill">Testimonials</span>
            <h2 className="text-3xl md:text-4xl">Teams I have shipped with.</h2>
            <p className="max-w-2xl text-[color:var(--muted)]">
              Feedback from founders and product leads on recent collaborations.
            </p>
          </motion.div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <motion.div key={item.name} className="card" variants={itemVariants}>
                <p className="text-sm text-[color:var(--muted)]">"{item.quote}"</p>
                <div className="mt-6">
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-[color:var(--muted)]">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <section id="contact" className="relative z-10">
        <div className="container-shell py-16">
          <div className="cta">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Contact
              </p>
            <h2 className="mt-4 text-3xl md:text-4xl">
              Ready to build your next Android, iOS, or web launch?
            </h2>
            <p className="mt-3 max-w-xl text-sm text-white/80">
              Share your idea, deadline, and feature list. I will respond with a
              clear scope and timeline.
            </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-primary" href="mailto:hello@yourdomain.com">
                hello@yourdomain.com
              </a>
              <a className="btn-ghost-invert" href="#projects">
                See latest work
              </a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {socials.map((item) => (
                <a
                  key={item.label}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-left text-sm text-white/80 backdrop-blur transition hover:-translate-y-1 hover:border-white/60 hover:bg-white/20"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                      <SocialIcon type={item.type} />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-white">
                        {item.label}
                      </span>
                      <span className="block text-xs text-white/70">
                        {item.handle}
                      </span>
                    </span>
                  </span>
                  <span className="text-white/50 transition group-hover:text-white">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10">
        <div className="container-shell flex flex-col items-center gap-3 py-10 text-sm text-[color:var(--muted)] md:flex-row md:justify-between">
          <p>© 2026 Vikas Suthar</p>
          <div className="flex flex-wrap gap-4">
            <a className="transition hover:text-[color:var(--ink)]" href="#home">
              Back to top
            </a>
            <a
              className="transition hover:text-[color:var(--ink)]"
              href="mailto:hello@yourdomain.com"
            >
              Email
            </a>
            <span className="flex items-center gap-3">
              {socials.map((item) => (
                <a
                  key={item.label}
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/60 text-[color:var(--ink)] transition hover:-translate-y-1 hover:border-black/30"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  title={item.label}
                >
                  <span className="text-[color:var(--ink)] transition group-hover:text-black">
                    <SocialIcon type={item.type} />
                  </span>
                </a>
              ))}
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
