import React, { useEffect, useState, useRef, memo } from "react";
const images = [
  {
    src: "/images/everyDasPass.webp",
    title: "Everyday Pass",
  },
  {
    src: "/images/weekendPass.webp",
    title: "Weekend Pass",
  },
  {
    src: "/images/1dayPassOne.webp",
    title: "1 Day Pass",
  },
  {
    src: "/images/privateGym.webp",
    title: "Private Gym",
  },
];

let count = 0;
let corouselInterval;
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const corRef = useRef();

  const removeAnimation = () => {
    corRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    corRef.current.addEventListener("animationend", removeAnimation);
    corRef.current.addEventListener("mouseenter", pauseCorousel);
    corRef.current.addEventListener("mouseleave", startCorousel);
    startCorousel();
    return () => {
      pauseCorousel();
    };
    // eslint-disable-next-line
  }, []);

  const startCorousel = () => {
    corouselInterval = setInterval(() => {
      handleOnNextClick();
    }, 5000);
  };

  const pauseCorousel = () => {
    clearInterval(corouselInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % images.length;
    setCurrentIndex(count);
    corRef.current.classList.add("fade-anim");
  };
  const handleOnPreviousClick = () => {
    const imageLength = images.length;
    count = (currentIndex + imageLength - 1) % imageLength;
    setCurrentIndex(count);
    corRef.current.classList.add("fade-anim");
  };
  return (
    <div ref={corRef} className="w-full select-none relative">
      <div className="aspect-w-16 aspect-h-9 before:absolute before:inset-0 before:bg-gray-400 before:w-full before:h-full before:opacity-30">
        <img className="object-cover object-center h-72 md:h-[26rem] w-[23rem] md:w-[60vw] mx-auto" src={images[currentIndex].src} alt="" />
        <div className="absolute text-white bottom-7 italic drop-shadow-lg px-6">
          <h3 className="text-4xl md:text-5xl py-2">{images[currentIndex].title}</h3>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, non!</p>
        </div>
      </div>
      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-1 flex justify-between items-center">
        <button className="text-white text-4xl cursor-pointer transition opacity-50 hover:opacity-100" onClick={handleOnPreviousClick}>
          <ion-icon name="arrow-dropleft-circle"></ion-icon>
        </button>
        <button className="text-white text-4xl cursor-pointer transition opacity-50 hover:opacity-100" onClick={handleOnNextClick}>
          <ion-icon name="arrow-dropright-circle"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default memo(ImageSlider);
