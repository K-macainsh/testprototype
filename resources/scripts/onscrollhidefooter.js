// Get the footer element
let footer = document.getElementById("u0"); // Footer with ID "ul"
let timeout; // Variable to store the timeout function

// Function to hide the footer when scrolling
function hideFooter() {
  footer.style.transform = "translateY(100%)"; // Move footer down to hide it
}

// Function to show the footer after scrolling stops
function showFooter() { footer.style.transform = "translateY(0)"; // Move footer up to make it visible
}

// Scroll event listener
window.addEventListener("scroll", () => {
  clearTimeout(timeout); // Reset any existing timeout
  hideFooter(); // Hide footer immediately when scrolling starts

  // Set a timeout to show the footer again after scrolling stops
  timeout = setTimeout(() => { showFooter(); }, 500); // Adjust delay if needed
});
