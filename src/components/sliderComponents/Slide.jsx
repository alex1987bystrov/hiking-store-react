export default function Slide({ data: { url, title, poster } }) {
  return (
    <div className="slide">
        <h3>{title}</h3>
        <video controls width="55%" poster={poster}>
          <source src={url} type="video/mp4"></source>
          Not found
        </video>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Duis vitae tortor nec arcu condimentum ullamcorper quis eget felis. 
            In posuere elit eget lacus lacinia rutrum eu at leo.
        </p>
    </div>
  );
}