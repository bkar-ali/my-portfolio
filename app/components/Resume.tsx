import React from "react";
import ButtonCv from "./ButtonCv";

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
      <ButtonCv />
    </div>
  );
};

export default Resume;
