import React, { useEffect } from 'react'
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import styles from './reading.module.scss'
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import {fill} from "@cloudinary/url-gen/actions/resize";

function CardDeck({ isDraggable }) {
    const isCardsPlaced = useSelector((state) => state.tarot.isCardsPlaced);
        
    const cardsImg = new Cloudinary({
        cloud: {
            cloudName: import.meta.env.VITE_CLOUDINARY_API
        }
    });
    const backImg = cardsImg.image('back');
    
    return (
        <>
            <AdvancedImage cldImg={backImg} 
            draggable={!isDraggable} 
                onDragStart={(e) => {
                    e.dataTransfer.setData("text/plain", "card");
                }} 
                className={clsx(styles.cardDeck, isCardsPlaced && styles.cardDeck_hide_animation)}
            />
            {/* <div
                
                /> */}
        </>
    )
}

export default CardDeck;