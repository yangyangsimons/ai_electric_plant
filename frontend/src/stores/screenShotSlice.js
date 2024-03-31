// src/features/screenshot/screenshotSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const screenShotSlice = createSlice({
    name: 'screenshot',
    initialState: {
        imageSrc: '',
    },
    reducers: {
        setImageSrc: (state, action) => {
            state.imageSrc = action.payload;
        },
    },
});

export const { setImageSrc } = screenShotSlice.actions;

export default screenShotSlice.reducer;
