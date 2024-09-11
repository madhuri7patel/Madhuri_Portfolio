/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps, router }) {
  const nextRouter = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'page_view',
          page_path: url,
        });
      }
      if (window.hj) {
        window.hj('stateChange', nextRouter.asPath);
      }
    };

    nextRouter.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      nextRouter.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <AnimatePresence exitBeforeEnter initial={true}>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;
