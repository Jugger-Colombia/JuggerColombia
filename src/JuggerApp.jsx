import React from 'react';
import NavBar from './Components/NavBar/navBar';
import Banner from './Components/Banner/banner';
import QQYellow from './Components/QQYellow/QQYellow';
import Clubes from './Components/Clubes/Clubes';
import Footer from './Components/Footer/footer';

import './JuggerApp.css';
import './SocialMedia/font/flaticon.css';

function JuggerApp() {
  return (
    <div className="App">
      <NavBar/>

      <Banner/>
      <QQYellow/>
      <Clubes/>

      <Footer/>
    </div>
  );
}

export default JuggerApp;
