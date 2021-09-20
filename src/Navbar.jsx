import React from 'react';
import {Link} from 'react-router-dom';


function Navbar(){
    return(
        <div className = "navbar">
        <Link to="/">Home</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/settings">Settings</Link>
      </div>
    );
}

export default Navbar;