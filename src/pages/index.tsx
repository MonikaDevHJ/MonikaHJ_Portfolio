import React from 'react';
import Navbar from '../components/Navbar';
import Home from "../components/Home"
import About from "../components/About"

const App = () => {
  return (
    <div className=' bg-gray-800 '>
      <Navbar />
      <Home/>
      <About/>
    </div>
  );
};

export default App;
