import React from 'react';
import '../styles/globals.css';
import 'react-vant/es/styles/base.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
