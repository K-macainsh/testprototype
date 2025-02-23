document.addEventListener("DOMContentLoaded", function () {
  let footer = document.getElementById("u0"); // Footer element
  let lastScrollY = window.scrollY;
  let timeout;

  function hideFooter() {
    footer.style.transform = "translateY(100%)";
  }

  function showFooter() {
    footer.style.transform = "translateY(0)";
  }

  function handleScroll() {
    clearTimeout(timeout); let currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      hideFooter();
    } else {
      // Scrolling up
      hideFooter();
    }

    lastScrollY = currentScrollY;
    // Wait before showing the footer again
    timeout = setTimeout(() => {
      showFooter();
     }, 500);
   }
   // Detect scrolling for both desktop and mobile
   window.addEventListener("scroll", handleScroll);
   window.addEventListener("touchstart", handleScroll); // Detects touch start
   window.addEventListener("touchmove", handleScroll); // Detects finger movement
 });
