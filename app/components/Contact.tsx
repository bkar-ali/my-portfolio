"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

// Info Icons
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

type data = {
  id: number;
  name: string;
  icon: ReactNode;
  color: string;
  info: string;
  link: string;
};

const contacts: data[] = [
  {
    id: 1,
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    color: "#25D366",
    info: "01111045313",
    link: "#",
  },
  {
    id: 2,
    name: "GitHub",
    icon: <FaGithub />,
    color: "#ffffff",
    info: "github.com/bkar-ali",
    link: "https://github.com/bkar-ali",
  },
  {
    id: 3,
    name: "LinkedIn",
    icon: <FaLinkedin />,
    color: "#0A66C2",
    info: "abubakr-ali",
    link: "https://www.linkedin.com/in/abubakr-ali-689272255/",
  },
  {
    id: 4,
    name: "Email",
    icon: <AiOutlineMail />,
    color: "#EA4335",
    info: "bkarali345@gmail.com",
    link: "#",
  },
];

const Contact = () => {
  return (
    <div className="p-5">
      <h2 className="text-white text-3xl pb-5">
        <span className="text-4xl font-semibold text-main pb-5 block">
          Feel free to reach out
        </span>
        {/* if you want to collaborate, have a project in mind, or
                      just want to say hello. */}
        Let&apos;s build something great together.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contacts.map((i) => (
          <a
            key={i.id}
            href={i.link}
            target="_blank"
            className="bg-bgCard cursor-pointer relative group overflow-hidden border border-white/10 text-white flex items-center flex-col rounded-xl"
          >
            <h2
              className="p-3 text-4xl group-hover:scale-125 duration-500"
              style={{ color: i.color }}
            >
              {i.icon}
            </h2>
            <h2
              className="p-3 text-xl font-sans group-hover:scale-125 duration-500"
              style={{ color: i.color }}
            >
              {i.info}
            </h2>
            {/* Shadow effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute p-2 -bottom-5 right-[42%] rounded-full group-hover:scale-150 duration-500"
              style={{
                boxShadow: `-20px 0px 150px 40px ${i.color}`,
              }}
            ></motion.div>
            {/* Shadow effect */}
          </a>
        ))}
      </div>
      {/* CV Buuton */}
      <div className="w-full flex justify-center items-center p-15">
        <a
          href="/Abubakr_Frontend_CV.pdf"
          download
          className="relative text-main hover:bg-main/50 hover:scale-105 duration-500 hover:text-white font-semibold bg- py-4 px-8 border border-white/10 rounded-xl animate-breathe overflow-hidden"
        >
          Dowload CV
          {/* Shadow effect */}
          <div className="card absolute p-2 bg-main duration-700 -bottom-5 right-5 rounded-full"></div>
          {/* Shadow effect */}
        </a>
      </div>
    </div>
  );
};

export default Contact;
