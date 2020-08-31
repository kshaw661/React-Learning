import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld  from "./components/HelloWorld";
import Message  from "./components/Message";
import Counter from './components/Counter'
import Welcome from './components/Welcome'
import FunctionClick from './components/FunctionClick';
import ClassClicked from './components/ClassClicked';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';

class App extends Component {
  render(){  
  return (
    <div className="container">
      <StyleSheet primary={true} />
      {/* <NameList /> */}
      {/* <{Message} /> */}
      {/* <Counter/> */}
      {/* <Welcome name="Kunal" superHero="SpiderMan"/> */}
      {/* <FunctionClick />
      <ClassClicked/> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
    </div>
  );
}
}

export default App;
