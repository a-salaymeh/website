/* main.js — navigation, smooth scroll, active link highlighting */

(function () {
  'use strict';

  /* Mobile hamburger toggle */
  const hamburger = document.querySelector('.nav__hamburger');
  const navLinks  = document.querySelector('.nav__links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
    /* Close menu when a link is clicked */
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  /* Active nav link based on current page */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(link => {
    const href = link.getAttribute('href');
    if (
      href === currentPage ||
      (currentPage === '' && href === 'index.html') ||
      (currentPage === '/' && href === 'index.html')
    ) {
      link.classList.add('active');
    }
  });

  /* Smooth-scroll for in-page anchor links */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navHeight = document.querySelector('.nav')?.offsetHeight || 64;
        window.scrollTo({ top: target.offsetTop - navHeight - 16, behavior: 'smooth' });
      }
    });
  });

  /* Fade-in on scroll */
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    }),
    { threshold: 0.12 }
  );
  document.querySelectorAll('.research-card, .edu-card, .course-card, .contact-card-full, .news-item').forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });
})();
