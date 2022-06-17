import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import SideMenu from '../components/SideMenu';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider
      session={session}
    >
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;