import React from 'react';
import { useMediaQuery } from 'react-responsive';
import MobileHomePage from './MobileHomePage';
import DesktopHomePage from './DesktopHomePage';

const HomePage = () => {
  const isDesktop = useMediaQuery({ minWidth: 1279 });

  return (
    <>
      {isDesktop ? <DesktopHomePage /> : <MobileHomePage />}
    </>
  );
};

export default HomePage;
