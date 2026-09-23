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
