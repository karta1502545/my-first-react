import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

/*
------------1

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      myState: 'My first state',
      saySomething: 'Hello World'
    }
  }
  // state = {
  //   myState: 'Hello',
  //   saySomething: "hi"
  // }
  render() {
    return (
      <div className="App">
        <p>{this.state.myState}</p>
        <p>{this.state.saySomething}</p>
        <button onClick={()=>this.setState({ saySomething: 'How are you?' })}>Click</button>
      </div>
    );
  }
}

export default class GGG extends Component {
  render() {
    return (
      <div className="GGG">
        <App /><App />
      </div>
    );
  }
}
*/



// -----------2

export default class GGG extends Component {
  render() {
    return (
      <div className="GGG">
        <App title={'Hello'}/><App title={'Bro'}/>
      </div>
    );
  }
}


class App extends Component {
  constructor(props){
    console.log(1)
    super(props);
    this.state = {
      myState: 'My first state',
      saySomething: 'Hello World',
      title: 'original text'
    }
  }

  render(){
    console.log(3)
    return (
      <div className='APP'>
        <div>{this.state.saySomething}</div>
        <button onClick={()=>this.setState({title: 'change!'})}>{this.state.title}</button>
      </div>
    );    
  }

  static getDerivedStateFromProps(nextProps, prevState) { 
    // props(¤]´N¬O©I¥s³o­Ó¤¸¯Àªº¤÷¤¸¥ó¶Ç¤Jªº­È) or state (³o­Ó¤¸¯Àªºstate)§ïÅÜ®É¡A´N·|¶]¤@¹M
    console.log(2)
    if (nextProps.title !== prevState.title) {
      return {
        title: nextProps.title //³]©w·íprops©Îstate¦³§ïÅÜ®É¡A¥Hprops¬°Àu¥ýªº­È,¥B­Y¨âŽÍ¬Û¦P¡A´N¤£¥Î¦A§ó·s
      };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {  
    console.log(4)
    if (this.state.title !== nextState.title) { 
      return true;
    } 
    return false;
  }
}