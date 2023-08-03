import React from 'react';
import TData from './TData';
import Card from './Card';
import './Testimonial.css';

const AllItem = () => {
  return (
    <>
      <section className='Testimonial mtop'>
        <div className='container grid'>
          {TData.map((value, index) => {
            return <Card key={index} {...value} />;
          })}
        </div>
      </section>
    </>
  );
};

export default AllItem;
