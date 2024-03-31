import { configureStore } from "@reduxjs/toolkit";
import screenshotReducer from './screenShotSlice.js';

const store = configureStore({
    reducer: {
        screenshot: screenshotReducer,
    },
});

export default store;