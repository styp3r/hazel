import React, { useState } from 'react';

function Tasks(){

    const dates = [1,2,3,4,5,6,7];
    const months = ["jan", "feb", "march"];
    const arr = [];

    function getArr(){
        for(let i = 0; i <months.length; i++){
            for(let j = 0; j<dates.length; j++){
                arr.push(dates[j] + " " + months[i]);    
                arr.push("empty");
            }
        }  

        if(arr.includes("4 jan")){
            var x = arr.indexOf("4 jan");
            console.log("found 4th jan!");
            console.log(x);
            arr[x+1] = "CHANGED";
        } else{
            console.log("Could not find 8th jan!");
        }
    }

    return(
        <div className = "tasks">
            {getArr()}
            {arr.map((e) =>{return <li>{e}</li>})}
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