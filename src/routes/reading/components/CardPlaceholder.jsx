import React from 'react'
import styles from './reading.module.scss'

function CardPlaceholder({ activateNext }) {
    const handleDrop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("text");
        if (data === "card") {
          activateNext();
        }
    };
    
    const handleDragOver = (e) => {
        e.preventDefault();
    };
    
    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className={styles.cardPlaceholder}
        >
            CardPlaceholder
        </div>
    )
}

export default CardPlaceholder;