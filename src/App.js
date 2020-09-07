import React,{ Component, Fragment, PureComponent } from 'react';
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
// import PortalDemo from './components/PortalDemo';
// import FRParentInput from './components/FRParentInput';
// import HelloWorld  from "./components/HelloWorld";
// import Message  from "./components/Message";
// import Counter from './components/Counter'
// import Welcome from './components/Welcome'
// import FunctionClick from './components/FunctionClick';
// import ClassClicked from './components/ClassClicked';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import StyleSheet from './components/StyleSheet';
// import Inline from './components/Inline';
// import './appStyles.css';
// import Styles from './appStyles.module.css'
// import Form from './components/Form';
// import LifeCycleA from './components/LifeCycleA';
// import LifeCycleB from './components/LifeCycleB';
// import FragmentDemo from './components/FragmentDemo';
// import Table from './components/Table';
// import PureComponents from './components/PureComponents'
// import Parent from './components/Parent';
// import RefsDemo from './components/RefsDemo';
// import FocusInput from './components/FocusInput';

class App extends Component {
  render(){  
  return (
    <div className="App">
      <ClickCounter />
      <HoverCounter />
      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <PureComponents /> */}
      {/* <Parent/> */}
      {/* <FragmentDemo /> */}
      {/* <Table /> */}
      {/* <LifeCycleA /> */}
      {/* <LifeCycleB /> */}
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
