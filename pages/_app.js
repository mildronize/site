import React from "react";
import App from "next/app";

import { Provider } from "react-redux";
import store from "../store";
import { ThemeSwitcher } from "../components/theme";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Provider store={store}>
          <ThemeSwitcher>
            <Component {...pageProps} />
          </ThemeSwitcher>
        </Provider>
      </>
    );
  }
}
