import Slide from './Slide';
import Data from './Data';
import './Home.css';

const Hero = (props) => {
  return (
    <>
      <Slide slides={Data} />
    </>
  );
};

export default Hero;
