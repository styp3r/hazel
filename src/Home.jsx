import React from 'react';
import Notifications from './Notifications.jsx';
import Tasks from './Tasks.jsx';
import Weather from './Weather.jsx';

function Home(){
    return(
        <div>

        <div className = "leftColumn">
            <Notifications />
            <Tasks />
        </div>

        <div className = "rightColumn">
            <Weather />
        </div>

        </div>
    );
}

export default Home;