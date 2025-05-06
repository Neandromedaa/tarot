import React from 'react'
import styles from './reading.module.scss'

function CardDeck() {
    return (
        <>
            <div 
                draggable={true} 
                onDragStart={(e) => {
                    e.dataTransfer.setData("text/plain", "card");
                }} 
                className={styles.cardDeck}   
            >
                CardDeck
            </div>
        </>
    )
}

export default CardDeck;