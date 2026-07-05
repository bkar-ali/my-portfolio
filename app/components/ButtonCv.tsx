const ButtonCv = () => {
  return (
    <div className="w-full flex justify-center items-center p-15">
      <a
        href="/public/Aboubakr_Ali_Full_Stack_Developer.pdf"
        download
        className="relative text-main hover:bg-main/50 hover:scale-105 duration-500 hover:text-white font-semibold bg- py-4 px-8 border border-white/10 rounded-xl animate-breathe overflow-hidden"
      >
        Download CV
        {/* Shadow effect */}
        <div className="card absolute p-2 bg-main duration-700 -bottom-5 right-5 rounded-full"></div>
        {/* Shadow effect */}
      </a>
    </div>
  );
};

export default ButtonCv;
