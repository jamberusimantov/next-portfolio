import React, { ReactElement, ReactNode, createContext, useState } from 'react';
import type { AppProps } from 'next/app';
// import { Provider } from 'react-redux';
import type { NextPage } from 'next';
import '../styles/globals.css';
// import store from '../store';
import { iHtml } from "../store/actions"
import { htmlDefault } from "../store/reducers"

// type AppPropsWithLayout = AppProps & { Component: NextPage & { getLayout: (page: ReactElement) => ReactNode } };
interface iAppPropsWithLayout extends AppProps {
  Component: NextPage & { getLayout: (page: ReactElement) => ReactNode }
}

console.log("\x1b[32mWelcome to Portfolio!");
console.log("\x1b[34mKeep your face to the sun and");
console.log("\x1b[34myou will never see the shadows.");
console.log("\x1b[32mHave a great day");
console.log("\x1b[32mMade with" + " " + "\x1b[31m❤ " + " " + "\x1b[32min" + " " + "\x1b[34mIsrael");
console.log("\x1b[32m© 2022 Siman tov Jamberu.");
console.log("\x1b[31mAll rights reserved.");
console.log("\x1b[34mhttps://github.com/jamberusimantov");
console.log("\x1b[34mhttps://www.linkedin.com/in/siman-tov-jamberu/");

export const HTMLContext = createContext({
  html: htmlDefault,
  setHtml: (config: iHtml) => { }
});

const MyApp = ({ Component, pageProps }: iAppPropsWithLayout) => {
  const [html, setHtml] = useState<iHtml>(htmlDefault)
  const getLayout: (page: ReactElement) => ReactNode = Component?.getLayout ?? (page => page);
  return (
    <HTMLContext.Provider value={{ html, setHtml }}>
      {/* <Provider store={store}> */}
      {getLayout(<Component {...pageProps} />)}
      {/* </Provider> */}
    </HTMLContext.Provider>
  )
}

export default MyApp;