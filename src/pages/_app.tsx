import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { store } from '../app/store';

// Wrapping MyApp around provider enables Redux state to the entire app
function MyApp({
  Component, pageProps,
}: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
