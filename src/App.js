import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'; 

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';
import About from './components/About/About';
import './App.scss';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Header/>
          <Container>
              <Switch>
                <Route path='/about' component={About}/>
              </Switch>
          </Container>
        <Footer/>
      </div>
    );
  }
}

export default App;