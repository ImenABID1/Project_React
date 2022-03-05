import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi} from '../Service/cryptoApi';
import { cryptoNewsApi } from "../Service/cryptoNewsApi";
export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
        
    },
})
