const slidesContainer = document.querySelector(".slidesContainer");
const slide = document.querySelector(".slide");
const nextbutton = document.querySelector(".next");
const previousbutton = document.querySelector(".previous");
const slideWidth = slide.clientWidth;

nextbutton.addEventListener("click", () => {
  console.log(nextbutton);
  slidesContainer.scrollLeft += slideWidth;
});

previousbutton.addEventListener("click", () => {
  console.log(previousbutton);
  slidesContainer.scrollLeft -= slideWidth;
});
