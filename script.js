const allWords = [
  // Paste your full list of 200 words here...
  "Hopeful", "Gun", "Sharpness", "Run", "Smile", "Escape", "Healthy", "Kind", "Struggle", "Lie",
      "Discipline", "Sacrifice", "Cry", "Worry", "Organize", "Fix", "Dead", "Pain", "Challenge", "Fast",
      "Confident", "Nightmare", "Support", "Anger", "Answer", "Calm", "Blood", "Duty", "Smart", "Resolve",
      "Shame", "Repeat", "Fear", "Spirit", "Volunteer", "Brother", "Sad", "Revenge", "Manage", "Wound",
      "Present", "Push", "Save", "Help", "Target", "Humble", "Win", "Question", "Tactics", "Neat",
      "Respectful", "Suffer", "Attack", "Jump", "Truth", "Meet", "Vision", "Depressed", "Wake", "Power",
      "Think", "Command", "Time", "Obey", "Regret", "Logic", "Panic", "Blame", "Dedication", "Grow",
      "Listen", "Alcohol", "Plan", "Study", "Leadership", "Lead", "Ethics", "Jealousy", "Ready", "Cheat",
      "Alert", "Build", "React", "Book", "Fearful", "Calm", "Direction", "Sharp", "Success", "Positive",
      "Uniform", "Anguish", "Doubt", "Fright", "Execute", "Inspire", "Win", "Coward", "War", "Abandon",
      "Watch", "Hate", "Effort", "Decide", "Enemy", "Trauma", "Hardwork", "Control", "Motivate", "Responsibility",
      "Pride", "Leader", "Morals", "Victory", "Train", "Disciplined", "Polite", "Wake", "Organized", "Fear",
      "Question", "Peace", "Resolve", "Guilt", "Death", "Conquer", "Blame", "Friendship", "Write", "Ready",
      "Attack", "Help", "Protect", "Abuse", "Loyalty", "Check", "Mission", "Wound", "Challenge", "Grow",
      "Execute", "Jump", "Honesty", "Honor", "Friend", "Terror", "Compete", "Patriot", "Succeed", "Maintain",
      "Leadership", "Silence", "Lonely", "Dark", "Face", "Nation", "Grateful", "Speed", "Game", "Smile",
      "Respect", "Build", "Decide", "Alert", "Work", "Defend", "Stand", "Cheat", "Patience", "Blood",
      "Team", "Follow", "Resolve", "Strength", "War", "Panic", "Fix", "Obey", "Success", "Balance",
      "Blame", "Dead", "Hope", "Lift", "Trust", "Develop", "Target", "Think", "Plan", "Victory"
];

const wordSets = [];
for (let i = 0; i < allWords.length; i += 25) {
  wordSets.push(allWords.slice(i, i + 25));
}

let currentSet = [];
let index = 0;
let intervalId;
let isPaused = false;
const buzzer = document.getElementById("buzzer");

function startTest() {
  const setIndex = document.getElementById("set").value;
  currentSet = wordSets[setIndex];

  document.getElementById("set-selection").style.display = "none";
  document.getElementById("controls").style.display = "block";

  index = 0;
  showWord();
  intervalId = setInterval(showWord, 11000);
}

function showWord() {
  if (index >= currentSet.length) {
    clearInterval(intervalId);
    return;
  }
  buzzer.currentTime = 0;
  buzzer.play();
  document.getElementById("word-number").innerText = `Word ${index + 1}`;
  document.getElementById("word-display").innerText = currentSet[index];
  index++;
}

function pauseTest() {
  if (!isPaused) {
    clearInterval(intervalId);
    buzzer.pause();
    isPaused = true;
  }
}

function resumeTest() {
  if (isPaused) {
    // Resume buzzer
    const buzzer = document.getElementById("buzzer");
    if (buzzer) {
      buzzer.currentTime = 0; // restart from beginning
      buzzer.play();
    }

    // Resume word display
    intervalId = setInterval(showWord, 11000);
    isPaused = false;
  }
}
function restartTest() {
  clearInterval(intervalId);
  index = 0;
  showWord();
  intervalId = setInterval(showWord, 11000);
}

function resetTest() {
  clearInterval(intervalId);

  // Stop and reset the buzzer safely
  const buzzer = document.getElementById("buzzer");
  if (buzzer) {
    buzzer.pause();
    buzzer.currentTime = 0;
  }

  index = 0;
  isPaused = false;

  // Reset UI
  document.getElementById("set-selection").style.display = "block";
  document.getElementById("controls").style.display = "none";
  document.getElementById("word-number").innerText = "";
  document.getElementById("word-display").innerText = "";
}
