document.addEventListener("DOMContentLoaded", () => {
  console.log("Solo Leveling Site Ready!");

  const toggleBtn = document.getElementById("toggle-quest");
  const questBox = document.getElementById("quest-box");
  const sound = document.getElementById("quest-sound");

  toggleBtn.addEventListener("click", () => {
    questBox.classList.toggle("hidden");
    sound.play();
  });
});
