document.addEventListener("DOMContentLoaded", function () {
  let footer = document.getElementById("ul"); // Footer element
  let lastScrollY = window.scrollY;
  let timeout;
  let isScrolling = false;

  function hideFooter() {
    footer.style.transform = "translateY(100%)"; // Move footer down (hide)
  }

  function showFooter() {
    footer.style.transform = "translateY(0)"; // Move footer up (show) \
  }

  function handleScroll() {
    clearTimeout(timeout);
    isScrolling = true; // Mark scrolling as active

    let currentScrollY = window.scrollY;

    if (currentScrollY !== lastScrollY) {
      hideFooter(); // Hide footer while scrolling
    }

    lastScrollY = currentScrollY;

    // Show footer only **after scrolling has fully stopped for 1 second**

    timeout = setTimeout(() => {
      if (!isScrolling) {
        showFooter();
      } }, 1000);
    }

    function handleTouchStart() {
      isScrolling = true; // User starts scrolling
    }

    function handleTouchEnd() {
      // Delay setting `isScrolling` to false to detect momentum scrolling
      setTimeout(() => {
        isScrolling = false;
       }, 500); // Adjust delay if needed
     }

     function handleTouchMove() {
       hideFooter();
       clearTimeout(timeout);

       timeout = setTimeout(() => {
         if (!isScrolling) {
           showFooter();
         }
       }, 1000);
     }
     // Apply event listeners for both desktop & mobile
     window.addEventListener("scroll", handleScroll, { passive: true });
     window.addEventListener("touchstart", handleTouchStart, { passive: true });
     window.addEventListener("touchmove", handleTouchMove, { passive: true });
     window.addEventListener("touchend", handleTouchEnd, { passive: true }); });
