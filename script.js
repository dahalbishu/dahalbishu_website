function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function copyCitation(citationText) {
  navigator.clipboard.writeText(citationText).then(() => {
    const popup = document.getElementById('copied-popup');
    popup.classList.add('show');
    setTimeout(() => {
      popup.classList.remove('show');
    }, 2000);
  }).catch(err => {
    console.error("Failed to copy: ", err);
  });
}