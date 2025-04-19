document.addEventListener("DOMContentLoaded", () => {
  console.log("Solo Leveling Site Ready!");

  const toggleBtn = document.getElementById("toggle-quest");
  const questBox = document.getElementById("quest-box");
  const sound = document.getElementById("quest-sound");

  toggleBtn.addEventListener("click", () => {
    questBox.classList.toggle("hidden");

    // Ensure sound is played only after a user action
    sound.currentTime = 0; // Restart the audio to play from the beginning
    sound.play().catch((error) => {
      console.warn("Sound couldn't play:", error);
    });
  });
});
