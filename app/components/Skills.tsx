"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

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
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { LuFigma } from "react-icons/lu";
import { VscVscode } from "react-icons/vsc";
import { SiVercel } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiVite } from "react-icons/si";

import { FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiJsonwebtokens,
  SiRailway,
} from "react-icons/si";

import { FaAngleRight } from "react-icons/fa6";

type skillType = {
  id: number;
  name: string;
  icon: ReactNode;
  color: string;
  shadow: string;
};
type skillsSectionType = [
  {
    sectionName: string;
    skills: skillType[];
  },
  {
    sectionName: string;
    skills: skillType[];
  },
  {
    sectionName: string;
    skills: skillType[];
  },
  {
    sectionName: string;
    skills: skillType[];
  },
];

const skillsSections: skillsSectionType = [
  {
    sectionName: "Main Stack",
    skills: [
      {
        id: 1,
        name: "React",
        icon: <FaReact />,
        color: "#61DAFB",
        shadow: "shadow-[0_0_25px_rgba(97,218,251,0.35)]",
      },
      {
        id: 2,
        name: "Next",
        icon: <RiNextjsFill />,
        color: "#ffffff",
        shadow: "shadow-[0_0_25px_rgba(255,255,255,0.25)]",
      },
      {
        id: 3,
        name: "TypeScript",
        icon: <BiLogoTypescript />,
        color: "#3178C6",
        shadow: "shadow-[0_0_25px_rgba(49,120,198,0.35)]",
      },
      {
        id: 4,
        name: "Node.js",
        icon: <FaNodeJs />,
        color: "#5FA04E",
        shadow: "shadow-[0_0_25px_rgba(95,160,78,0.35)]",
      },
      {
        id: 5,
        name: "Express",
        icon: <SiExpress />,
        color: "#ffffff",
        shadow: "shadow-[0_0_25px_rgba(255,255,255,0.25)]",
      },
      {
        id: 6,
        name: "MongoDB",
        icon: <SiMongodb />,
        color: "#47A248",
        shadow: "shadow-[0_0_25px_rgba(71,162,72,0.35)]",
      },
    ],
  },
  {
    sectionName: "Other Technologies",
    skills: [
      {
        id: 7,
        name: "HTML",
        icon: <FaHtml5 />,
        color: "#E34F26",
        shadow: "shadow-[0_0_25px_rgba(227,79,38,0.35)]",
      },
      {
        id: 8,
        name: "CSS",
        icon: <IoLogoCss3 />,
        color: "#1572B6",
        shadow: "shadow-[0_0_25px_rgba(21,114,182,0.35)]",
      },
      {
        id: 9,
        name: "JavaScript",
        icon: <IoLogoJavascript />,
        color: "#F7DF1E",
        shadow: "shadow-[0_0_25px_rgba(247,223,30,0.35)]",
      },
      {
        id: 10,
        name: "Bootstrap",
        icon: <FaBootstrap />,
        color: "#7952B3",
        shadow: "shadow-[0_0_25px_rgba(121,82,179,0.35)]",
      },
      {
        id: 11,
        name: "MUI",
        icon: <SiMui />,
        color: "#007FFF",
        shadow: "shadow-[0_0_25px_rgba(0,127,255,0.35)]",
      },
      {
        id: 12,
        name: "Vite",
        icon: <SiVite />,
        color: "#646CFF",
        shadow: "shadow-[0_0_25px_rgba(100,108,255,0.35)]",
      },
      {
        id: 13,
        name: "Tailwind",
        icon: <RiTailwindCssFill />,
        color: "#38BDF8",
        shadow: "shadow-[0_0_25px_rgba(56,189,248,0.35)]",
      },
      {
        id: 14,
        name: "Redux",
        icon: <SiRedux />,
        color: "#764ABC",
        shadow: "shadow-[0_0_25px_rgba(118,74,188,0.35)]",
      },

      {
        id: 15,
        name: "Axios",
        icon: <SiAxios />,
        color: "#5A29E4",
        shadow: "shadow-[0_0_25px_rgba(90,41,228,0.35)]",
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        id: 16,
        name: "Mongoose",
        icon: <SiMongoose />,
        color: "#880000",
        shadow: "shadow-[0_0_25px_rgba(136,0,0,0.35)]",
      },
      {
        id: 17,
        name: "JWT",
        icon: <SiJsonwebtokens />,
        color: "#D63AFF",
        shadow: "shadow-[0_0_25px_rgba(214,58,255,0.35)]",
      },
    ],
  },
  {
    sectionName: "Tools & Deployment",
    skills: [
      {
        id: 18,
        name: "GitHub",
        icon: <FaGithub />,
        color: "#ffffff",
        shadow: "shadow-[0_0_25px_rgba(255,255,255,0.25)]",
      },
      {
        id: 19,
        name: "Figma",
        icon: <LuFigma />,
        color: "#F24E1E",
        shadow: "shadow-[0_0_25px_rgba(242,78,30,0.35)]",
      },
      {
        id: 20,
        name: "VS Code",
        icon: <VscVscode />,
        color: "#007ACC",
        shadow: "shadow-[0_0_25px_rgba(0,122,204,0.35)]",
      },
      {
        id: 21,
        name: "Postman",
        icon: <SiPostman />,
        color: "#FF6C37",
        shadow: "shadow-[0_0_25px_rgba(255,108,55,0.35)]",
      },
      {
        id: 22,
        name: "Vercel",
        icon: <SiVercel />,
        color: "#ffffff",
        shadow: "shadow-[0_0_25px_rgba(255,255,255,0.25)]",
      },
      {
        id: 23,
        name: "Railway",
        icon: <SiRailway />,
        color: "#7B3FF2",
        shadow: "shadow-[0_0_25px_rgba(123,63,242,0.35)]",
      },
    ],
  },
];

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const Skills = ({ setSection }: { setSection: (s: string) => void }) => {
  return (
    <div className="px-5 pb-5">
      {skillsSections.map((section) => (
        <div key={section.sectionName}>
          {/* Header */}
          <div className="text-white text-2xl md:text-3xl font-semibold pt-8 md:pt-10 pb-5">
            {section.sectionName}
          </div>
          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
            {section.skills.map((skill) => (
              <div key={skill.id}>
                <div
                  className={`relative bg-bgCard duration-500 py-7 px-5 md:p-7 rounded-2xl border border-white/10 overflow-hidden group`}
                >
                  {/* Box */}
                  <div className="flex justify-between items-center">
                    {/* Icon */}
                    <div className="text-4xl" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    {/* Icon */}
                    {/* Name */}
                    <div
                      className="text-2xl text-white"
                      style={{ color: skill.color }}
                    >
                      {skill.name}
                    </div>
                    {/* Name */}
                  </div>
                  {/* Box */}

                  {/* Shadow effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="absolute p-2 duration-700  group-hover:opacity-100 -bottom-6 right-6 rounded-full group-hover:scale-150"
                    style={{
                      boxShadow: `-20px 0px 150px 40px ${skill.color}`,
                    }}
                  ></motion.div>
                  {/* Shadow effect */}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div
        className=" text-main flex justify-end items-center cursor-pointer font-semibold pt-3 md:pt-0 mt-3"
        onClick={() => {
          setSection("projects");
          localStorage.setItem("page", "projects");
          scrollToTop();
        }}
      >
        Projects Secion
        <span className="ml-1">
          <FaAngleRight />
        </span>
      </div>
    </div>
  );
};

export default Skills;
