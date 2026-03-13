let score = JSON.parse(localStorage.getItem("score"));
       if(score === null){
        score ={
       wins : 0,
       losses : 0,
       ties :0,}
       }
       
       updateScore();

        function playGame(playerPick){
            const computerGuess = computerPick();
         let result='';
         if(playerPick === 'scissor')
         {
             if(computerGuess === 'rock'){
                result = 'You lose';
               }
            else if(computerGuess === 'paper'){
                 result = 'You win';
               }
            else if(computerGuess === 'scissor'){
                result = 'Tie';
                }
       }
       else if(playerPick === 'rock'){
         if(computerGuess === 'rock'){
         result = 'Tie';
         }
        else if(computerGuess === 'paper'){
         result = 'You lose';
         }
        else if(computerGuess === 'scissor'){
         result = 'You win';
         }
       }
       else if(playerPick === 'paper'){
         if(computerGuess === 'rock'){
         result = 'You win';
         }
        else if(computerGuess === 'paper'){
         result = 'Tie';
         }
        else if(computerGuess === 'scissor'){
         result = 'You lose';
         }
       }

       if(result === 'You win'){
         score.wins +=1;
       }
       else if(result === 'You lose'){
         score.losses +=1;
       }
       else if(result === 'Tie'){
         score.ties +=1;
       }
       localStorage.setItem("score",JSON.stringify(score));
        
       document.querySelector(".js-result").innerHTML = result
       document.querySelector(".js-moves").innerHTML = `You <img class="move-img" src="images/${playerPick}-emoji.png" alt="">
        <img class="move-img" src="images/${computerGuess}-emoji.png" alt=""> Computer`
       updateScore();
       
      }
      function updateScore(){
      document.querySelector(
        ".js-score"
         ).innerHTML =`Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`
   }  
        function computerPick(){
            const randomNumber = Math.random();
        let computerGuess = '';
       if(randomNumber>=0 && randomNumber<1/3){
         computerGuess = 'rock';
         }
         else if(randomNumber>=1/3 && randomNumber<2/3){
        computerGuess = 'paper';
       }
        else if(randomNumber>=2/3 && randomNumber<1){
         computerGuess = 'scissor';
       }
       return computerGuess;
        }
