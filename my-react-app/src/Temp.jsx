import { useState, useEffect, useRef } from "react";
import "./Portfolio.css";

// ================================================================
//  ✏️  PERSONAL INFO HERE
// ================================================================
const ME = {
  name: "Gaurav Chaudhari",
  title: "Full Stack Developer",
  tagline: "I craft beautiful digital experiences.",
  about:
    "various technologies, including Java, Node.js, and database management. Eager to learn and apply new skills in building innovative web solutions.",

  // My photo 
  photo: "IMG_20240402_163521.jpg",

  // My resume
  resumeUrl: "/gaurav-resume.pdf",

  // ── SOCIAL LINKS ──────
  social: {
    github:    "https://github.com/gauravc1023",
    linkedin:  "https://www.linkedin.com/in/gaurav-chaudhari-4b4687284/",
    instagram: "https://www.instagram.com/gaurav_._004/",
    twitter:   "https://x.com/Gaurav68819",
  },

  // ── EDUCATION ───────────────
  education: [
    {
      level:  "10th Grade",
      school: "L.V.H. School, Nashik",
      board:  "MSBSHSE Board",
      year:   "2019",
      score:  "77.60%",
      icon:   "🏫",
    },
    {
      level:  "12th Grade",
      school: "KSKW College, Nashik",
      board:  "MSBSHSE Board",
      year:   "2019",
      score:  "83%",
      icon:   "📚",
    },
    {
      level:  "B.E — Computer",
      school: "SIEM Mahiravani, Nashik",
      board:  "Pune University",
      year:   "2021 – 2025",
      score:  "6.94 CGPA",
      icon:   "🎓",
    },
  ],

  // ── EXPERIENCE ──────
  experience: [
    {
      company: "Sumago Infotech Pvt. Ltd",
      role:    "FullStack Developer Intern",
      period:  "Dec 2023 – Jan 2024",
      desc:    "Contributed to the development of web application using MERN also gained hands on experience in designing , building and deploying scalable solutions",
      color:   "#1DB954",
      
    },
    {
      company: "Nexanova Protech",
      role:    "Application Development Intern",
      period:  "Jun 2025 – Dec 2025",
      desc:    "Assisted in developing and maintaining software applications based on client requirements",
      color:   "#00A4EF",
      
    },
    // {
    //   company: 
    //   role:    
    //   period:  
    //   desc:    
    //   color:   "#FF6600",
    // },
  ],

  // ── SKILLS ────────────────────────────────────────────────────
  skills: [
    { name: "Java",     level: 78 },
    { name: "HTML",      level: 85 },
    { name: "CSS",   level: 88 },
    { name: "JavaScript", level: 78 },
    { name: "React.js",      level: 80 },
    { name: "SQL/PLSQL",      level: 74 },
  ],

  // ── PROJECTS ──────────────────────────────────────────────────
  projects: [
    {
      title: "School Advisor",
      desc:  "Suggests parents & childrens the best schools as per their preference.",
      tags:  ["Java","React.js", "Node.js", "MongoDB"],
      color: "#ff6b35",
      emoji: "🏫",
    },
    {
      title: "My Portfolio",
      desc:  "My Portfolio is a modern personal web application. Focuses on a responsive UI and smooth user experience",
      tags:  ["React,js", "Node.js", "JavaScript"],
      color: "#7c3aed",
      emoji: "💼",
    },
    // {
    //   title: "WeatherNow",
    //   desc:  "Beautiful weather dashboard with animated visualisations.",
    //   tags:  ["React", "D3.js", "API"],
    //   color: "#0ea5e9",
    //   emoji: "🌤️",
    // },
    // {
    //   title: "DevBlog",
    //   desc:  "Markdown-powered blog engine with full CMS and dark mode.",
    //   tags:  ["Next.js", "MDX", "Tailwind"],
    //   color: "#10b981",
    //   emoji: "✍️",
    // },
  ],

  contact: {
    email:    "gauravchaudhari232004@gmail.com",
  
  },
};

// ================================================================
//  SVG SOCIAL ICONS
// ================================================================

const IconGitHub = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577
      0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756
      -1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304
      3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931
      0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23
      A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23
      3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221
      0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222
      0 1.606-.015 2.896-.015 3.286 0 .319.216.694.825.576C20.565 21.795 24 17.295 24 12
      c0-6.63-5.37-12-12-12z" />
  </svg>
);

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037
      -1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046
      c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337
      7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782
      13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542
      C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729
      C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919
      4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849
      -.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07
      -3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92
      -.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849
      .149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12
      0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333
      0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98
      6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072
      4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948
      0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98
      C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324
      6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845
      a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const IconTwitterX = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231
      -5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.254 5.622L18.244
      2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);


// ================================================================
//  HELPER HOOKS & COMPONENTS
// ================================================================

// Detects when an element enters the viewport
function useInView(ref, threshold = 0.15) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return isVisible;
}

// Wraps any content with a scroll-triggered fade-up animation
function ScrollReveal({ children, delay = 0, style }) {
  const ref = useRef(null);
  const isVisible = useInView(ref);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}s`, ...style }}
    >
      {children}
    </div>
  );
}


// ================================================================
//  MAIN PORTFOLIO COMPONENT
// ================================================================

function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode]       = useState(true);

  const skillsRef     = useRef(null);
  const skillsVisible = useInView(skillsRef);

  const navItems = ["home", "about", "education", "experience", "skills", "projects", "contact"];

  // Smooth scroll to a section by ID
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Download the resume
  const downloadResume = () => {
    const link      = document.createElement("a");
    link.href       = ME.resumeUrl;
    link.download   = `${ME.name.replace(" ", "_")}_Resume.pdf`;
    link.target     = "_blank";
    link.click();
  };

  // Highlight active nav link on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      navItems.forEach((section) => {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 220) current = section;
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={isDarkMode ? "" : "light-mode"}
      style={{ background: "var(--color-bg)", minHeight: "100vh", transition: "background 0.35s" }}
    >

      {/* ── NAVBAR ──────────────────────────────────────────── */}
      <nav className="navbar">
        <div className="navbar-logo" onClick={() => scrollTo("home")}>GC.</div>

        <ul className="navbar-links">
          {navItems.map((section) => (
            <li key={section}>
              <a
                className={activeSection === section ? "active" : ""}
                onClick={() => scrollTo(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}

          {/* Resume button
          <li>
            <button className="navbar-resume-btn" onClick={downloadResume}>
              ⬇ Resume
            </button>
          </li> */}
        </ul>
      </nav>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section id="home" className="hero-section">
        <div className="hero-background-glow" />

        <div className="hero-inner">

          {/* Left: text + buttons + social icons */}
          <div>
            <span className="hero-available-badge">✦ Available for work</span>

            <h1 className="hero-name">
              {ME.name.split(" ")[0]}
              <br />
              <span className="hero-name-gradient">
                {ME.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <p className="hero-job-title">{ME.title}</p>
            <p className="hero-tagline">{ME.tagline}</p>

            {/* CTA Buttons */}
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollTo("projects")}>
                View My Work
              </button>
              <button className="btn-outline" onClick={() => scrollTo("contact")}>
                Get In Touch
              </button>
              <button className="btn-download-resume" onClick={downloadResume}>
                 Download Resume
              </button>
            </div>

            {/* Social Icons */}
            <div className="hero-social-links">
              <a
                href={ME.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link github"
                title="GitHub"
              >
                <IconGitHub />
              </a>
              <a
                href={ME.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link linkedin"
                title="LinkedIn"
              >
                <IconLinkedIn />
              </a>
              <a
                href={ME.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link instagram"
                title="Instagram"
              >
                <IconInstagram />
              </a>
              <a
                href={ME.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link twitter"
                title="X (Twitter)"
              >
                <IconTwitterX />
              </a>
            </div>
          </div>

          {/* Right: profile photo */}
          <div className="hero-photo-wrapper">
            <div className="hero-photo-ring">
              {ME.photo
                ? <img src={ME.photo} alt={ME.name} className="hero-photo-img" />
                : <div className="hero-photo-placeholder">👤</div>
              }
            </div>
          </div>

        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────── */}
      <div id="about" className="section-wrapper">
        <ScrollReveal>
          <p className="section-label">About Me</p>
          <h2 className="section-title">The person behind the code</h2>
          <div className="section-divider" />

          <div className="about-grid">
            <p className="about-text">
              Hey! I'm <strong>{ME.name}</strong>, a {ME.title.toLowerCase()} who
              loves crafting clean, purposeful digital products. {ME.about}
            </p>
            {/* <div className="stats-grid">
              {[
                ["4+",  "Years Exp."],
                ["30+", "Projects"],
                ["15+", "Clients"],
                ["99%", "On-Time"],
              ].map(([number, label]) => (
                <div className="stat-card" key={label}>
                  <div className="stat-number">{number}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div> */}
          </div>
        </ScrollReveal>
      </div>

      {/* ── EDUCATION ───────────────────────────────────────── */}
      <div id="education" className="section-wrapper">
        <ScrollReveal>
          <p className="section-label">Education</p>
          <h2 className="section-title">My academic journey</h2>
          <div className="section-divider" />
        </ScrollReveal>

        <div className="education-grid">
          {ME.education.map((edu, index) => (
            <ScrollReveal key={edu.level} delay={index * 0.1}>
              <div className="education-card">
                <span className="education-icon">{edu.icon}</span>
                <div className="education-level">{edu.level}</div>
                <div className="education-school">{edu.school}</div>
                <div className="education-board">{edu.board}</div>
                <div className="education-footer">
                  <span className="education-year">📅 {edu.year}</span>
                  <span className="education-score">{edu.score}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* ── EXPERIENCE ──────────────────────────────────────── */}
      <div id="experience" className="section-wrapper">
        <ScrollReveal>
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I've worked</h2>
          <div className="section-divider" />
        </ScrollReveal>

        <div className="timeline">
          {ME.experience.map((job, index) => (
            <ScrollReveal key={job.company} delay={index * 0.1}>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-card" style={{ "--card-accent-color": job.color }}>
                  <div className="timeline-header">
                    {/* <div className="timeline-company-logo">{job.logo}</div> */}
                    <div className="timeline-info">
                      <div className="timeline-company-name">{job.company}</div>
                      <div className="timeline-role" style={{ color: job.color }}>
                        {job.role}
                      </div>
                      <div className="timeline-period">📅 {job.period}</div>
                    </div>
                  </div>
                  <p className="timeline-description">{job.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* ── SKILLS ──────────────────────────────────────────── */}
      <div id="skills" className="section-wrapper">
        <ScrollReveal>
          <p className="section-label">Skills</p>
          <h2 className="section-title">What I work with</h2>
          <div className="section-divider" />
        </ScrollReveal>

        <div ref={skillsRef} className="skills-grid">
          {ME.skills.map((skill, index) => (
            <ScrollReveal key={skill.name} delay={index * 0.08}>
              <div className="skill-card">
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill"
                    style={{ width: skillsVisible ? `${skill.level}%` : "0%" }}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* ── PROJECTS ────────────────────────────────────────── */}
      <div id="projects" className="section-wrapper">
        <ScrollReveal>
          <p className="section-label">Projects</p>
          <h2 className="section-title">Things I've built</h2>
          <div className="section-divider" />
        </ScrollReveal>

        <div className="projects-grid">
          {ME.projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <div className="project-card" style={{ "--card-accent-color": project.color }}>
                <span className="project-emoji">{project.emoji}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="project-tag"
                      style={{
                        background: `${project.color}18`,
                        color:      project.color,
                        border:     `1px solid ${project.color}33`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* ── CONTACT ─────────────────────────────────────────── */}
      <div id="contact" className="section-wrapper">
        <ScrollReveal>
          <div className="contact-box">
            <p className="section-label">Contact</p>
            <h2 className="section-title">Let's work together</h2>
            <div className="section-divider" style={{ margin: "1rem auto 1.5rem" }} />
            <p className="contact-description">
              Have a project in mind or just want to say hi? My inbox is always
              open — I'll get back within 24 hours.
            </p>
            <button
              className="btn-primary"
              onClick={() => window.open(`mailto:${ME.contact.email}`)}
            >
              Say Hello ✉️
            </button>
            <div className="contact-links">
              <span className="contact-link-item">📧 {ME.contact.email}</span>
              {/* <span className="contact-link-item">🐙 {ME.contact.github}</span> */}
              {/* <span className="contact-link-item">💼 {ME.contact.linkedin}</span> */}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="footer">
        <p> ⚡ Designed &amp; Developed by {ME.name}</p>
      </footer>

    </div>
  );
}
export default Portfolio;