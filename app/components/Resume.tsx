import React from "react";

const Resume = () => {
  return (
    <div className="p-5 h-[90vh] md:h-full">
      <h2 className="text-white text-4xl font-semibold pb-4">Educatino</h2>
      <div className="text-white pb-7">
        Bachelor&apos;s Degree in Commerce – Accounting
      </div>
      <h2 className="text-white text-4xl font-semibold pb-4">Experience</h2>
      <div className="text-white">
        Frontend Developer Building responsive web applications using
        <br /> React, Next.js, and TypeScript. Focused on performance, clean
        code, and modern UI development.
      </div>
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

export default Resume;
