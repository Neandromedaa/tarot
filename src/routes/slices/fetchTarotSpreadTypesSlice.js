import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

export const fetchSpreadTypes = createAsyncThunk(
    'spreadTypes/fetch',
    async () => {
    const snapshot = await getDocs(collection(db, 'spreadTypes'));
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }
);

const spreadTypesSlice = createSlice({
    name: 'spreadTypes',
    initialState: {
        items: [],
        status: 'idle',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSpreadTypes.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSpreadTypes.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchSpreadTypes.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default spreadTypesSlice.reducer;