'use client';

import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, AnimatePresence, Variants, easeInOut } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import emailjs from 'emailjs-com';

// Import icons from simple-icons
import {
  siReact,
  siNodedotjs,
  siTypescript,
  siDocker,
  siJavascript,
  siPython,
  siKubernetes,
  siTerraform,
  siAngular,
  siPostgresql,
  siRedux,
  siGit,
} from 'simple-icons/icons';

const titles = [
  "A Master's Degree Student",
  "A Full Stack Developer",
  "A Software Engineer",
  "A Senior FullStack Developer",
  "A Senior Technical Support Analyst",
  "AI and ML Researcher",
];

const icons = [
  siReact,
  siNodedotjs,
  siTypescript,
  siDocker,
  siJavascript,
  siPython,
  siKubernetes,
  siTerraform,
  siAngular,
  siPostgresql,
  siRedux,
  siGit,
];

const titleVariants: Variants = {
  initial: { opacity: 0, y: 20, scale: 0.95, color: "#fff" },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    color: [
      "#22d3ee",
      "#818cf8",
      "#fbbf24",
      "#f472b6",
      "#fff",
    ],
    transition: {
      duration: 1.3,
      repeat: Infinity,
      repeatType: "mirror",
      ease: easeInOut,
    },
  },
  exit: { opacity: 0, y: -20, scale: 0.95, color: "#fff" },
};

const sectionTitleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: easeInOut,
    },
  },
};

const nameAnimationVariants: Variants = {
  initial: { color: "#ffffff" },
  animate: {
    color: [
      "#ffffff",
      "#000000",
      "#ffffff",
      "#000000",
    ],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "mirror",  // valid values: "repeat", "mirror", "reverse"
      ease: easeInOut,
    },
  },
};

export default function Home() {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();
  const [rotationDirection, setRotationDirection] = useState(1);
  const [lastScrollY, setLastScrollY] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 1700);
    return () => clearTimeout(timeout);
  }, [index]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setRotationDirection(currentScrollY > lastScrollY ? 1 : -1);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    controls.start({
      rotate: 360 * rotationDirection,
      transition: {
        repeat: Infinity,
        ease: easeInOut,
        duration: 12,
      },
    });
  }, [rotationDirection, controls]);

  const radius = 210;
  const avatarWidth = 400;
  const avatarHeight = 360;
  const centerX = avatarWidth / 2;
  const centerY = avatarHeight / 2;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs.sendForm(
      "service_9h7xz7p",
      "template_pvdgtys",
      formRef.current,
      "96l7QYJR-YaBabzTX"
    )
      .then(() => {
        alert("Message sent successfully!");
        e.currentTarget.reset();
      })
      .catch((error) => {
        alert("Failed to send message, please try again.");
        console.error(error.text);
      });
  };

  return (
    <>
      {/* Home Section */}
      <section
        id="home"
        className="flex flex-col md:flex-row min-h-screen w-full bg-gray-500 items-center justify-center px-4 sm:px-6"
      >
        <div className="flex justify-center items-center md:w-1/3 w-full mt-20 mb-8 md:my-0 md:mt-16">
          <Image
            src="/profile.png"
            alt="Pahuldeep Singh"
            width={400}
            height={350}
            priority
            className="max-w-full h-auto"
          />
        </div>
        <div className="flex flex-col justify-center items-center md:items-end md:w-2/3 w-full px-4 py-8 md:px-10 ml-auto text-center md:text-right">
          <motion.span
            className="font-extrabold mt-10 cursor-pointer"
            style={{ fontSize: 68, fontFamily: "'Raleway', Arial, sans-serif" }}
            variants={nameAnimationVariants}
            initial="initial"
            animate="animate"
          >
            I am Pahuldeep Singh
          </motion.span>

          <div className="h-14 mt-6">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                variants={titleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="block text-xl md:text-4xl font-semibold text-white"
                style={{
                  fontFamily: "'JetBrains Mono', 'Fira Mono', monospace",
                }}
              >
                {titles[index]}
              </motion.span>
            </AnimatePresence>
          </div>
          <motion.a
            href="#contact"
            className="
              mt-24
              px-6 py-3 rounded-lg font-bold text-base md:text-lg
              bg-gradient-to-r from-gray-700 to-gray-400
              hover:from-indigo-500 hover:to-indigo-700
              transition-all duration-300
              cursor-pointer
              inline-block
              tracking-tight
              text-white
            "
            whileHover={{
              scale: 1.1,
              boxShadow: "0 8px 40px rgba(99, 102, 241, 0.6)",
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            Connect with me
          </motion.a>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="flex flex-col md:flex-row min-h-screen w-full bg-gray-500 px-4 sm:px-6 pt-0 pb-8"
      >
        <div className="md:w-2/3 max-w-4xl flex flex-col items-center justify-center mt-2 px-4 md:px-0">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 mt-4 md:mt-[20px] text-center text-black"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionTitleVariants}
          >
            About Me
          </motion.h2>
          <div className="text-base md:text-lg leading-relaxed max-w-full md:max-w-3xl text-white text-center space-y-4">
            <p>
              Hello! I’m Pahuldeep Singh, a passionate software developer and master’s degree student at Georgia Institute of Technology,
              specializing in Machine Learning, Deep Learning, Advanced Algorithms, and Cloud Computing.
            </p>
            <p>
              I have extensive experience as a Senior Full-Stack Developer at Calian Advanced Technologies, where I engineer scalable APIs and microservices,
              deploy AI/ML solutions, and work with technologies such as Angular, Node.js, Ruby on Rails, AWS, Docker, Kubernetes, Terraform, and more.
            </p>
            <p>
              Prior to this, I worked at Valley Fiber as a Full-Stack Developer focusing on React, Node.js, Python, ETL pipelines, and database optimization.
              I am skilled in building robust, maintainable software, with strong expertise in cloud infrastructure, testing, security best practices, and Agile methodologies.
            </p>
            <p>
              In addition to software development, I actively conduct research in artificial intelligence at Georgia Tech, focusing on advancing machine learning algorithms
              and their practical applications in real-world problems.
            </p>
            <p>
              I am continuously learning and applying new technologies, with certifications including AWS Solutions Architect Associate and CCNA,
              and a strong foundation in Agile/Scrum methodologies.
            </p>
          </div>
        </div>

        <div
          className="md:w-1/3 flex justify-center items-center mt-20 md:mt-[140px] relative"
          style={{ width: avatarWidth, height: avatarHeight }}
        >
          <Image
            src="/avatar.png"
            alt="Pahuldeep Singh"
            width={avatarWidth}
            height={avatarHeight}
            priority
            className="max-w-full h-auto"
          />

          <motion.div
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            animate={controls}
            style={{ originX: 0.5, originY: 0.5 }}
          >
            {icons.map((icon, i) => {
              const angle = (i / icons.length) * 2 * Math.PI;
              const x = centerX + radius * Math.cos(angle) - 20;
              const y = centerY + radius * Math.sin(angle) - 20;

              if (!icon) return null;

              return (
                <svg
                  key={icon.title}
                  role="img"
                  viewBox="0 0 24 24"
                  width={35}
                  height={35}
                  fill={`#${icon.hex}`}
                  style={{
                    position: "absolute",
                    top: `${y}px`,
                    left: `${x}px`,
                    cursor: "default",
                    userSelect: "none",
                  }}
                  dangerouslySetInnerHTML={{ __html: icon.svg }}
                />
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="flex flex-col min-h-screen w-full bg-gray-500 px-4 sm:px-6 py-8 gap-8"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "linear" }}
        >
          Contact Me
        </motion.h2>

        <div className="flex flex-col md:flex-row w-full gap-8 px-4 md:px-0 md:ml-[80px]">
          <div className="md:w-1/3 text-white flex flex-col gap-8 items-center justify-center mx-auto md:mx-0">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center">Ready to discuss your project?</h3>
            <p className="text-base md:text-lg leading-relaxed mb-4 max-w-md text-center px-4 md:px-0">
              I'm currently open to new opportunities and excited to take on fresh projects.
              Please don't hesitate to reach out to discuss potential collaborations.
            </p>
            <div className="flex flex-col gap-6 text-lg max-w-md text-center mx-auto md:mx-0">
              <div className="flex items-center justify-center gap-4">
                <Mail size={24} />
                <a href="mailto:pahuldeepsingh12@gmail.com" className="underline hover:text-indigo-300 break-words">
                  pahuldeepsingh12@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-4">
                <Phone size={24} />
                <a href="tel:+14313886323" className="underline hover:text-indigo-300 break-words">
                  431-388-6323
                </a>
              </div>
              <div className="flex items-center justify-center gap-4">
                <MapPin size={24} />
                <span>Canada</span>
              </div>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/pahuldeep-singh-b7aa22181/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-indigo-300 flex items-center gap-2 justify-center break-words"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 max-w-xl w-full mx-auto md:mx-0 md:ml-[80px]">

            <form
              ref={formRef}
              className="flex flex-col gap-6 bg-gray-700 p-6 rounded-lg shadow-lg"
              onSubmit={sendEmail}
            >
              <label className="flex flex-col text-white font-semibold">
                Name
                <input
                  type="text"
                  name="user_name"
                  required
                  className="mt-2 p-3 rounded-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your full name"
                />
              </label>

              <label className="flex flex-col text-white font-semibold">
                Email
                <input
                  type="email"
                  name="user_email"
                  required
                  className="mt-2 p-3 rounded-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="your.email@example.com"
                />
              </label>

              <label className="flex flex-col text-white font-semibold">
                Message
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-2 p-3 rounded-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Write your message here..."
                />
              </label>

              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-md transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
