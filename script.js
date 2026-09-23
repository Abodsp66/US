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

document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const noMessage = document.getElementById("noMessage");
    const thankYouSection =
        document.getElementById("thankYouSection");
    let noClicks = 0;
    /* ============================= */
    /* YES                           */
    /* ============================= */
    yesBtn.addEventListener("click", function () {
        // Reveal flowers + message
        thankYouSection.classList.add("show");
        // Remove NO button
        noBtn.style.display = "none";
        // Clear previous message
        noMessage.textContent = "";
        // Slowly move down to the revealed message
        setTimeout(function () {
            thankYouSection.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 300);
    });
    /* ============================= */
    /* NO                            */
    /* ============================= */
    noBtn.addEventListener("click", function () {
        noClicks++;
        /* SHAKE */
        noBtn.classList.remove("shake");
        // Restart animation
        void noBtn.offsetWidth;
        noBtn.classList.add("shake");
        /* MESSAGES */
        const messages = [
            "Are you sure? 🥺",
            "Think again...",
            "Really? 😭",
            "You don't mean that...",
            "Please reconsider ❤️",
            "I'll ask again...",
            "Come on... 🥺",
            "One more chance?",
            "You really said no? 😭",
            "Okay... I tried ❤️"
        ];
        noMessage.textContent =
            messages[noClicks - 1];
        /* MOVE */
        setTimeout(function () {
            moveNoButton();
        }, 450);
        /* AFTER 10 NOs */
        if (noClicks >= 10) {
            setTimeout(function () {
                noBtn.style.opacity = "0";
                noBtn.style.transform = "scale(0.5)";
                setTimeout(function () {
                    noBtn.style.display = "none";
                    noMessage.textContent =
                        "Looks like there's only one answer left... ❤️";
                }, 400);
            }, 450);
        }
    });
    /* ============================= */
    /* MOVE NO BUTTON                */
    /* ============================= */
    function moveNoButton() {
        const buttonWidth = noBtn.offsetWidth;
        const buttonHeight = noBtn.offsetHeight;
        const padding = 20;
        const maxX =
            window.innerWidth -
            buttonWidth -
            padding;
        const maxY =
            window.innerHeight -
            buttonHeight -
            padding;
        const randomX =
            padding +
            Math.random() *
            Math.max(0, maxX - padding);
        const randomY =
            padding +
            Math.random() *
            Math.max(0, maxY - padding);
        noBtn.style.position = "fixed";
        noBtn.style.left =
            randomX + "px";
        noBtn.style.top =
            randomY + "px";
    }
});
