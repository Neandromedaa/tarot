import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

export const fetchSpreadPurposes = createAsyncThunk(
    'spreadPurpose/fetch',
    async () => {
    const snapshot = await getDocs(collection(db, 'spreadPurpose'));
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }
);

const spreadPurposesSlice = createSlice({
    name: 'spreadPurposes',
    initialState: {
        items: [],
        status: 'idle',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSpreadPurposes.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSpreadPurposes.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchSpreadPurposes.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default spreadPurposesSlice.reducer;