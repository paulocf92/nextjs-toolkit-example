import { configureStore } from '@reduxjs/toolkit';
// import objectReducer from "./slices/objectSlice";

export const store = configureStore({
  reducer: {
  // This is where we add reducers.
  // Eg. objectName: objectReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {objectName: ObjectState}
export type AppDispatch = typeof store.dispatch;
