import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tarotSpreadType: null,
  tarotSpreadPurpose: null,
  cardsArray: [],
  mode: 0,
};

const readingSlice = createSlice({
  name: 'reading',
  initialState,
  reducers: {
    setTarotSpreadType: (state, action) => {
      state.tarotSpreadType = action.payload;
    },
    setTarotSpreadPurpose: (state, action) => {
      state.tarotSpreadPurpose = action.payload;
    },
    setCardsArray: (state, action) => {
      state.cardsArray = action.payload;
    },
    setMode: (state, action) => {
      if(state.mode === 3) state.mode = 0;
      else state.mode = action.payload;
    }
  },
});

export const { setTarotSpreadType, setTarotSpreadPurpose, setCardsArray, setMode } = readingSlice.actions;

export default readingSlice.reducer;