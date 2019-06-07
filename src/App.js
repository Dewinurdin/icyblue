import React from 'react';
import NavigationBar from './Components/Nav/NavigationBar'
import Footer from './Components/Footer'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Layout } from './Components'
import HeaderCarousel from './Components'
import { Content } from './Pages'

function App() {
  return (
    <React.Fragment>
      <NavigationBar 
        link1="HOME"
        link2="ROLLED ICE CREAM"
        brand="ICY BLUE"
        link3="POKE BOWL"
        link4="CONTACT"
      />
      <HeaderCarousel />
      <Layout>
        <Content />
          {/* <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/rollingice' component={IceMenu} />
              <Route path='/poke' component={PokeMenu} />
              <Route component={NoMatch} />
            </Switch>
          </Router> */}
      </Layout>
      <Footer />
    </React.Fragment>
  );
}

export default App;
