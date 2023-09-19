const accordians = document.querySelectorAll(".accordian");
console.log(accordians);
accordians.forEach((accord) => {
  console.log(accord);
  const arrowImage = accord.querySelector(".icon");
  const answer = accord.querySelector(".answer");

  accord.addEventListener("click", () => {
    if (arrowImage.classList.contains("active")) {
      arrowImage.classList.remove("active");
      answer.style.maxHeight = null;
    } else {
      arrowImage.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
