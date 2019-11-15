import React from 'react';
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

function App() {
  return (
    <div className="App">
      <ReactNotification />
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
}

export default App;
