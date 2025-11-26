/**
 * The _app component is the top-level component wrapping all pages
 * in the application.
 *
 * @author Ajay Gandecha <agandecha@unc.edu>
 * @license MIT
 * @see https://comp426-25f.github.io/
 */

import { ThemeProvider } from "@/components/theme/theme-provider";
import "@/styles/globals.css";
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });
import type { AppProps } from "next/app";
import { api } from "@/utils/trpc/api";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="auto"
      enableSystem
      disableTransitionOnChange
    >
      <main className={playfair.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default api.withTRPC(App);
