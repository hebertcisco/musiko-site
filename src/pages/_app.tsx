import "../styles/globals.css";

import App from "next/app";
import Head from "next/head";
import React from "react";

type AppProps = {
  Component: React.ReactNode;
  pageProps: any;
};

export default class CustomApp extends App<AppProps> {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700&display=swap"
            rel="stylesheet"
          ></link>

          <link
            rel="stylesheet"
            href="static/vendor/bootstrap/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="static/vendor/owl.carousel2/assets/owl.carousel.css"
          />
          <link
            rel="stylesheet"
            href="static/vendor/owl.carousel2/assets/owl.theme.default.css"
          />
          <link
            rel="stylesheet"
            href="static/vendor/modal-video/css/modal-video.min.css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Nunito:400,600,800&amp;display=swap"
          />
          <link rel="stylesheet" href="static/css/device-mockups.css" />
          <link
            rel="stylesheet"
            href="static/css/style.default.css"
            id="theme-stylesheet"
          />
          <link rel="stylesheet" href="static/css/custom.css" />

          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
            crossOrigin="anonymous"
          />
        </Head>

        <Component {...pageProps} />
      </>
    );
  }
}
