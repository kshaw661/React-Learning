import React,{ Component } from 'react';
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
import Inline from './components/Inline';
import './appStyles.css';
import Styles from './appStyles.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import LifeCycleB from './components/LifeCycleB';


class App extends Component {
  render(){  
  return (
    <div className="container">
      <LifeCycleA />
      <LifeCycleB />
      {/* <Form /> */}
      {/* <h1 className="error">Error</h1>
      <h1 className={Styles.success}>Success</h1>
      <Inline/> */}
      {/* <StyleSheet primary={true} /> */}
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
