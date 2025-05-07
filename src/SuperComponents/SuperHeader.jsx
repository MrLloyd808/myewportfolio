import React from 'react'
import HeaderMobile from '../Components/HeaderMobile'
import HeaderDesktop from '../Components/HeaderDesktop'
import { useState, useEffect } from 'react';

export default function SuperHeader() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  return width <= 620 ? <HeaderMobile /> : <HeaderDesktop />;
}
