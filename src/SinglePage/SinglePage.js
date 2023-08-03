import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SData from '../components/Desinations/SData';
import { useParams } from 'react-router-dom';
import HeadTitle from '../common/HeadTitle/HeadTitle';
import './SinglePage.css';
import EmptyFile from '../common/EmptyFile/EmptyFile';

const SinglePage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = SData.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);

  return (
    <>
      <HeadTitle />
      {item ? (
        <section className='single-page top'>
          <div className='container'>
            <Link to='/destination' className='primary-btn back'>
              <i className='fas fa-long-arrow-alt-left'></i> Go Back
            </Link>

            {/*--------- Main-Content--------- */}
            <article className='content flex'>
              <div className='main-content'>
                <img src={item.img} alt='' />
                <p>{item.desc}</p>
                <p>{item.desc}</p>

                <div className='para flex_space'>
                  <p>{item.sidepara}</p>
                  <p>{item.sidepara}</p>
                </div>
                <h1>What is the {item.title} city?</h1>
                {/* --------- main-content--------- */}

                {/* --------- side-content--------- */}
                <div className='side-content'>
                  <div className='box'>
                    <h2>How can we Help you?</h2>
                    <p>{item.sidepara}</p>
                    <button className='outline-btn'>
                      <i className='fas fa-phone-alt'></i> Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      ) : (
        <EmptyFile />
      )}
    </>
  );
};

export default SinglePage;
