import './ScoreBoard.css';

const ScoreBoard = ({score, bestScore}) => {
    return (
        <div className="ScoreBoard">
            <p>Score: {score}</p>
            <p>Best score: {bestScore}</p>
        </div>
    );
};

export default ScoreBoard;