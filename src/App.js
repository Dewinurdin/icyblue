import React from 'react';
import NavigationBar from './Components/Nav/NavigationBar'
import Footer from './Components/Footer'

import HeaderCarousel from './Components'
import { Content } from './Pages'

function App() {
  return (
    <React.Fragment>
      <NavigationBar 
        link2="ROLLED ICE CREAM"
        brand="Icy Blue"
        link3="POKE BOWL"
        link4="CONTACT"
      />
      <HeaderCarousel />
      <Content />
      <Footer />
    </React.Fragment>
  );
}

export default App;
