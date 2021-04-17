import React from 'react';
import User from './User';
import './App.css';
import checkout from './assets/checkout.png';
import HomeContainer from './container/Homecontainer'
function App() {
  return (
    <div className="App">
      <img className="checkout-img" src={checkout}/>
     <HomeContainer/>
     <User list={{username:'Danish Azaiz', Age:34}}/>
    </div>
  );
}

export default App;
