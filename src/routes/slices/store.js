import { configureStore } from '@reduxjs/toolkit'
import tarotReducer from './readingSlice'
import spreadTypesReducer from './fetchTarotSpreadTypesSlice'
import spreadPurposesReducer from './fetchTarotSpreadPurposesSlice'
import cardsReducer from './fetchTarotCardsSlice'

export const store = configureStore({
  reducer: {
    spreadTypes: spreadTypesReducer,
    spreadPurposes: spreadPurposesReducer,
    cards: cardsReducer,
    tarot: tarotReducer,
  },
});