// User choice
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'sheldon' || userInput === 'lizard'|| userInput === 'spock' ) {
    return userInput
  } else {
    console.log("Error - please correct your message!");
  }
}

// Comuputer choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 5);
  switch (randomNumber) {
    case 0:
      return 'paper';
      break;
    case 1:
      return 'rock';
      break;
    case 2:
      return 'scissors';
      break;
    case 3:
      return 'lizard';
      break;
    case 4:
      return 'spock';
      break;
  }
}
// determine winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'This game is a tie!';
  } 
  
  if (userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'Computer WINS!';
    } else if (computerChoice === 'scissors'){
      return 'User WINS!';
    } else if (computerChoice === 'lizard'){
      return 'User WINS!';
    } else if (computerChoice === 'spock'){
      return 'Computer WINS!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer WINS!';
    } else if (computerChoice === 'rock') {
      return 'User WINS!';
    } else if (computerChoice === 'lizard') {
      return 'Computer WINS!';
    } else if (computerChoice === 'spock') {
      return 'User WINS!';
    }
  }
  
 if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'User WINS!';
    } else if (computerChoice === 'rock') {
      return 'Computer WINS!';
    } else if (computerChoice === 'lizard') {
      return 'User WINS!';
    } else if (computerChoice === 'spock') {
      return 'Computer WINS!';
    }
  }

   if (userChoice === 'lizard') {
    if (computerChoice === 'scissors') {
      return 'Computer WINS!';
    } else if (computerChoice === 'rock') {
      return 'Computer WINS!';
    } else if (computerChoice === 'paper') {
      return 'User WINS!';
    } else if (computerChoice === 'spock') {
      return 'User WINS!';
    }
  }

   if (userChoice === 'spock') {
    if (computerChoice === 'scissors') {
      return 'User WINS!';
    } else if (computerChoice === 'rock') {
      return 'User WINS!';
    } else if (computerChoice === 'lizard') {
      return 'Computer WINS!';
    } else if (computerChoice === 'paper') {
      return 'Computer WINS!';
    }
  }

if (userChoice === 'sheldon') {
      return 'CHEAT CODE USED! YOU WIN!';  
 }
}


// play the game

const playGame = () => {
  const userChoice = getUserChoice ('sheldon');
  const computerChoice = getComputerChoice ();
  console.log('You picked: ' + userChoice);
  console.log('Computer picked: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
  };

playGame();
  





