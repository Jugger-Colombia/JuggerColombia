import React from 'react';
import NavBar from './Components/NavBar/navBar';
import Banner from './Components/Banner/banner'

import './JuggerApp.css';


function JuggerApp() {
  return (
    <div className="App">
      {/* <NavBar></NavBar>
      <Banner></Banner>
      <Banner></Banner>
      <Banner></Banner>
      <Banner></Banner> */}
      <div class="icons">
          <a href=""><span class="flaticon-001-facebook">JOLA</span></a>
          <a href=""><span class="flaticon-002-twitter"></span></a>
          <a href=""><span class="flaticon-011-instagram"></span></a>
          <a href=""><span class="flaticon-008-youtube"></span></a>
          <a href=""><span class="flaticon-010-linkedin"></span></a>
      </div>
    </div>
  );
}

export default JuggerApp;
