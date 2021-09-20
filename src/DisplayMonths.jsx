import React from 'react';

function DisplayMonths(){

    const dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    const months = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];

    const date = new Date();
    //today's date
    var currentDay = date.getDate();
    var currentMonth = date.getMonth();

    function displayDate(d){
        if(d >= currentDay){
            return <li>{d  + " " + months[currentMonth]}</li>;
        }
    }

    return (
        <div>
            {dates.map(displayDate)}
        </div>
        );

}

export default DisplayMonths;