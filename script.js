const envelope = document.getElementById("envelope");

const opening = document.getElementById("opening");

const fullLetter = document.getElementById("fullLetter");


envelope.addEventListener("click", () => {

    // Open the envelope
    envelope.classList.add("open");


    // Wait for the envelope animation
    setTimeout(() => {

        // Fade out the opening scene
        opening.classList.add("hide");


        // Show the full letter
        fullLetter.classList.add("show");


        // Move the page to the letter
        setTimeout(() => {

            fullLetter.scrollIntoView({
                behavior: "smooth"
            });

        }, 300);

    }, 900);

});


// =========================================
// SCROLL REVEAL
// =========================================

const storyElements = document.querySelectorAll(
    ".story-reveal"
);


const storyObserver = new IntersectionObserver(

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


storyElements.forEach((element) => {

    storyObserver.observe(element);

});

<script>
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const lockedContent = document.getElementById("locked-content");
const noMessage = document.getElementById("noMessage");

let noClicks = 0;
const maxNoClicks = 10;

// YES button
yesBtn.addEventListener("click", () => {
  lockedContent.style.display = "block";

  // Smoothly continue down the page
  lockedContent.scrollIntoView({
    behavior: "smooth"
  });
});

// NO button
noBtn.addEventListener("click", () => {
  noClicks++;

  // Shake
  noBtn.classList.remove("shake");

  // Force browser to restart animation
  void noBtn.offsetWidth;

  noBtn.classList.add("shake");

  // After the shake finishes, move the button
  setTimeout(() => {
    moveNoButton();
  }, 450);

  // After 10 clicks, disappear
  if (noClicks >= maxNoClicks) {
    setTimeout(() => {
      noBtn.style.opacity = "0";
      noBtn.style.pointerEvents = "none";

      setTimeout(() => {
        noBtn.style.display = "none";
      }, 300);
    }, 450);
  }
});

function moveNoButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth - 30;
  const maxY = window.innerHeight - noBtn.offsetHeight - 30;

  const randomX = Math.max(20, Math.random() * maxX);
  const randomY = Math.max(20, Math.random() * maxY);

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}
</script>
