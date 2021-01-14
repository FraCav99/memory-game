import {useState, useEffect} from 'react';
import ScoreBoard from './playComponents/ScoreBoard';
import Card from './playComponents/Card';
import './Play.css'

const Play = () => {
    const [currentHeroes, setCurrentHeroes] = useState([]);
    const [heroesSequence, setHeroesSequence] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const randomInteger = (max, min) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const checkHeroesSequence = (ev) => {
        const id = ev.target.parentNode.id;
        if (!heroesSequence.includes(id)) {
            setHeroesSequence([...heroesSequence, id]);
            setScore(score + 1);
            bestScore <= score && setBestScore(bestScore + 1); 
        } else {
            setHeroesSequence([]);
            setScore(0);
        }
    }

    useEffect(() => {
        (async () => {
            const currentCharctersArr = [];
            const currentHeroesIds = [];
            let i = 0;
            while (i < 3) {
                const randomPage = randomInteger(1, 16);
                const randomCharacter = randomInteger(0, 19);
                const response = await fetch(`https://myheroacademiaapi.com/api/character?page=${randomPage}`);
                const formattedResponse = await response.json();
                const currentCharacter = formattedResponse.result[randomCharacter];

                // Avoid duplication of the same card in the current cards array
                if (!currentHeroesIds.includes(currentCharacter.id)) {
                    currentCharctersArr.push(currentCharacter);
                    currentHeroesIds.push(currentCharacter.id);
                    i++;
                }
            }
            // console.log(currentCharctersArr);
            setCurrentHeroes(currentCharctersArr);
        })(); 
    }, [heroesSequence]);

    return (
        <div className="Play">
            <div className="scoreboard-container">
                <ScoreBoard score={score} bestScore={bestScore}/>
            </div>
            <div className="cards-container">
                {currentHeroes.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            charId={item.id}
                            charImage={item.images[item.images.length - 1]}
                            charAlias={item.alias}
                            charName={item.name}
                            getCardId={checkHeroesSequence}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Play;