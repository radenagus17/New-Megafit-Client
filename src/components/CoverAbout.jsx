const CoverAbout = () => {
  return (
    <div className="h-[15rem] md:h-screen w-full relative bg-[url('/src/assets/coverAbout.webp')] bg-no-repeat bg-cover bg-[center_top_45%] md:bg-center before:absolute before:inset-0 before:bg-lime-500 before:w-full before:opacity-40 md:mt-0 mt-7">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-white md:text-7xl text-5xl italic tracking-wide uppercase drop-shadow-[2px_3px_2px_rgba(0,0,0,0.5)]">About Us</h1>
      </div>
    </div>
  );
};

export default CoverAbout;
