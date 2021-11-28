import './App.css';
import React from 'react';
import List from './components/list.js';
import { Route, Routes } from 'react-router';

function App() {


  return (
    <div className="App">
      <header className="App-header">
         dddd
        <Routes>
          <Route path='/list' element={<List />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
