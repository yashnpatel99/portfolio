import { useEffect, useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiSass,
} from "react-icons/si";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollY = window.scrollY + 120;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (
          el &&
          scrollY >= el.offsetTop &&
          scrollY < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const projects = [
    {
      image: "../src/assets/latitude.png",
      title: "Latitude Company Website",
      description:
        "Corporate website designed and developed for Latitude Technolabs, showcasing company services, culture, and expertise with a modern UI and responsive layout.",
    },
    {
      image: "../src/assets/designinvite.png",
      title: "Design Invite",
      description:
        "An e-commerce platform for selling digital wedding invitation cards, photos, and videos with a smooth browsing experience and visually rich presentation.",
    },
    {
      image: "../src/assets/opmevents.png",
      title: "OPM Events",
      description:
        "Hotel and resort booking website built for event management, allowing users to explore venues, check availability, and make booking inquiries easily.",
    },
    {
      image: "../src/assets/bizapp.png",
      title: "BizApp",
      description:
        "A content-driven platform providing the latest news, club updates, and announcements with an intuitive layout and fast-loading performance.",
    },
    {
      image: "../src/assets/qadam.png",
      title: "QADAM",
      description:
        "Article reading platform where all content is dynamically managed through an admin panel, enabling real-time updates and content moderation.",
    },
    {
      image: "../src/assets/bkfriendly.png",
      title: "BK Friendly Services",
      description:
        "Financial services website offering credit cards, home loans, car loans, and other financial products with a clean and trustworthy user interface.",
    },
    {
      image: "../src/assets/keystar.png",
      title: "Key Star",
      description:
        "A platform for students to access lectures and take online exams. Features include video streaming, interactive quizzes, and performance tracking.",
    },
  ];

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden leading-relaxed">
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <h1 className="text-base sm:text-lg md:text-xl font-bold tracking-widest">
            YASH PATEL
          </h1>
          <div className="hidden md:flex gap-8 text-xs md:text-sm uppercase tracking-wider">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`transition cursor-pointer ${
                  activeSection === item ? "text-white" : "text-gray-400"
                } hover:text-white`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section
        id="Home"
        className="min-h-screen flex items-center justify-center pt-20 sm:pt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-5 sm:py-14">
          {/* TEXT */}
          <div>
            <p className="uppercase text-xs sm:text-sm tracking-widest text-gray-400 mb-4">
              React Developer
            </p>

            <h1
              className="
                text-3xl leading-tight
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-extrabold mb-6
              "
            >
              Hi, I’m <br /> Yash Patel
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mb-10">
              I'm a React.js Developer specializing in building dynamic and
              responsive web applications. Let's create something amazing
              together!
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6">
              <button
                onClick={() => scrollTo("projects")}
                className="cursor-pointer px-6 sm:px-8 py-3 sm:py-4 border border-white hover:bg-white hover:text-black transition"
              >
                View Work
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="cursor-pointer px-6 sm:px-8 py-3 sm:py-4 border border-white/30 hover:border-white transition"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative group">
            <img
              src="../src/assets/yash.jpg"
              alt="Yash Patel"
              className="w-full h-[360px] sm:h-[420px] md:h-[480px] lg:h-[520px] object-cover rounded-xl shadow-2xl grayscale transition-all duration-700 ease-out group-hover:grayscale-0"
            />

            {/* Optional subtle glow */}
            <div className=" pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10 transition-all duration-700 group-hover:ring-white/30" />
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="About"
        className="relative py-10 sm:py-28 border-t border-white/10"
      >
        <div className=" absolute inset-0 bg-[url('../src/assets/background.png')] bg-no-repeat bg-center bg-cover pointer-events-none" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            About Me
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            I'm a passionate React.js Developer with over 2 years of experience
            in building dynamic and responsive web applications. I specialize in
            creating clean, efficient, and user-friendly interfaces using React
            and modern frontend technologies. My expertise includes component
            development, state management, API integration, and performance
            optimization. I thrive on solving complex problems and continuously
            improving my skills to deliver high-quality solutions that meet
            client needs. When I'm not coding, I enjoy exploring new tech trends
            and contributing to open-source projects.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            WORK EXPERIENCE{" "}
          </p>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            Latitude Technolabs PVT. LTD.
            <br />
            <span className="text-xs leading-2">
              React.js Developer (Jan 2024 - Present)
            </span>
          </p>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="py-10 sm:py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
            Skills
          </h2>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {[
              {
                name: "React",
                icon: <FaReact className="text-cyan-400" />,
                glow: "from-cyan-400/30 to-blue-500/30",
              },
              {
                name: "JavaScript",
                icon: <SiJavascript className="text-yellow-400" />,
                glow: "from-yellow-400/30 to-orange-500/30",
              },
              {
                name: "Next.js",
                icon: <SiNextdotjs className="text-white" />,
                glow: "from-white/20 to-gray-400/20",
              },
              {
                name: "HTML",
                icon: <FaHtml5 className="text-orange-500" />,
                glow: "from-orange-400/30 to-red-500/30",
              },
              {
                name: "CSS",
                icon: <FaCss3Alt className="text-blue-400" />,
                glow: "from-blue-400/30 to-indigo-500/30",
              },
              {
                name: "SCSS",
                icon: <SiSass className="text-pink-400" />,
                glow: "from-pink-400/30 to-rose-500/30",
              },
              {
                name: "Tailwind",
                icon: <SiTailwindcss className="text-cyan-300" />,
                glow: "from-cyan-300/30 to-sky-500/30",
              },
              {
                name: "Bootstrap",
                icon: <FaBootstrap className="text-purple-500" />,
                glow: "from-purple-400/30 to-indigo-600/30",
              },
              {
                name: "Git",
                icon: <FaGitAlt className="text-orange-400" />,
                glow: "from-orange-400/30 to-red-500/30",
              },
            ].map((skill) => (
              <div
                key={skill.name}
                className="
                  group relative
                  w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36
                  rounded-2xl bg-white/5 backdrop-blur
                  border border-white/10
                  flex flex-col items-center justify-center gap-2
                  transition-all duration-700 ease-out"
              >
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 bg-gradient-to-br ${skill.glow} transition-opacity duration-700 group-hover:opacity-100`}
                />

                <div className="relative z-10 text-3xl sm:text-4xl transition-transform duration-700 group-hover:scale-110">
                  {skill.icon}
                </div>

                <p className="relative z-10 text-xs sm:text-sm tracking-wide">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        id="Projects"
        className="relative py-10 sm:py-20 sm:py-28 border-t border-white/10"
      >
        <div className=" absolute inset-0 bg-[url('../src/assets/background.png')] bg-no-repeat bg-center bg-cover pointer-events-none" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-14">
            Projects
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((projects, index) => (
              <div
                key={index}
                className="p-4 border border-white/20  hover:border-white hover:-translate-y-2 transition"
              >
                <img
                  src={projects.image}
                  alt={projects.title}
                  className="w-full h-40 object-cover  mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{projects.title}</h3>
                <p className="text-gray-400 text-sm">{projects.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="Contact"
        className="py-10 sm:py-20 sm:py-28 border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Connect with Me
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mb-2">
            +91 8401344055
          </p>
          <p className="text-gray-400 text-sm sm:text-base mb-8">
            yashnpatel99@gmail.com · Ahmedabad
          </p>

          <a
            href="mailto:yashnpatel99@gmail.com"
            className="inline-block px-8 py-3 sm:px-10 sm:py-4 border border-white hover:bg-white hover:text-black transition"
          >
            Send Email
          </a>
        </div>
      </section>

      <footer className="py-8 border-t border-white/10 text-center text-xs sm:text-sm text-gray-500">
        © Yash Patel
      </footer>
    </div>
  );
}
