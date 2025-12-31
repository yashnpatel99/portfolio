import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// import { useState, useEffect } from "react";

// function App() {
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ["home", "about", "projects", "contact"];
//       const scrollPosition = window.scrollY + 100;

//       sections.forEach((section) => {
//         const element = document.getElementById(section);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (
//             scrollPosition >= offsetTop &&
//             scrollPosition < offsetTop + offsetHeight
//           ) {
//             setActiveSection(section);
//           }
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-900 text-white overflow-hidden">
//       {/* Background Effects */}
//       <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
//       <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
//       <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>

//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-xl z-50 border-b border-slate-700/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//               YASH PATEL
//             </div>
//             <div className="hidden md:flex space-x-8">
//               {[
//                 { id: "home", label: "Home" },
//                 { id: "about", label: "About" },
//                 { id: "projects", label: "Projects" },
//                 { id: "contact", label: "Contact" },
//               ].map(({ id, label }) => (
//                 <button
//                   key={id}
//                   onClick={() => scrollToSection(id)}
//                   className={`relative px-3 py-2 transition-all duration-300 ${
//                     activeSection === id
//                       ? "text-white font-medium"
//                       : "text-slate-400 hover:text-white"
//                   }`}
//                 >
//                   {label}
//                   {activeSection === id && (
//                     <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
//                   )}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section
//         id="home"
//         className="relative min-h-screen flex items-center justify-center"
//       >
//         <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="mb-12 mt-24">
//             <div className="inline-block mb-6">
//               <span className="px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-400 text-sm font-medium backdrop-blur-sm">
//                 👋 Welcome to my portfolio
//               </span>
//             </div>
//             <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
//               <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
//                 Hi, I'm
//               </span>
//               <br />
//               <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 Yash
//               </span>
//             </h1>
//             <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
//               React.js Developer with 2+ years of experience building scalable,
//               high-performance web applications with modern UI and seamless API
//               integrations
//             </p>

//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//               <button
//                 onClick={() => scrollToSection("projects")}
//                 className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105"
//               >
//                 <span className="relative z-10">View My Work</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </button>
//               <button
//                 onClick={() => scrollToSection("contact")}
//                 className="px-8 py-4 border-2 border-slate-600 text-slate-300 rounded-xl font-semibold hover:border-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105"
//               >
//                 Get In Touch
//               </button>
//             </div>
//           </div>

//           {/* Social Links */}
//           <div className="flex justify-center space-x-8 mb-16">
//             {[
//               {
//                 name: "LinkedIn",
//                 icon: (
//                   <svg
//                     className="w-6 h-6"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                   </svg>
//                 ),
//                 href: "#",
//               },
//               {
//                 name: "GitHub",
//                 icon: (
//                   <svg
//                     className="w-6 h-6"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                   </svg>
//                 ),
//                 href: "#",
//               },
//               {
//                 name: "Twitter",
//                 icon: (
//                   <svg
//                     className="w-6 h-6"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//                   </svg>
//                 ),
//                 href: "#",
//               },
//             ].map(({ name, icon, href }) => (
//               <a
//                 key={name}
//                 href={href}
//                 className="p-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-400 hover:text-white hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-110"
//               >
//                 {icon}
//               </a>
//             ))}
//           </div>

//           {/* Scroll Indicator */}
//           <div className="animate-bounce">
//             <button
//               onClick={() => scrollToSection("about")}
//               className="text-slate-400 hover:text-white transition-colors"
//             >
//               <svg
//                 className="w-6 h-6 mx-auto"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 14l-7 7m0 0l-7-7m7 7V3"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="relative py-32">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-20 items-center">
//             <div className="space-y-8">
//               <div>
//                 <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
//                   <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                     About Me
//                   </span>
//                 </h2>
//                 <p className="text-xl text-slate-300 leading-relaxed mb-6">
//                   I'm a React.js Developer with 2+ years of hands-on experience
//                   building modern, responsive, and user-focused web
//                   applications. I specialize in creating clean UI, reusable
//                   components, and smooth user experiences using React and
//                   Tailwind CSS.
//                 </p>

//                 <p className="text-lg text-slate-400 leading-relaxed">
//                   I have strong experience in REST API integration, state
//                   management, performance optimization, and converting Figma
//                   designs into pixel-perfect interfaces. I enjoy solving
//                   real-world problems and continuously improving my skills with
//                   modern frontend tools and best practices.
//                 </p>
//               </div>

//               <div className="grid grid-cols-2 gap-8">
//                 <div className="space-y-4">
//                   <h3 className="text-lg font-semibold text-white">Frontend</h3>
//                   <ul className="space-y-2 text-slate-400">
//                     <li className="flex items-center">
//                       <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
//                       React.js
//                     </li>
//                     <li className="flex items-center">
//                       <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
//                       JavaScript (ES6+)
//                     </li>
//                     <li className="flex items-center">
//                       <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
//                       Tailwind CSS
//                     </li>
//                     <li className="flex items-center">
//                       <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
//                       Bootstrap
//                     </li>
//                     <li className="flex items-center">
//                       <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
//                       REST API Integration
//                     </li>
//                     <li className="flex items-center">
//                       <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
//                       Figma to React
//                     </li>
//                   </ul>
//                 </div>
//                 {/* <div className="space-y-4">
//                   <h3 className="text-lg font-semibold text-white">Backend</h3>
//                   <ul className="space-y-2 text-slate-400">
//                     <li className="flex items-center">
//                       <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
//                       Node.js & Express
//                     </li>
//                     <li className="flex items-center">
//                       <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
//                       Python & Django
//                     </li>
//                     <li className="flex items-center">
//                       <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
//                       MongoDB & PostgreSQL
//                     </li>
//                   </ul>
//                 </div> */}
//               </div>
//             </div>

//             <div className="relative">
//               <div className="relative z-10">
//                 <div className="w-80 h-80 mx-auto relative">
//                   <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform rotate-6 opacity-75"></div>
//                   <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl transform -rotate-6 opacity-75"></div>
//                   <div className="relative bg-slate-800 border border-slate-700 rounded-3xl p-8 flex items-center justify-center">
//                     <div className="text-center">
//                       <div className="text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
//                         Y
//                       </div>
//                       <div className="space-y-2">
//                         <h3 className="text-xl font-semibold text-white">
//                           Yash Patel
//                         </h3>
//                         <p className="text-slate-400">React.js Developer</p>
//                         <p className="text-slate-500 text-sm">Ahemedabad</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating Elements */}
//               <div className="absolute top-10 right-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
//               <div className="absolute bottom-10 left-10 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="relative py-32">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                 Featured Projects
//               </span>
//             </h2>
//             <p className="text-xl text-slate-300 max-w-3xl mx-auto">
//               Here are some of my recent projects that showcase my skills and
//               passion for development
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "E-Commerce Platform",
//                 description:
//                   "Full-stack e-commerce solution with React, Node.js, and Stripe integration featuring real-time inventory management.",
//                 tech: ["React", "Node.js", "MongoDB", "Stripe"],
//                 gradient: "from-blue-500 to-cyan-500",
//                 icon: "🛒",
//               },
//               {
//                 title: "Task Management App",
//                 description:
//                   "Collaborative task management with real-time updates, drag-and-drop functionality, and team collaboration features.",
//                 tech: ["React", "Firebase", "Tailwind"],
//                 gradient: "from-purple-500 to-pink-500",
//                 icon: "📋",
//               },
//               {
//                 title: "Weather Dashboard",
//                 description:
//                   "Responsive weather app with location services, interactive maps, and personalized weather alerts.",
//                 tech: ["Vue.js", "OpenWeather API", "CSS"],
//                 gradient: "from-green-500 to-teal-500",
//                 icon: "🌤️",
//               },
//               {
//                 title: "Portfolio Website",
//                 description:
//                   "Modern portfolio built with React and Tailwind CSS featuring smooth animations and optimized performance.",
//                 tech: ["React", "Tailwind", "Vite"],
//                 gradient: "from-orange-500 to-red-500",
//                 icon: "💼",
//               },
//               {
//                 title: "Chat Application",
//                 description:
//                   "Real-time chat app with WebSocket integration, user authentication, and message encryption.",
//                 tech: ["React", "Socket.io", "Express"],
//                 gradient: "from-indigo-500 to-purple-500",
//                 icon: "💬",
//               },
//               {
//                 title: "Data Visualization",
//                 description:
//                   "Interactive dashboard for business analytics with customizable charts and real-time data updates.",
//                 tech: ["D3.js", "React", "Python"],
//                 gradient: "from-pink-500 to-rose-500",
//                 icon: "📊",
//               },
//             ].map((project, index) => (
//               <div
//                 key={project.title}
//                 className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
//               >
//                 <div
//                   className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl relative overflow-hidden`}
//                 >
//                   <div className="absolute inset-0 bg-black/20"></div>
//                   <span className="relative z-10">{project.icon}</span>
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                 </div>

//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
//                     {project.title}
//                   </h3>
//                   <p className="text-slate-400 mb-4 text-sm leading-relaxed">
//                     {project.description}
//                   </p>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tech.map((tech) => (
//                       <span
//                         key={tech}
//                         className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-xs font-medium border border-slate-600/50"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                   <button className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium group">
//                     View Project
//                     <svg
//                       className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </button>
//                 </div>

//                 {/* Hover Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="relative py-32">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//               Let's Work Together
//             </span>
//           </h2>
//           <p className="text-xl text-slate-300 mb-16 max-w-3xl mx-auto">
//             I'm always interested in new opportunities and exciting projects.
//             Let's discuss how we can bring your ideas to life!
//           </p>

//           <div className="grid md:grid-cols-3 gap-8 mb-16">
//             {[
//               {
//                 icon: "📧",
//                 title: "Email",
//                 content: "yashnpatel99@gmail.com",
//                 href: "mailto:yashnpatel99@gmail.com",
//                 gradient: "from-blue-500 to-cyan-500",
//               },
//               {
//                 icon: "📱",
//                 title: "Phone",
//                 content: "8401344055",
//                 href: "tel:8401344055",
//                 gradient: "from-purple-500 to-pink-500",
//               },
//               {
//                 icon: "📍",
//                 title: "Location",
//                 content: "Ahemedabad",
//                 href: "#",
//                 gradient: "from-green-500 to-teal-500",
//               },
//             ].map((item) => (
//               <div
//                 key={item.title}
//                 className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all duration-300 transform hover:scale-105"
//               >
//                 <div
//                   className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
//                 >
//                   {item.icon}
//                 </div>
//                 <h3 className="font-semibold mb-3 text-white">{item.title}</h3>
//                 <a
//                   href={item.href}
//                   className="text-slate-400 hover:text-blue-400 transition-colors"
//                 >
//                   {item.content}
//                 </a>
//               </div>
//             ))}
//           </div>

//           <div className="flex justify-center space-x-8">
//             {[
//               {
//                 name: "LinkedIn",
//                 icon: (
//                   <svg
//                     className="w-8 h-8"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                   </svg>
//                 ),
//                 href: "#",
//               },
//               {
//                 name: "GitHub",
//                 icon: (
//                   <svg
//                     className="w-8 h-8"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                   </svg>
//                 ),
//                 href: "#",
//               },
//               {
//                 name: "Twitter",
//                 icon: (
//                   <svg
//                     className="w-8 h-8"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//                   </svg>
//                 ),
//                 href: "#",
//               },
//             ].map(({ name, icon, href }) => (
//               <a
//                 key={name}
//                 href={href}
//                 className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-2xl text-slate-400 hover:text-white hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-110"
//               >
//                 {icon}
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="relative py-12 border-t border-slate-700/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <p className="text-slate-400">Yash Patel</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;
