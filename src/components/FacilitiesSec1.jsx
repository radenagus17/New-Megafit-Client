import privateTraining from "../assets/heroImage.webp";
import aDayPass from "../assets/1dayPassOne.webp";
import lokerShower from "../assets/lokerShower.webp";
import smallGroupTraining from "../assets/privateGym.webp";
import functionalTraining from "../assets/everyDasPass.webp";
import cardioMachine from "../assets/cardioMachine.webp";
import healthCheck from "../assets/healthCheck.webp";

const FacilitiesSection_1 = () => {
  const Facilities = [
    {
      id: 1,
      image: privateTraining,
      title: "Private Training",
    },
    {
      id: 2,
      image: aDayPass,
      title: "Weight Training",
    },
    {
      id: 3,
      image: lokerShower,
      title: "Loker & Shower",
    },
    {
      id: 4,
      image: smallGroupTraining,
      title: "Small Group Training",
    },
    {
      id: 5,
      image: functionalTraining,
      title: "Functional Training",
    },
    {
      id: 6,
      image: cardioMachine,
      title: "Cardio Machine",
    },
    {
      id: 7,
      image: healthCheck,
      title: "Health Check",
    },
  ];

  return (
    <section className="w-full max-h-screen mt-0 md:mt-20">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full font-[Poppins]">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 place-items-center md:gap-3">
          {Facilities.map(({ id, image, title }) => (
            <div
              key={id}
              className="w-11/12 h-44 md:h-[16rem] md:w-full relative before:inset-0 before:absolute before:bg-lime-500 before:w-full before:bg-opacity-40 my-2 md:my-0 cursor-pointer hover:before:bg-opacity-50 before:transition before:duration-500 group"
            >
              <img src={image} className="w-full h-44 md:h-[16rem] object-cover" alt="thumbnail" />
              <div className="absolute text-white top-[35%] left-[25%] right-[25%] italic drop-shadow-[2px_3px_2px_rgba(0,0,0,0.5)] group-hover:animate-pulse uppercase">
                <h1 className="text-xl font-semibold md:text-4xl text-center cursor-pointer">{title}</h1>
              </div>
            </div>
          ))}
          <div className="w-11/12 h-44 md:h-[16rem] md:w-full relative before:inset-0 before:absolute before:bg-lime-500 before:w-full before:bg-opacity-70 my-2 md:my-0 cursor-pointer hover:before:bg-opacity-80 before:transition before:duration-500 group">
            <div className="absolute text-white top-[35%] left-[25%] right-[25%] italic drop-shadow-[2px_3px_2px_rgba(0,0,0,0.5)] group-hover:animate-pulse uppercase">
              <h1 className="text-xl font-semibold md:text-4xl text-center cursor-pointer">Class</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection_1;
