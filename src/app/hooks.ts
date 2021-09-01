import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';
import type {
  AppDispatch,
  RootState,
} from './store';

/*
  With TypeScript apps, *Redux Toolkit* suggests creating *typed versions* of the
  useDispatch and useSelector hooks to make it easier and more reliable to use
  throughout your app.
*/

// GENERAL NOTE //
// While it's possible to import the RootState and AppDispatch types into each component, it's better to create typed versions of the useDispatch and useSelector hooks for usage in your application. //

// Use throughout your app instead of plain `useDispatch` and `useSelector`

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
