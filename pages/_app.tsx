import { AppProps } from 'next/app';
import '../styles/globals.scss';

export interface MyAppProps {
  Component: any;
  pageProps: any;
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
