document.addEventListener("DOMContentLoaded", function () {
  let footer = document.getElementById("u0"); // Footer element
  let lastScrollY = window.scrollY;
  let timeout;
  let isTouchScrolling = false;

  function hideFooter() {
    footer.style.transform = "translateY(100%)"; // Move footer down (hide)
  }

  function showFooter() {
    footer.style.transform = "translateY(0)"; // Move footer up (show)
  }

  function handleScroll() {
    clearTimeout(timeout);

    let currentScrollY = window.scrollY;

    if (currentScrollY !== lastScrollY) {
      hideFooter(); // Hide footer while scrolling
    }

    lastScrollY = currentScrollY;

    // Show footer after scrolling stops for 1 second
    timeout = setTimeout(() => {
      showFooter();
    }, 1000);
  }
  // **Fix for mobile finger scrolling**
  function handleTouchStart() {
    isTouchScrolling = true;
  }

  function handleTouchEnd() {
    isTouchScrolling = false;
  }

  function handleTouchMove() {
    if (isTouchScrolling) {
      hideFooter();
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        showFooter();
      }, 1000); }
    }

    // Apply event listeners for both desktop & mobile
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true }); });
