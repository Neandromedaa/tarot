import React from 'react'
import ReadingItem from './ReadingItem';
import { useDispatch, useSelector } from 'react-redux'
import { setTarotSpreadPurpose } from '../../slices/readingSlice';
import { setTarotSpreadType } from '../../slices/readingSlice';
import styles from './reading.module.scss'

function ReadingItems() {
    const dispatch = useDispatch();
    const spreadPurposes = useSelector((state) => state.spreadPurposes.items);
    const spreadTypes = useSelector((state) => state.spreadTypes.items);
    const currentMode = useSelector((state) => state.tarot.mode);

    const buttonTypes= spreadTypes.map(item => {
        return <ReadingItem key={item.id} onClick={() => handleTypeClick(item)} value={item.name}/>
    })

    const buttonPurposes= spreadPurposes.map(item => {
        return <ReadingItem key={item.id} onClick={() => handlePurposeClick(item)} value={item.name}/>
    })

    function handleTypeClick(type) {
        dispatch(setTarotSpreadType(type));
    };

    function handlePurposeClick(purpose) {
        dispatch(setTarotSpreadPurpose(purpose));
    };

    return (
        <>
            <div className={styles.items}>
                {currentMode === 0 && buttonTypes}
                {currentMode === 1 && buttonPurposes}
            </div>
        </> 
    )
}

export default ReadingItems;