import coverImage from "../assets/bandsFitness.webp";

const CoverArticle = () => {
  return (
    <div className="h-[15rem] md:h-screen w-full relative bg-[url('/public/images/pngegg.webp')] before:bg-gray-500 before:bg-opacity-25 before:w-full before:h-[15rem] before:absolute before:md:h-screen bg-no-repeat bg-cover bg-center md:mt-0 mt-7">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full text-center">
        <img src={coverImage} className="absolute w-[45%] h-auto md:max-h-screen object-cover" alt="cover" />
        <h1 className="text-white md:text-7xl text-5xl italic tracking-wide uppercase drop-shadow-[2px_3px_2px_rgba(0,0,0,0.5)]">Article</h1>
      </div>
    </div>
  );
};

export default CoverArticle;
