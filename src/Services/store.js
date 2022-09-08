import {configureStore} from '@reduxjs/toolkit';
import reducer from './Users/index';

export const store = configureStore({
    reducer
})