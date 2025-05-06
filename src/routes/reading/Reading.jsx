import React, { useEffect } from 'react'
import ReadingRead from './components/ReadingRead'
import ReadingResult from './components/ReadingResult'
import InfoContainer from './components/InfoContainer'
import styles from './components/reading.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../slices/readingSlice';
import { fetchSpreadTypes } from '../slices/fetchTarotSpreadTypesSlice'
import { fetchSpreadPurposes } from '../slices/fetchTarotSpreadPurposesSlice'
import { fetchCards } from '../slices/fetchTarotCardsSlice'
import ReadingItems from './components/ReadingItems'

function Reading() {  
    const dispatch = useDispatch();
    const currentMode = useSelector((state) => state.tarot.mode);
    
    useEffect(() => {
        dispatch(fetchSpreadTypes());
        dispatch(fetchSpreadPurposes());
        dispatch(fetchCards());
    }, []);

    function handleClick() {
        let newMode = currentMode + 1;
        dispatch(setMode(newMode));    
    };

    return (
        <>
            <h1 className={styles.title}>Гадание</h1>
            <div className={styles.reading}>
                {(currentMode === 0 || currentMode === 1) && <ReadingItems/>}
                {currentMode === 2 && <ReadingRead/>}
                {currentMode === 3 && <ReadingResult/>}
                {(currentMode === 0 || currentMode === 1) && <InfoContainer/>}
                {(currentMode === 0 || currentMode === 1) && <button onClick={() => handleClick()}>Выбрать</button>}
            </div>
        </>
    )
}

export default Reading;
             