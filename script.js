let user_score=0;
let comp_score=0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user-score");
const comp = document.querySelector("#computer-score");
//modular_way_programming :one task for each function
const draw = () => {
    console.log("Game was draw");
   msg.innerText="Game was draw";
   msg.style.backgroundColor="#081b31";
} 
const showWinner = (userWin,useChoice,comp_Choice) =>{
    if(userWin)
    {
        user_score++;
        user.innerText=user_score;
      console.log("You win");
      msg.innerText=`You  win . Your ${useChoice} beats computers ${comp_Choice}`;
      msg.style.backgroundColor="green";
    }
    else{
        comp_score++;
        comp.innerText=comp_score;
        console.log("You lose");
        msg.innerText=`You  lose . Computers ${comp_Choice} beats your ${useChoice}`;
        msg.style.backgroundColor="red";
    }
}
const compChoice = () =>{
    const options = ["rock","paper","scissors"];
   const rand = Math.floor(Math.random()*3);
   return options[rand];
 }
const playGame = (useChoice) => {
    console.log("User choice",useChoice);
    //Generate computer choices
   const comp_Choice = compChoice();
   console.log("cmputer choice",comp_Choice);

   if(useChoice === comp_Choice)
   {
    draw();
   }
   else{
    let userWin = true;
    if(useChoice === "rock")
    {
        //paper,scisor
        userWin = comp_Choice === "paper" ? false : true;    }
     else if(useChoice === "paper")
     {
        //scissor,rock
        userWin = comp_Choice === "scissors" ? false :true;
     } 
     else{
        userWin = comp_Choice === "rock" ? false : true;
     }  
     showWinner(userWin,useChoice,comp_Choice);
   }
}
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click" , () => {
        const useChoice = choice.getAttribute("id");
        playGame(useChoice);
    })
}) 