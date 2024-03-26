import { createSlice } from '@reduxjs/toolkit';

const rustSlice = createSlice({
    name: 'rust',
    initialState: {
        rust: null,
    },
    reducers: {
        setRust: (state, action) => {
            state.rust = action.payload;
        },
    },
});