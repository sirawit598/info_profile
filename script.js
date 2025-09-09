// Typing effect
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const phrases = ["FREEDOM MOD"];
let i = 0,
  j = 0,
  currentPhrase = [],
  isDeleting = false,
  isEnd = false;

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

// Scroll animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".about").forEach((section) => {
  observer.observe(section);
});

// particles.js config
particlesJS("particles-js", {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#00ffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 0.8,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 3,
        size_min: 0.3,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00ffff",
      opacity: 0.3,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0.6,
        },
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
});

