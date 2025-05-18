import React, { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";
import SlidesList from "./SliderList";
import Dots from "./Dots";

export const SliderContext = createContext();

export default function Slider ({ width, height }) {
  const [items, setItems] = useState([
    {url: 'images/videos.png', title: 'Mountain Survival Tutorial'},
    {url: 'images/videos.png', title: 'Mountain Survival Tutorial'},
    {url: 'images/videos.png', title: 'Mountain Survival Tutorial'},
    {url: 'images/videos.png', title: 'Mountain Survival Tutorial'}
  ]);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null)
  
  // useEffect(() => {
  //   const loadData = async () => {
  //     const images = await getImages();
  //     setItems(images);
  //   };
  //   loadData();
  // }, []);

  function changeSlide (direction = 1) {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (slide + direction) % items.length;
    }
    setSlide(slideNumber);
  };

  function goToSlide (number) {
    setSlide(number % items.length);
  };

  function handleTouchStart (e) {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  }

  function handleTouchMove (e) {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }
    if (direction < -10) {
      changeSlide(-1);
    }
    setTouchPosition(null);
  }

  return (
    <div
      style={{ width, height }}
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <SliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: items.length,
          slideNumber: slide,
          items,
        }}
      >
        <SlidesList />
        <Dots />
      </SliderContext.Provider>
    </div>
  );
};

Slider.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
};

Slider.defaultProps = {
  width: "100%",
  height: "100%"
};