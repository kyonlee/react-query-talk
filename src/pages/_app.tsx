import "@/styles/globals.css";
import "@picocss/pico";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { QueryClient, QueryClientProvider } from 'react-query'

import reducers from '../reducers'

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(reduxThunk)))

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />;
      </Provider>
    </QueryClientProvider>
  );
}
