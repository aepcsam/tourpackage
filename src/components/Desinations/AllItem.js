import React, { useState } from 'react';
import Dcards from './Dcards';
import '../Gallery/Gallery.css';
import './Desinations.css';
import Sdata from './SData';

const AllItem = () => {
  const [items, setIems] = useState(Sdata);
  return (
    <>
      <section className='gallery desi mtop'>
        <div className='container'>
          <div className='content grid'>
            {items.map((item) => {
              return <Dcards key={item.id} item={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllItem;

/*
import React, { useState } from "react"
import Dcards from "./Dcards"
import "../gallery/Gallery.css"
import "./Destinations.css"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import Sdata from "../Destinations/Sdata"

const Destinations = () => {
  const [items, setIems] = useState(Sdata)
  return (
    <>
      <HeadTitle />
      <section className='gallery desi top'>
        <div className='container'>
          <div className='content grid'>
            {items.map((item) => {
              return <Dcards key={item.id} item={item} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Destinations*/
