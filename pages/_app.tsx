import React, { ReactElement, ReactNode, useState } from 'react';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import '../styles/globals.css';
import HTMLContext from "../contexts/htmlContext";
import { iHtml } from "../contexts/htmlContext";
import paint from "../dir/colorScheme"


console.log(paint.Green + "\n\n👋 Welcome to " + paint.Blue + "Portfolio! 🤝\n\n" +
  "Keep your face to the 🌞 and\n\nyou will never see the shadows.\n\n" +
  paint.Green + "Have a GREAT day 🖖 \n\n" + "Made with ❤️ in Israel\n\n" +
  paint.Red + "👮 All rights reserved 👮 \n\n" +
  paint.Green + "© 2022 Siman tov Jamberu.\n\n💼 https://github.com/jamberusimantov 💼\n\n" +
  "💬 https://www.linkedin.com/in/siman-tov-jamberu/ 💬\n\n");

type iComponent = NextPage & { getLayout: (page: ReactElement) => ReactNode };
interface iAppPropsWithLayout extends AppProps { Component: iComponent }

const MyApp = ({ Component, pageProps }: iAppPropsWithLayout) => {
  const [html, setHtml] = useState<iHtml>({ lang: 'he-IL', dir: 'rtl' });
  const getLayout: (page: ReactElement) => ReactNode = Component?.getLayout ?? (page => page);
  return (
    <HTMLContext.Provider
      value={{ html, setHtml }}
      children={getLayout(<Component {...pageProps} />)}
    />
  );
};

export default MyApp;