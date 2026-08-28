import { useEffect, useState } from 'react'
import {
  about,
  certifications,
  education,
  experience,
  navLinks,
  profile,
  projects,
  skills,
} from './data'
import './index.css'

function useScrollReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')
    if (!nodes.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`nav${scrolled || open ? ' is-scrolled' : ''}`}>
        <div className="nav__inner">
          <a className="nav__brand" href="#top" onClick={close}>
            <img
              className="nav__avatar"
              src={profile.avatar}
              alt=""
              width={36}
              height={36}
            />
            <span>Parth Mudgal</span>
          </a>

          <nav className="nav__links" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="nav__cta" href={profile.emailHref}>
            Email me
          </a>

          <button
            type="button"
            className={`nav__toggle${open ? ' is-open' : ''}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={`nav__mobile${open ? ' is-open' : ''}`}
        aria-hidden={!open}
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
        <a href={profile.emailHref} onClick={close}>
          Email me
        </a>
      </div>
    </>
  )
}

function HeroNodes() {
  return (
    <div className="hero__nodes" aria-hidden="true">
      <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1f6f6a" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#1a2744" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        <g stroke="url(#lineGrad)" strokeWidth="1" fill="none">
          <path d="M820 90 L980 180 L1120 140" />
          <path d="M760 220 L980 180 L1040 320" />
          <path d="M880 420 L1040 320 L1140 480" />
          <path d="M720 480 L880 420 L940 560" />
          <path d="M980 180 L880 420" />
        </g>
        <g fill="#1f6f6a">
          <circle cx="820" cy="90" r="3.5" opacity="0.7" />
          <circle cx="980" cy="180" r="4.5" opacity="0.85" />
          <circle cx="1120" cy="140" r="3" opacity="0.55" />
          <circle cx="760" cy="220" r="3" opacity="0.5" />
          <circle cx="1040" cy="320" r="4" opacity="0.75" />
          <circle cx="880" cy="420" r="4" opacity="0.8" />
          <circle cx="1140" cy="480" r="3" opacity="0.45" />
          <circle cx="720" cy="480" r="3" opacity="0.5" />
          <circle cx="940" cy="560" r="3.5" opacity="0.6" />
        </g>
      </svg>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero__atmosphere" />
      <div className="hero__grid" />
      <HeroNodes />

      <div className="hero__content">
        <div className="hero__main">
          <div className="hero__text">
            <p className="hero__eyebrow">{profile.location}</p>
            <h1 className="hero__name">{profile.name}</h1>
            <p className="hero__headline">{profile.headline}</p>
            <p className="hero__support">{profile.shortBio}</p>

            <div className="hero__actions">
              <a className="btn btn--primary" href="#projects">
                View projects
              </a>
              <a
                className="btn btn--ghost"
                href={profile.resume.view}
                target="_blank"
                rel="noopener noreferrer"
              >
                View resume
              </a>
            </div>

            <div className="hero__social">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <span className="hero__social-sep" aria-hidden="true" />
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>

            <div className="hero__meta">
              <span>
                <span className="dot" aria-hidden="true" />
                B.Tech CSE (AIDS)
              </span>
              <span>
                <span className="dot" aria-hidden="true" />
                VIPS-TC · Expected 2028
              </span>
            </div>
          </div>

          <div className="hero__portrait-wrap">
            <img
              className="hero__portrait"
              src={profile.avatar}
              alt={`Portrait of ${profile.name}`}
              width={288}
              height={288}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="reveal">
          <p className="section-label">About</p>
          <h2 className="section-title">Building useful AI into real products</h2>
        </div>

        <div className="about__copy reveal reveal-delay-1">
          {about.paragraphs.map((text) => (
            <p key={text.slice(0, 32)}>{text}</p>
          ))}

          <dl className="about__aside">
            <div className="about__fact">
              <dt>Focus</dt>
              <dd>Full-stack systems with RAG &amp; applied ML</dd>
            </div>
            <div className="about__fact">
              <dt>Based in</dt>
              <dd>{profile.location}</dd>
            </div>
            <div className="about__fact">
              <dt>Currently</dt>
              <dd>B.Tech CSE (AIDS) · 2024-2028</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="reveal">
          <p className="section-label">Skills &amp; Technologies</p>
          <h2 className="section-title">Tools I use to ship</h2>
          <p className="section-lead">
            Grouped the way I actually work—product surfaces, models, and the
            analysis underneath.
          </p>
        </div>

        <div className="skills__groups">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className={`skill-group reveal reveal-delay-${i + 1}`}
            >
              <h3 className="skill-group__title">{group.category}</h3>
              <ul className="skill-group__list">
                {group.items.map((item) => (
                  <li key={item} className="skill-tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="reveal">
          <p className="section-label">Projects</p>
          
          <h2 className="section-title">Projects I've worked on</h2>
        </div>

        <div className="projects__list">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className={`project reveal${index ? ` reveal-delay-${index}` : ''}`}
            >
              <div>
                <p className="project__index">
                  Project {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="project__name">{project.name}</h3>
                <p className="project__tagline">{project.tagline}</p>
              </div>

              <div>
                <p className="project__desc">{project.description}</p>
                <ul className="project__highlights">
                  {project.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="project__stack" aria-label="Tech stack">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                {project.link && (
                  <a
                    className="project__link"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View live site
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Certifications() {
  return (
    <section className="section about" id="certificates">
      <div className="container">
        <div className="reveal">
          <p className="section-label">Certifications</p>
          <h2 className="section-title">Certifications I've earned</h2>
        </div>

        <div className="certificates__list">
          {certifications.map((cert, index) => (
            <article
              key={cert.name}
              className={`certificate reveal${index ? ` reveal-delay-${index}` : ''}`}
            >
              <div>
                <h3 className="certificate__name">{cert.name}</h3>
                {cert.issuer && (
                  <p className="certificate__issuer">{cert.issuer}</p>
                )}
              </div>
              <div className="certificate__actions">
                <a
                  className="btn btn--primary"
                  href={cert.view}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="reveal">
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I&apos;ve contributed</h2>
        </div>

        <div className="timeline">
          {experience.map((job) => (
            <article
              key={`${job.role}-${job.period}`}
              className="timeline__item reveal"
            >
              <div className="timeline__when">
                {job.period}
                {job.duration && <small>{job.duration}</small>}
              </div>
              <div>
                <h3 className="timeline__role">{job.role}</h3>
                {(job.company || job.place) && (
                  <p className="timeline__org">
                    {[job.company, job.place].filter(Boolean).join(' · ')}
                  </p>
                )}
                <ul className="timeline__points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section className="section about" id="education">
      <div className="container">
        <div className="reveal">
          <p className="section-label">Education</p>
          <h2 className="section-title">Academic foundation</h2>
        </div>

        <div className="timeline">
          {education.map((item) => (
            <article key={item.school} className="timeline__item reveal">
              <div className="timeline__when">{item.period}</div>
              <div>
                <h3 className="timeline__role">{item.degree}</h3>
                <p className="timeline__org">{item.school}</p>
                <span className="edu-detail">{item.detail}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="reveal">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let&apos;s build something real</h2>
          <p className="section-lead">
            Open to internships, collaborations, and conversations about
            full-stack and AI product work.
          </p>
        </div>

        <div className="contact__grid reveal reveal-delay-1">
          <div className="contact__item">
            <span>Email</span>
            <a href={profile.emailHref}>{profile.email}</a>
          </div>
          <div className="contact__item">
            <span>Phone</span>
            <a href={profile.phoneHref}>{profile.phone}</a>
          </div>
          <div className="contact__item">
            <span>Location</span>
            <strong>{profile.location}</strong>
          </div>
          <div className="contact__item">
            <span>LinkedIn</span>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              parthmudgal28
            </a>
          </div>
          <div className="contact__item">
            <span>GitHub</span>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              ParthMudgal07
            </a>
          </div>
        </div>

        <div className="contact__actions reveal reveal-delay-2">
          <a className="btn btn--primary" href={profile.emailHref}>
            Send an email
          </a>
          <a className="btn btn--ghost" href={profile.phoneHref}>
            Call {profile.phone}
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          <strong>{profile.name}</strong> · Full-Stack &amp; AI/ML
        </p>
        <p>© {year}</p>
      </div>
    </footer>
  )
}

export default function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
