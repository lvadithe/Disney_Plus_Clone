import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Detail from './components/detail/Detail';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/detail' element={<Detail />} />

      

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
