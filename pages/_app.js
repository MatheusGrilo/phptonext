import { UserProvider } from "@auth0/nextjs-auth0";
import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";
import "regenerator-runtime/runtime";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ThemeProvider attribute="class">
        <NextNProgress />
        <div id="main-root" className="flex flex-col h-screen justify-between">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </UserProvider>
  );
}

export default MyApp;
