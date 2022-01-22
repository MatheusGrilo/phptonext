import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";
import "regenerator-runtime/runtime";

import "../styles/globals.css";

function MyApp({ Component, pageProps, session }) {
  return (
    <ThemeProvider attribute="class">
      <NextNProgress />
      <div id="main-root" className="flex flex-col h-screen justify-between">
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
