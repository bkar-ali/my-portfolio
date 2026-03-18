import { FaAngleRight } from "react-icons/fa6";

type typeStandFor = {
  id: number;
  header: string;
  words: string;
};

const standFor: typeStandFor[] = [
  {
    id: 1,
    header: "Responsive Web Applications",
    // header: "Less is more",
    words:
      "I build responsive web applications that work smoothly across desktops, tablets, and mobile devices.",
    // "I build responsive and scalable web applications that work seamlessly across all devices, ensuring a consistent experience on desktops, tablets, and mobile phones.",
  },
  {
    id: 2,
    // header: `Build Modern UI Web with React`,
    header: "Clean UI Development using React",
    // header: "Put users first",
    words:
      "I create modern user interfaces using React with reusable components and clean scalable architecture code.",
    // "I develop modern and interactive user interfaces using React, focusing on clean component structure, reusable code, and smooth user interactions.",
  },
  {
    id: 3,
    header: "Performance and User Experience",
    // header: "Work smarter, not harder",
    words:
      "I optimize website performance and improve user experience by writing efficient and maintainable code.",
    // "I focus on optimizing website performance and improving user experience by writing clean code, reducing load times, and ensuring smooth navigation.",
  },
  {
    id: 4,
    header: "Convert Designs into Real Websites",
    // header: "Good communication",
    words:
      "I convert Figma designs into fully responsive websites while maintaining design accuracy and consistency.",
    // "I transform UI designs from Figma into fully functional and responsive websites while maintaining design accuracy and attention to detail."
  },
];

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const About = ({ setSection }: { setSection: (s: string) => void }) => {
  return (
    <div className="py-5 px-2 text-white">
      <p>
        <span className="text-4xl font-semibold block mb-3">
          Hi, I&apos;m Abobakr
          <br />
          loves <span className="text-main">turning</span> ideas into
          <br />
          interactive and responsive
          <br /> web experience
        </span>
        <br />a Frontend Developer passionate about building modern and
        responsive web applications.
        <br /> I enjoy creating clean user interfaces and improving user
        experience.
        <br /> I specialize in React, Next.js, TypeScript, and Tailwind CSS.
        {/* i work mainly
                  with React, Next.js, TypeScript, and Tailwind CSS, and
                  I&apos;m passionate about creating clean UI and smooth user
                  experiences. */}
      </p>
      <div className="pt-12">
        <div className="text-white text-4xl md:text-5xl font-semibold pb-5">
          What I <span className="text-main">stand for</span>
        </div>
        <div className="pb-5 text-white">
          A few principles that shape how I<br /> build clean, responsive, and
          user-focused web applications
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {standFor.map((skill) => (
            <div key={skill.id} className="group">
              <div className="relative bg-bgCard group-hover:bg-main/5 duration-500 p-7 rounded-2xl border border-white/10 group-hover:border-main/25 overflow-hidden">
                {/* Shadow effect */}
                <div className="card absolute p-2 bg-main duration-700 md:opacity-0 md:group-hover:opacity-100 -bottom-5 right-16 rounded-full"></div>
                {/* Shadow effect */}
                <div className="absolute -top-1 right-4 text-6xl text-white/5 group-hover:text-main/10 duration-500">
                  0{skill.id}
                </div>
                <div className="pb-7 group-hover:text-main duration-500">
                  0{skill.id}
                </div>
                <div className="text-2xl font-semibold pb-7">
                  {skill.header}
                </div>
                <div className="pb-5 text-sm  ">{skill.words}</div>
                <div className="w-1/12 group-hover:w-1/6 duration-500 h-0.5 mt-2.5 border-b-2 border-main/25 bg-main/25 group-hover:border-main/60 group-hover:bg-main/60"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-12">
        <div className="text-4xl font-semibold">
          What I&apos;m
          <span className="text-main"> currently learning</span>
        </div>
        <div className="pt-5 pb-10">
          I&apos;m currently expanding my web development skills by exploring
          backend technologies and
          <br /> learning how to build complete full-stack applications by
          connecting servers, APIs, and databases.
        </div>
      </div>
      <div
        className=" text-main flex justify-end items-center cursor-pointer font-semibold"
        onClick={() => {
          setSection("skills");
          localStorage.setItem("page", "skills");
          scrollToTop();
        }}
      >
        Skills Secion
        <span className="ml-1">
          <FaAngleRight />
        </span>
      </div>
    </div>
  );
};

export default About;
