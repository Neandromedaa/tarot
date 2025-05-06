import React, { useEffect } from 'react';
import styles from './mainMenu.module.scss'
import { collection, setDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';
function MenuHeader() {


	const cards = [
		{
			id: 'vGzBxjl0l2egoE0jYzp1',
			arcana: 'Старший',
			name: 'Верховный жрец',
		},
		{
			id: 'NNfscVjylkTWGZC7yFGj',
			arcana: 'Старший',
			name: 'Влюбленные',
		},
		{
			id: 'SVhj2RJV0Mt8tHRVvMBm',
			arcana: 'Старший',
			name: 'Колесница',
		},
		{
			id: 'WRVIjVq9rosKm06R2vMY',
			arcana: 'Старший',
			name: 'Сила',
		},
		{
			id: '7lFNGyHXVrr6DWscOqTY',
			arcana: 'Старший',
			name: 'Отшельник',
		},
		{
			id: 'BMCPjk10An7n4dk3QPHG',
			arcana: 'Старший',
			name: 'Колесо фортуны',
		},
		{
			id: '5FtK8YdcaymI8PDRSc5o',
			arcana: 'Старший',
			name: 'Правосудие',
		},
		{
			id: 'G1qnVynXGtZijwNGqvri',
			arcana: 'Старший',
			name: 'Повешенный',
		},
		{
			id: 'yOmqEu9lPSVgESWGOA48',
			arcana: 'Старший',
			name: 'Смерть',
		},
		{
			id: 'ocjjLzxi1oPbhNjPP12C',
			arcana: 'Старший',
			name: 'Воздержание',
		},
		{
			id: 'R2MZmTGbsx8uasazct4K',
			arcana: 'Старший',
			name: 'Дьявол',
		},
		{
			id: 'GXzOiUM4l0FO7WKhhhw9',
			arcana: 'Старший',
			name: 'Башня',
		},
		{
			id: 'AYg3kphSStEeI58pkgWU',
			arcana: 'Старший',
			name: 'Звезда',
		},
		{
			id: 'efhCvUhEhmSwoLj0qz1L',
			arcana: 'Старший',
			name: 'Луна',
		},
		{
			id: 'Ry1hmhaiGHBm3p83pd2Y',
			arcana: 'Старший',
			name: 'Солнце',
		},
		{
			id: 'bKkib7kDQuBn5Vm5fmII',
			arcana: 'Старший',
			name: 'Суд',
		},
		{
			id: 'lrMjQ7tx2G3xcSNJcYwv',
			arcana: 'Старший',
			name: 'Мир',
		},

	];

	// useEffect(() => {
	// 	const seedFirestore = async () => {
	// 	  for (const card of cards) {
	// 		await setDoc(doc(db, 'cards', card.id), card);
	// 	  }
	// 	  console.log('✅ Карты загружены в Firestore');
	// 	};
	  
	// 	// Раскомментируй, если хочешь, чтобы сид запускался один раз:
	// 	seedFirestore();
	//   }, []);
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