document.addEventListener("DOMContentLoaded", function () {
  let footer = document.getElementById("u0"); // Footer element
  let lastScrollY = window.scrollY;
  let timeout;

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

    // Show footer after scrolling stops for 1 second
    timeout = setTimeout(() => {
      showFooter();
    }, 1000);
  }

  function handleTouchScroll() {
    hideFooter();
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      showFooter();
    }, 1000);
  }


  }
  // Apply event listeners for both desktop and mobile
  window.addEventListener("scroll", handleScroll, { passive: true });
  document.addEventListener("touchstart", handleTouchScroll, { passive: true });
  document.addEventListener("touchmove", handleTouchScroll, { passive: true });
  document.addEventListener("wheel", handleScroll, { passive: true });
});
