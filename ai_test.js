function generateMessage(type) {
  let message = "";

  switch (type) {
  case "calm":
    message = "Pause for a moment, breathe slowly, and let your mind settle into peace.";
    break;
  case "motivation":
    message = "Keep moving forward—every step brings you closer to your goals.";
    break;
  case "study":
    message = "Stay focused, break tasks into small pieces, and reward yourself after progress.";
    break;
  default:
    message = "Select a message type to receive encouragement.";
}


  console.log("AI Output:", message);
}

// Example calls
generateMessage("calm");
generateMessage("motivation");
generateMessage("study");