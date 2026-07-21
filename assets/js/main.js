/* ===========================================
   PURPOSE HERE V2
   File: assets/js/main.js
=========================================== */

"use strict";

/* ---------- Sticky Navbar ---------- */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

/* ---------- Smooth Scroll ---------- */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", e => {

        const target = document.querySelector(link.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});

/* ---------- Reveal Animation ---------- */

const revealElements = document.querySelectorAll(
    "section,.product-card,.faq-item"
);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            revealObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(el => {

    el.classList.add("hidden");

    revealObserver.observe(el);

});

/* ---------- Current Year ---------- */

const year = document.querySelector("[data-year]");

if (year) {

    year.textContent = new Date().getFullYear();

}
