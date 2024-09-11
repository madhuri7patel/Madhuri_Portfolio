import { useRef, useEffect, forwardRef } from 'react';
//
import SmoothScrollbar from 'smooth-scrollbar';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Scroller = ({ children, ScrollTrigger }, ref) => {
  const $content = useRef(null);
  const scrollbar = useRef(null);

  useEffect(() => {
    const updateTrigger = () => {
      if (window.innerWidth > 950) {
        const el = $content.current;

        scrollbar.current = SmoothScrollbar.init(el, {
          // renderByPixels: false,
          damping: 0.075,
          // plugins: {
          //   overscroll: {
          //     damping: 0.26,
          //     maxOverscroll: 285,
          //   },
          // },
          delegateTo: document,
        });

        scrollbar.current.setPosition(0, 0);
        scrollbar.current.track.xAxis.element.remove();

        ScrollTrigger.scrollerProxy(el, {
          scrollTop(value) {
            if (arguments.length) {
              scrollbar.current.scrollTop = value;
            }

            return scrollbar.current ? scrollbar.current.scrollTop : 0;
          },
        });

        scrollbar.current.track.xAxis.element.remove();
        scrollbar.current.addListener(() => {
          ScrollTrigger.update();
        });
        ScrollTrigger.defaults({ scroller: el });
        ref.current = scrollbar.current;
        //
      }
      ScrollTrigger.update();
    };

    window.addEventListener('resize', updateTrigger);
    updateTrigger();

    return () => {
      if (scrollbar.current) {
        scrollbar.current.destroy();
        scrollbar.current = null;
      }
      window.removeEventListener('resize', updateTrigger);
    };
  }, []);

  return (
    <div
      className="Scroller"
      style={{
        overflow: 'hidden',
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
      }}
      data-scrollbar
      ref={$content}
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default forwardRef(Scroller);
