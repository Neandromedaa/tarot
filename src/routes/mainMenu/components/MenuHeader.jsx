import React, { useEffect } from 'react';
import styles from './mainMenu.module.scss'

function MenuHeader() {
    return (
        <>
            <nav className={styles.navigation}>
				<a href={`/reading`}>Расклад таро</a>
				<a href={`/dailycard`}>Карта дня</a>
				<a href={`/dairy`}>Дневник</a>
				<a href={`/library`}>Блиотека</a>
				<a href={`/quest`}>Таро-квест</a>
			</nav>
        </>
    )
}

export default MenuHeader;