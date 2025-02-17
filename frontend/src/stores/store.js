import { configureStore } from "@reduxjs/toolkit";
import screenshotReducer from './screenShotSlice.js';
import measureReducer from './measureSlice.js';
const store = configureStore({
    reducer: {
        screenshot: screenshotReducer,
        measure: measureReducer,
    },
});

export default store;