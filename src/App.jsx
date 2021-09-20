import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import Calendar from './Calendar.jsx';
import Settings from './Settings.jsx';
import Error from './Error.jsx';

function App() {
  return (<div>
    <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/calendar" component={Calendar} />
            <Route path="/settings" component={Settings} />
            <Route component={Error}/>
    </Switch>
        </div>);
} 

export default App;

/*
    <Notifications />
    <Tasks />
    <Weather />
    <WorkStats />
    <Clock />
    <Events />
    <News />
    <Pomodoro />
    */