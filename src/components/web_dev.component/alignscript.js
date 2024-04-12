import React from 'react';
  
  const Alignscript = () =>  {
	return (
	  <div>
	  </div>
	);
  }
  
  export default Alignscript;
  document.addEventListener("DOMContentLoaded", function () {
  const boxContainers = document.querySelectorAll(".box-container");
  const resultBox = document.querySelector(".result");
  const npc = document.querySelector(".npc");

  boxContainers.forEach(function (container) {
    container.addEventListener("click", function () {
      const alignment = container.id.replace("_", " ");
      const player = document.querySelector(".player");

      // Get position of npc stick figure
      const npcRect = npc.getBoundingClientRect();
      const npcX = npcRect.left + window.scrollX;
      const npcY = npcRect.top + window.scrollY;

      // Get position of clicked box-container
      const containerRect = container.getBoundingClientRect();
      const containerX = containerRect.left + window.scrollX;
      const containerY = containerRect.top + window.scrollY;

      // Initialize offsetX and offsetY
      let offsetX =
        containerX + (container.offsetWidth - player.offsetWidth) / 2;
      const offsetY =
        npcY - window.scrollY + npc.offsetHeight - player.offsetHeight;

      // Remove puddle if it exists
      const puddle = document.querySelector(".puddle");
      if (puddle) {
        puddle.remove();
      }

      // If clicked container is "Chaotic Evil", adjust offsetX and add puddle
      if (container.id === "Chaotic_Evil") {
        offsetX += 30;
        const puddle = document.createElement("div");
        puddle.classList.add("puddle");
        container.appendChild(puddle);
      }

      // Move player stick figure to the position of clicked box-container
      player.style.left = offsetX + "px";
      player.style.top = offsetY + "px";

      // Update result box content
      resultBox.textContent = "You are " + alignment;
      resultBox.classList.remove("hidden");
    });

    // Hide puddle initially
    const puddle = container.querySelector(".puddle");
    if (puddle) {
      puddle.remove();
    }
  });
});
