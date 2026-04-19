import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import yashImg from "./assets/yash.jpg";

function App() {
  const [theme, setTheme] = useState("light");
  const themeRef = useRef("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    themeRef.current = theme;
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // CURSOR
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    let mx = 0,
      my = 0,
      fx = 0,
      fy = 0;
    let animationFrameId;

    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursor) {
        cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
      }
    };

    document.addEventListener("mousemove", onMouseMove);

    const animateFollower = () => {
      fx += (mx - fx - 18) * 0.12;
      fy += (my - fy - 18) * 0.12;
      if (follower) {
        follower.style.transform = `translate(${fx}px, ${fy}px)`;
      }
      animationFrameId = requestAnimationFrame(animateFollower);
    };
    animateFollower();

    const hoverElements = document.querySelectorAll(
      "a, button, .project-item, .skill-item, .exp-card",
    );
    const onMouseEnter = () => {
      if (follower) {
        follower.style.width = "60px";
        follower.style.height = "60px";
      }
    };
    const onMouseLeave = () => {
      if (follower) {
        follower.style.width = "36px";
        follower.style.height = "36px";
      }
    };

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    // PARTICLE CANVAS
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const randomBetween = (a, b) => a + Math.random() * (b - a);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: randomBetween(0, window.innerWidth),
        y: randomBetween(0, window.innerHeight),
        r: randomBetween(0.5, 2),
        vx: randomBetween(-0.3, 0.3),
        vy: randomBetween(-0.5, -0.1),
        alpha: randomBetween(0.1, 0.5),
        isAccent: Math.random() > 0.85,
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

        const accentRgb =
          themeRef.current === "dark" ? "0, 212, 255" : "37, 99, 235";
        ctx.fillStyle = p.isAccent
          ? `rgba(${accentRgb},${p.alpha})`
          : themeRef.current === "dark"
            ? `rgba(240,237,232,${p.alpha})`
            : `rgba(8,8,8,${p.alpha})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -5) {
          p.y = canvas.height + 5;
          p.x = randomBetween(0, canvas.width);
        }
        if (p.x < -5) p.x = canvas.width + 5;
        if (p.x > canvas.width + 5) p.x = -5;
      });

      ctx.strokeStyle = "rgba(240,237,232,0.025)";
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 80) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 80) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(drawParticles);
    };
    drawParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    // NAVBAR SCROLL
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-links a");

    const onScroll = () => {
      if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
      }
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollY = window.scrollY + 120;
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (
          scrollY >= el.offsetTop &&
          scrollY < el.offsetTop + el.offsetHeight
        ) {
          navLinks.forEach((a) => a.classList.remove("active"));
          const activeLink = document.querySelector(
            `.nav-links a[href="#${id}"]`,
          );
          if (activeLink) activeLink.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // INTERSECTION OBSERVER & COUNTER
    const animateCounter = (el) => {
      const target = parseInt(el.dataset.target);
      let current = 0;
      const increment = target / 40;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent =
          Math.floor(current) + (el.dataset.target === "100" ? "%" : "+");
      }, 40);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            if (
              entry.target.classList.contains("count-up") &&
              !entry.target.dataset.animated
            ) {
              entry.target.dataset.animated = "true";
              animateCounter(entry.target);
            }
          }
        });
      },
      { threshold: 0.15 },
    );

    document
      .querySelectorAll(".reveal, .skill-item, .count-up")
      .forEach((el) => io.observe(el));

    // SMOOTH NAV SCROLL
    const onNavClick = (e) => {
      const a = e.currentTarget;
      const href = a.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((a) => a.addEventListener("click", onNavClick));

    return () => {
      io.disconnect();
      links.forEach((a) => a.removeEventListener("click", onNavClick));
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-follower" ref={followerRef}></div>

      {/* NAVBAR */}
      <nav id="navbar">
        <a href="#home" className="nav-logo">
          YP<span>.</span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <ul className="nav-links">
            <li>
              <a href="#home" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <button
            onClick={toggleTheme}
            className="theme-btn"
            aria-label="Toggle Theme"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--accent)",
              transition: "color 0.3s, transform 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {theme === "dark" ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home">
        <canvas id="canvas-bg" ref={canvasRef}></canvas>

        <div className="hero-eyebrow">
          React & Next.js Developer · Based in Ahmedabad
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "3rem",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <h1 className="hero-name" style={{ margin: 0 }}>
            <span className="line">
              <span className="glitch" data-text="YASH">
                YASH
              </span>
            </span>
            <span className="line">
              <span>
                <span className="accent-word glitch" data-text="PATEL">
                  PATEL
                </span>
              </span>
            </span>
          </h1>
          <div className="hero-image-wrapper">
            <img src={yashImg} alt="Yash Patel" className="hero-image" />
          </div>
        </div>

        <div className="hero-sub">
          <p className="hero-desc">
            Crafting pixel-perfect, high-performance React applications. I turn
            ideas into exceptional digital experiences with modern web tools.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">
              View Work &darr;
            </a>
            <a href="#contact" className="btn-outline">
              Let's Talk &rarr;
            </a>
          </div>
        </div>

        <div className="hero-scroll-hint">
          <div className="scroll-line"></div>
          <span className="scroll-label">Scroll</span>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div>
          <p className="about-label reveal">/ About Me</p>
          <h2 className="section-title reveal reveal-delay-1">
            Building the <br />
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
              web of
            </em>
            <br />
            tomorrow
          </h2>
          <p className="about-text reveal reveal-delay-2">
            I'm a passionate React.js Developer with experience building
            dynamic, responsive, and scalable web applications. I prioritise
            component architecture, performance improvement, and amazing user
            experiences.
          </p>
          <p className="about-text reveal reveal-delay-3">
            Skilled in integrating Figma designs into functioning interfaces, I
            possess hands-on expertise building modular architectures with
            modern frontend tools like React and Next.js.
          </p>
        </div>

        <div className="about-right">
          <div className="exp-card reveal">
            <div className="exp-company">Latitude Technolabs Pvt. Ltd.</div>
            <div className="exp-role">React & Next Js Developer / Designer</div>
            <div className="exp-year">January 2024 — Present</div>
          </div>

          <div className="stats-grid reveal reveal-delay-1">
            <div className="stat-item">
              <span className="stat-number count-up" data-target="7">
                0
              </span>
              <span className="stat-label">Projects Shipped</span>
            </div>
            <div className="stat-item">
              <span className="stat-number count-up" data-target="2">
                0
              </span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number count-up" data-target="9">
                0
              </span>
              <span className="stat-label">Skills Mastered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number count-up" data-target="100">
                0
              </span>
              <span className="stat-label">% Dedication</span>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="skills-header">
          <div>
            <p className="about-label reveal">/ Skills & Tools</p>
            <h2 className="section-title reveal reveal-delay-1">
              My
              <br />
              Arsenal
            </h2>
          </div>
        </div>

        <div className="skills-marquee-wrapper">
          <div className="skills-marquee" id="marquee">
            <span>React.js</span>
            <span>Next.js</span>
            <span>JavaScript (ES6+)</span>
            <span>Tailwind CSS</span>
            <span>SCSS/Sass</span>
            <span>Bootstrap 5</span>
            <span>Strapi CMS</span>
            <span>REST APIs</span>
            <span>Figma</span>
            <span>React.js</span>
            <span>Next.js</span>
            <span>JavaScript (ES6+)</span>
            <span>Tailwind CSS</span>
            <span>SCSS/Sass</span>
            <span>Bootstrap 5</span>
            <span>Strapi CMS</span>
            <span>REST APIs</span>
            <span>Figma</span>
          </div>
        </div>

        <div className="skills-grid">
          <div className="skill-item reveal">
            <span className="skill-icon">⚛️</span>
            <div className="skill-info">
              <div className="skill-name">React & Next.js</div>
              <div className="skill-level">Advanced · Components</div>
              <div className="skill-bar-wrapper">
                <div className="skill-bar" style={{ width: "95%" }}></div>
              </div>
            </div>
          </div>
          <div className="skill-item reveal reveal-delay-1">
            <span className="skill-icon">🟨</span>
            <div className="skill-info">
              <div className="skill-name">JavaScript</div>
              <div className="skill-level">Advanced · ES6+</div>
              <div className="skill-bar-wrapper">
                <div className="skill-bar" style={{ width: "90%" }}></div>
              </div>
            </div>
          </div>
          <div className="skill-item reveal reveal-delay-2">
            <span className="skill-icon">🌊</span>
            <div className="skill-info">
              <div className="skill-name">Tailwind CSS & SCSS</div>
              <div className="skill-level">Advanced · Styling</div>
              <div className="skill-bar-wrapper">
                <div className="skill-bar" style={{ width: "92%" }}></div>
              </div>
            </div>
          </div>
          <div className="skill-item reveal">
            <span className="skill-icon">⚙️</span>
            <div className="skill-info">
              <div className="skill-name">Strapi CMS</div>
              <div className="skill-level">Intermediate · API Integration</div>
              <div className="skill-bar-wrapper">
                <div className="skill-bar" style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>
          <div className="skill-item reveal reveal-delay-1">
            <span className="skill-icon">🎨</span>
            <div className="skill-info">
              <div className="skill-name">Figma UI/UX</div>
              <div className="skill-level">Advanced · Translation</div>
              <div className="skill-bar-wrapper">
                <div className="skill-bar" style={{ width: "88%" }}></div>
              </div>
            </div>
          </div>
          <div className="skill-item reveal reveal-delay-2">
            <span className="skill-icon">🟠</span>
            <div className="skill-info">
              <div className="skill-name">HTML5 & CSS3</div>
              <div className="skill-level">Expert · Semantic</div>
              <div className="skill-bar-wrapper">
                <div className="skill-bar" style={{ width: "98%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="projects-header">
          <div>
            <p className="about-label reveal">/ Selected Work</p>
            <h2 className="section-title reveal reveal-delay-1">Projects</h2>
          </div>
          <span className="project-count reveal">08 Works</span>
        </div>

        <div className="projects-list">
          <div className="project-item reveal">
            <span className="project-num">01</span>
            <span className="project-title">Scott</span>
            <span className="project-desc">
              A dynamic, content-driven web application for a credit card
              company, featuring loan details, calculators, and Strapi CMS
              integration.
            </span>
            <span className="project-tag">FinTech</span>
          </div>
          <div className="project-item reveal">
            <span className="project-num">02</span>
            <span className="project-title">Latitude New Website</span>
            <span className="project-desc">
              A modern informational website designed to showcase company
              details and services, powered by Strapi CMS for flexible content.
            </span>
            <span className="project-tag">Corporate</span>
          </div>
          <div className="project-item reveal">
            <span className="project-num">03</span>
            <span className="project-title">Key-Star</span>
            <span className="project-desc">
              A feature-rich educational platform providing online learning
              resources, course listings, and dynamic content management.
            </span>
            <span className="project-tag">EdTech</span>
          </div>
          <div className="project-item reveal">
            <span className="project-num">04</span>
            <span className="project-title">Design Invite</span>
            <span className="project-desc">
              An e-commerce platform for digital and print-ready invitation
              cards, featuring integrated Razorpay checkout and video editing
              services.
            </span>
            <span className="project-tag">E-Commerce</span>
          </div>
          <div className="project-item reveal">
            <span className="project-num">05</span>
            <span className="project-title">OPM Events</span>
            <span className="project-desc">
              Hotel and resort booking website built for event management,
              allowing users to explore venues, check availability, and make
              booking inquiries easily.
            </span>
            <span className="project-tag">Booking</span>
          </div>
          <div className="project-item reveal">
            <span className="project-num">06</span>
            <span className="project-title">BizApp</span>
            <span className="project-desc">
              A content-driven platform providing the latest news, club updates,
              and announcements with an intuitive layout and fast-loading
              performance.
            </span>
            <span className="project-tag">Content</span>
          </div>
          <div className="project-item reveal">
            <span className="project-num">07</span>
            <span className="project-title">QADAM</span>
            <span className="project-desc">
              Article reading platform where all content is dynamically managed
              through an admin panel, enabling real-time updates and content
              moderation.
            </span>
            <span className="project-tag">CMS</span>
          </div>
          <div className="project-item reveal">
            <span className="project-num">08</span>
            <span className="project-title">Marco</span>
            <span className="project-desc">
              A price monitoring and violation management platform built for
              Soria Natural (Spain), enabling businesses to track vendor
              pricing, detect violations, and ensure compliance across
              distributed sales channels.
            </span>
            <span className="project-tag">Dashboard</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div>
          <p className="about-label reveal">/ Get In Touch</p>
          <h2 className="contact-big reveal reveal-delay-1">
            Let's
            <br />
            <span className="stroke">Work</span>
            <br />
            Together
          </h2>
        </div>

        <div className="contact-right">
          <div className="contact-info reveal">
            <div className="contact-line">
              <span className="contact-line-label">Email</span>
              <span className="contact-line-value">yashnpatel99@gmail.com</span>
            </div>
            <div className="contact-line">
              <span className="contact-line-label">Phone</span>
              <span className="contact-line-value">+91 84013 44055</span>
            </div>
            <div className="contact-line">
              <span className="contact-line-label">Location</span>
              <span className="contact-line-value">
                Ahmedabad, Gujarat, India
              </span>
            </div>
            {/* <div className="contact-line">
              <span className="contact-line-label">Status</span>
              <span className="contact-line-value" style={{ color: 'var(--accent)' }}>● Available for work</span>
            </div> */}
          </div>

          <a
            href="mailto:yashnpatel99@gmail.com"
            className="email-link reveal reveal-delay-1"
          >
            Send Me An Email &rarr;
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span className="footer-copy">
          &copy; 2025 Yash Patel. All rights reserved.
        </span>
        <span className="footer-built">
          Crafted with <span>&hearts;</span> in Ahmedabad
        </span>
      </footer>
    </>
  );
}

export default App;
