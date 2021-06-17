


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }



  function play(){
      players= document.getElementsByClassName('dice');
      let dice1 = randomInt(1,6);
      let dice2 = randomInt(1,6);
      console.log(dice1);
      let winner = '';
      if (dice1 > dice2 ){
          winner = 'Player1 won!';
      }
      else if(dice2>dice1){
          winner='Player2 won!';
      }
      else{winner = 'Draw'}
      Array.from(players)[0].lastElementChild.setAttribute("src",`images/dice${dice1}.png`);
      Array.from(players)[1].lastElementChild.setAttribute("src",`images/dice${dice2}.png`);
      
      console.log(winner)
      document.querySelector(".container").firstElementChild.innerText=winner;
      
  }
  play();
  
  