import ScoreBoard from './playComponents/ScoreBoard';
import Card from './playComponents/Card';
import './Play.css'

const Play = () => {
    return (
        <div className="Play">
            <div className="scoreboard-container">
                <ScoreBoard />
            </div>
            <div className="cards-container">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default Play;