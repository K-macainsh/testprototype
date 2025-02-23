document.addEventListener("DOMContentLoaded", function () {
  let footer = document.getElementById("u0"); // Footer element
  let lastScrollY = window.scrollY; let timeout;
  let isScrolling = false; // Tracks scrolling activity

  function hideFooter() {
    if (!isScrolling) {
      footer.style.transform = "translateY(100%)"; // Move footer down (hide)
    }
  }

  function showFooter() {
    footer.style.transform = "translateY(0)"; // Move footer up (show)
  }

  function handleScroll() {
    clearTimeout(timeout);
    isScrolling = true;

    let currentScrollY = window.scrollY;

    if (currentScrollY !== lastScrollY) {
      hideFooter(); // Hide footer while scrolling
    }

    lastScrollY = currentScrollY;
    // Show footer after scrolling stops for 800ms
    timeout = setTimeout(() => {
      isScrolling = false;
      showFooter(); }, 800);
    }
    // Apply event listeners for both desktop and mobile
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });
    window.addEventListener("wheel", handleScroll, { passive: true }); // For smooth scrolling support
  });
