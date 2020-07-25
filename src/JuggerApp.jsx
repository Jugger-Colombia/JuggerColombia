import React from 'react';
import NavBar from './Components/NavBar/navBar';
import Banner from './Components/Banner/banner';
import Footer from './Components/Footer/footer';

import './JuggerApp.css';
import './SocialMedia/font/flaticon.css';

function JuggerApp() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Banner></Banner>
     
        <section class="header-icons-container">

      <div class="icons">
          <a href="#test"><span class="flaticon-001-facebook"></span></a>
          <a href="#test"><span class="flaticon-002-twitter"></span></a>
          <a href="#test"><span class="flaticon-011-instagram"></span></a>
          <a href="#test"><span class="flaticon-008-youtube"></span></a>
          <a href="#test"><span class="flaticon-010-linkedin"></span></a>
          
          <a href="#test"><i class="flaticon-001-facebook"></i></a>
          <a href="#test"><i class="flaticon-002-twitter"></i></a>
          <a href="#test"><i class="flaticon-011-instagram"></i></a>
          <a href="#test"><i class="flaticon-008-youtube"></i></a>
      </div>
        </section>
        <Banner></Banner>
        <Banner></Banner>
        <Footer></Footer>
    </div>
  );
}

export default JuggerApp;
