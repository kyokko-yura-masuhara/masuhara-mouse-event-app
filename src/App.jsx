import React from 'react';
import MouseEventComponent from './MouseEventComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>マウス操作で座標を表示</h1>
        <MouseEventComponent />
      </header>
    </div>
  );
}

export default App;