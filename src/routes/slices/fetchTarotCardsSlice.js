import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

export const fetchCards = createAsyncThunk(
    'cards/fetch',
    async () => {
    const snapshot = await getDocs(collection(db, 'cards'));
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }
);

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        items: [],
        status: 'idle',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCards.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCards.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchCards.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default cardsSlice.reducer;