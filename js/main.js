const logo1 = document.getElementById('logo1');
const logo2 = document.getElementById('logo2');

window.addEventListener('scroll', function() {
  if (window.scrollY > window.innerHeight * 0.1) {
    logo1.classList.add('logo-fade-out');
    logo2.style.opacity = '1';
  } else {
    logo1.classList.remove('logo-fade-out');
    logo2.style.opacity = '0';
  }
});
