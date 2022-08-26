 let score=0;
 let score2 = 0;

//let score1 = document.getElementById("score1").value;
//let score2 = document.getElementById("score2").value;


function scores(scores){
    let value = document.getElementById("score1");   //* gETTING THE value in the id score1 and stores its value to value
    score+=scores;    
    value.innerHTML= score;  //*changing the value of score1 id to score
     
}

function guest(sc){
    let value1 = document.getElementById("score22");
    score2+=sc;
    value1.innerHTML= score2;
}
//* here the function takes the value that is given as parametre