import { useState } from 'react';
import BlogData from './BlogData';
import BlogCard from './BlogCard';
import './BlogHome.css';

const AllBlog = () => {
  const [items, setItems] = useState(BlogData);

  return (
    <>
      <section className='blog top'>
        <div className='container'>
          <div className='content grid'>
            {items.map((item, index) => {
              return <BlogCard key={index} item={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllBlog;
