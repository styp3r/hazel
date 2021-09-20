import React from 'react';
import Navbar from './Navbar.jsx';
import Notifications from './Notifications.jsx';
import Tasks from './Tasks.jsx';
import Weather from './Weather.jsx';
import WorkStats from './WorkStats.jsx';

function Home(){
    return(
        <div className = "container">

        <div className = "leftColumn">
            <Navbar />
            <Notifications />
            <Tasks />
        </div>

        <div className = "rightColumn">
            <Weather />
            <WorkStats />
        </div>

        </div>
    );
}

export default Home;