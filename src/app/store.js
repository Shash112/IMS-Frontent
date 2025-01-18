import { configureStore } from '@reduxjs/toolkit';
import  authReducer from '../features/auth/authSlice';
import productReducer from '../features/products/productSlice';
import branchReducer from '../features/branch/branchSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
        branch: branchReducer
    }
});

export default store;