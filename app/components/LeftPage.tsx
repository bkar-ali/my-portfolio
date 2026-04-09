"use client";
import React, { ReactNode } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";

type data = {
  id: string;
  head: string;
  info: string;
  icon: ReactNode;
};

const info: data[] = [
  {
    id: "email",
    head: "Email",
    info: "bkarali345@gmail.com",
    icon: <AiOutlineMail />,
  },
  {
    id: "phone",
    head: "Phone",
    info: "01111045313",
    icon: <IoPhonePortraitOutline />,
  },
  {
    id: "birthday",
    head: "Birthday",
    info: "1/6/2004",
    icon: <CiCalendar />,
  },
  {
    id: "location",
    head: "Location",
    info: "Egypt, Cairo",
    icon: <CiLocationOn />,
  },
];

const LeftPage = () => {
  return (
    <div className="min-w-[30%] h-screen sticky top-20 z-10 md:pl-14">
      <div className="group relative w-[80%] h-[80%] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-[#00b1a512] hover:border-main/25 duration-300">
        {/* Shadow effect */}
        <div className="card absolute p-2 bg-main duration-700 opacity-0 group-hover:opacity-100 -bottom-3 -right-3 rounded-full"></div>
        {/* Shadow effect */}
        <div className="p-5 h-full flex items-center flex-col">
          <div className="flex justify-center w-full items-center flex-col text-white border-b border-white/10 group-hover:border-main/25 duration-300 pb-5 space-y-2.5">
            <div className="relative w-3/4 h-[20vh] rounded-2xl overflow-hidden">
              <Image
                src={"/img/bkar.JPG"}
                alt="Personal Image"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition duration-700"
              />
            </div>

            <span className="text-3xl tracking-wide">Abubakr Ali</span>
            <span className="px-2 py-1 border border-white/10 rounded bg-bgCard text-[12px] tracking-widest overflow-hidden ">
              Front End Developer
            </span>
            <div className="pt-2 text-main flex space-x-4 cursor-pointer">
              <a
                href="https://www.linkedin.com/in/abubakr-ali-689272255/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://github.com/bkar-ali" target="_blank">
                <FiGithub />
              </a>
            </div>
          </div>
          <div className="pt-5 w-full">
            {info.map((i) => (
              <div
                key={i.id}
                className="flex items-center mb-3 text-white p-0.5"
              >
                <div className="mr-8 border border-[#f2f2f21a] p-2.5 rounded text-main">
                  {i.icon}
                </div>
                <div className="flex flex-col space-y-1 min-w-52">
                  <span className="text-[13px] tracking-wider ">{i.head}</span>
                  <span className="text-[11px] text-[#ccc] font-sans tracking-wider">
                    {i.info}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPage;
