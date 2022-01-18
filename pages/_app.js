import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <NextNProgress />
      <div id="main-root" className="flex flex-col h-screen justify-between">
        <Component {...pageProps} />
        {/*Modal wrapper*/}
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
