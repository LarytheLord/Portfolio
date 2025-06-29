'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  useEffect(() => {
    const AOS = require('aos');
    AOS.init({
      duration: 1000,
      once: true,
    });

    const particlesJS = require('particles.js');
    particlesJS('particles-js', {
      particles: {
        number: { value: 80 },
        color: { value: '#3B82F6' },
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: 3 },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#3B82F6',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
        },
      },
    });

    function animateSkillBars() {
      document.querySelectorAll('.skill-progress').forEach((bar) => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      });
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateSkillBars();
        }
      });
    });

    document.querySelectorAll('.skill-bar').forEach((bar) => {
      observer.observe(bar);
    });

    function toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
      const icon = document.getElementById('darkModeIcon');
      if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('darkMode', 'enabled');
      } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('darkMode', 'disabled');
      }
    }

    document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);

    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
      document.getElementById('darkModeIcon').classList.remove('fa-moon');
      document.getElementById('darkModeIcon').classList.add('fa-sun');
    }
    animateSkillBars();

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
        });
      });
    });

    const scrollToTopButton = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollToTopButton.classList.add('visible');
      } else {
        scrollToTopButton.classList.remove('visible');
      }
    });

    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }, []);

  return (
    <>
      <Head>
        <title>Abid Khan - Portfolio</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <link
          href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="particle-background" id="particles-js"></div>
      <nav
        className="fixed w-full bg-opacity-90 z-50"
        style={{ backgroundColor: 'var(--card-bg)' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold">Abid Khan</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                id="darkModeToggle"
                className="p-2 rounded-full"
                style={{ backgroundColor: 'var(--border)' }}
              >
                <i id="darkModeIcon" className="fas fa-moon"></i>
              </button>
              <Link href="#about" className="nav-link">
                About
              </Link>
              <Link href="/projects" className="nav-link">
                Projects
              </Link>
              <Link href="#skills" className="nav-link">
                Skills
              </Link>
              <Link href="/MyCV.pdf" className="nav-link">
                Experience
              </Link>
              <Link href="https://bento.me/larythelord" className="nav-link">
                Contact
              </Link>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                onClick={() =>
                  window.open(
                    'https://github.com/LarytheLord/Portfolio/blob/main/public/laryson-portfolio(1).md',
                    '_blank'
                  )
                }
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2" data-aos="fade-right">
            <h1 className="text-5xl font-bold mb-4">
              Front-end Developer <br />& AI Enthusiast
            </h1>
            <p className="text-xl mb-8">
              Crafting beautiful and functional web experiences with modern
              technologies
            </p>
            <div className="flex space-x-4">
              <Link
                href="#contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Get in touch
              </Link>
              <Link
                href="#projects"
                className="border px-6 py-3 rounded-md hover:bg-gray-100 transition duration-300"
                style={{ borderColor: 'var(--text)' }}
              >
                View Projects
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0" data-aos="fade-left">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden profile-img">
                <img
                  src="/pf.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0n8u5TxTg0s?si=bthaI-FrQOwRIKQF"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl font-bold mb-12 text-center"
            data-aos="fade-up"
          >
            About Me
          </h2>
          <div
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="text-lg leading-relaxed">
              I'm Abid Khan, a Computer Engineering graduate from GIDC Degree
              Engineering College, Gujarat Technological University. As an
              enthusiastic AI developer and web application builder, I
              specialize in front-end development, with expertise in React.js,
              Flutter, and various other modern technologies. My passion lies
              in solving complex problems and creating user-friendly
              interfaces, particularly in cross-platform development. With a
              keen eye for detail and a drive for innovation, I'm constantly
              pushing the boundaries of what's possible in both AI and web
              technologies.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl font-bold mb-12 text-center"
            data-aos="fade-up"
          >
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="project-card card rounded-lg p-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-category="web"
            >
              <h3 className="text-xl font-bold mb-2">ReEarth</h3>
              <p className="mb-4">
                A circular economy web app for buying, selling, and trading
                second-hand goods, reducing waste via 3R principles. Features
                include a user-friendly interface, community engagement, and a
                gamified rewards system.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Circular Economy</span>
              </div>
              <div className="flex justify-between">
                <a
                  href="https://reearthweb.netlify.app/"
                  className="text-blue-500 hover:text-blue-600 transition duration-300"
                >
                  <i className="fas fa-external-link-alt mr-1"></i> Live Demo
                </a>
                <a
                  href="https://github.com/LarytheLord/hilander.io"
                  className="text-blue-500 hover:text-blue-600 transition duration-300"
                >
                  <i className="fab fa-github mr-1"></i> Source Code
                </a>
              </div>
            </div>
            <div
              className="project-card card rounded-lg p-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-category="web"
            >
              <h3 className="text-xl font-bold mb-2">Hilander</h3>
              <p className="mb-4">
                A document management web app featuring an AI document manager
                that uploads documents from messaging apps, categorizing them
                by importance and subject.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Hugging Face</span>
                <span className="skill-tag">Supabase</span>
              </div>
              <div className="flex justify-between">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 transition duration-300"
                >
                  <i className="fas fa-external-link-alt mr-1"></i> Live Demo
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 transition duration-300"
                >
                  <i className="fab fa-github mr-1"></i> Source Code
                </a>
              </div>
            </div>
            <div
              className="project-card card rounded-lg p-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-category="web"
            >
              <h3 className="text-xl font-bold mb-2">Hiking Buddy</h3>
              <p className="mb-4">
                An AR web app for nature exploration, identifying plants and
                animals and overlaying information to enhance outdoor
                experiences.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">AR.js</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Vite.js</span>
              </div>
              <div className="flex justify-between">
                <a
                  href="https://hiking-buddy.vercel.app/"
                  className="text-blue-500 hover:text-blue-600 transition duration-300"
                >
                  <i className="fas fa-external-link-alt mr-1"></i> Live Demo
                </a>
                <a
                  href="https://github.com/Super1115/hikingBuddy"
                  className="text-blue-500 hover:text-blue-600 transition duration-300"
                >
                  <i className="fab fa-github mr-1"></i> Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Skills &amp; Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Python</span>
                <span>90%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: '90%' }}
                ></div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Flutter</span>
                <span>85%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">JavaScript/TypeScript</span>
                <span>80%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: '80%' }}
                ></div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">React.js</span>
                <span>85%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Node.js</span>
                <span>75%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">AWS</span>
                <span>70%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl font-bold mb-12 text-center"
            data-aos="fade-up"
          >
            Work Experience
          </h2>
          <div className="timeline">
            <div className="timeline-item left" data-aos="fade-right">
              <div className="content">
                <h3 className="font-bold">Hackathon Winner</h3>
                <p>
                  Team MorphoLogic AI at BioML Hackathon by LUX Capital
                </p>
                <p>
                  Won the RXRX prize for innovative AI solution in cellular
                  analysis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8" style={{ backgroundColor: 'var(--card-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Abid Khan. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              className="text-gray-400 hover:text-white transition duration-300"
              href="https://x.com/larysonlawliet"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="text-gray-400 hover:text-white transition duration-300"
              href="https://www.linkedin.com/in/abikhn/"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="text-gray-400 hover:text-white transition duration-300"
              href="https://github.com/LarytheLord"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </footer>

      <div className="scroll-to-top" id="scrollToTop">
        <i className="fas fa-arrow-up"></i>
      </div>
    </>
  );
};

export default Home;