import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  {createStore} from  'redux';
//store globalized state 
//action increment
const incr =() => {
return {
  type:'inc'
};
}
const decr =() => {
  return{
    type:'dec'
  };
  
}

//reducer
const counter = (state = 0, action) => {

  switch(action.type) {
    case 'inc':
      return state + 1;
    case 'dec':
      return state - 1;
      default:
      return state;
  }
};
//dispather
let store = createStore(counter);
store.subscribe(() => console.log(store.getState()))
store.dispatch(incr());
store.dispatch(incr());
store.dispatch(incr());
store.dispatch(decr());
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
