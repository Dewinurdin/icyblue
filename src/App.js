import React from 'react';
import { NavigationBar } from './Components/Nav/NavigationBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Layout } from './Components'
import HeaderCarousel from './Components'
import { Home, Contact, IceMenu, PokeMenu, NoMatch } from './Pages'

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <HeaderCarousel />
      <Layout>
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/rollingice' component={IceMenu} />
              <Route path='/poke' component={PokeMenu} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
