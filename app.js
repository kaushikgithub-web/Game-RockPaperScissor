let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");
const SoundPiano = new Audio ('./sound/piano.mp3');


const genCompChoice =()=>{
     let options = [ "rock" , "paper" , "scissors"];
     const randIdx= Math.floor(Math.random() * 3 );
      return options[randIdx];
};

const Drawgame =()=>{
    msg.innerHTML = "GAME WAS DRAW";
    msg.style.backgroundImage = "linear-gradient(90deg, #e6ce31, #68f900)";
};

const showWinner = (userWin , userChoice , compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerHTML = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundImage = "linear-gradient(90deg, #00ff87, #62F4F9)";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerHTML = `You Lose! ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundImage = "linear-gradient(90deg, #ff930f, #ff1b6b)";
    }
}

const playGame = (userChoice)=>{
 console.log("user choice =", userChoice);
 // genrate computer choice
 const compChoice = genCompChoice();
 console.log("compChoice =", compChoice);

 if (userChoice === compChoice){
    Drawgame();
 } else{
    let userWin = true;
    if(userChoice === "rock"){
         // scossors , paper
        userWin= compChoice === "paper" ? false : true;
    } else if (userChoice === "paper"){
        // rock , scissors
        userWin= compChoice === "scissors" ? false : true;
    } else {
        // paper , rock
        userWin= compChoice === "rock" ? false : true;
    }
    showWinner(userWin , userChoice , compChoice);
 }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        SoundPiano.play();
    });
});
