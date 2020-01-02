import React,{useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
// import HookCounterOne from './useEffect/HookCounterOne'
// import ClassMouse from './useEffect/ClassMouse'
// import HookMouse from './useEffect/HookMouse'
// import MouseContainer from './useEffect/MouseContainer'
// import IntervalClassConuter from './useEffect/IntervalClassCounter'
// import IntervalHookCounter from './useEffect/IntervalHookCounter'

// import DataFetching from './useEffect/DataFetching'

// import ComponentC from './useContext/ComponentC'
import ComponentA from './useReducer/reducer&context/ComponentA'
import ComponentB from './useReducer/reducer&context/ComponentB'
import ComponentC from './useReducer/reducer&context/ComponentC'


// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

export const CountContext = React.createContext()
const initialState = 0
const reducer = (state,action) => {
  switch(action){
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}
function App() {
  const [count,dispatch] = useReducer(reducer,initialState)
  return (
  <CountContext.Provider value={{countState:count , countDispatch:dispatch}}>
    <div className="App">
      {/* <HookCounterOne/> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* < MouseContainer /> */}
      {/* <IntervalClassConuter/> */}
      {/* <IntervalHookCounter/> */}
      {/* <DataFetching/> */}
      {/* <UserContext.Provider value={'kiko'}>
        <ChannelContext.Provider value={'hha'}>
          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      Count -  {count}
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>
    </div>
    </CountContext.Provider>
  );
}

export default App;
