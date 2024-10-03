"use strict";
const selection = document.getElementById("selection");
const selectBtns = document.querySelectorAll("#selector");
const submitBtn = document.getElementById("btn");
const ratingEnd = document.querySelector(".rating-end");
const ratingStart = document.querySelector(".rating-start");
const btnArray = Array.from(selectBtns);
btnArray.forEach((btn) => {
    btn.addEventListener("click", () => {
        submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener("click", () => {
            ratingStart.style.display = "none";
            selection.textContent = btn.textContent;
            ratingEnd.style.display = "block";
        });
    });
});
