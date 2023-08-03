import React from 'react';
import Hero from '../HomeSelection/Hero';
import './Home.css';
import AboutCard from '../About/AboutCard';
import MostPopular from '../HomeSelection/popular/MostPopular';
import DestinationHome from '../HomeSelection/Destina/DestinationHome';
import Download from '../HomeSelection/Download/Download';
import Works from '../HomeSelection/Works/Works';
import Gallery from '../HomeSelection/gallery/Gallery';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutCard />
      <MostPopular />
      <DestinationHome />
      <Download />
      <Works />
      <Gallery />
    </div>
  );
};

export default Home;
