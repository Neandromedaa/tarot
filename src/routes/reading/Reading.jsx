import React, { useEffect } from 'react'
import ReadingRead from './components/ReadingRead'
import ReadingResult from './components/ReadingResult'
import InfoContainer from './components/InfoContainer'
import styles from './components/reading.module.scss'
import { useDispatch, useSelector } from 'react-redux';
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

    return (
        <>
            <div className={styles.reading}>
                <h1 className={styles.title}>Гадание</h1>
                <div className={styles.readingMain}>
                    {(currentMode === 0 || currentMode === 1) && <ReadingItems/>}
                    {currentMode === 2 && <ReadingRead/>}
                    {currentMode === 3 && <ReadingResult/>}
                    {(currentMode === 0 || currentMode === 1) && <InfoContainer/>}
                </div>
            </div>
            
        </>
    )
}

export default Reading;
             