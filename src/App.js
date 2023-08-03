import React from 'react';
import './App.css';

import Navbar from './common/Navbar/Navbar';
import Home from './components/Pages/Home';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Desinations from './components/Desinations/Desinations';
import Login from './components/Login/Login';
import Register from './components/Login/Register';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/*-------------blog------------ */
import Blog from './components/Blog/Blog';
import BlogSingle from './components/Blog/Blog-single-page/BlogSingle';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';

import SinglePage from './SinglePage/SinglePage';
import Footer from './common/Footer/Footer';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/destination' element={<Desinations />} />
          <Route path='/singlepage/:id' element={<SinglePage />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blogsingle/:id' element={<BlogSingle />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/sign-in' element={<Login />} />
          <Route path='/Register' element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
