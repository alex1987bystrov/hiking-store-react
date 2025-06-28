export default function Slide({ data: { url, title, poster } }) {
  return (
    <div className="slide">
        {/* <iframe width="760" height="480"
        src={url} 
        title={title}
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
        <video controls width="57%" poster={poster}>
          <source src={url} type="video/mp4"></source>
          Not found
        </video>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Duis vitae tortor nec arcu condimentum ullamcorper quis eget felis. 
            In posuere elit eget lacus lacinia rutrum eu at leo.
        </p>
        <h3>{title}</h3>
    </div>
  );
}