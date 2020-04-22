import React from 'react';
import './App.css';
import HookUseRef from './components/HookUseRef';
import ClassCreateRef from './components/ClassCreateRef';

function App() {
  return (
    <div className="App">
        <HookUseRef/>
        <hr/>
        <ClassCreateRef/>
    </div>
  );
}

export default App;
