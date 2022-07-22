const Button = ({ children, style }) => {
  return <button className={`bg-lime-400 text-sm md:text-base text-white font-[Poppins] py-2 px-6 rounded-3xl hover:bg-lime-500 duration-500 ${style ? style : "md:ml-8"}`}>{children}</button>;
};

export default Button;
