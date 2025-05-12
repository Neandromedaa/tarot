import React from 'react'
import clsx from 'clsx'
import InfoText from './InfoText'
import InfoAnimationSample from './InfoAnimationSample'
import styles from './reading.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../../slices/readingSlice';

function InfoContainer() {
    const dispatch = useDispatch();
    const currentMode = useSelector((state) => state.tarot.mode);
    const isSpreadType = useSelector((state) => state.tarot.tarotSpreadType);
    const isSpreadPurpose = useSelector((state) => state.tarot.tarotSpreadPurpose);
    const isEnabledNextButtonType = (currentMode === 0 && isSpreadType);
    const isEnabledNextButtonPurpose = (currentMode === 1 && isSpreadPurpose);

    function handleClick() {
        if(isEnabledNextButtonPurpose || isEnabledNextButtonType){
            let newMode = currentMode + 1;
            dispatch(setMode(newMode));  
        }     
    };
        
    return (
        <>
            <div className={styles.infoContainer}>
                <InfoText/>
                {currentMode === 0 && <InfoAnimationSample/>}
                {(currentMode === 0 || currentMode === 1) && 
                    <button 
                        className={clsx(styles.button, !(isEnabledNextButtonPurpose || isEnabledNextButtonType) && styles.disabledButton)} 
                        onClick={() => handleClick()}>
                            Выбрать
                    </button>}
            </div>
        </>
    )
}

export default InfoContainer