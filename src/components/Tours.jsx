export default function Tours(){
    return(
        <div className="tours" id="tours">
            <h2 className="head-tours">CHOOSE &nbsp;&nbsp;<span>YOUR TOUR</span></h2>
            <p className="par-tours">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis vitae tortor nec arcu condimentum ullamcorper quis eget felis. 
                In posuere elit eget lacus lacinia rutrum eu at leo.
            </p>
            <div className="tours-content">
                <div className="tour">
                    <img className="tour-img" src = "images/tours1.png" alt = "img"></img>
                    <h3>Lake in the mountains</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis vitae tortor nec arcu condimentum ullamcorper quis eget felis.
                    </p>
                </div>
                <div className="tour">
                    <img className="tour-img" src = "images/tours2.png" alt = "img"></img>
                    <h3>Lake in the forest</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis vitae tortor nec arcu condimentum ullamcorper quis eget felis.
                    </p>
                </div>
                <div className="tour">
                    <img className="tour-img" src = "images/tours3.png" alt = "img"></img>
                    <h3>Snowy mountains</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis vitae tortor nec arcu condimentum ullamcorper quis eget felis.
                    </p>
                </div>
                <div className="tour">
                    <img className="tour-img" src = "images/tours4.png" alt = "img"></img>
                    <h3>Group hiking</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis vitae tortor nec arcu condimentum ullamcorper quis eget felis.
                    </p>
                </div>
            </div>
        </div>
    );
}