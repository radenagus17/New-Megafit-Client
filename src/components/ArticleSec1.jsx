const ArticleSection_1 = () => {
  return (
    <section className="w-full max-h-screen mt-3">
      <div className="w-11/12 md:w-1/2 mx-auto flex h-7 md:h-9 flex-row justify-start items-center border-b-2 border-b-gray-300">
        <span>
          <button type="button" className="inline-flex items-center px-3 py-1 border-b-4 border-b-lime-500 text-sm md:text-xl font-medium text-lime-600 italic uppercase tracking-wider font-[Poppins]">
            All
          </button>
        </span>
        <span>
          <button
            type="button"
            className="inline-flex items-center px-3 py-1 border-b-2 border-b-gray-300 text-sm md:text-xl font-normal text-gray-400 hover:font-medium hover:text-lime-600 hover:border-b-lime-500 focus:outline-none focus:border-b-4 focus:border-b-lime-500 focus:text-lime-600 focus:font-medium uppercase italic tracking-wider font-[Poppins]"
          >
            Eating Well
          </button>
        </span>
        <span>
          <button
            type="button"
            className="inline-flex items-center px-3 py-1 border-b-2 border-b-gray-300 text-sm md:text-xl font-normal text-gray-400 hover:font-medium hover:text-lime-600 hover:border-b-lime-500 focus:outline-none focus:border-b-4 focus:border-b-lime-500 focus:text-lime-600 focus:font-medium uppercase italic tracking-wider font-[Poppins]"
          >
            Feature
          </button>
        </span>
        <div className="flex justify-center grow cursor-pointer group">
          <input
            type="text"
            className="h-7 md:h-9 focus:border-b focus:border-lime-500 outline-none w-full text-sm md:text-xl border-b-gray-300 border-b group-hover:border-b-lime-500 text-center text-gray-400 focus:text-lime-400 font-[Poppins] italic"
            size="5"
            placeholder="Searching..."
          />
          <div className="flex items-center justify-center border-b-gray-300 border-b text-gray-300 group-hover:border-b-lime-500 group-hover:text-lime-600 md:text-xl focus:border-4 group-focus:border-lime-500">
            <ion-icon name="search"></ion-icon>
          </div>
        </div>
      </div>
      <div className="h-full">
        <div className="w-full h-full flex flex-col items-start justify-center my-3">
          <div className="flex flex-col mx-auto w-[90vw] md:max-w-screen-sm font-[Poppins]">
            <div className="h-36 md:h-44 bg-lime-500 w-full cursor-pointer hover:bg-lime-400 transition-all duration-500"></div>
            <p className="italic text-sm font-medium text-gray-600">17 Dec 2021</p>
            <h1 className="italic text-2xl font-medium text-lime-500">Lorem Ipsum</h1>
            <p className="text-xs font-medium text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="flex flex-col mx-auto w-[90vw] font-[Poppins] py-5 md:py-3 md:max-w-screen-sm">
            <div className="h-36 md:h-44 bg-lime-500 w-full cursor-pointer hover:bg-lime-400 transition-all duration-500"></div>
            <p className="italic text-sm font-medium text-gray-600">17 Dec 2021</p>
            <h1 className="italic text-2xl font-medium text-lime-500">Lorem Ipsum</h1>
            <p className="text-xs font-medium text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="flex flex-col mx-auto w-[90vw] font-[Poppins] md:max-w-screen-sm">
            <div className="h-36 md:h-44 bg-lime-500 w-full cursor-pointer hover:bg-lime-400 transition-all duration-500"></div>
            <p className="italic text-sm font-medium text-gray-600">17 Dec 2021</p>
            <h1 className="italic text-2xl font-medium text-lime-500">Lorem Ipsum</h1>
            <p className="text-xs font-medium text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection_1;
