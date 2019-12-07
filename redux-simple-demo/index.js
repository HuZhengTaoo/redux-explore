const redux = require('redux')
const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger()
//constants
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE_CREAM = 'BUY_ICE_CREAM'
//actions
function buyCake(){
  return {
    type : BUY_CAKE,
    info : 'first redux action'
  }
}
function buyIceCream(){
  return {
    type : BUY_ICE_CREAM,
    info : 'ice cream'
  }
}
//reducers
// (previousState,action) => newState

// const initialState = {
//   numOfCakes:10,
//   numOfIcecream:10
// }
const initialCakeState = {
  numOfCakes:10
}
const initialIcecreamState = {
  numOfIcecream:10
}


// const reducer = (state = initialState, action) =>{
//   switch(action.type){
//     case BUY_CAKE: return {
//       ...state,
//       numOfCakes: state.numOfCakes -1
//     }
//     case BUY_ICE_CREAM: return {
//       ...state,
//       numOfIcecream:state.numOfIcecream -1
//     }
//     default: return state
//   }
// }
const cakeReducer  = (state = initialCakeState,action) => {
  switch(action.type){
    case BUY_CAKE:return {
      ...state,
      numOfCakes:state.numOfCakes - 1
    }
    default: return state
  }
}
const iceCreamReducer  = (state = initialIcecreamState,action) => {
  switch(action.type){
    case BUY_ICE_CREAM:return {
      ...state,
      numOfIcecream:state.numOfIcecream - 1
    }
    default: return state
  }
}
// store
const rootReducer = redux.combineReducers({
  cake:cakeReducer,
  ice:iceCreamReducer
})
const store = redux.createStore(rootReducer,redux.applyMiddleware(logger))

console.log('initialState state',store.getState())

// store.subscribe(()=>console.log('update state',store.getState()))
//store.dispatch(buyCake()) => 
// store.dispatch({type : BUY_CAKE,info : 'first redux action'})
store.dispatch(buyCake()) 
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
