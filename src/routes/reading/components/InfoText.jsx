import React, { useEffect, useState } from 'react'
import styles from './reading.module.scss'
import { useSelector } from 'react-redux';

function InfoText() {
    const [description, setDescription] = useState('');
    const currentMode = useSelector((state) => state.tarot.mode);
    const currentSpreadType = useSelector((state) => state.tarot.tarotSpreadType);
    const currentSpreadPurpose = useSelector((state) => state.tarot.tarotSpreadPurpose);
    const spreadTypes = useSelector((state) => state.spreadTypes.items);
    const spreadPurposes = useSelector((state) => state.spreadPurposes.items);

    useEffect(() => {
        function getSpreadTypes(){
            const found = spreadTypes.find((item) => item.name === currentSpreadType.name);
            if(found) setDescription(found.description);
        };
        getSpreadTypes();
    }, [currentSpreadType]);

    useEffect(() => {
        function getSpreadPurposes(){
            const found = spreadPurposes.find((item) => item.name === currentSpreadPurpose.name);
            if(found) setDescription(found.description);
        };
        getSpreadPurposes();
    }, [currentSpreadPurpose]);

    useEffect(() => {
        setDescription('')
    }, [currentMode])

    return (
        <>
            <div className={styles.infoText}>
                {currentMode === 0 && (description || 'Выберите тип расклада')}
                {currentMode === 1 && (description || 'Выберите цель расклада')}
            </div>
        </>
    )
}

export default InfoText