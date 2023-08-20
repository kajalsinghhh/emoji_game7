const emojiDetails = [
  { description: "Smiling face with sunglasses", emoji: "😎" },
  { description: "Thumbs up", emoji: "👍" },
  { description: "Heart eyes", emoji: "😍" },
  { description: "Crying face", emoji: "😢" },
  { description: "Party popper", emoji: "🎉" },
  { description: "Grinning face", emoji: "😀" },
  { description: "Winking face", emoji: "😉" },
  { description: "Face with tears of joy", emoji: "😂" },
  { description: "Angry face", emoji: "😡" },
  { description: "Thumbs down", emoji: "👎" },
  { description: "Clapping hands", emoji: "👏" },
  { description: "Heart", emoji: "❤️" },
  { description: "Thinking face", emoji: "🤔" },
  { description: "Sleeping face", emoji: "😴" },
  { description: "Sunglasses", emoji: "🕶️" },
  { description: "Fire", emoji: "🔥" },
  { description: "Rocket", emoji: "🚀" },
  { description: "Crown", emoji: "👑" },
  { description: "Rainbow", emoji: "🌈" },
  { description: "Hundred points", emoji: "💯" }
  
  // Add more emoji descriptions here
];

  let currentEmojiIndex = 0;
  let score = 0;
  let seconds = 10;
  let timer;
  
  const timerElement = document.getElementById(
    'timer'
  );


  //
  const guessInput = document.getElementById("guess-input");
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");

  function displayEmoji() {
    const descriptionElement = document.getElementById("description");
    descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;
    timerElement.textContent=`Time: ${seconds}s`;
  }

  function checkGuess() {
    const guess = guessInput.value.trim().toLowerCase();
    const correctEmoji = emojiDetails[currentEmojiIndex].description.trim().toLowerCase();

    if (guess === correctEmoji) {
      resultElement.textContent = "Correct!";
      score++;
    } else {
      resultElement.textContent = "Wrong!";
    }
    console.log(score);
    scoreElement.textContent = `Score: ${score}`;
    guessInput.value = "";
    guessInput.focus();
    nextEmoji();
  }

  function nextEmoji() {
    currentEmojiIndex++;
   setTimeout(() =>{ resultElement.textContent = '';
  }, 1000);

    if (currentEmojiIndex === emojiDetails.length) {
      currentEmojiIndex = 0;
      score=0;
    }

    displayEmoji();
  }

  document
    .getElementById("guess-input")
    .addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        checkGuess();
      }
    });

  document.addEventListener("DOMContentLoaded", () => {
    displayEmoji();
    startTimer();
  });
function startTimer(){
  timer = setInterval(()=>{
    seconds--;

    timerElement.textContent=`Time: ${seconds}s`;

    if(seconds<= 0){
      endGame();
    }

  }, 1000);
}
function endGame(){
  clearInterval(timer);
  guessInput.disabled = true;
  timerElement.textContent="OOPS!!";
}