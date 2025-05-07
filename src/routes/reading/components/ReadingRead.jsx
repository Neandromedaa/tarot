import CardDeck from './CardDeck';
import CardPlaceholder from './CardPlaceholder';
import Card from './Card';
import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux';
import { setMode, setCardsArray, setIsCardsPlaced } from '../../slices/readingSlice';
import styles from './reading.module.scss'

function ReadingRead() {
    const dispatch = useDispatch();
    const currentMode = useSelector((state) => state.tarot.mode);
    const isCardsPlaced = useSelector((state) => state.tarot.isCardsPlaced);
    const currentSpreadType = useSelector((state) => state.tarot.tarotSpreadType);
    const cards = useSelector((state) => state.cards.items)
    const randomCards = useSelector((state) => state.tarot.cardsArray);
    const [placeholderIsAvailable, setPlaceholder] = useState(Array(currentSpreadType.cardsCount).fill(true));

    function getRandomCards(cards, cardsCount){
        let res = [];
        const tempCards = Array.from(cards);

        for (let i = tempCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [tempCards[i], tempCards[j]] = [tempCards[j], tempCards[i]];
        }

        for(let i = 0; i < cardsCount; i++){
            let rnd = Math.floor(Math.random() * (tempCards.length));
            res.push(tempCards[rnd]);
            tempCards.splice(rnd, 1);
        }
        dispatch(setCardsArray(res));
    }
    
    useEffect(() => {
        getRandomCards(cards, currentSpreadType.cardsCount);
    }, []);

    useEffect(() => {
        if (placeholderIsAvailable.every(item => item === false)) {
          dispatch(setIsCardsPlaced(true));
        }
    }, [placeholderIsAvailable]);

    function activateNext() {
        setPlaceholder(prevStates => {
            const currentIndex = prevStates.findIndex(value => value === true);
            const newStates = [...prevStates];
            newStates[currentIndex] = false;
            return newStates;
        });
    }

    const cardPlaceholders = randomCards.map((item, index) => {
        return  <div key={index}>
                    {placeholderIsAvailable[index] ? <CardPlaceholder activateNext={activateNext}/> : <Card item={item.name}/>}
                </div>
    })

    function handleClick() {
        let newMode = currentMode + 1;
        dispatch(setMode(newMode));    
    }

    return (
        <>
            <div className={styles.readingRead}>
                <CardDeck/>
                <div className={clsx(styles.readingPlaceholders, isCardsPlaced && styles.readingPlaceholders_center_animation)}>
                    {cardPlaceholders} 
                </div>  
                <button 
                    className={clsx( styles.button, styles.resButton_hide, isCardsPlaced && styles.resButton_show)} 
                    onClick={() => handleClick()}
                >
                    Результаты
                </button>
            </div>
           
        </> 
    )
}

export default ReadingRead;