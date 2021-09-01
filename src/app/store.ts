import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from '../features/counter';
import { kanyeReducer } from '../features/kanye';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    kanyeQuote: kanyeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
