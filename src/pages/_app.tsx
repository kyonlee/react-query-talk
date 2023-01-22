import "@/styles/globals.css";
import "@picocss/pico";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from '../reducers'

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(reduxThunk)))

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}
