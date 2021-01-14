import {useState, useEffect} from 'react';
import ScoreBoard from './playComponents/ScoreBoard';
import Card from './playComponents/Card';
import './Play.css'

const Play = () => {
    const [currentHeroes, setCurrentHeroes] = useState([]);
    const [heroesSequence, setHeroesSequence] = useState([]);

    const randomInteger = (max, min) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const getCardId = (ev) => {
        const id = ev.target.parentNode.id;
        setHeroesSequence([...heroesSequence, id]);
    }

    useEffect(() => {
        (async () => {
            const currentCharctersArr = [];
            let i = 0;
            while (i < 3) {
                const randomPage = randomInteger(1, 16);
                const randomCharacter = randomInteger(0, 19);
                const response = await fetch(`https://myheroacademiaapi.com/api/character?page=${randomPage}`);
                const formattedResponse = await response.json();
                const currentCharacter = formattedResponse.result[randomCharacter];

                // Avoid duplication of the same card in the current cards array
                if (!currentCharctersArr.includes(currentCharacter)) {
                    currentCharctersArr.push(currentCharacter);
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
                <ScoreBoard />
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
                            getCardId={getCardId}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Play;