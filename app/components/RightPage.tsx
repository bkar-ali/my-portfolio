"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import About from "./About";
import Skills from "./Skills";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";

const fadeVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

type navType = {
  id: string;
  section: string;
};

const nav: navType[] = [
  { id: "about", section: "About" },
  { id: "skills", section: "Skills" },
  { id: "resume", section: "Resume" },
  { id: "projects", section: "Projects" },
  { id: "contact", section: "Contact" },
];

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const RightPage = () => {
  const [section, setSection] = useState<string>("about");

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("page");
    if (saved) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSection(saved);
    }
  }, []);

  const handelChangeSection = (newSection: string) => {
    setSection(newSection);
    localStorage.setItem("page", newSection);
    scrollToTop();
  };

  return (
    <div className="flex-1 h-full md:pr-14 z-10">
      <div className="backdrop-blur-sm bg-white/5 border border-white/10 w-full h-full rounded-2xl overflow-hidden">
        <div className="group text-white flex justify-between md:pl-5 md:pb-5">
          <div className="group hidden md:block md:w-[30%] pt-5 text-2xl md:text-4xl font-bold tracking-wider first-letter:uppercase">
            {section}
            <div className="w-1/5 group-hover:w-1/3 duration-500 h-0.5 mt-2.5 border-b-2 border-main bg-main"></div>
          </div>
          <div className="flex bg-bgCard border border-white/10 flex-1 md:rounded-bl-2xl h-20">
            {nav.map((sec) => (
              <div
                key={sec.id}
                className="w-full flex justify-center items-center text-white"
              >
                <div
                  onClick={() => {
                    handelChangeSection(sec.id);
                  }}
                  className={`cursor-pointer text-base md:text-lg font-semibold ${section === sec.id ? "text-main" : "text-white"} duration-300`}
                >
                  {sec.section}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-3 md:px-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={section}
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.4 }}
              className=""
            >
              {section === "about" && <About setSection={setSection} />}
              {section === "skills" && <Skills setSection={setSection} />}
              {section === "resume" && <Resume />}
              {section === "projects" && <Projects setSection={setSection} />}
              {section === "contact" && <Contact />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default RightPage;
