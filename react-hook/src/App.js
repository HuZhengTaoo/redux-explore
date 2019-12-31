import React from 'react';
import logo from './logo.svg';
import './App.css';
// import HookCounterOne from './useEffect/HookCounterOne'
// import ClassMouse from './useEffect/ClassMouse'
// import HookMouse from './useEffect/HookMouse'
// import MouseContainer from './useEffect/MouseContainer'
// import IntervalClassConuter from './useEffect/IntervalClassCounter'
import IntervalHookCounter from './useEffect/IntervalHookCounter'
function App() {
  return (
    <div className="App">
      {/* <HookCounterOne/> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* < MouseContainer /> */}
      {/* <IntervalClassConuter/> */}
      <IntervalHookCounter/>
    </div>
  );
}

export default App;
