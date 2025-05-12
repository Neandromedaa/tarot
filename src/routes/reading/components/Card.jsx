import React from 'react'
import styles from './reading.module.scss'
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';

function Card({ item, FOR_DEV }) {
    const cardsImg = new Cloudinary({
        cloud: {
            cloudName: import.meta.env.VITE_CLOUDINARY_API
        }
    });
    const cardImg = cardsImg.image(FOR_DEV);
    // const cardImg = cardsImg.image(item.id); ----- когда все карточки сделаны будут

    return (
        <>
            <div className={styles.card}>
                <AdvancedImage
                    className={styles.cardCloud}
                    cldImg={cardImg}
                />
                <p>{item.name}</p>
            </div>
        </>
    )
}

export default Card