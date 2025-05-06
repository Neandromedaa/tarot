import React from 'react'
import styles from './reading.module.scss'

function Card({ item }) {
    return (
        <>
            <div className={styles.card}>
                <p>{item}</p>
            </div>
        </>
    )
}

export default Card