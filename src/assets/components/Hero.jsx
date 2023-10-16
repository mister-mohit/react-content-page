

function Hero() {
    return(
        <main>
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p className="hero-para">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                
                <div className="hero-btn">
                    <button className="btn">Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>

                <div className="icon-section">
                    <p>Also Available on</p>
                    <div className="icons">
                        <img src="../public/images/flipkart.png" alt="flipkart-logo"></img>
                        <img src="../public/images/amazon.png" alt="amazon-logo"></img>
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="../public/images/shoe_image.png" alt="shoe-pic"></img>
            </div>
        </main>
    );
}

export default Hero;