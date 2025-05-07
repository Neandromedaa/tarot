import React, { useEffect } from 'react'
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import styles from './reading.module.scss'

function CardDeck() {
    const isCardsPlaced = useSelector((state) => state.tarot.isCardsPlaced);
    return (
        <>
            <div
                draggable={true} 
                onDragStart={(e) => {
                    e.dataTransfer.setData("text/plain", "card");
                }} 
                className={clsx(styles.cardDeck, isCardsPlaced && styles.cardDeck_hide_animation)}   
            >
                CardDeck
            </div>
        </>
    )
}

export default CardDeck;