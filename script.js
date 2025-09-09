// Typing effect
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const phrases = ["Line Rangers", "ระบบยิงออโต้", "ยิงรัวแบบโปร", "ไม่โดนแบน"];
let i = 0, j = 0, currentPhrase = [], isDeleting = false, isEnd = false;

function loop() {
  isEnd = false;
  typedText.textContent = currentPhrase.join("");

  if (!isDeleting && j <= phrases[i].length) {
    currentPhrase.push(phrases[i][j]);
    j++;
    typedText.textContent = currentPhrase.join("");
  }

  if (isDeleting && j <= phrases[i].length) {
    currentPhrase.pop();
    j--;
    typedText.textContent = currentPhrase.join("");
  }

  if (j === phrases[i].length) {
    isEnd = true;
    isDeleting = true;
  }

  if (isDeleting && j === 0) {
    currentPhrase = [];
    isDeleting = false;
    i++;
    if (i === phrases.length) {
      i = 0;
    }
  }

  const speedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (200 - 100) + 100;
  const time = isEnd ? 1000 : isDeleting ? speedUp : normalSpeed;
  setTimeout(loop, time);
}
document.addEventListener("DOMContentLoaded", () => loop());

// Scroll effect
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.about').forEach(section => {
  observer.observe(section);
});
