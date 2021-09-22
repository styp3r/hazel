import React, { useState } from 'react';
import CreateArr from './CreateArr.jsx';

function Tasks(){
    const [arr, setArr] = useState(CreateArr);
    const [dateIndex, setDateIndex] = useState(0);
    var x = 0;
    var y = "";
    //console.log(arr[5].props.children); This is the particular date at index 5 as string in the main dates array arr

    function updateArr(){
                arr.splice(dateIndex, 0, <li>{"NEW TASK"}</li>);
                setArr([...arr]);
    }

    function handleDate(e){
        x = e.target.value;
        console.log(x);
    }

    function handleMonth(m){
        y = m.target.value;
        console.log(y);
    }

    function handleArr(){
        var a = x+" "+ y;
        for(let i = 0; i<arr.length; i++){
            if(a === arr[i].props.children){
                //get index
                setDateIndex(i + 1);
                //setDateIndex > index
            }
        }
    }

    console.log("dateINdex = "+dateIndex);

    return (
        <div>
        <div className = "tasks">
            {arr}
        </div>
        <input onChange = {handleDate} placeholder = "Enter Event Date"/>
        <input onChange = {handleMonth} placeholder = "Enter Event Date"/>
        <button className = "btn" onClick = {handleArr}>enter date</button>
        <button className = "btn1" onClick = {updateArr}>update arr</button>
        </div>
    );
}

export default Tasks;