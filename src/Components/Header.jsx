import React from "react";
import { Link } from "react-router-dom";


function Header(){
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none" >
                <span className="fs-4">$rinivas</span>
                </a>
                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to="/home" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="counter" className="nav-link">Counter</Link></li>
                    <li className="nav-item"><Link to="video" className="nav-link">Video</Link></li>
                    <li className="nav-item"><Link to="/todolist" className="nav-link">Todolist</Link></li>
                    <li className="nav-item"><Link to="/counts" className="nav-link">Counts</Link></li>
                    <li className="nav-item"><Link to="/todolists" className="nav-link">Todolists</Link></li>                    
                    <li className="nav-item"><Link to="/products" className="nav-link">Products</Link></li>                    
                </ul>
            </header>
        </div>
    ) }
    export default Header
    
  