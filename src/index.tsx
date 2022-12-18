import "utils/wdyr";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { hydrate, render } from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "store";
import AppRouter from "./index.router";
import reportWebVitals from "./report-web-vitals";

let persistor = persistStore(store);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HelmetProvider>
        <ChakraProvider>
          <React.StrictMode>
            <AppRouter />
          </React.StrictMode>
        </ChakraProvider>
      </HelmetProvider>
    </PersistGate>
  </Provider>
);

const rootElement = document.getElementById("root");
if (rootElement?.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
