const testimonials = document.querySelectorAll(".testimonial");
const prevButtons = document.querySelectorAll(".button-previous");
const nextButtons = document.querySelectorAll(".button-next");
let current = 0;

const reset = () => {
  testimonials.forEach((testimonial) => {
    testimonial.style.display = "none";
  });
};

const initialize = () => {
  reset();
  testimonials[0].style.display = "flex";
};

const showPrevious = () => {
  reset();
  testimonials[current - 1].style.display = "flex";
  current--;
};

const showNext = () => {
  reset();
  testimonials[current + 1].style.display = "flex";
  current++;
};

prevButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (current === 0) {
      current = testimonials.length;
    }
    showPrevious();
  });
});

nextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (current === testimonials.length - 1) {
      current = -1;
    }
    showNext();
  });
});

initialize();
