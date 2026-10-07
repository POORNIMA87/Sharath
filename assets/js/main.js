/**
 * Sharath A B - Portfolio Main Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Management (with LocalStorage)
  initThemeManager();

  // 2. Navigation & Mobile Drawer
  initNavigation();

  // 3. Typing Effect (Hero Section)
  initTypewriter();

  // 4. Scroll Reveal Animations
  initScrollReveal();

  // 5. Toast Notifications
  initToast();

  // 6. Interactive Contact & Copy Handlers
  initContactActions();

  // 7. Project Category Filter
  initProjectFilter();
});

/* Theme Manager */
function initThemeManager() {
  const themeBtn = document.getElementById('themeToggleBtn');
  const themeDropdown = document.getElementById('themeDropdown');
  const savedTheme = localStorage.getItem('sharath_portfolio_theme') || 'default';

  if (savedTheme !== 'default') {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  if (themeBtn && themeDropdown) {
    themeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      themeDropdown.classList.toggle('active');
    });

    document.addEventListener('click', () => {
      themeDropdown.classList.remove('active');
    });

    themeDropdown.querySelectorAll('.theme-option').forEach(opt => {
      opt.addEventListener('click', () => {
        const selectedTheme = opt.getAttribute('data-theme-set');
        if (selectedTheme === 'default') {
          document.documentElement.removeAttribute('data-theme');
        } else {
          document.documentElement.setAttribute('data-theme', selectedTheme);
        }
        localStorage.setItem('sharath_portfolio_theme', selectedTheme);
        themeDropdown.classList.remove('active');
        showToast(`Theme switched to ${opt.innerText.trim()}`);
      });
    });
  }
}

/* Navigation & Mobile Drawer */
function initNavigation() {
  const nav = document.querySelector('.header-nav');
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileOverlay = document.getElementById('mobileOverlay');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav?.classList.add('scrolled');
    } else {
      nav?.classList.remove('scrolled');
    }
  });

  if (hamburger && mobileDrawer && mobileOverlay) {
    const toggleMenu = () => {
      hamburger.classList.toggle('open');
      mobileDrawer.classList.toggle('open');
      mobileOverlay.classList.toggle('active');
    };

    hamburger.addEventListener('click', toggleMenu);
    mobileOverlay.addEventListener('click', toggleMenu);

    mobileDrawer.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileDrawer.classList.remove('open');
        mobileOverlay.classList.remove('active');
      });
    });
  }
}

/* Typing Effect */
function initTypewriter() {
  const target = document.getElementById('typedText');
  if (!target) return;

  const words = [
    'Software Developer',
    'ASP.NET & C# Specialist',
    'Full Stack Web Developer',
    'Power BI & Data Analyst',
    'Presidency College MCA Scholar'
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      target.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 45;
    } else {
      target.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 90;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typeSpeed = 1600; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 300;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

/* Scroll Reveal */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* Toast Notifications */
function initToast() {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }
}

window.showToast = function(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <i class="fas fa-check-circle" style="color:var(--secondary)"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 20);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3200);
};

/* Contact Actions (Copy email, phone, form) */
function initContactActions() {
  document.querySelectorAll('[data-copy]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const text = el.getAttribute('data-copy');
      const label = el.getAttribute('data-copy-label') || 'Copied to clipboard';
      
      navigator.clipboard.writeText(text).then(() => {
        showToast(label, 'success');
      }).catch(() => {
        // Fallback for older browsers
        const temp = document.createElement('input');
        temp.value = text;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
        showToast(label, 'success');
      });
    });
  });

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('#senderName').value;
      const email = contactForm.querySelector('#senderEmail').value;
      const subject = contactForm.querySelector('#senderSubject').value;
      const message = contactForm.querySelector('#senderMessage').value;

      if (!name || !email || !message) {
        showToast('Please fill in all required fields.', 'warning');
        return;
      }

      // Generate direct mailto link
      const mailtoUrl = `mailto:sharathab74@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry from ' + name)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}`;
      
      showToast('Opening your email client...', 'success');
      window.location.href = mailtoUrl;
      contactForm.reset();
    });
  }
}

/* Project Filter */
function initProjectFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}
