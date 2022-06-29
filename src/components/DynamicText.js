import React, { useEffect } from "react";

const DynamicText = () => {
  useEffect(() => {
    const target = document.getElementById("text-target");
    let array = ["rapide", "efficace", "clair"];
    let wordIndex = 0;
    let letterIndex = 0; // pour décomposer le mot étape par étape

    const createLetter = () => {
      const letter = document.createElement("span");
      target.appendChild(letter);

      letter.classList.add("letter");
      letter.style.opacity = "0";
      letter.style.animation = "anim 6s ease forwards";
      letter.textContent = array[wordIndex][letterIndex];

      setTimeout(() => {
        letter.remove();
      }, 2000);
    };

    const loop = () => {
      setTimeout(() => {
        if (wordIndex >= array.length) {
          wordIndex = 0;
          letterIndex = 0;
          loop();
        } else if (letterIndex < array[wordIndex].length) {
          createLetter();
          letterIndex++;
          loop();
        } else {
          letterIndex = 0;
          wordIndex++;
          setTimeout(loop, 2000);
        }
      }, 80);
    };
    loop();
  }, []);
  return (
    <span className="dynamic-text">
      <span>simplement</span>
      <span id="text-target"></span>
    </span>
  );
};

export default DynamicText;
