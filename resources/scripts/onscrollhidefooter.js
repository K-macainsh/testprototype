document.addEventListener("DOMContentLoaded", function () {
  let footer = document.getElementById("ul"); // Footer element
  let lastScrollY = window.scrollY;
  let isScrolling; // Tracks scrolling activity

  function hideFooter() {
    footer.style.transform = "translateY(100%)"; // Move footer down (hide)
  }

  function showFooter() {
    footer.style.transform = "translateY(0)"; // Move footer up (show)
  }

  function handleScroll() { clearTimeout(isScrolling); // Reset the timeout
    let currentScrollY = window.scrollY;

    if (currentScrollY !== lastScrollY) {
      // Still scrolling, keep footer hidden
      hideFooter();
    }

    lastScrollY = currentScrollY;
    // Only show the footer if scrolling has completely stopped for 800ms
    isScrolling = setTimeout(() => {
      showFooter();
     }, 800);
    }
    // Works for both desktop & mobile
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("touchmove", handleScroll, { passive: true });
  });
