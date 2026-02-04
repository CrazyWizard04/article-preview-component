const shareBtn = document.querySelector(".share-btn");
const shareMenu = document.querySelector(".share-menu");
const articleDetails = document.querySelector(".article-details");

// Toggles the menu with the share options
shareBtn.addEventListener("click", (e) => {
  const isOpen = articleDetails.classList.toggle("open");
  shareBtn.setAttribute("aria-expanded", isOpen.toString());
});

// Closes the menu when clicked outside the button/menu
document.addEventListener("click", (e) => {
  if (!shareBtn.contains(e.target) && !shareMenu.contains(e.target)) {
    articleDetails.classList.remove("open");
  }
});

// Prevents jumping to the top (default behavior gets blocked)
document.querySelectorAll(".share-option").forEach((link) => {
  link.addEventListener("click", (e) => e.preventDefault());
});
