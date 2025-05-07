import React from 'react'
import InfoText from './InfoText'
import InfoAnimationSample from './InfoAnimationSample'
import styles from './reading.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../../slices/readingSlice';

function InfoContainer() {
    const dispatch = useDispatch();
    const currentMode = useSelector((state) => state.tarot.mode);
    function handleClick() {
            let newMode = currentMode + 1;
            dispatch(setMode(newMode));    
        };
        
    return (
        <>
            <div className={styles.infoContainer}>
                <InfoText/>
                {currentMode === 0 && <InfoAnimationSample/>}
                {(currentMode === 0 || currentMode === 1) && <button className={styles.button} onClick={() => handleClick()}>Выбрать</button>}
            </div>
        </>
    )
}

export default InfoContainer