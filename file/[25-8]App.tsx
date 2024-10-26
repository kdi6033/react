import React from 'react';
import './App.css';
import MQTTClient from './components/MQTTClient';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MQTT 통신 프로그램</h1>
      </header>
      <MQTTClient />
    </div>
  );
}

export default App;

