import React from 'react';
import NavBar from './Navbar';

import Footer from './Footer'
import HeroSection from './Herosection'
import AppSection from './Appsection';
import CardSection from './Cardsection'

const App =() => {
    return (
      <div>
         <NavBar/>
         <HeroSection/>
         <AppSection/>
         <CardSection/>
         <Footer/>
      </div>
    )
 };

 
 export default App;