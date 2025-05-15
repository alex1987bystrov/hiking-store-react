import Slider from 'react-slick';

export default function SimpleCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src='images/videos.png' alt='slide-1' />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Duis vitae tortor nec arcu condimentum ullamcorper quis eget felis. 
          In posuere elit eget lacus lacinia rutrum eu at leo.
        </p>
      </div>
      <div>
        <img src='images/videos.png' alt='slide-2' />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Duis vitae tortor nec arcu condimentum ullamcorper quis eget felis. 
          In posuere elit eget lacus lacinia rutrum eu at leo.
        </p>
      </div>
      <div>
        <img src='images/videos.png' alt='slide-3' />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Duis vitae tortor nec arcu condimentum ullamcorper quis eget felis. 
          In posuere elit eget lacus lacinia rutrum eu at leo.
        </p>
      </div>
    </Slider>
  );
};