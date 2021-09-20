import React from 'react';
import {Link} from 'react-router-dom';


function Navbar(){
    return(
        <div className = "navbar">
        <Link to="/" className = "navItem">Home</Link>
        <Link to="/calendar" className = "navItem">Calendar</Link>
        <Link to="/settings" className = "navItem">Settings</Link>
      </div>
    );
}

export default Navbar;