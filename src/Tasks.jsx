import React, { useState } from 'react';
import Events from './Events.js';

function Tasks(){

    const dates = [1,2,3,4,5,6,7];
    const months = ["jan", "feb", "march"];
    var [arr, update] = useState([]);
    const [date, updateDate] = useState("");
    const [event, updateEvent] = useState("");
    var place = 0;

    function getArr(){
        for(let i = 0; i <months.length; i++){
            for(let j = 0; j<dates.length; j++){
                arr.push(dates[j] + " " + months[i]);    
                arr.push("empty");
            }
        }  

        if(arr.includes(date)){
            var x = arr.indexOf(date);
            console.log("found " +date+"!");
            console.log(x);
            
        } else{
            console.log("Could not find"+ date+"!");
        }
    }

    function handleClick(){
        console.log("li clicked!");
    }

    function inputDate(d){
        console.log(d.target.value);
        updateDate(d.target.value);
    }

    function inputEvent(e){
        console.log(e.target.value);
        updateEvent(e.target.value);
    }

    function showDesc(s){
        if(s.date === date){
            return s.date+ " "+ s.description + " ";
        }
    }

    return(
        <div className = "tasksContainer">
            {getArr()}
            {Events.map(showDesc)}
            {arr.map((e) =>{return <li onClick = {handleClick}>{e}</li>})}
            <form>
                <input type="text" onChange = {inputDate} placeholder = "Enter date"/>
                <input type="text" onChange = {inputEvent} placeholder = "Enter event description"/>
                <button type = "submit">Add event</button>
            </form>
        </div>
    );

}

export default Tasks;

/*
1 jan 0
new task 1
2 jan 2
new task 3
3 jan 4
new task 5*/