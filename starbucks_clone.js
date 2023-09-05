// function ulChange(id) {
//   let h = arguments[0];
//   console.log(h);
//   h.classList.add("active");
// }

const links = document.querySelectorAll(".nav-link");

// Add a click event listener to each link
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Prevent the default link behavior (e.g., navigating to a new page)
    event.preventDefault();

    // Remove the "active" class from all links
    links.forEach((link) => {
      link.classList.remove("active");
    });

    // Add the "active" class to the clicked link
    link.classList.add("active");
  });
});

//slider
const sliderContent = document.querySelector('.slider-content');
        const prevButton = document.getElementById('prevSlide');
        const nextButton = document.getElementById('nextSlide');
        let currentIndex = 0;

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + sliderContent.children.length) % sliderContent.children.length;
            updateSlider();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % sliderContent.children.length;
            updateSlider();
        });

        function updateSlider() {
            const translateX = -currentIndex * 100;
            sliderContent.style.transform = `translateX(${translateX}%)`;
        }