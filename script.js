/* =====================================================
   BIRTHDAY WEBSITE SCRIPT
===================================================== */


/* =====================================================
   LETTER
===================================================== */

const envelope = document.getElementById("envelope");
const openLetterBtn = document.getElementById("openLetterBtn");

openLetterBtn.addEventListener("click", () => {

  envelope.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  setTimeout(() => {
    envelope.classList.add("open");
  }, 700);

});


envelope.addEventListener("click", () => {

  envelope.classList.toggle("open");

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }

    });

  },
  {
    threshold: 0.15
  }
);


revealElements.forEach((element) => {

  revealObserver.observe(element);

});


/* =====================================================
   GIFT
===================================================== */

const giftBox = document.getElementById("giftBox");
const surpriseModal = document.getElementById("surpriseModal");
const closeModal = document.getElementById("closeModal");

giftBox.addEventListener("click", () => {

  giftBox.classList.add("open");

  createConfetti();

  setTimeout(() => {

    surpriseModal.classList.add("active");

  }, 500);

});


closeModal.addEventListener("click", () => {

  surpriseModal.classList.remove("active");

});


surpriseModal.addEventListener("click", (event) => {

  if (event.target === surpriseModal) {

    surpriseModal.classList.remove("active");

  }

});


/* =====================================================
   CONFETTI
===================================================== */

function createConfetti() {

  const container =
    document.getElementById("confettiContainer");

  const symbols = [
    "♡",
    "✦",
    "✧",
    "🩵",
    "⋆",
    "✨"
  ];

  for (let i = 0; i < 70; i++) {

    const confetti =
      document.createElement("span");

    confetti.classList.add("confetti");

    confetti.textContent =
      symbols[
        Math.floor(Math.random() * symbols.length)
      ];

    confetti.style.left =
      Math.random() * 100 + "%";

    confetti.style.animationDuration =
      (3 + Math.random() * 4) + "s";

    confetti.style.animationDelay =
      Math.random() * 0.8 + "s";

    confetti.style.fontSize =
      (12 + Math.random() * 18) + "px";

    container.appendChild(confetti);


    setTimeout(() => {

      confetti.remove();

    }, 8000);

  }

}


/* =====================================================
   FLOATING PARTICLES
===================================================== */

function createParticles() {

  const amount = 25;

  for (let i = 0; i < amount; i++) {

    const particle =
      document.createElement("div");

    particle.className = "particle";

    particle.innerHTML =
      Math.random() > 0.5
        ? "✦"
        : "♡";

    particle.style.position = "fixed";

    particle.style.left =
      Math.random() * 100 + "%";

    particle.style.top =
      Math.random() * 100 + "%";

    particle.style.color =
      "rgba(255,255,255,0.6)";

    particle.style.fontSize =
      (8 + Math.random() * 12) + "px";

    particle.style.pointerEvents =
      "none";

    particle.style.zIndex = "2";

    particle.style.animation =
      `particleFloat ${
        5 + Math.random() * 8
      }s ease-in-out infinite`;

    particle.style.animationDelay =
      Math.random() * 5 + "s";

    document.body.appendChild(particle);

  }

}


const particleStyle =
document.createElement("style");

particleStyle.textContent = `

@keyframes particleFloat {

  0%, 100% {
    transform:
      translateY(0)
      rotate(0deg);

    opacity: 0.2;
  }

  50% {
    transform:
      translateY(-40px)
      rotate(180deg);

    opacity: 0.8;
  }

}

`;

document.head.appendChild(particleStyle);

createParticles();


/* =====================================================
   MUSIC
===================================================== */

const music =
  document.getElementById("birthdayMusic");

const musicBtn =
  document.getElementById("musicBtn");

let musicPlaying = false;


musicBtn.addEventListener("click", () => {

  /*
    Kalau belum ada file musik,
    browser tidak akan memainkan apa-apa.
  */

  if (!music.src) {

    alert(
      "Tambahkan file musik terlebih dahulu.\n\n" +
      "Contoh: music.mp3"
    );

    return;

  }


  if (musicPlaying) {

    music.pause();

    musicBtn.innerHTML = "♫";

    musicPlaying = false;

  } else {

    music.play();

    musicBtn.innerHTML = "❚❚";

    musicPlaying = true;

  }

});


/* =====================================================
   PARALLAX EFFECT
===================================================== */

window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;

  const clouds =
    document.querySelectorAll(".cloud");

  clouds.forEach((cloud, index) => {

    const speed =
      0.03 + index * 0.01;

    cloud.style.transform =
      `translateY(${scrollY * speed}px)`;

  });

});


/* =====================================================
   RANDOM SPARKLE ON CLICK
===================================================== */

document.addEventListener("click", (event) => {

  if (
    event.target.closest("button") ||
    event.target.closest(".envelope")
  ) {
    createClickSparkle(
      event.clientX,
      event.clientY
    );
  }

});


function createClickSparkle(x, y) {

  const sparkle =
    document.createElement("span");

  sparkle.innerHTML = "✦";

  sparkle.style.position = "fixed";

  sparkle.style.left = x + "px";

  sparkle.style.top = y + "px";

  sparkle.style.pointerEvents = "none";

  sparkle.style.zIndex = "300";

  sparkle.style.fontSize = "20px";

  sparkle.style.color = "#ffffff";

  sparkle.style.transition =
    "all 0.8s ease";

  document.body.appendChild(sparkle);


  requestAnimationFrame(() => {

    sparkle.style.transform =
      "translateY(-35px) scale(1.5)";

    sparkle.style.opacity = "0";

  });


  setTimeout(() => {

    sparkle.remove();

  }, 800);

}


/* =====================================================
   PAGE LOAD
===================================================== */

window.addEventListener("load", () => {

  document.body.classList.add("loaded");

});
