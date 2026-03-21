"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import { FaAngleRight } from "react-icons/fa6";

// Main Stack
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { SiAxios } from "react-icons/si";

// Others Skills
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiVite } from "react-icons/si";

// Live Demo
import { GoLink } from "react-icons/go";

const asselTech = [
  {
    id: 1,
    name: "React",
    icon: <FaReact />,
    level: 80,
    color: "#61DAFB",
    shadow: "shadow-[0_0_25px_rgba(97,218,251,0.35)]",
  },
  {
    id: 2,
    name: "Next",
    icon: <RiNextjsFill />,
    level: 75,
    color: "#ffffff",
    shadow: "shadow-[0_0_25px_rgba(255,255,255,0.25)]",
  },
  {
    id: 3,
    name: "TypeScript",
    icon: <BiLogoTypescript />,
    level: 75,
    color: "#3178C6",
    shadow: "shadow-[0_0_25px_rgba(49,120,198,0.35)]",
  },
  {
    id: 4,
    name: "Tailwind",
    icon: <RiTailwindCssFill />,
    level: 85,
    color: "#38BDF8",
    shadow: "shadow-[0_0_25px_rgba(56,189,248,0.35)]",
  },
  {
    id: 5,
    name: "Redux",
    icon: <SiRedux />,
    level: 80,
    color: "#764ABC",
    shadow: "shadow-[0_0_25px_rgba(118,74,188,0.35)]",
  },
  {
    id: 6,
    name: "Axios",
    icon: <SiAxios />,
    level: 75,
    color: "#5A29E4",
    shadow: "shadow-[0_0_25px_rgba(90,41,228,0.35)]",
  },
];
const shopsyTech = [
  {
    id: 1,
    name: "React",
    icon: <FaReact />,
    level: 80,
    color: "#61DAFB",
    shadow: "shadow-[0_0_25px_rgba(97,218,251,0.35)]",
  },

  {
    id: 2,
    name: "Tailwind",
    icon: <RiTailwindCssFill />,
    level: 85,
    color: "#38BDF8",
    shadow: "shadow-[0_0_25px_rgba(56,189,248,0.35)]",
  },
  {
    id: 3,
    name: "Redux",
    icon: <SiRedux />,
    level: 80,
    color: "#764ABC",
    shadow: "shadow-[0_0_25px_rgba(118,74,188,0.35)]",
  },

  {
    id: 4,
    level: 75,
    name: "Vite",
    icon: <SiVite />,
    color: "#646CFF",
    shadow: "shadow-[0_0_25px_rgba(100,108,255,0.35)]",
  },
];
const dashTech = [
  {
    id: 7,
    name: "HTML",
    icon: <FaHtml5 />,
    level: 90,
    color: "#E34F26",
    shadow: "shadow-[0_0_25px_rgba(227,79,38,0.35)]",
  },
  {
    id: 8,
    name: "CSS",
    icon: <IoLogoCss3 />,
    level: 85,
    color: "#1572B6",
    shadow: "shadow-[0_0_25px_rgba(21,114,182,0.35)]",
  },
  {
    id: 10,
    name: "Bootstrap",
    icon: <FaBootstrap />,
    level: 75,
    color: "#7952B3",
    shadow: "shadow-[0_0_25px_rgba(121,82,179,0.35)]",
  },
];
const worldTech = [
  {
    id: 7,
    name: "HTML",
    icon: <FaHtml5 />,
    level: 90,
    color: "#E34F26",
    shadow: "shadow-[0_0_25px_rgba(227,79,38,0.35)]",
  },
  {
    id: 8,
    name: "CSS",
    icon: <IoLogoCss3 />,
    level: 85,
    color: "#1572B6",
    shadow: "shadow-[0_0_25px_rgba(21,114,182,0.35)]",
  },
];

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const Projects = ({ setSection }: { setSection: (s: string) => void }) => {
  return (
    <div className="md:p-5 text-white">
      {/* Assel Project */}
      <div className="box w-full h-full flex flex-col md:flex-row overflow-hidden rounded-xl mb-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-full md:w-[60%] min-h-[40vh] md:min-h-[50vh] relative overflow-hidden rounded-xl"
        >
          <a href="https://assel-ecommerce.vercel.app/" target="_blank">
            <Image
              src={"/img/asselProject.png"}
              fill
              alt=""
              className="object-cover"
            />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 md:px-5 p-2"
        >
          {/* Header */}
          <h2 className="text-2xl tracking-wider font-semibold">
            <span className="text-main">Assel </span>
            E-commerce <span className="text-sm">(Last Work)</span>
          </h2>
          {/* About Project */}
          <div className="pt-2 text-sm">
            Modern e-commerce platform for browsing and purchasing fashion
            products.
          </div>
          {/* Features Section */}
          <h2 className="pt-1 text-main font-semibold">Features</h2>
          <div className="pt-1 text-sm">
            • Product browsing & <span className="text-main">categories</span>
            <br />• Product <span className="text-main">details page</span>
            <br />• Shopping <span className="text-main">cart </span> &
            <span className="text-main"> checkout</span>
            <br />• <span className="text-main">Wishlist </span>
            system & Price
            <span className="text-main"> filtering</span>
            <br />• <span className="text-main">Dark Mode </span>& Smooth{" "}
            <span className="text-main">animations</span>
            <br />• <span className="text-main">Responsive</span> design
          </div>
          {/* Tech */}
          <div className="pt-2 grid lg:grid-cols-3 grid-cols-2">
            {asselTech.map((tech) => (
              <span
                className="px-2 py-1 rounded-full text-sm mr-1 mb-2 flex items-center justify-center"
                style={{
                  color: `${tech.color}`,
                  border: `1px solid ${tech.color}`,
                }}
                key={tech.id}
              >
                <span className="pr-1 text-xl">{tech.icon}</span>
                {tech.name}
              </span>
            ))}
          </div>
          {/* Live Demo */}
          <div className="pt-1 flex">
            <a
              href="https://assel-ecommerce.vercel.app/"
              target="_blank"
              className="flex w-[50%] border rounded-2xl px-2 py-1 items-center justify-center mr-2 cursor-pointer hover:bg-white hover:text-black duration-500 font-semibold"
            >
              Live Demo
              <span className="ml-2">
                <GoLink />
              </span>
            </a>
            <a
              href="https://github.com/bkar-ali/assel-ecommerce"
              target="_blank"
              className="flex flex-1 border rounded-2xl px-2 py-1 items-center justify-center cursor-pointer hover:bg-white hover:text-black duration-500 font-semibold"
            >
              Github
              <span className="ml-2">
                <FaGithub />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
      {/* Shopsy Project */}
      <div className="box w-full h-full flex flex-col md:flex-row overflow-hidden rounded-xl mb-10">
        {/* Mobile Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="block md:hidden w-full md:w-[60%] min-h-[40vh] md:min-h-[50vh] relative overflow-hidden rounded-xl"
        >
          <Image
            src={"/img/shopsyProject.png"}
            fill
            alt=""
            className="object-cover"
          />
        </motion.div>
        {/* Mobile Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex-1 md:px-5 p-2"
        >
          {/* Header */}
          <h2 className="text-2xl tracking-wider font-semibold">
            <span className="text-shopsy">Shopsy </span>
            E-commerce
          </h2>
          {/* About Project */}
          <div className="pt-2 text-sm">
            Modern fashion e-commerce website focused on women&apos;s clothing
            with a responsive layout and smooth UI animations.
          </div>
          {/* Features Section */}
          <h2 className="pt-1 text-shopsy font-semibold">Features</h2>
          <div className="pt-1 text-sm">
            • Product browsing
            <br />• Dark mode
            <br />• Responsive design
            <br />• Scroll animations
            <br />• Smooth UI interactions
          </div>
          {/* Tech */}
          <div className="pt-2 grid grid-cols-2">
            {shopsyTech.map((tech) => (
              <span
                className="px-2 py-1 rounded-full text-sm mr-1 mb-2 flex items-center justify-center"
                style={{
                  color: `${tech.color}`,
                  border: `1px solid ${tech.color}`,
                }}
                key={tech.id}
              >
                <span className="pr-1 text-xl">{tech.icon}</span>
                {tech.name}
              </span>
            ))}
          </div>
          {/* Live Demo */}
          <div className="pt-1 flex">
            <a
              href="https://bkar-e-commerce.netlify.app/#"
              target="_blank"
              className="flex w-[50%] border rounded-2xl px-2 py-1 items-center justify-center mr-2 cursor-pointer hover:bg-white hover:text-black duration-500 font-semibold"
            >
              Live Demo
              <span className="ml-2">
                <GoLink />
              </span>
            </a>
            <a
              href="https://github.com/bkar-ali/E-Commerce-Project"
              target="_blank"
              className="flex flex-1 border rounded-2xl px-2 py-1 items-center justify-center cursor-pointer hover:bg-white hover:text-black duration-500 font-semibold"
            >
              Github
              <span className="ml-2">
                <FaGithub />
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block w-full md:w-[60%] min-h-[40vh] md:min-h-[50vh] relative overflow-hidden rounded-xl"
        >
          <a href="https://bkar-e-commerce.netlify.app/#" target="_blank">
            <Image
              src={"/img/shopsyProject.png"}
              fill
              alt=""
              className="object-cover"
            />
          </a>
        </motion.div>
      </div>
      {/* Dashboard Project */}
      <div className="box w-full h-full flex flex-col md:flex-row overflow-hidden rounded-xl mb-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[60%] min-h-[40vh] md:min-h-[50vh] relative overflow-hidden rounded-xl"
        >
          <a
            href="https://abubakr-dashboard-project.netlify.app/"
            target="_blank"
          >
            <Image
              src={"/img/DashboardProject.png"}
              fill
              alt="Dahsborad"
              className="object-cover h-full w-full"
            />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex-1 md:px-5 p-2"
        >
          {/* Header */}
          <h2 className="text-2xl tracking-wider font-semibold">
            Admin
            <span className="text-dash"> Dashboard</span>{" "}
            <span className="text-[12px]">(Early Project)</span>
          </h2>
          {/* About Project */}
          <div className="pt-2 text-sm">
            Simple admin dashboard interface built for displaying and analyzing
            sample data using tables and charts.
          </div>
          <div className="pt-2 text-sm text-dash">
            An early learning project focused on building dashboard layouts and
            practicing frontend fundamentals.
          </div>
          {/* Features Section */}
          <h2 className="pt-1 text-dash font-semibold">Features</h2>
          <div className="pt-1 text-sm">
            • Data tables
            <br /> • Simple data analytics <br />• Dashboard layout <br /> •
            Settings page <br />• Page navigation <br />• UI animations
            <br />• Responsive layout
          </div>
          {/* Tech */}
          <div className="pt-2 grid lg:grid-cols-3">
            {dashTech.map((tech) => (
              <span
                className="px-2 py-1 rounded-full text-sm mr-1 mb-2 flex items-center justify-center"
                style={{
                  color: `${tech.color}`,
                  border: `1px solid ${tech.color}`,
                }}
                key={tech.id}
              >
                <span className="pr-1 text-xl">{tech.icon}</span>
                {tech.name}
              </span>
            ))}
          </div>
          {/* Live Demo */}
          <div className="pt-1 flex">
            <a
              href="https://abubakr-dashboard-project.netlify.app/"
              target="_blank"
              className="flex w-[50%] border rounded-2xl px-2 py-1 items-center justify-center mr-2 cursor-pointer hover:bg-white hover:text-black duration-500 font-semibold"
            >
              Live Demo
              <span className="ml-2">
                <GoLink />
              </span>
            </a>
            <a
              href="https://github.com/bkar-ali/Dashboard-Project"
              target="_blank"
              className="flex flex-1 border rounded-2xl px-2 py-1 items-center justify-center cursor-pointer hover:bg-white hover:text-black duration-500 font-semibold"
            >
              Github
              <span className="ml-2">
                <FaGithub />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
      {/* Abubakr World Project */}
      <div className="box w-full h-full flex flex-col md:flex-row overflow-hidden rounded-xl mb-10">
        {/* Mobile Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="block md:hidden w-full md:w-[60%] min-h-[40vh] md:min-h-[50vh] relative overflow-hidden rounded-xl"
        >
          <Image
            src={"/img/abubakrProject.png"}
            fill
            alt=""
            className="object-cover"
          />
        </motion.div>
        {/* Mobile Image */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex-1 md:px-5 p-2"
        >
          {/* Header */}
          <h2 className="text-2xl tracking-wider font-semibold">
            <span className="text-world">Abobakr </span>
            World
            <span className="text-[12px]"> (Early Project)</span>
          </h2>
          {/* About Project */}
          <div className="pt-2 text-sm">
            Personal interactive landing page with multiple sections showcasing
            a clean UI and simple animations.
          </div>
          <div className="pt-2 text-sm text-world">
            A personal learning project created early in my journey to practice
            building landing pages and simple animations.
          </div>
          {/* Features Section */}
          <h2 className="pt-1 text-world font-semibold">Features</h2>
          <div className="pt-1 text-sm">
            • Landing page
            <br /> • Multiple sections
            <br /> • Smooth animations
            <br />
            • Clean UI design
            <br /> • Responsive layout
          </div>
          {/* Tech */}
          <div className="pt-4 grid grid-cols-2">
            {worldTech.map((tech) => (
              <span
                className="px-2 py-1 rounded-full text-sm mr-1 mb-2 flex items-center justify-center"
                style={{
                  color: `${tech.color}`,
                  border: `1px solid ${tech.color}`,
                }}
                key={tech.id}
              >
                <span className="pr-1 text-xl">{tech.icon}</span>
                {tech.name}
              </span>
            ))}
          </div>
          {/* Live Demo */}
          <div className="pt-1 flex">
            <a
              href="https://abubakr-world.netlify.app/"
              target="_blank"
              className="flex w-[50%] border rounded-2xl px-2 py-1 items-center justify-center mr-2 cursor-pointer hover:bg-white hover:text-black duration-500 font-semibold"
            >
              Live Demo
              <span className="ml-2">
                <GoLink />
              </span>
            </a>
            <a
              href="https://github.com/bkar-ali/AbubakrWorldProject"
              target="_blank"
              className="flex flex-1 border rounded-2xl px-2 py-1 items-center justify-center cursor-pointer hover:bg-white hover:text-black duration-500 font-semibold"
            >
              Github
              <span className="ml-2">
                <FaGithub />
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block w-full md:w-[60%] min-h-[40vh] md:min-h-[50vh] relative overflow-hidden rounded-xl"
        >
          <a href="https://abubakr-world.netlify.app/" target="_blank">
            <Image
              src={"/img/abubakrProject.png"}
              fill
              alt=""
              className="object-cover"
            />
          </a>
        </motion.div>
      </div>

      <div
        className=" text-main flex justify-end items-center cursor-pointer font-semibold p-4"
        onClick={() => {
          setSection("contact");
          localStorage.setItem("page", "contact");
          scrollToTop();
        }}
      >
        Contact Secion
        <span className="ml-1">
          <FaAngleRight />
        </span>
      </div>
    </div>
  );
};

export default Projects;
