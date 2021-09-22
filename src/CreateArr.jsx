
function CreateArr(){

    const dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const a = [];

    for(let i = 0; i <months.length; i++){
        for(let j = 0; j<dates.length; j++){
            a.push(<li>{dates[j] + " "+ months[i]}</li>);
        }
    }

    console.log(a);
    return a;
}

export default CreateArr;



