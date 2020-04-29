import CssBaseline from "material-ui/core/CssBaseline";
import { ThemeProvider } from "material-ui/styles";
import App from "next/app";
import React from "react";
import { theme } from "../lib/theme";
import Header from "../components/Header";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = {};

    if (Component.getInitialProps) {
      Object.assign(pageProps, await Component.getInitialProps(ctx));
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header {...pageProps} />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
