import React from 'react'
import Covid from './components/covid';
import Statewise from './components/statewise';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Covid/>}/>
      <Route path="/statewise" element={<Statewise/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
