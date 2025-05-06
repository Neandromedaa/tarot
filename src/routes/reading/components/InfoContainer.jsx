import React from 'react'
import InfoText from './InfoText'
import InfoAnimationSample from './InfoAnimationSample'
import styles from './reading.module.scss'
import { useSelector } from 'react-redux';

function InfoContainer() {
    const currentMode = useSelector((state) => state.tarot.mode);
    return (
        <>
            <div className={styles.infoContainer}>
                <InfoText/>
                {currentMode === 0 && <InfoAnimationSample/>}
            </div>
        </>
    )
}

export default InfoContainer