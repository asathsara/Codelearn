// Scroll-to-Top Button
document.addEventListener("DOMContentLoaded", function () {
  const fab = document.getElementById("fab");

  // Show the FAB when the user scrolls down 100px from the top of the document
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      fab.style.display = "flex";
    } else {
      fab.style.display = "none";
    }
  });

  // Scroll to the top when the FAB is clicked
  fab.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});




// Card Hover Effect
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  });
});