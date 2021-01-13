import './Card.css';

const Card = () => {
    return (
        <div className="Card">
            <div className="pic-container">
                <img src="" alt="hero-pic" />
            </div>
            <div className="description-container">
                <p className="hero-name">Hero Name</p>
                <p className="hero-alias">Hero Alias</p>
            </div>
        </div>
    );
}

export default Card;