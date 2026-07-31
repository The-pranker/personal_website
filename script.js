const clickButton = document.getElementById("click-button");
const clickSound = document.getElementById("click-sound");
const clickText = document.getElementById("click-text");
const darkMode = document.getElementById("dark-mode");

const savedTheme = localStorage.getItem('theme');
const darkModeRotation = localStorage.getItem('rotation');
const savedClicks = localStorage.getItem('clicks');

let clicks = savedClicks ? Number(savedClicks) : 0;

if (savedTheme === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
}
if (darkModeRotation === '180') {
    darkMode.style.transform = 'rotate(180deg)';
}
if (savedClicks !== null) {
    clickText.style.display = 'block';
    clickText.innerHTML = "Clicks: " + clicks;
}

clickButton.onclick = function () {
    clickSound.currentTime = 0;
    clickSound.play();
    clicks++;
    localStorage.setItem('clicks', clicks);
    clickText.style.display = "block";
    clickText.innerHTML = "Clicks: " + clicks;
}

darkMode.onclick = function () {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme == 'light') {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
      localStorage.setItem('rotation', '0');
      darkMode.style.transform = 'rotate(0deg)';
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      localStorage.setItem('rotation', '180');
      darkMode.style.transform = 'rotate(180deg)';
    }
    
}