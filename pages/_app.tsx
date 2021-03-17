import { AppProps } from 'next/app';

import Layout from '../components/layout';

import '../styles/globals.scss';

export interface MyAppProps {
  Component: any;
  pageProps: any;
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
