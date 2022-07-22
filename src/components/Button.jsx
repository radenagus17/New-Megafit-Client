import { Link } from "react-router-dom";

const Button = ({ children, style, link }) => {
  return (
    <>
      {link ? (
        <Link to={link} className={`bg-lime-400 text-sm md:text-base text-white py-2 px-6 rounded-3xl hover:bg-lime-500 duration-500 ${style ? style : "md:ml-8"}`}>
          {children}
        </Link>
      ) : (
        <button className={`bg-lime-400 text-sm md:text-base text-white py-2 px-6 rounded-3xl hover:bg-lime-500 duration-500 ${style ? style : "md:ml-8"}`}>{children}</button>
      )}
    </>
  );
};

export default Button;
