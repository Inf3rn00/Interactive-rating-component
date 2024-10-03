const selection = document.getElementById("selection") as HTMLElement;
const selectBtns = document.querySelectorAll<HTMLElement>("#selector");
const submitBtn = document.getElementById("btn") as HTMLElement;
const ratingEnd = document.querySelector(".rating-end") as HTMLElement;
const ratingStart = document.querySelector(".rating-start") as HTMLElement;

const btnArray = Array.from(selectBtns);

btnArray.forEach((btn) => {
  btn.addEventListener("click", () => {
    submitBtn?.addEventListener("click", () => {
      ratingStart.style.display = "none";
      selection.textContent = btn.textContent;
      ratingEnd.style.display = "block";
    });
  });
});
