import React from 'react';
import logo from './logo.svg';
import {Provider} from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer'
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <CakeContainer/>
      </header>
    </div>
    </Provider>
  );
}

export default App;
