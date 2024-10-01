const navSection = document.querySelector(".flex.justify-end.items-center.gap-4.text-xl");

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    // Element is visible in the viewport, show it
    navSection.classList.remove("hidden-on-scroll");
  } else {
    // Element is scrolled out of view, hide it
    navSection.classList.add("hidden-on-scroll");
  }
}, { threshold: 1 }); // Observe when 100% of the element is out of view

observer.observe(navSection);

// Add CSS class for hiding
.hidden-on-scroll {
  display: none; /* Or any other hiding style */
}