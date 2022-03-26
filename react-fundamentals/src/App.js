import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './components/05.functionalComponent';
import ClassComponent from './components/06.classComponents';
import Props from './components/09.props';
import State from './components/10.state';
import SetStateCounter from './components/11.setStateCounter';
import DestructPropAndState from './components/12.0.destructPropAndStateInFuncn';
import DestructPropAndStateInClass from './components/12.1.destructPropAndStateInClass';
import EventHandlingInFunc from './components/13.0.eventHandlingInFunc';
import EventHandlingInClass from './components/13.1.eventHandlingInClass';
import BindingEventHandlers from './components/14.bindingEventHandlers';
import MethodsAsPropsParent from './components/15.0.methodsAsPropsParent';
import ConditionalRenderingIfElse from './components/16.0.conditionalRenderingIfElse';
import ConditionalRenderingElemVariables from './components/16.1.conditionalRenderingElemVariables';
import TernaryCondition from './components/16.2.ternaryCondition';
import ShortCircuitApproach from './components/16.3.shortCircuitApproach';
import ListRendering from './components/17.listRendering';
import ListAndkeys from './components/18.listsAndKeys';
import IndexAsKey from './components/19.indexAsKey';
import StyleSheets from './components/20.0.StyleSheets';
import InlineStyling from './components/20.1.inlineStyling';
import './20.1.appStyles.css';
import styles from './20.1.appStyles.module.css';
import Form from './components/21.Form';

class App extends Component {
  render() {
    return (
      <div className='App'>
          {/* 5.Functional Components */}
          <FunctionalComponent />
          {/* 6.Class Components */}
          <ClassComponent />
          {/* 9.Props */}
         <Props name='Bruce' heroName='Batman'>
           <p>This is children props</p>
         </Props>
         <Props name='Clark' heroName='Superman'>
           <button>Action</button>
         </Props>
         {/* 10.State */}
         <State />
         {/* 11.setState */}
         <SetStateCounter />
         {/* 12.Destructuring props and state */}
         <DestructPropAndState name='Diana' heroName='Wonder woman' />
         <DestructPropAndStateInClass name='Bruce' heroName='Batman' />
         {/* 13.Event Handling */}
         <EventHandlingInFunc />
         <EventHandlingInClass />
         {/* 14.Binding Event Handlers */}
         <BindingEventHandlers />
         {/* 15.Methods as props */}
         <MethodsAsPropsParent />
         {/* 16.Conditional Rendering */}
         <ConditionalRenderingIfElse />
         <ConditionalRenderingElemVariables />
         <TernaryCondition />
         <ShortCircuitApproach />
         {/* 17.List Rendering */}
         <ListRendering />
         {/* 18.Lists And Keys */}
         <ListAndkeys />
         {/* 19.Index As Key Anti-Pattern */}
         <IndexAsKey />
         {/* 20.Styling and CSS Basics */}
            {/* <StyleSheets /> */}
            <StyleSheets primary={true} />
            {/* Inline Styling */}
            <InlineStyling />
            {/* CSS Modules */}
            <h1 className='error'>Error</h1>
            <h1 className={styles.success}>Success</h1>
            {/* the advantage of using css modules are locally scoped by default */}
          {/* 21.Basics of form Handling */}
          <Form />
      </div>
    );
  }
};

export default App;
