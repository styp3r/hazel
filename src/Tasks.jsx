import React, { useState } from 'react';
import CreateArr from './CreateArr.jsx';

function Tasks(){
    const [arr, setArr] = useState(CreateArr);

    function updateArr(){
        arr.splice(30, 0, <li>{"NEW TASK"}</li>);
        setArr([...arr]);
    };

    return (
        <div className = "tasks">
            {arr}
            <button className = "btn" onClick = {updateArr}>update arr</button>
        </div>
    );
}

export default Tasks;