import { useEffect, useState } from 'react'
import {
  about,
  education,
  experience,
  languages,
  profile,
  projectCategories,
  projects,
  recognition,
  skills,
  stats,
} from './data.js'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const icons = {
  github: (
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.46-1.1-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  ),
  linkedin: (
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  ),
  mail: (
    <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1 2.3V17h16V7.3l-8 5.6-8-5.6ZM18.6 7H5.4L12 11.6 18.6 7Z" />
  ),
  pin: (
    <path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7Zm0 4.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />
  ),
  arrow: <path d="M13.2 5.3 20 12l-6.8 6.7-1.4-1.4 4.3-4.3H4v-2h12.1l-4.3-4.3 1.4-1.4Z" />,
  sun: (
    <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0-5 1 3h-2l1-3Zm0 20-1-3h2l-1 3ZM2 12l3-1v2l-3-1Zm20 0-3 1v-2l3 1ZM4.9 4.9l2.8 1.4-1.4 1.4-1.4-2.8Zm14.2 14.2-2.8-1.4 1.4-1.4 1.4 2.8Zm0-14.2-1.4 2.8-1.4-1.4 2.8-1.4ZM4.9 19.1l1.4-2.8 1.4 1.4-2.8 1.4Z" />
  ),
  moon: <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />,
  menu: <path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z" />,
  close: <path d="m6.4 5 5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5Z" />,
  copy: (
    <path d="M8 3h11a2 2 0 0 1 2 2v11h-2V5H8V3Zm-3 4h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Zm0 2v10h10V9H5Z" />
  ),
  check: <path d="m9.5 16.2-4.2-4.2-1.4 1.4 5.6 5.6 11-11-1.4-1.4-9.6 9.6Z" />,
}

const projectId = (title) => `project-${title.replace(/\W+/g, '-').toLowerCase()}`

function Icon({ name, size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved === 'light' || saved === 'dark') return saved
    } catch {
      // Storage can be unavailable (private mode); fall back to the system preference.
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  // Only persist an explicit choice, so visitors who never toggle keep following their system theme.
  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Ignore: the theme still applies for this visit.
    }
  }

  return [theme, toggle]
}

function useActiveSection() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    // 'top' (the hero) clears the highlight when scrolling back up.
    for (const id of ['top', ...sections.map((s) => s.id)]) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return active
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function Nav({ theme, onToggleTheme }) {
  const active = useActiveSection()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__mark">HG</span>
          <span className="nav__name">{profile.shortName}</span>
        </a>
        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Sections">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'is-active' : ''}
              aria-current={active === id ? 'true' : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="nav__actions">
          <button
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <button
            className="icon-btn nav__toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  )
}

function CopyEmail({ className = 'btn btn--ghost' }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <button className={className} onClick={copy} aria-live="polite">
      <Icon name={copied ? 'check' : 'copy'} size={16} />
      {copied ? 'Copied!' : 'Copy email'}
    </button>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="status">
            <span className="status__dot" aria-hidden="true" />
            {profile.availability}
          </p>
          <h1 className="hero__title">
            Héctor Pablo
            <br />
            <span className="accent">González</span> Espinosa
          </h1>
          <p className="hero__role">{profile.role} · Tec de Monterrey</p>
          <p className="hero__tagline">{profile.tagline}</p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#projects">
              See my work <Icon name="arrow" size={16} />
            </a>
            <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
              <Icon name="mail" size={16} /> Get in touch
            </a>
          </div>
          <ul className="hero__links" aria-label="Profiles">
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Icon name="linkedin" size={16} /> LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Icon name="github" size={16} /> GitHub
              </a>
            </li>
            <li className="hero__loc">
              <Icon name="pin" size={16} /> {profile.location}
            </li>
          </ul>
        </div>
        <div className="hero__photo">
          <div className="hero__photo-frame">
            <img src={profile.photo} alt={`Portrait of ${profile.name}`} width="200" height="200" />
          </div>
          <span className="hero__kanji" aria-hidden="true">京都 · MTY</span>
        </div>
      </div>
    </section>
  )
}

function SectionHeading({ index, kicker, title }) {
  return (
    <div className="section__head reveal">
      <span className="section__index">{index}</span>
      <p className="section__kicker">{kicker}</p>
      <h2 className="section__title">{title}</h2>
    </div>
  )
}

function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container split">
        <div>
          <SectionHeading index="01" kicker="About" title="Engineer for real-world systems" />
          <dl className="facts reveal">
            {stats.map((s) => (
              <div className="fact" key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="about reveal">
          {about.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
          <div className="about__focus">
            <span>Areas I've worked in</span>
            <Tags items={['AI agents & MCP', 'On-device ML', 'Multi-agent simulation', 'Full-stack development']} />
          </div>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeading index="02" kicker="Experience" title="Work experience" />
        <ol className="timeline">
          {experience.map((job) => (
            <li className="timeline__item reveal" key={job.role}>
              <div className="timeline__meta">
                <span className="timeline__period">{job.period}</span>
                <span className="timeline__loc">{job.location}</span>
              </div>
              <article className="card">
                <header className="card__head">
                  <div>
                    <h3 className="card__title">{job.role}</h3>
                    <p className="card__sub">{job.company}</p>
                  </div>
                  {job.metric && (
                    <div className="metric">
                      <strong>{job.metric.value}</strong>
                      <span>{job.metric.label}</span>
                    </div>
                  )}
                </header>
                <ul className="bullets">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                {job.projects?.map((name) => (
                  <a
                    key={name}
                    className="key-project"
                    href={`#${projectId(name)}`}
                    onClick={(e) => {
                      e.preventDefault()
                      window.dispatchEvent(new CustomEvent('show-project', { detail: projectId(name) }))
                    }}
                  >
                    <span>Key project</span>
                    <strong>{name}</strong>
                    <Icon name="arrow" size={16} />
                  </a>
                ))}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)
  const hasMore = project.highlights.length > 0
  const id = projectId(project.title)
  const detailsId = `details-${id}`

  return (
    <article id={id} tabIndex={-1} className={`project ${project.featured ? 'project--featured' : ''}`}>
      <div className="project__top">
        <span className="project__cats">{project.categories.join(' · ')}</span>
        {project.date && <span className="project__date">{project.date}</span>}
      </div>
      <h3 className="project__title">{project.title}</h3>
      <p className="project__subtitle">{project.subtitle}</p>
      <p className="project__context">{project.context}</p>
      {project.status && (
        <p className="project__status">
          <span className="status__dot" aria-hidden="true" />
          {project.status}
        </p>
      )}
      <p className="project__summary">{project.summary}</p>
      {project.metric && (
        <div className="metric metric--inline">
          <strong>{project.metric.value}</strong>
          <span>{project.metric.label}</span>
        </div>
      )}
      {hasMore && (
        <>
          <ul className="bullets project__details" id={detailsId} hidden={!open}>
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <button
            className="link-btn"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={detailsId}
          >
            {open ? 'Show less' : 'What I built'}
            <span className={`chev ${open ? 'chev--up' : ''}`} aria-hidden="true">↓</span>
          </button>
        </>
      )}
      <Tags items={project.tags} />
    </article>
  )
}

function Projects() {
  const [filter, setFilter] = useState('All')
  const [focus, setFocus] = useState(null)

  // Experience entries link to their project card; make sure it's visible, then bring it into view.
  useEffect(() => {
    const onShow = (e) => {
      setFilter('All')
      setFocus({ id: e.detail, at: Date.now() })
    }
    window.addEventListener('show-project', onShow)
    return () => window.removeEventListener('show-project', onShow)
  }, [])

  useEffect(() => {
    const el = focus && document.getElementById(focus.id)
    if (!el) return
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'center' })
    el.focus({ preventScroll: true })
    el.classList.add('is-flash')
    const t = setTimeout(() => el.classList.remove('is-flash'), 1600)
    return () => clearTimeout(t)
  }, [focus])

  const shown = filter === 'All' ? projects : projects.filter((p) => p.categories.includes(filter))

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading index="03" kicker="Projects" title="Things I've built" />
        <div className="filters reveal" role="group" aria-label="Filter projects by category">
          {projectCategories.map((c) => {
            const count = c === 'All' ? projects.length : projects.filter((p) => p.categories.includes(c)).length
            return (
              <button
                key={c}
                className={`chip ${filter === c ? 'is-active' : ''}`}
                aria-pressed={filter === c}
                onClick={() => setFilter(c)}
              >
                {c} <span className="chip__count">{count}</span>
              </button>
            )
          })}
        </div>
        <div className="projects">
          {shown.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeading index="04" kicker="Skills" title="Toolbox" />
        <div className="skills">
          {skills.map((s) => (
            <div className="skill reveal" key={s.group}>
              <h3>{s.group}</h3>
              <Tags items={s.items} />
            </div>
          ))}
        </div>
        <p className="skills__note reveal">
          Strongest in <strong>C++</strong>, <strong>Python</strong> and <strong>HTML/CSS</strong>; working
          proficiency in Java, JavaScript, SQL and Swift.
        </p>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHeading index="05" kicker="Education & recognition" title="Learning, leading, mentoring" />
        <div className="edu">
          {education.map((e) => (
            <article className="card reveal" key={e.school}>
              <p className="card__period">
                {e.period} · {e.location}
              </p>
              <h3 className="card__title">{e.school}</h3>
              <p className="card__sub">{e.degree}</p>
              {e.highlights.length > 0 && (
                <ul className="bullets">
                  {e.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        <div className="recog">
          <h3 className="recog__title reveal">Leadership & awards</h3>
          <ul className="recog__list">
            {recognition.map((r) => (
              <li className="reveal" key={r.title}>
                <strong>{r.title}</strong>
                <span>{r.detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="langs reveal">
          <h3 className="recog__title">Languages</h3>
          <ul>
            {languages.map((l) => (
              <li key={l.name}>
                <span>{l.name}</span>
                <em>{l.level}</em>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact__card reveal">
          <p className="section__kicker">Contact</p>
          <h2 className="contact__title">Let's build something together.</h2>
          <p className="contact__text">
            I'm looking for software engineering and AI internships. The fastest way to reach me is email.
          </p>
          <a className="contact__email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="hero__cta contact__cta">
            <a className="btn btn--primary" href={`mailto:${profile.email}`}>
              <Icon name="mail" size={16} /> Send an email
            </a>
            <CopyEmail />
            <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              <Icon name="linkedin" size={16} /> LinkedIn
            </a>
            <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">
              <Icon name="github" size={16} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const [theme, toggleTheme] = useTheme()
  useReveal()

  return (
    <>
      <a className="skip" href="#about">
        Skip to content
      </a>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer__inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}
