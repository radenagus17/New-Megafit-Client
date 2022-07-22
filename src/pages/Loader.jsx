import FadeLoader from "react-spinners/FadeLoader";

const Loader = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <FadeLoader color="#84cc16" size={150} />
    </div>
  );
};

export default Loader;
