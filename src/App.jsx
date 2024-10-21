// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom'; 

function App() {
  return ( 
    <>
      <h1>Welcome Srinivas</h1>
      <Header></Header>
      <Outlet></Outlet>
    </>
   );
}
export default App;
