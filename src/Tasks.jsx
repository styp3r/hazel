import React, { useState } from 'react';
import Events from './Events.js';

function Tasks(){

    const dates = [1,2,3,4,5,6,7];
    const months = ["jan", "feb", "march"];
    var [arr, update] = useState([]);
    var [date, updateDate] = useState("");
    var [event, updateEvent] = useState("");

    function getArr(){
        for(let i = 0; i <months.length; i++){
            for(let j = 0; j<dates.length; j++){
                arr.push({date: dates[j] +" "+months[i]});//dates[j] + " " + months[i]);    
                arr.push({date: "empty"});
            }
        }  
    }

    function handleClick(){
        console.log("li clicked!");
        //show the event if it exists
    }

    function inputDate(d){
        console.log(d.target.value);
            date = d.target.value;
    }

    function inputEvent(e){
        console.log(e.target.value);
            event = e.target.value;
    }

    function showDesc(s){
        return s.date;
    }

    function showDesc1(s){
        return s.date;
    }

    function buttonClick(){
        console.log("button clicked!");
        if(date!=="" && event!==""){
        Events.push({
            //id: Events.length-1,
            date: date
        }); 
    }
        console.log(Events.map(showDesc));
    
        console.log(arr.map(showDesc1));

        //checking if the events stored in Events.jsx is present in arr or not
        for(let i = 0; i <Events.length; i++){
            for(let j = 0; j<arr.length; j++){
                if(Events[i].date === arr[j].date){
                    console.log("found"); //change all the respective "empty"s in arr
                }
            }
        } 
    }

    return(
        <div className = "tasksContainer">
            {getArr()}
            {arr.map((e) =>{return <li onClick = {handleClick}>{e.date}</li>})}
            <form>
                <input type="text" onChange = {inputDate} placeholder = "Enter date"/>
                <input type="text" onChange = {inputEvent} placeholder = "Enter event description"/>
            </form>
            <button onClick={buttonClick}>Add event</button>
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