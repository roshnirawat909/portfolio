import React, { useRef } from 'react';
import GithubIcon from '../icons Components/GithubIcon';
import ExternalLinkIcon from '../icons Components/ExternalLinkIcon';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ProjectsSection() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    const projects = [
        {
            title: 'Blood Bank Management System (BBMS)',
            description: 'A web-based platform designed to streamline blood donations, hospital requests, and inventory tracking. BBMS replaces manual processes with a structured digital workflow, enabling hospitals and blood banks to access real-time inventory, maintain donor records, and process blood requests efficiently.',
            tags: ['React', 'Node.js', 'MongoDB', 'Express', 'TailwindCSS'],
            image: 'https://placehold.co/600x400/d32f2f/ffffff?text=Blood+Bank+Management+System',
            liveUrl: 'https://blood-bank-five-woad.vercel.app/',
            repoUrl: 'https://github.com/roshnirawat909/blood-bank',
            category: 'Full Stack'
        },

        {
            title: 'BlogifyHub',
            description: 'A secure, bilingual blogging platform with semantic search, streamlined repo collaboration, and elegant UI/UX. Features include authentication, file uploads, and generative AI integrations.',
            tags: ['React', 'Node.js', 'MongoDB', 'AI', 'TailwindCSS', 'GSAP'],
            image: 'https://placehold.co/600x400/4c1d95/38bdf8?text=BlogifyHub',
            liveUrl: 'https://full-stack-blog-wf3k-giryqlp1n-roshnirawat909s-projects.vercel.app/',
            repoUrl: 'https://github.com/roshnirawat909/FullStackBlog',
            category: 'Full Stack'
        },
        {
            title: 'DSA Visualizer',
            description: 'An interactive platform for visualizing Data Structures and Algorithms. Helps learners understand sorting, searching, graph traversal through step-by-step animations.',
            tags: ['JavaScript', 'React', 'Algorithms', 'DSA', 'Visualization', 'GSAP'],
            image: 'https://placehold.co/600x400/065f46/34d399?text=DSA+Visualizer',
            liveUrl: '',
            repoUrl: '',
            category: 'Full Stack + Generative AI'
        },
        {
            title: 'College Club Management System',
            description: 'A full-stack web application designed to manage college clubs, members, and events efficiently. Built with React and TailwindCSS on the frontend, and Node.js, Express, and MongoDB on the backend. The system allows students to join clubs, register for events, and view announcements, while administrators can manage members, schedule events, and track participation through a secure, centralized dashboard with authentication and role-based access control.',
            tags: ['React', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
            image: 'https://placehold.co/600x400/7c3aed/ffffff?text=Club+Management+System',
            liveUrl: 'https://college-club-management-project-8vu.vercel.app/',
            repoUrl: 'https://github.com/roshnirawat909/collegeClubManagementProject',
            category: 'Full Stack'
        },

        {
            "title": "Posting Website",
            "description": "A secure, bilingual platform designed for posting and sharing content with semantic search, streamlined repo collaboration, and elegant UI/UX. Features include authentication, file uploads, and generative AI integrations.",
            "tags": ["React", "Node.js", "MongoDB", "TailwindCSS", "GSAP"],
            "image": "https://placehold.co/600x400/4c1d95/38bdf8?text=Posting+Website",
            "liveUrl": "https://post-eight-chi.vercel.app/",
            "repoUrl": "https://github.com/roshnirawat909/post",
            "category": "Full Stack"
        },
        {
            title: 'College Club Management System',
            description: 'A web-based platform designed to manage college clubs, members, and events efficiently. The system allows students to join clubs, register for events, and view announcements, while administrators can manage members, schedule events, and track participation through a centralized dashboard.',
            tags: ['React', 'TailwindCSS'],
            image: 'https://placehold.co/600x400/7c3aed/ffffff?text=Club+Management+System',
            liveUrl: 'https://college-club-management-gray.vercel.app/',
            repoUrl: 'https://github.com/roshnirawat909/collegeClubManagement',
            category: 'Frontend'
        },
        {
            title: 'Shopify',
            description: 'A modern and responsive e-commerce platform where users can browse products, add items to their cart, and complete secure checkouts. The site features product categories, search functionality, and a clean UI for a seamless shopping experience.',
            tags: ['React', 'JavaScript', 'TailwindCSS', 'REST API'],
            image: 'https://placehold.co/600x400/f97316/1e293b?text=Shopping+Website',
            liveUrl: 'https://shopify-tau-two.vercel.app/',
            repoUrl: 'https://github.com/roshnirawat909/Shopify',
            category: 'Frontend'
        },
        {
            title: 'weather forecasting  website',
            description: 'A responsive weather forecasting web application that provides real-time weather information for any city. Users can search locations to view temperature, humidity, wind speed, and weather conditions through an intuitive and modern interface.',
            tags: ['React', 'OpenWeather API', 'JavaScript', 'TailwindCSS', 'REST API'],
            image: 'https://placehold.co/600x400/0ea5e9/1e293b?text=Weather+Forecast+App',
            liveUrl: 'https://weather-forcasting-sigma.vercel.app/',
            repoUrl: 'https://github.com/roshnirawat909/weather-forcasting-',
            category: 'Frontend'
        },
        {
            title: 'E-commerce website',
            description: 'A React-based e-commerce platform with category filters, detailed product pages, shopping cart functionality, and modern UI design.',
            tags: ['React', 'TailwindCSS'],
            image: 'https://placehold.co/600x400/7c3aed/a78bfa?text=E-Commerce',
            liveUrl: 'https://e-commerce-puce-one.vercel.app/#/ ',
            repoUrl: 'https://github.com/roshnirawat909/E-commerce',
            category: 'Frontend'
        },
        {
            title: 'TODO List',
            description: ' A simple and interactive task management web application that allows users to add, complete, and delete tasks. react-based to-do list app with a clean UI, allowing users to manage tasks efficiently. Features include adding, editing, and deleting tasks, as well as marking them as complete.',
            tags: ['React', 'TailwindCSS'],
            image: 'https://placehold.co/600x400/7c3aed/ffffff?text= TODO+List',
            liveUrl: '',
            repoUrl: 'https://github.com/roshnirawat909/ToDoList',
            category: 'Frontend'
        },
        {
            title: 'Stopwatch ',
            description: 'A responsive stopwatch with start, pause, reset, and lap-time functionality. Clean UI with precise time tracking.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            image: 'https://placehold.co/600x400/0891b2/67e8f9?text=Stopwatch',
            liveUrl: 'https://roshnirawat909.github.io/Stop-Watch/',
            repoUrl: 'https://github.com/roshnirawat909/Stop-Watch',
            category: 'Mini Project'
        },
        {
            title: 'Memory Game',
            description: 'An interactive memory game with card-flipping mechanics, randomized layouts, score tracking, and responsive UI.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            image: 'https://placehold.co/600x400/7c2d12/fb923c?text=Memory+Game',
            liveUrl: 'https://roshnirawat909.github.io/Memory-game/',
            repoUrl: 'https://github.com/roshnirawat909/Memory-game',
            category: 'Game'
        },
        {
            title: 'Book Discovery',
            description: 'A website for browsing and discovering books with category filters and detailed book pages.',
            tags: ['HTML', 'CSS'],
            image: 'https://placehold.co/600x400/1e1b4b/a5b4fc?text=Book+Website',
            liveUrl: 'https://roshnirawat909.github.io/project2/',
            repoUrl: 'https://github.com/roshnirawat909/project2',
            category: 'Website'
        },
        {
            title: 'Hero Section',
            description: 'A visually appealing hero section for a website, featuring a captivating background image, bold headline, and a call-to-action button.',
            tags: ['HTML', 'CSS'],
            image: 'https://placehold.co/600x400/1e1b4b/a5b4fc?text=Hero+Section',
            liveUrl: 'https://roshnirawat909.github.io/herosection/',
            repoUrl: 'https://github.com/roshnirawat909/herosection',
            category: 'Feature'
        },
        {
            title: 'Social Media Profile Page',
            description: 'A clean and interactive social media profile page layout, showcasing user information, profile picture, posts, and a responsive design for modern web applications.',
            tags: ['HTML', 'CSS'],
            image: 'https://placehold.co/600x400/1e1b4b/a5b4fc?text=Profile+Page',
            liveUrl: 'https://roshnirawat909.github.io/Social-media-page/',
            repoUrl: 'https://github.com/roshnirawat909/Social-media-page',
            category: 'Feature'
        },
        {
            title: 'Scroll Animations',
            description: 'Interactive site with smooth scroll-based animations using GSAP and Tailwind CSS.',
            tags: ['HTML', 'TailwindCSS', 'GSAP'],
            image: 'https://placehold.co/600x400/0f172a/38bdf8?text=Scroll+Animation',
            liveUrl: 'https://roshnirawat909.github.io/Scroll--Trigger/',
            repoUrl: 'https://github.com/roshnirawat909/Scroll--Trigger',
            category: 'Animation'
        },
        {
            title: 'SolarSave',
            description: 'A solar energy awareness website providing information about solar power and renewable energy benefits.',
            tags: ['HTML', 'CSS'],
            image: 'https://placehold.co/600x400/166534/86efac?text=SolarSave',
            liveUrl: 'https://roshnirawat909.github.io/Website/',
            repoUrl: 'https://github.com/roshnirawat909/Website',
            category: 'Website'
        },
        {
            title: 'GSAP Animation',
            description: 'Creative project showcasing smooth text and image animations powered by GSAP.',
            tags: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
            image: 'https://placehold.co/600x400/4c1d95/c4b5fd?text=GSAP+Animation',
            liveUrl: 'https://roshnirawat909.github.io/GSAP-text-image-animation-project/',
            repoUrl: 'https://github.com/roshnirawat909/GSAP-text-image-animation-project',
            category: 'Animation'
        },
        {
            title: 'Generate Person Cards by sorting  Name',
            description: 'An interactive web application that allows users to enter a name and dynamically generates a styled person profile card. The project demonstrates JavaScript DOM manipulation by creating and displaying cards dynamically based on user input.',
            tags: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation', 'Dynamic UI'],
            image: 'https://placehold.co/600x400/2563eb/ffffff?text=Person+Card+Generator',
            liveUrl: 'https://roshnirawat909.github.io/Card1/',
            repoUrl: 'https://github.com/roshnirawat909/Card1',
            category: 'Feature'
        },
        {
            title: 'Instagram Feature',
            description: 'Social feature for connecting with friends, managing friend lists, and profile linking.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            image: 'https://placehold.co/600x400/db2777/f9a8d4?text=Instagram+Feature',
            liveUrl: 'https://roshnirawat909.github.io/friend-add-Instagram-feature/',
            repoUrl: 'https://github.com/roshnirawat909/friend-add-Instagram-feature',
            category: 'Feature'
        },
        {
            title: 'To-Do List App',
            description: 'A simple and interactive task management web application that allows users to add, complete, and delete tasks. The project demonstrates JavaScript DOM manipulation, event handling, and dynamic UI updates using HTML, CSS, and JavaScript.',
            tags: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation', 'Task Manager'],
            image: 'https://placehold.co/600x400/22c55e/ffffff?text=Todo+List+App',
            liveUrl: 'https://roshnirawat909.github.io/ToDoApp/',
            repoUrl: 'https://github.com/roshnirawat909/ToDoApp',
            category: 'Feature'
        },
        {
            title: 'Instagram Friend Add Feature',
            description: 'A mini social media UI feature that simulates Instagram-style friend requests using a single button. Users can click the "Add Friend" button to send a request and toggle it to "Friends" or "Remove Friend" using JavaScript DOM manipulation.',
            tags: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation', 'UI Interaction'],
            image: 'https://placehold.co/600x400/f43f5e/ffffff?text=Add+Friend+Feature',
            liveUrl: 'https://roshnirawat909.github.io/-friend-add-Instagram-feature-by-one-button/',
            repoUrl: 'https://github.com/roshnirawat909/-friend-add-Instagram-feature-by-one-button',
            category: 'Feature'
        },
        {
            title: 'card designing',
            description: 'A card-based UI web application that allows users to enter a name and instantly generate stylish profile cards. The project focuses on modern card design, responsive layout, and JavaScript DOM manipulation to dynamically render multiple user cards.',
            tags: ['HTML', 'CSS', 'JavaScript', 'Card UI Design', 'DOM Manipulation'],
            image: 'https://placehold.co/600x400/2563eb/ffffff?text=Person+Card+Design',
            liveUrl: 'https://roshnirawat909.github.io/Card-Design/',
            repoUrl: 'https://github.com/roshnirawat909/Card-Design',
            category: 'Frontend'
        },
        {
            title: 'Cricket Team Display',
            description: 'A simple interactive web application that dynamically displays cricket team names using HTML, CSS, and JavaScript. Users can click a button to view a list of international cricket teams rendered on the page.',
            tags: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation'],
            image: 'https://placehold.co/600x400/16a34a/ffffff?text=Cricket+Teams',
            liveUrl: 'https://roshnirawat909.github.io/DOM-project/',
            repoUrl: 'https://github.com/roshnirawat909/DOM-project',
            category: 'Feature'
        },
        {
            title: 'Instagram Friend Add Feature',
            description: 'A mini social media UI feature that simulates Instagram-style friend requests using a  button. Users can click the "Add Friend" button to send a request  and Users can click the "remove  Friend" button to send a request to remove the friend .',
            tags: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation', 'UI Interaction'],
            image: 'https://placehold.co/600x400/f43f5e/ffffff?text=Add+Friend+Feature',
            liveUrl: 'https://roshnirawat909.github.io/friend-add-Instagram-feature/',
            repoUrl: 'https://github.com/roshnirawat909/friend-add-Instagram-feature',
            category: 'Feature'
        },
        {
            title: 'Generate Person Cards by choosing  Name',
            description: 'An interactive web application that allows users to enter a name and dynamically generates a styled person profile card. The project demonstrates JavaScript DOM manipulation by creating and displaying cards dynamically based on user input.',
            tags: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation', 'Dynamic UI'],
            image: 'https://placehold.co/600x400/2563eb/ffffff?text=Person+Card+Generator',
            liveUrl: 'https://roshnirawat909.github.io/card2/',
            repoUrl: 'https://github.com/roshnirawat909/card2',
            category: 'Feature'
        },
        {
            title: 'Instagram Like Feature',
            description: 'A mini web project that replicates the Instagram double-tap like functionality. Users can like a post by double-clicking the image, which triggers a heart animation similar to Instagram. Built using HTML, CSS, and JavaScript to demonstrate DOM manipulation and interactive UI behavior.',
            tags: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation', 'UI Animation'],
            image: 'https://placehold.co/600x400/e11d48/ffffff?text=Instagram+Like+Feature',
            liveUrl: 'https://roshnirawat909.github.io/-like-Instagram-feature-/',
            repoUrl: 'https://github.com/roshnirawat909/-like-Instagram-feature-',
            category: 'Feature'
        }
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
        <section id="projects" className="min-h-screen flex flex-col justify-center py-20 bg-[#0F172A]" ref={sectionRef}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="font-pricedown projects-title text-3xl md:text-4xl font-bold mb-4 text-[#F8FAFC]">
                        My <span className="text-[#6366F1]">Projects</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-[#94A3B8]">
                        Here are some of the projects I've worked on
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            ref={addToRefs}
                            className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-[#1E293B] border border-[#3B82F6]/20 hover:border-[#3B82F6]/50 hover:shadow-[#22D3EE]/10"
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
                                <h3 className="font-pricedown text-xl font-bold mb-2 group-hover:text-[#6366F1] transition-colors text-[#F8FAFC]">
                                    {project.title}
                                </h3>
                                <p className="text-sm mb-4 line-clamp-2 text-[#94A3B8]">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.slice(0, 4).map(tag => (
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
                                            className="flex items-center gap-2 text-sm font-medium transition-colors duration-300 hover:text-[#6366F1] text-[#F8FAFC]"
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
                                            className="flex items-center gap-2 text-sm font-medium transition-colors duration-300 hover:text-[#6366F1] text-[#F8FAFC]"
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

