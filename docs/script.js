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
check=0;

//Question loop
function beginquiz(){
    //select question
    let questionPicker = QandA[i]
    console.log(questionPicker);
    //output question
    document.write(questionPicker.question);
    while (checkIfUsed.length<=4 ){
    //randomize answer positions and output
        while(check<4){
            randomindex = Math.floor(Math.random() * 4);
            var answer1check = checkIfUsed.includes('1');
            var answer2check = checkIfUsed.includes('2');
            var answer3check = checkIfUsed.includes('3');
            var answer4check = checkIfUsed.includes('4');
            if (randomindex==0 && answer1check==false){
                checkIfUsed = checkIfUsed.concat('1');
                const choice1 = document.createElement('button')
                choice1.innerText = QandA[i].wrongAnswer1;
                check++;
            }
            else if (randomindex==1 && answer2check==false){
                checkIfUsed = checkIfUsed.concat('2');
                const choice2 = document.createElement('button')
                choice2.innerText = QandA[i].wrongAnswer2;
                check++;
            }
            else if (randomindex==2 && answer3check==false){
                checkIfUsed = checkIfUsed.concat('3');
                const choice3 = document.createElement('button')
                choice3.innerText = QandA[i].wrongAnswer3;
                check++;
            }
            else if (randomindex==3 && answer4check==false){
                checkIfUsed = checkIfUsed.concat('4');
                const choice4 = document.createElement('button')
                choice4.innerText = QandA[i].correctAnswer;
                check++;
            }
            console.log(checkIfUsed);
            console.log(choice1);
            console.log(choice2);
            console.log(choice3);
            console.log(choice4);
        
        } 
    //recieve input
    //choice1.addEventListener("click", )
    //handle input
    i++;

    }
}
//Event listener to begin quiz
beginquizBtn.addEventListener("click", beginquiz);