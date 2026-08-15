/* =====================================================
   LOADING SCREEN
===================================================== */

const loadingScreen =
  document.getElementById("loadingScreen");

const loadingProgress =
  document.getElementById("loadingProgress");

const loadingPercent =
  document.getElementById("loadingPercent");

const introScreen =
  document.getElementById("introScreen");


let progress = 0;


const loadingInterval = setInterval(() => {

  progress +=
    Math.floor(Math.random() * 4) + 1;


  if (progress >= 100) {

    progress = 100;

    clearInterval(
      loadingInterval
    );

    loadingProgress.style.width =
      "100%";

    loadingPercent.textContent =
      "100%";


    setTimeout(() => {

      loadingScreen.classList.add(
        "hide"
      );

      introScreen.classList.add(
        "active"
      );

    }, 700);

    return;

  }


  loadingProgress.style.width =
    progress + "%";

  loadingPercent.textContent =
    progress + "%";

}, 60);


/* =====================================================
   INTRO ENVELOPE
===================================================== */

const introEnvelope =
  document.getElementById(
    "introEnvelope"
  );

const envelopeHint =
  document.getElementById(
    "envelopeHint"
  );

const recipientContainer =
  document.getElementById(
    "recipientContainer"
  );


let introOpened = false;


introEnvelope.addEventListener(
  "click",
  () => {

    if (introOpened) return;

    introOpened = true;


    introEnvelope.classList.add(
      "open"
    );


    envelopeHint.style.opacity =
      "0";


    setTimeout(() => {

      recipientContainer.classList.add(
        "show"
      );

      createIntroParticles();

    }, 900);

  }
);


/* =====================================================
   INTRO PARTICLES
===================================================== */

function createIntroParticles() {

  const symbols = [
    "♡",
    "✦",
    "✧",
    "⋆",
    "🩵"
  ];


  for (let i = 0; i < 35; i++) {

    const particle =
      document.createElement("span");


    particle.textContent =
      symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
      ];


    particle.style.position =
      "fixed";

    particle.style.left =
      Math.random() * 100 + "%";

    particle.style.top =
      (45 + Math.random() * 45) + "%";

    particle.style.zIndex =
      "15";

    particle.style.pointerEvents =
      "none";

    particle.style.color =
      "rgba(255,255,255,.9)";

    particle.style.fontSize =
      (12 + Math.random() * 20) + "px";


    const duration =
      2.5 + Math.random() * 4;


    particle.animate(
      [
        {
          transform:
            "translateY(0) scale(.5) rotate(0deg)",

          opacity: 0
        },

        {
          transform:
            "translateY(-150px) scale(1) rotate(90deg)",

          opacity: 1
        },

        {
          transform:
            "translateY(-350px) scale(.7) rotate(180deg)",

          opacity: 0
        }

      ],
      {
        duration:
          duration * 1000,

        easing:
          "ease-out"
      }
    );


    document.body.appendChild(
      particle
    );


    setTimeout(() => {

      particle.remove();

    }, duration * 1000);

  }

}


/* =====================================================
   ENTER MAIN WEBSITE
===================================================== */

const enterButton =
  document.getElementById(
    "enterButton"
  );

const mainSite =
  document.getElementById(
    "mainSite"
  );


enterButton.addEventListener(
  "click",
  () => {

    createConfetti();


    introScreen.classList.add(
      "exit"
    );


    setTimeout(() => {

      mainSite.classList.add(
        "active"
      );

      document.body.style.overflow =
        "auto";


      window.scrollTo({
        top: 0,
        behavior: "instant"
      });

    }, 800);

  }
);


/* =====================================================
   HERO SCROLL
===================================================== */

const scrollButton =
  document.getElementById(
    "scrollButton"
  );

const animationSection =
  document.querySelector(
    ".animation-section"
  );


scrollButton.addEventListener(
  "click",
  () => {

    animationSection.scrollIntoView({
      behavior: "smooth"
    });

  }
);


/* =====================================================
   MAIN ENVELOPE
===================================================== */

const mainEnvelope =
  document.getElementById(
    "mainEnvelope"
  );


mainEnvelope.addEventListener(
  "click",
  () => {

    mainEnvelope.classList.toggle(
      "open"
    );

  }
);


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
  document.querySelectorAll(
    ".reveal"
  );


const revealObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(
        (entry) => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "visible"
            );

          }

        }
      );

    },
    {
      threshold: .12
    }
  );


revealElements.forEach(
  (element) => {

    revealObserver.observe(
      element
    );

  }
);


/* =====================================================
   GIFT
===================================================== */

const giftBox =
  document.getElementById(
    "giftBox"
  );

const surpriseModal =
  document.getElementById(
    "surpriseModal"
  );

const closeModal =
  document.getElementById(
    "closeModal"
  );


giftBox.addEventListener(
  "click",
  () => {

    giftBox.classList.add(
      "open"
    );


    createConfetti();


    setTimeout(() => {

      surpriseModal.classList.add(
        "active"
      );

    }, 600);

  }
);


closeModal.addEventListener(
  "click",
  () => {

    surpriseModal.classList.remove(
      "active"
    );

  }
);


surpriseModal.addEventListener(
  "click",
  (event) => {

    if (
      event.target ===
      surpriseModal
    ) {

      surpriseModal.classList.remove(
        "active"
      );

    }

  }
);


/* =====================================================
   CONFETTI
===================================================== */

function createConfetti() {

  const container =
    document.getElementById(
      "confettiContainer"
    );


  const symbols = [
    "♡",
    "✦",
    "✧",
    "⋆",
    "🩵",
    "✨"
  ];


  for (let i = 0; i < 70; i++) {

    const confetti =
      document.createElement(
        "span"
      );


    confetti.className =
      "confetti";


    confetti.textContent =
      symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
      ];


    confetti.style.left =
      Math.random() * 100 + "%";


    confetti.style.fontSize =
      (
        12 +
        Math.random() * 18
      ) + "px";


    confetti.style.animationDuration =
      (
        3 +
        Math.random() * 4
      ) + "s";


    confetti.style.animationDelay =
      (
        Math.random() * .8
      ) + "s";


    container.appendChild(
      confetti
    );


    setTimeout(() => {

      confetti.remove();

    }, 8000);

  }

}


/* =====================================================
   CLICK SPARKLE
===================================================== */

document.addEventListener(
  "click",
  (event) => {

    if (
      event.target.closest("button") ||
      event.target.closest(".intro-envelope") ||
      event.target.closest(".main-envelope")
    ) {

      createClickSparkle(
        event.clientX,
        event.clientY
      );

    }

  }
);


function createClickSparkle(x, y) {

  const sparkle =
    document.createElement("span");


  sparkle.textContent =
    "✦";


  sparkle.style.position =
    "fixed";

  sparkle.style.left =
    x + "px";

  sparkle.style.top =
    y + "px";

  sparkle.style.zIndex =
    "2000";

  sparkle.style.pointerEvents =
    "none";

  sparkle.style.fontSize =
    "20px";

  sparkle.style.color =
    "#ffffff";

  sparkle.style.transition =
    "all .8s ease";


  document.body.appendChild(
    sparkle
  );


  requestAnimationFrame(() => {

    sparkle.style.transform =
      "translateY(-40px) scale(1.5)";

    sparkle.style.opacity =
      "0";

  });


  setTimeout(() => {

    sparkle.remove();

  }, 800);

}


/* =====================================================
   ESC CLOSE MODAL
===================================================== */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape"
    ) {

      surpriseModal.classList.remove(
        "active"
      );

    }

  }
);
