import './Card.css';

const Card = ({charId, charImage, charAlias, charName, getCardId}) => {
    return (
        <div className="Card" id={charId} onClick={ev => getCardId(ev)}>
            <div 
                className="pic-container"
                style={{backgroundImage: `url(${charImage})`}}
            ></div>
            <div className="description-container">
                <p className="hero-name">{charName || charId}</p>
                <p className="hero-alias">{charAlias}</p>
            </div>
        </div>
    );
}

export default Card;