import React from 'react';
import logo from './logo.svg';
import './App.css';
import ScrollAnimation from 'react-animate-on-scroll';


function App() {
  return (
    <div className="banner">
        <img className="animated fadeInDown" id="pic" alt="pic of door" src="https://www.sunmountaindoor.com/blog/wp-content/uploads/34250.1_blogsize.png" width="140" height="280"></img>
        <img className="animated fadeIn" id="doorknob" alt="pic of doorknob" src="https://ezwoodproducts.com/sites/default/files/hardware-1.png" width='50px' height='25px'></img>
    </div>
  );
}

export default App;
