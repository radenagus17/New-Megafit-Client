import everyDayPass from "../assets/weekendPass.webp";
import aDayPass from "../assets/1DayPass.webp";
import weekendPass from "../assets/everyDayPass.webp";
import privateGym from "../assets/heroImage.webp";

const MemberSection_1 = () => {
  const memberships = [
    {
      id: 1,
      image: everyDayPass,
      title: "Everyday Pass",
    },
    {
      id: 2,
      image: weekendPass,
      title: "Weekend Pass",
    },
    {
      id: 3,
      image: aDayPass,
      title: "1 Day Pass",
    },
    {
      id: 4,
      image: privateGym,
      title: "Private Gym",
    },
  ];

  return (
    <section className="w-full h-screen mt-12 md:my-60">
      <div className="w-full mx-auto flex flex-col items-center justify-center h-full">
        {memberships.map(({ id, image, title }) => (
          <div
            key={id}
            className="w-11/12 h-40 md:h-[16rem] md:max-w-screen-md relative before:inset-0 before:absolute before:bg-lime-500 before:w-full before:bg-opacity-40 my-2 cursor-pointer hover:before:bg-opacity-50 before:transition before:duration-500 group"
          >
            <img src={image} className="w-full h-40 md:h-[16rem] object-cover" alt="thumbnail" />
            <div className="absolute text-white bottom-[8%] left-[6%] italic drop-shadow-[2px_3px_2px_rgba(0,0,0,0.5)] group-hover:animate-pulse">
              <h1 className="text-3xl font-semibold md:text-5xl cursor-pointer">{title}</h1>
              <p className="text-sm mt-1 cursor-pointer">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MemberSection_1;
