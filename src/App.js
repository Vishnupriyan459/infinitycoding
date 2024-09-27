import React, { useState, useEffect, useRef } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { gsap } from 'gsap';
import Home from './Home';
import Info from './Info';
import LoadingScreen from './LoadingScreen';
import { FaAngleDoubleDown } from "react-icons/fa";

const App = () => {
  const [loading, setLoading] = useState(true);
  const loadingRef = useRef(null); // Ref for Loading component to animate
  const messageRef = useRef(null); // Ref for the "Scroll more" message
  const [showHome, setShowHome] = useState(false); // To control when Home appears

  useEffect(() => {
    const timer = setTimeout(() => {
      // Show the "Scroll more" message right before starting the loading screen transition
      if (messageRef.current) {
        gsap.to(messageRef.current, {
          opacity: 1,
          duration: 0.5, // Quick fade-in effect for the message
        });
      }

      // GSAP animation for LoadingScreen moving diagonally out
      if (loadingRef.current) {
        gsap.to(loadingRef.current, {
          opacity: 0,
          // x: -100,
          y: -100,
          duration: 1,
          delay: 1, // Let the message stay on screen for 1 second before loading starts
          ease: 'power1.in',
          onComplete: () => {
            setLoading(false); // Set loading false when animation is done
            setShowHome(true); // Show Home after loading screen disappears
          }
        });

        // Hide the "Scroll more" message after the animation is done
        gsap.to(messageRef.current, {
          opacity: 0,
          duration: 0.5, // Quick fade-out effect for the message
          delay: 1, // Matches the delay for the loading animation
        });
      }
    }, 2000); // 3 seconds timer for loading

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: loading ? (
        <>
          <div ref={loadingRef}>
            <LoadingScreen />
          </div>
          <div
            ref={messageRef}
            style={{
              position: 'fixed',
              top: '90%',
              left: '50%',
              transform: 'translateX(-50%)',
              opacity: 0, // Initially hidden
              fontSize: '0.7rem',
              color: '#333',
              fontWeight: 'bold',
              display:'flex',
              flexDirection:'column',
              alignItems:'center',

            }}
          >
            
            <p>Scroll more</p>
            <FaAngleDoubleDown />

          </div>
        </>
      ) : (
        showHome && <Home /> // Show Home without any transition after loading screen
      ),
    },
    {
      path: '/info',
      element: <Info />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
