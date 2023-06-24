'use client'

import { useEffect, useState } from 'react';

const Scroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <p>Scroll position: {scrollY}</p>
      {/* Other content */}
    </div>
  );
};

export default Scroll;
