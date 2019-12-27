import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo'
import HookCounterThree from './components/HookCounterThree'
function App() {
  return (
    <div className="App">
      <ClassCounter />
      <HookCounterTwo/>
      <HookCounter/>
      <HookCounterThree/>
    </div>
  );
}

export default App;
