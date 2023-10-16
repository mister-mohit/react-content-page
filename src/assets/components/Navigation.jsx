

function Navigation(){
    return (
        <nav>
            <div className="logo">
                <img src="../public/images/brand_logo.png" alt="logo"></img>
            </div>
            <ul>
                <li>Menu</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button className="btn">Login</button>
        </nav>
    );
}

export default Navigation;