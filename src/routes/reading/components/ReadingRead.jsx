import CardDeck from './CardDeck';
import CardPlaceholder from './CardPlaceholder';
import Card from './Card';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../../slices/readingSlice';
import { setCardsArray } from '../../slices/readingSlice';
import styles from './reading.module.scss'

function ReadingRead() {
    const dispatch = useDispatch();
    const currentMode = useSelector((state) => state.tarot.mode);
    const [goToResult, setGoToResult] = useState(false);
    const currentSpreadType = useSelector((state) => state.tarot.tarotSpreadType);
    const cards = useSelector((state) => state.cards.items)
    const randomCards = useSelector((state) => state.tarot.cardsArray);
    const [placeholderIsAvailable, setPlaceholder] = useState(Array(currentSpreadType.cardsCount).fill(true));

    console.log(randomCards)
    function getRandomCards(cards, cardsCount){
        let res = [];
        const tempCards = Array.from(cards);
        for(let i = 0; i < cardsCount; i++){
            let rnd = Math.floor(Math.random() * (tempCards.length));
            res.push(tempCards[rnd]);
            tempCards.splice(rnd, 1);
        }
        dispatch(setCardsArray(res));
    }
    
    useEffect(() => {
        getRandomCards(cards, currentSpreadType.cardsCount);
    }, [])
    
    function activateNext() {
        setPlaceholder(prevStates => {
            const currentIndex = prevStates.findIndex(value => value === true);
            const newStates = [...prevStates];
            newStates[currentIndex] = false;
            if (currentIndex === currentSpreadType.cardsCount - 1) setGoToResult(true);
            return newStates;
        });
    }

    const cardPlaceholders = randomCards.map((item, index) => {
        console.log(item.name)
        return  <div key={index}>
                    {placeholderIsAvailable[index] ? <CardPlaceholder activateNext={activateNext}/> : <Card item={item.name}/>}
                </div>
    })

    function handleClick() {
        let newMode = currentMode + 1;
        dispatch(setMode(newMode));    
    };

    // useEffect(() => {
    //     if(!placeholderIsEmpty1 && !placeholderIsEmpty3  && !placeholderIsEmpty3){
    //         let newMode = currentMode + 1;
    //         dispatch(setMode(newMode));    
    //     };
    // }, [placeholderIsEmpty1, placeholderIsEmpty2, placeholderIsEmpty3])
    console.log(randomCards)
    return (
        <>
            <div className={styles.readingField}>
                <CardDeck/>
                {cardPlaceholders}    
            </div>
            {goToResult && <button onClick={() => handleClick()}>Результаты</button>}
        </> 
    )
}

export default ReadingRead;