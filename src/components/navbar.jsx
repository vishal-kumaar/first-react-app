import phone from "../img/phone.svg";
import hamBurger from "../img/ham-burger.svg";
import "./navbar.css"

function Navbar(){
    return (
    <nav>
        <div className="logo">
            LOGO HERE
        </div>
        <div className="list-items">
            <a href="/" className="list-item">About Us</a>
            <a href="/" className="list-item">Benefits</a>
            <a href="/" className="list-item">Projects</a>
            <a href="/" className="list-item">Stages</a>
            <a href="/" className="list-item">Services</a>
            <div className="contact">
                <img className="phone-icon" src={phone} alt="phone-icon" />
                <div className="phone-no">
                    <p>Call Us</p>
            
                    <p>+38 (097) 654 54 34</p>
                </div>
            </div>
        </div>
        <img src={hamBurger} alt="nav-icon" className="ham-burger" />
    </nav>
    );
}

export default Navbar;