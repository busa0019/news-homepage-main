const menuIcon = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close-menu');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');

// Open menu
menuIcon.addEventListener('click', () => {
  navLinks.classList.add('active');
  overlay.classList.add('active');
  menuIcon.style.display = 'none';
  closeIcon.classList.add('active');
});

// Close menu
closeIcon.addEventListener('click', () => {
  navLinks.classList.remove('active');
  overlay.classList.remove('active');
  menuIcon.style.display = 'block';
  closeIcon.classList.remove('active');
});

// Close menu on overlay click
overlay.addEventListener('click', () => {
  navLinks.classList.remove('active');
  overlay.classList.remove('active');
  menuIcon.style.display = 'block';
  closeIcon.classList.remove('active');
});
