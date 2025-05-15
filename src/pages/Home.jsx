import React from 'react';
import Hero from '../components/home/Hero';
import WhatIsDeca from '../components/home/WhatIsDeca';
import WashingtonDeca from '../components/home/WashingtonDeca';
import EastlakePillars from '../components/home/EastlakePillars';

const Home = () => {
  return (
    <div>
      <Hero />
      <WhatIsDeca />
      <WashingtonDeca />
      <EastlakePillars />
    </div>
  );
};

export default Home;

