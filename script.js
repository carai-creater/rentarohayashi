(function () {
  'use strict';

  // ----- Opening: arrival on Earth — remove overlay when done -----
  var introOverlay = document.getElementById('intro-overlay');
  if (introOverlay) {
    introOverlay.addEventListener('animationend', function (e) {
      if (e.animationName === 'intro-overlay-out') {
        introOverlay.classList.add('done');
        document.body.classList.add('intro-done');
      }
    });
    // Slightly longer intro before revealing the main content
    setTimeout(function () {
      introOverlay.classList.add('done');
      document.body.classList.add('intro-done');
    }, 8000);
  }

  // ----- Hero slider -----
  var slides = document.querySelectorAll('.hero-slide');
  if (slides.length > 1) {
    var current = 0;
    setInterval(function () {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 5000);
  }

  // ----- FAQ accordion -----
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var btn = item.querySelector('.faq-q');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var isOpen = item.getAttribute('aria-expanded') === 'true';
      faqItems.forEach(function (other) {
        other.setAttribute('aria-expanded', 'false');
      });
      item.setAttribute('aria-expanded', !isOpen);
    });
  });

  // ----- Mobile menu -----
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      var open = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !open);
      nav.classList.toggle('is-open');
      document.body.style.overflow = open ? '' : 'hidden';
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuToggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  // ----- Smooth scroll for anchor (offset header) -----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
