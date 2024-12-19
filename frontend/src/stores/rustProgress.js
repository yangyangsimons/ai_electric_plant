import { createSlice } from '@reduxjs/toolkit';

const rustProgress = createSlice({
    name: 'progress',
    initialState: {
        rust: null,
    },
    reducers: {
        setRust: (state, action) => {
            state.rust = action.payload;
        },
    },
});