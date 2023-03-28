//variables
var QandA =[
    {question:"Commonly used data types DO NOT include:", wrongAnswer1:"strings", wrongAnswer2:"booleans", correctAnswer:"alerts", wrongAnswer3:"numbers"},
    {question:"Arrays in JavaScript can be used to ignore _____.", wrongAnswer1:"booleans", wrongAnswer2:"numbers and strings", wrongAnswer3:"other arrays", correctAnswer:"all of the above"},
    //{question:"The condition in an if/else statement is enclosed with ____.", wrongAnswer1:"", wrongAnswer2:"", wrongAnswer3:"", correctAnswer:""},
    //{question:"", wrongAnswer1:"", wrongAnswer2:"", wrongAnswer3:"", correctAnswer:""},
    //{question:"", wrongAnswer1:"", wrongAnswer2:"", wrongAnswer3:"", correctAnswer:""}
];
var beginquizBtn = document.querySelector("#beginquiz");
i=0;
positionindex=0;
checkIfUsed = [];
check = 0;
score = 0;
answeredQuestion = 0;

//Question loop
function beginquiz(){
    //select question
    let questionPicker = QandA[i]
    console.log(questionPicker);
    //output question
    document.write(questionPicker.question);
    while (checkIfUsed.length<4){
    //randomize answer positions and output
        while(check<4){
            var randomindex = Math.floor(Math.random() * 4);
            var answer1check = checkIfUsed.includes('1');
            var answer2check = checkIfUsed.includes('2');
            var answer3check = checkIfUsed.includes('3');
            var answer4check = checkIfUsed.includes('4');
            if (randomindex===0 && answer1check===false){
                checkIfUsed = checkIfUsed.concat('1');
                var choice1 = document.createElement('button')
                choice1.innerText = QandA[i].wrongAnswer1;
                document.body.appendChild(choice1);
                check++;
            }
            else if (randomindex===1 && answer2check===false){
                checkIfUsed = checkIfUsed.concat('2');
                var choice2 = document.createElement('button')
                choice2.innerText = QandA[i].wrongAnswer2;
                document.body.appendChild(choice2);
                check++;
            }
            else if (randomindex===2 && answer3check===false){
                checkIfUsed = checkIfUsed.concat('3');
                var choice3 = document.createElement('button')
                choice3.innerText = QandA[i].wrongAnswer3;
                document.body.appendChild(choice3);
                check++;
            }
            else if (randomindex===3 && answer4check===false){
                checkIfUsed = checkIfUsed.concat('4');
                var choice4 = document.createElement('button')
                choice4.innerText = QandA[i].correctAnswer;
                document.body.appendChild(choice4);
                check++;
            }
        console.log(checkIfUsed);
        console.log(QandA[i].correctAnswer)
        } 
        //recieve input
        choice1.addEventListener("click", wrongAnswer)
        choice2.addEventListener("click", wrongAnswer)
        choice3.addEventListener("click", wrongAnswer)
        choice4.addEventListener("click", rightAnswer)
        function rightAnswer(){
            checkIfUsed.splice(0,4);
            score++;
            choice1.parentNode.removeChild(choice1);
            choice2.parentNode.removeChild(choice2);
            choice3.parentNode.removeChild(choice3);
            choice4.parentNode.removeChild(choice4);
            console.log(checkIfUsed);
            
        }
        function wrongAnswer(){
           checkIfUsed.splice(0,4);
           choice1.parentNode.removeChild(choice1);
           choice2.parentNode.removeChild(choice2);
           choice3.parentNode.removeChild(choice3);
           choice4.parentNode.removeChild(choice4);
           console.log(score);
           
        }
        //handle input
        i++;
    }
    

}
//Event listener to begin quiz
beginquizBtn.addEventListener("click", beginquiz);
