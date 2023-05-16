// src/components/Header.js

import React from 'react'
import '../styles/Header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <div className="headerBackground">
                <h1 className="title"> WORKOUT TRACKER</h1>
                <Link to="/" className="linkStyle">Home</Link>
                <Link to="/Workout" className="linkStyle">Log </Link>
                <Link to="/exercise-explorer" className="linkStyle"> Exercises </Link>
                <p className="userWelcome"> Welcome User_First_Name User_Last_Name</p>
            </div>
        </div>
        
    )
}

export default Header