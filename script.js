// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Sticky Header
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 100) {
    header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    header.style.padding = '10px 0';
  } else {
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    header.style.padding = '15px 0';
  }
});

// Initialize Swipers
new Swiper('.calendlySwiper', { loop: true, autoplay: { delay: 4000 }, pagination: { el: '.swiper-pagination', clickable: true }, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' } });
new Swiper('.emailSwiper', { loop: true, autoplay: { delay: 5000 }, pagination: { el: '.swiper-pagination', clickable: true }, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' } });
new Swiper('.dataSwiper', { loop: true, autoplay: { delay: 4500 }, pagination: { el: '.swiper-pagination', clickable: true }, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' } });
new Swiper('.certSwiper', { loop: true, autoplay: { delay: 5000 }, pagination: { el: '.swiper-pagination', clickable: true }, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' } });

// Contact Form
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you! I’ll respond within 24 hours.');
  this.reset();
});