import { wrapper } from '@/src/store/store';
import { AppProps } from 'next/app';
import '@/src/styles/index.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default wrapper.withRedux(MyApp);
