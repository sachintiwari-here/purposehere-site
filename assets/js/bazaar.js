/* ===========================================
   PURPOSE HERE V2
   File: assets/js/bazaar.js
=========================================== */

"use strict";

/* ---------- FAQ ---------- */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {
        faqItems.forEach(faq => {
            if (faq !== item) {
                faq.classList.remove("active");
            }
        });

        item.classList.toggle("active");
    });
});

/* ---------- Timeline Animation ---------- */

const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.animate(
                [
                    { opacity: 0, transform: "translateY(40px)" },
                    { opacity: 1, transform: "translateY(0)" }
                ],
                {
                    duration: 600,
                    easing: "ease-out",
                    fill: "forwards"
                }
            );

            timelineObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

timelineItems.forEach(item => timelineObserver.observe(item));

/* ---------- Overview Cards ---------- */

document.querySelectorAll(".overview-card").forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });

});

/* ---------- Feature Cards ---------- */

document.querySelectorAll(".feature-card").forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });

});
