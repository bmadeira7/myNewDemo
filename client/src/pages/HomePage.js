import React from 'react';
import { Link } from 'react-router-dom';
const HomePage = () => (
  <div>
    <p className="text-center text-white">Click below to login</p>
    <Link to='/login'><h1 className="text-center display-1 text-white falaHeader dashWhole"><b>Fala</b></h1></Link>
   
  </div>
);

export default HomePage;
