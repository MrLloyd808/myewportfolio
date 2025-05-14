import React, {useEffect, useState} from 'react'
import AboutMobile from '../Components/AboutMobile';
import BodyDesktop from '../Components/BodyDesktop';

export default function SuperBody() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
        }, []);

  return  width <= 620 ? <AboutMobile /> : <BodyDesktop />;
  
}
