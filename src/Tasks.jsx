import React from 'react';
import GetTask from './GetTask.jsx';

function Tasks(){

    return(
        <div>
        <div className = "tasksContainer">
            <GetTask />
        </div>
        <button className = "addTaskBtn">Add Task</button>
        </div>
    );
}

export default Tasks;