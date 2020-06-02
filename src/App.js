import React, {Component} from 'react';
import Navigation from './components/Navigation.js'
import About from './components/About.js'
import Call_to_action from './components/Call_to_action.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'
import Masthead from './components/Masthead.js'
import Portfolio from './components/Portfolio.js'
import Services from './components/Services.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Masthead />
        <About />
        <Services />
        <Portfolio />
        <Call_to_action />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
