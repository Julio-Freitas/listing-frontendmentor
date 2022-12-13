import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Theme } from 'styles/theme';
import { GlobalStyle } from 'styles/reset';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
