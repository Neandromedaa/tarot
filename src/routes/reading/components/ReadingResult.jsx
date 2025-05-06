import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GoogleGenAI } from "@google/genai";

function ReadingResult() {
    const [result, setResult] = useState('');
    const currentSpreadType = useSelector((state) => state.tarot.tarotSpreadType);
    const currentSpreadPurpose = useSelector((state) => state.tarot.tarotSpreadPurpose);
    const currentCards = useSelector((state) => state.tarot.cardsArray);
    
    const currentCardNames = currentCards.map(item => item.name)
    const ai = new GoogleGenAI({ apiKey: `${import.meta.env.VITE_GOOGLE_GEMINI_API}` });
    useEffect(() => {
        const fetchData = async() => {
            const response = await ai.models.generateContent({
                model: "gemini-2.0-flash",
                contents: `Ты — мудрый и загадочный таролог. Я дам тебе параметры расклада: тип расклада, тема и названия выпавших карт. Твоя задача — создать мистическое, увлекательное, образное толкование расклада. Вывод должен быть в формате JSON с двумя полями: full — полное толкование расклада в художественном стиле, включающее анализ карт и их взаимодействие. Используй мистический и атмосферный стиль, будто ты рассказываешь древнюю историю или пророчество. short — краткое толкование в 2 полных предложениях, передающее суть и эмоциональный настрой расклада. Входные данные: Тип расклада: ${currentSpreadType.name} На что расклад: ${currentSpreadPurpose.name} Выпавшие карты: ${currentCardNames} Выводи только чистый JSON, без дополнительных пояснений, без подписей, без лишних переносов строк.`,
            })
                .then(res => {
                    const raw = res.candidates[0].content.parts[0].text;
                    const jsonStr = raw.replace(/^```json\n/, '').replace(/\n```$/, '');
                    return JSON.parse(jsonStr);
                })
                .then(res => setResult(res));
        }
        fetchData();
    }, [])
    return (
        <>
            <p>{result.full || 'result'}</p>
        </>
    )
}

export default ReadingResult