import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import {Main} from "./Components/Main/Main";
import {PersonsMain} from "./Components/PersonsMain/PersonsMain";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Main/>} />
                <Route path="/persons" element={<PersonsMain/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
