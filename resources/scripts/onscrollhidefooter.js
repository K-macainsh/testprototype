document.addEventListener("DOMContentLoaded", function () {
  let footer = document.getElementById("u0"); // Footer element
  let lastScrollY = window.scrollY;
  let timeout;
  let isScrolling = false;

  function hideFooter() {
    footer.style.transform = "translateY(100%)"; // Move footer down (hide)
  }

  function showFooter() {
    footer.style.transform = "translateY(0)"; // Move footer up (show)
  }

  function handleScroll() {
    clearTimeout(timeout);

    let currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down - hide footer
      hideFooter();
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up - hide footer
      hideFooter();
    }

    lastScrollY = currentScrollY;
    isScrolling = true;

    // Show footer after scrolling stops for 1 second
    timeout = setTimeout(() => {
      isScrolling = false;
      showFooter();
    }, 1000);
  }

  function handleTouchMove() {
    handleScroll();
  }
  // Apply event listeners for both desktop and mobile
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("touchmove", handleTouchMove, { passive: true });
  window.addEventListener("wheel", handleScroll, { passive: true });
});
