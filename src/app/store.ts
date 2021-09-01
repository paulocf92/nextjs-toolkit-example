import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import kanyeReducer from '../features/kanye/kanyeSlice';

export const store = configureStore({
  reducer: {
    // This is where we add reducers.
    counter: counterReducer,
    kanye: kanyeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {counter: CounterState}
export type AppDispatch = typeof store.dispatch;
