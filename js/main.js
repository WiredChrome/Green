const logo1 = document.getElementById('logo1');
const logo2 = document.getElementById('logo2');

window.addEventListener('scroll', function() {
  if (window.scrollY > window.innerHeight * 0.1) { // 10% of viewport height
    logo1.classList.add('logo-fade-out'); // Apply the fade-out class
    logo2.style.opacity = '1'; // Make logo2 fully visible
  } else {
    logo1.classList.remove('logo-fade-out');
    logo2.style.opacity = '0'; // Hide logo2 again
  }
});