import React from "react";
// import SlideTitle from "./SlideTitle";
// import SlideImage from "./SlideImage";

// import "./../styles.scss";

export default function Slide({ data: { url, title } }) {
  return (
    <div className="slide">
        <h3>{title}</h3>
        <img src={url} alt={title} />
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Duis vitae tortor nec arcu condimentum ullamcorper quis eget felis. 
            In posuere elit eget lacus lacinia rutrum eu at leo.
        </p>
    </div>
  );
}