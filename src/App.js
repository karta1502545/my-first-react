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
    // props(也就是呼叫這個元素的父元件傳入的值) or state (這個元素的state)改變時，就會跑一遍
    console.log(2)
    if (nextProps.title !== prevState.title) {
      return {
        title: nextProps.title //設定當props或state有改變時，以props為優先的值,且若兩�肮萓P，就不用再更新
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