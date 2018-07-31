import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'; 

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';
import About from './components/About/About';
import Home from './components/Home/Home';
import Pursuits from './components/Pursuits/Pursuits';
import Detail from './components/Pursuits/Detail';
import Tour from './components/Tour/Tour';
import Gallery from './components/Gallery-Main/Gallery-Main';
import TravelAdvisor from './components/Travel-advisor/Travel-advisor';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <Container>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/pursuits' component={Pursuits}/>
                <Route path='/detail' component={Detail}/>
                <Route path='/tour' component={Tour}/>
                <Route path='/gallery' component={Gallery}/>
                <Route path='/TravelAdvisor' component={TravelAdvisor}/>
              </Switch>
          </Container>
        <Footer/>
      </div>
    );
  }
}

export default App;