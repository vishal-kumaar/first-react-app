import puzzle from "../img/puzzle.svg"
import bulb from "../img/bulb.svg"
import "./hero.css"

function Hero(){
    return (
        <div className="hero">
            <div className="hero1">
                <h1 className="heading">Interior Design That <br /> Care About Details</h1>
                <div className="card1">
                    <img className="puzzle-image" src={puzzle} alt="puzzle-img" />
                    <p className="card-text">We create your space better <br /> based on your own idea</p>
                </div>
            </div>
        <div className="hero2">
            <button className="btn">LEARN MORE</button>
            <div className="card2">
                <img className="bulb-image" src={bulb} alt="bulb-img" />
                <p className="card-text">Innovation ideas,stylish <br /> design<br /> for home & Business</p>
            </div>
        </div>
    </div>
    );
}

export default Hero;