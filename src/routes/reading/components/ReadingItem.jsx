import React from 'react';
import styles from './reading.module.scss'

function ReadingItem({ onClick, value }) {
    return (
        <>
            <button onClick={onClick} className={styles.item}>{value}</button>
        </>
    )
}

export default ReadingItem;