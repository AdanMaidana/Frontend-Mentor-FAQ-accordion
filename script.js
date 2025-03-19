const buttons = document.querySelectorAll('button[aria-controls]');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const contentId = button.getAttribute("aria-expanded");

    if (contentId === "false") {
      button.setAttribute("aria-expanded", true);
    } else {
      button.setAttribute("aria-expanded", false);
    }
  });
});
