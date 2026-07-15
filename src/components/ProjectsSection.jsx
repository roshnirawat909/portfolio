import React, { useRef } from "react";
import GithubIcon from "../icons Components/GithubIcon";
import ExternalLinkIcon from "../icons Components/ExternalLinkIcon";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ProjectsSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const projects = [
    {
      title: "Blood Bank Management System (BBMS)",
      description:
        "A web-based platform designed to streamline blood donations, hospital requests, and inventory tracking. BBMS replaces manual processes with a structured digital workflow, enabling hospitals and blood banks to access real-time inventory, maintain donor records, and process blood requests efficiently.",
      tags: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS"],
      image: "/BloodBank.png",
      liveUrl: "https://blood-bank-tau-one.vercel.app/",
      repoUrl: "https://github.com/roshnirawat909/blood-bank",
      category: "Full Stack",
    },

    {
      title: " GradeTrack University – Student Progression System",
      description:
        "A modern full-stack web application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js) that enables students to monitor academic performance, manage semesters, track grades, and calculate GPA efficiently.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      image:
        "/Student.png",
      liveUrl: "https://student-progression.vercel.app/",
      repoUrl:
        "https://github.com/roshnirawat909/Student-Progression#gradetrack---mern-stack",
      category: "Full Stack",
    },

    {
      title: "BlogifyHub",
      description:
        "A secure, bilingual blogging platform with semantic search, streamlined repo collaboration, and elegant UI/UX. Features include authentication, file uploads, and generative AI integrations.",
      tags: ["React", "Node.js", "MongoDB", "AI", "TailwindCSS", "GSAP"],
      image: "/Blog.png",
      liveUrl: "https://full-stack-blog-v5op.vercel.app/",
      repoUrl: "https://github.com/roshnirawat909/FullStackBlog",
      category: "Full Stack",
    },

    {
      title: "College Club Management System",
      description:
        "A full-stack web application designed to manage college clubs, members, and events efficiently. Built with React and TailwindCSS on the frontend, and Node.js, Express, and MongoDB on the backend. The system allows students to join clubs, register for events, and view announcements, while administrators can manage members, schedule events, and track participation through a secure, centralized dashboard with authentication and role-based access control.",
      tags: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
      image:
        "/collegeClub.png",
      liveUrl: "https://college-club-management-gray.vercel.app/",
      repoUrl: "https://github.com/roshnirawat909/collegeClubManagementProject",
      category: "Full Stack",
    },
    {
      title: "chatbot",
      description:
        "Built a chatbot application powered by Ollama running locally hosted LLMs, enabling private and real-time AI conversations without external API dependencies. Developed the frontend in React and integrated backend APIs using Node.js and Express for seamless communication with local AI models.",
      tags: ["React", "Node.js", "MongoDB", "AI", "TailwindCSS", "GSAP"],
      image: "/chatBot.png",
      liveUrl: "",
      repoUrl: "https://github.com/roshnirawat909/Chatbot",
      category: "Full Stack",
    },

    {
      title: "Shopify",
      description:
        "A modern and responsive e-commerce platform where users can browse products, add items to their cart, and complete secure checkouts. The site features product categories, search functionality, and a clean UI for a seamless shopping experience.",
      tags: ["React", "JavaScript", "TailwindCSS", "REST API"],
      image: "/shopify.png",
      liveUrl: "https://shopify-tau-two.vercel.app/",
      repoUrl: "https://github.com/roshnirawat909/Shopify",
      category: "Frontend",
    },
    {
      title: "weather forecasting  website",
      description:
        "A responsive weather forecasting web application that provides real-time weather information for any city. Users can search locations to view temperature, humidity, wind speed, and weather conditions through an intuitive and modern interface.",
      tags: [
        "React",
        "OpenWeather API",
        "JavaScript",
        "TailwindCSS",
        "REST API",
      ],
      image:
        "/weather.png",
      liveUrl: "https://weather-forcasting-sigma.vercel.app/",
      repoUrl: "https://github.com/roshnirawat909/weather-forcasting-",
      category: "Frontend",
    },

    {
      title: "Book Discovery",
      description:
        "A website for browsing and discovering books with category filters and detailed book pages.",
      tags: ["HTML", "CSS"],
      image: "/Book.png",
      liveUrl: "https://roshnirawat909.github.io/project2/",
      repoUrl: "https://github.com/roshnirawat909/project2",
      category: "Website",
    },

    {
      title: "Hero Section",
      description:
        "A visually appealing hero section for a website, featuring a captivating background image, bold headline, and a call-to-action button.",
      tags: ["HTML", "CSS"],
      image: "/hero.png",
      liveUrl: "https://roshnirawat909.github.io/herosection/",
      repoUrl: "https://github.com/roshnirawat909/herosection",
      category: "Feature",
    },

    {
      title: "Scroll Animations",
      description:
        "Interactive site with smooth scroll-based animations using GSAP and Tailwind CSS.",
      tags: ["HTML", "TailwindCSS", "GSAP"],
      image: "/animation.png",
      liveUrl: "https://roshnirawat909.github.io/Scroll--Trigger/",
      repoUrl: "https://github.com/roshnirawat909/Scroll--Trigger",
      category: "Animation",
    },
    {
      title: "SolarSave",
      description:
        "A solar energy awareness website providing information about solar power and renewable energy benefits.",
      tags: ["HTML", "CSS"],
      image: "/solar.png",
      liveUrl: "https://roshnirawat909.github.io/Website/",
      repoUrl: "https://github.com/roshnirawat909/Website",
      category: "Website",
    },
  ];

  // Temporarily disabled GSAP animation for debugging
  /*
    useEffect(() => {
        // Simple GSAP animation with error handling
        try {
            const ctx = gsap.context(() => {
                gsap.from('.projects-title', {
                    scrollTrigger: {
                        trigger: '.projects-title',
                        start: 'top 80%',
                    },
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                });

                gsap.from(cardsRef.current, {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                    },
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.1,
                });
            }, sectionRef);

            return () => ctx.revert();
        } catch (error) {
            console.error('GSAP Animation Error:', error);
        }
    }, []);
    */

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center py-20 bg-[var(--color-background)]"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-pricedown text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
            My <span className=" text-[var(--color-text)]">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-[var(--color-text-muted)]">
            Here are some of the projects I've worked on
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              ref={addToRefs}
              className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-[var(--color-surface)] border border-[color:var(--color-border)] hover:border-[#3B82F6]/50 hover:shadow-[#22D3EE]/10"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full bg-[#3B82F6]/80 text-white">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className=" text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors text-[var(--color-text)]">
                  {project.title}
                </h3>
                <p className="text-sm mb-4 line-clamp-2 text-[var(--color-text-muted)]">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {(Array.isArray(project.tags) ? project.tags : [])
                    .slice(0, 4)
                    .map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2 py-1 rounded-full bg-[#3B82F6]/20 text-[#22D3EE]"
                      >
                        {tag}
                      </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex justify-end gap-4 pt-4 border-t border-gray-700">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium transition-colors duration-300 hover:text-cyan-400 text-[#F8FAFC]"
                    >
                      <GithubIcon className="w-5 h-5" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium transition-colors duration-300 hover:text-cyan-400 text-[#F8FAFC]"
                    >
                      <ExternalLinkIcon className="w-5 h-5" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
