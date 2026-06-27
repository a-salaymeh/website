/* main.js — navigation, smooth scroll, active link highlighting */

(function () {
  'use strict';

  /* Mobile hamburger toggle */
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', menu.classList.contains('open'));
    });
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => menu.classList.remove('open'));
    });
  }

  /* Active nav link based on current page */
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current || ((current === '' || current === '/') && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* Smooth-scroll for in-page anchors */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const headerH = document.querySelector('.site-header')?.offsetHeight || 88;
        window.scrollTo({ top: target.offsetTop - headerH - 16, behavior: 'smooth' });
      }
    });
  });

  /* Fade-in on scroll */
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    }),
    { threshold: 0.1 }
  );
  document.querySelectorAll('.card, .post, .pub-item').forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });
  /* Photo banner scroll arrows */
  const strip    = document.querySelector('.lab-photo-strip');
  const btnLeft  = document.querySelector('.banner-arrow--left');
  const btnRight = document.querySelector('.banner-arrow--right');
  if (strip && btnLeft && btnRight) {
    const SCROLL_BY = 340;
    function syncArrows() {
      btnLeft.classList.toggle('visible', strip.scrollLeft > 4);
      btnRight.classList.toggle('hidden',  strip.scrollLeft >= strip.scrollWidth - strip.clientWidth - 4);
    }
    btnLeft.addEventListener('click',  () => strip.scrollBy({ left: -SCROLL_BY, behavior: 'smooth' }));
    btnRight.addEventListener('click', () => strip.scrollBy({ left:  SCROLL_BY, behavior: 'smooth' }));
    strip.addEventListener('scroll', syncArrows, { passive: true });
  }

})();
