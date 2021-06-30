// import { configureStore } from '@reduxjs/toolkit'
// import counterSlice from '../lib/counter/counterSlice'

// export default configureStore({
//     reducer: {
//         counter: counterSlice,
//     },
// });

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../lib/counter/counterSlice";

export default configureStore({
    reducer: {
        counter: counterSlice,
    }
})