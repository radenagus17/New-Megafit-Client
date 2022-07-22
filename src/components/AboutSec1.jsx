import logoMegafit from "../assets/logo-megafit.png";

const AboutSec1 = () => {
  const data = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 6,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 7,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 8,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 9,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 10,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 11,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 12,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 13,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
  ];
  return (
    <section className="w-full h-screen -mt-3 md:mt-36">
      <div className="w-full mx-auto flex flex-col items-center justify-center h-full">
        <img src={logoMegafit} className="w-72 md:w-1/3" alt="logo" />
        <h1 className="text-3xl font-semibold md:text-5xl py-20 italic">Lorem Ipsum</h1>
        <ul className="text-xs md:text-3xl py-2 text-lime-500">
          {data.map(({ id, text }) => (
            <li className="py-1" key={id}>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutSec1;
