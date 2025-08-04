
    const words = [
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

    let currentIndex = 0;
let intervalId = null;

const tick = document.getElementById("tickSound");

function updateWord() {
  if (currentIndex >= words.length) {
    clearInterval(intervalId);
    intervalId = null;
    document.getElementById("word-display").innerText = "✅ Test Completed";
    document.getElementById("word-number").innerText = "";
    document.getElementById("controlButtons").style.display = "none";
    return;
  }

  document.getElementById("word-number").innerText = `Word #${currentIndex + 1}`;
  document.getElementById("word-display").innerText = words[currentIndex];

  tick.currentTime = 0;
  tick.play();

  currentIndex++;
}

function startWAT() {
  document.getElementById("startButton").style.display = "none";
  document.getElementById("controlButtons").style.display = "flex";
  updateWord();
  intervalId = setInterval(updateWord, 11000);

  document.getElementById("pauseBtn").disabled = false;
  document.getElementById("resumeBtn").disabled = true;
  document.getElementById("resetBtn").disabled = false;
}

function pauseWAT() {
  clearInterval(intervalId);
  intervalId = null;

  // Pause buzzer sound
  tick.pause();
  tick.currentTime = 0;

  document.getElementById("pauseBtn").disabled = true;
  document.getElementById("resumeBtn").disabled = false;
}

function resumeWAT() {
  if (intervalId) return;
  intervalId = setInterval(updateWord, 11000);
  document.getElementById("pauseBtn").disabled = false;
  document.getElementById("resumeBtn").disabled = true;
}

function resetWAT() {
  clearInterval(intervalId);
  intervalId = null;
  currentIndex = 0;

  // Stop and reset tick sound
  tick.pause();
  tick.currentTime = 0;

  document.getElementById("word-display").innerText = "Click Start to Begin";
  document.getElementById("word-number").innerText = "Word #1";
  document.getElementById("startButton").style.display = "flex";
  document.getElementById("controlButtons").style.display = "none";
}
  