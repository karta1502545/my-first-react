import React, {Component} from 'react';
import Navigation from '.components/Navigation'
import About from '.components/About'
import Call_to_action from '.components/Call_to_action'
import Contact from '.components/Contact'
import Footer from '.components/Footer'
import Masthead from '.components/Masthead'
import Portfolio from '.components/Portfolio'
import Services from '.components/Services'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <About />
        <Call_to_action />
        <Contact />
        <Footer />
        <Masthead />
        <Portfolio />
        <Services />
      </div>
    );
  }
}

export default App;
