import React, { useEffect } from 'react';

const LoadingScreen = () => {
  useEffect(() => {
    // Dynamically import the dotlottie player (if not using in index.html)
    import('@dotlottie/player-component');
  }, []);

  return (
    <div
      className="main"
      style={{
        backgroundColor: '#F2F2F2',
        position: 'relative',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {/* Lottie Player */}
      <dotlottie-player
        src="https://lottie.host/abe35b61-f3f8-4c87-8755-673c2704ba3c/1Kf1HFUzSk.json"
        background="transparent"
        speed="1"
        style={{ width: '50vw', height: '50vh', margin: '0', padding: '0', position: 'absolute', top: '25%', left: '25%' }}
        loop
        autoplay
      ></dotlottie-player>

      {/* Loading Text */}
      <span style={{ position: 'absolute', bottom: '10%', fontSize: '1.5rem', fontWeight: 'bold' }}>
        Infinity<b className='text-[#1B238D]'>Coding</b>
      </span>
    </div>
  );
};

export default LoadingScreen;
