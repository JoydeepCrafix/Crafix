
document.addEventListener("DOMContentLoaded", () => {
  const themeModal = document.getElementById('theme-modal');
  const body = document.body;
  const typedText = document.getElementById("typed-text");
  const text = "Welcome to Crafix";
  let i = 0;

  function typeWriter() {
    if (typedText) {
      if (i < text.length) {
        typedText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }
  }

  function applyTheme(mode) {
    body.classList.remove("dark-mode");
    if (mode === "dark") {
      body.classList.add("dark-mode");
    }
  }

  window.setTheme = (mode) => {
    localStorage.setItem("theme", mode);
    applyTheme(mode);
    if (themeModal) themeModal.style.display = "none";
    typeWriter();
  };

  const savedTheme = localStorage.getItem("theme");

  // Apply saved theme
  if (savedTheme) {
    applyTheme(savedTheme);
  }

  // Show modal only on index.html and only if no theme saved
  const isHome = !!document.getElementById("typed-text");
  if (!savedTheme && isHome && themeModal) {
    themeModal.style.display = "flex";
  } else if (isHome) {
    typeWriter();
  }
});
