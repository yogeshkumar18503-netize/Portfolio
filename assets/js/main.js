/**
 * S. YOGESH KUMAR - DATA ANALYST PORTFOLIO
 * Main Interactive Logic & Visual Effects
 */

document.addEventListener('DOMContentLoaded', () => {
  initParticleBackground();
  initTypingEffect();
  initScrollAnimations();
  initCounters();
  initCharts();
  initSkillFilters();
  initCertFilters();
  initNavbarScroll();
  initMobileMenu();
  initResumeModal();
  initContactForm();
  initBackToTop();
});

/* ==========================================================================
   1. Interactive Data Particle Network
   ========================================================================== */
function initParticleBackground() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor(window.innerWidth / 22), 55);

  const mouse = { x: null, y: null, radius: 120 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 1;
      this.baseX = this.x;
      this.baseY = this.y;
      this.density = Math.random() * 20 + 1;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.color = Math.random() > 0.5 ? 'rgba(56, 189, 248, ' : 'rgba(99, 102, 241, ';
    }

    draw() {
      ctx.fillStyle = this.color + '0.6)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx = -this.vx;
      if (this.y < 0 || this.y > height) this.vy = -this.vy;

      // Mouse interaction
      if (mouse.x != null && mouse.y != null) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = forceDirectionX * force * 2.5;
          const directionY = forceDirectionY * force * 2.5;
          this.x -= directionX;
          this.y -= directionY;
        }
      }
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].draw();
      particles[i].update();

      for (let j = i; j < particles.length; j++) {
        let dx = particles[i].x - particles[j].x;
        let dy = particles[i].y - particles[j].y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 110) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.15 - distance / 1100})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.closePath();
        }
      }
    }
    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   2. Typing Animation
   ========================================================================== */
function initTypingEffect() {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;

  const titles = [
    'Data Analyst',
    'Python & SQL Developer',
    'Business Intelligence Analyst',
    'Data Visualization Specialist',
    'Financial & Operations Analyst'
  ];

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 100;

  function type() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      typingElement.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = 45;
    } else {
      typingElement.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 95;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      isDeleting = true;
      typingDelay = 1800; // Pause at full word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      typingDelay = 400; // Pause before typing new word
    }

    setTimeout(type, typingDelay);
  }

  type();
}

/* ==========================================================================
   3. Scroll Reveal & Intersection Observers
   ========================================================================== */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   4. Animated KPI Counters
   ========================================================================== */
function initCounters() {
  const counterElements = document.querySelectorAll('.counter-val');

  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = parseFloat(entry.target.getAttribute('data-target'));
          const isDecimal = entry.target.getAttribute('data-decimal') === 'true';
          const suffix = entry.target.getAttribute('data-suffix') || '';
          const duration = 1600;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = easeProgress * target;

            if (isDecimal) {
              entry.target.textContent = currentVal.toFixed(1) + suffix;
            } else {
              entry.target.textContent = Math.floor(currentVal) + suffix;
            }

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              if (isDecimal) {
                entry.target.textContent = target.toFixed(1) + suffix;
              } else {
                entry.target.textContent = target + suffix;
              }
            }
          }

          requestAnimationFrame(updateCounter);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counterElements.forEach((counter) => counterObserver.observe(counter));
}

/* ==========================================================================
   5. Chart.js Interactive Dashboards
   ========================================================================== */
function initCharts() {
  // Chart 1: Library Management System - Category Circulation
  const ctxLoan = document.getElementById('libraryLoanChart');
  if (ctxLoan && typeof Chart !== 'undefined') {
    new Chart(ctxLoan, {
      type: 'bar',
      data: {
        labels: ['Data & Analytics', 'Finance & Commerce', 'Computer Science', 'Management', 'Literature'],
        datasets: [
          {
            label: 'Active Borrowed',
            data: [42, 38, 55, 30, 22],
            backgroundColor: 'rgba(56, 189, 248, 0.75)',
            borderColor: '#38BDF8',
            borderWidth: 1,
            borderRadius: 6
          },
          {
            label: 'Returned on Time',
            data: [120, 95, 140, 85, 60],
            backgroundColor: 'rgba(16, 185, 129, 0.65)',
            borderColor: '#10B981',
            borderWidth: 1,
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: '#94A3B8',
              font: { family: 'Inter', size: 12 }
            }
          },
          tooltip: {
            backgroundColor: 'rgba(15, 23, 42, 0.95)',
            titleColor: '#F8FAFC',
            bodyColor: '#CBD5E1',
            borderColor: 'rgba(56, 189, 248, 0.3)',
            borderWidth: 1
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#94A3B8', font: { family: 'Inter', size: 11 } }
          },
          y: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#94A3B8', font: { family: 'Inter', size: 11 } }
          }
        }
      }
    });
  }

  // Chart 2: Logistics Operations Throughput (DBGT Summer Internship context)
  const ctxLogistics = document.getElementById('logisticsChart');
  if (ctxLogistics && typeof Chart !== 'undefined') {
    new Chart(ctxLogistics, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
        datasets: [
          {
            label: 'Tariff Audit Compliance (%)',
            data: [94.5, 96.2, 97.8, 98.4, 98.9, 99.2, 99.8, 100.0],
            borderColor: '#34D399',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            fill: true,
            tension: 0.35,
            borderWidth: 2,
            pointBackgroundColor: '#10B981',
            pointBorderColor: '#FFFFFF',
            pointHoverRadius: 6
          },
          {
            label: 'Cargo Handling Units (x100 TEU)',
            data: [68, 72, 75, 82, 80, 88, 92, 95],
            borderColor: '#6366F1',
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            fill: true,
            tension: 0.35,
            borderWidth: 2,
            pointBackgroundColor: '#6366F1',
            pointBorderColor: '#FFFFFF',
            pointHoverRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: '#94A3B8',
              font: { family: 'Inter', size: 12 }
            }
          },
          tooltip: {
            backgroundColor: 'rgba(15, 23, 42, 0.95)',
            titleColor: '#F8FAFC',
            bodyColor: '#CBD5E1',
            borderColor: 'rgba(99, 102, 241, 0.3)',
            borderWidth: 1
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#94A3B8', font: { family: 'Inter', size: 11 } }
          },
          y: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#94A3B8', font: { family: 'Inter', size: 11 } }
          }
        }
      }
    });
  }
}

/* ==========================================================================
   6. Skill Filter Tabs
   ========================================================================== */
function initSkillFilters() {
  const filterBtns = document.querySelectorAll('.skill-filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      skillCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* ==========================================================================
   7. Certification Filter Tabs
   ========================================================================== */
function initCertFilters() {
  const filterBtns = document.querySelectorAll('.cert-filter-btn');
  const certCards = document.querySelectorAll('.cert-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      certCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 10);
        } else {
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* ==========================================================================
   8. Navbar Scroll State & Active Links
   ========================================================================== */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active link highlighting
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   9. Mobile Menu Navigation
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });

  links.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

/* ==========================================================================
   10. Resume Viewer Modal
   ========================================================================== */
function initResumeModal() {
  const modal = document.getElementById('resumeModal');
  const openBtns = document.querySelectorAll('.open-resume-modal');
  const closeBtn = document.querySelector('.modal-close-btn');

  if (!modal) return;

  openBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
      document.body.style.overflow = 'auto';
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
      document.body.style.overflow = 'auto';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      modal.classList.remove('open');
      document.body.style.overflow = 'auto';
    }
  });
}

/* ==========================================================================
   11. Contact Form Simulation & Feedback
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const statusMsg = document.getElementById('formStatusMsg');

  if (!form || !statusMsg) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('senderName').value.trim();
    const email = document.getElementById('senderEmail').value.trim();
    const message = document.getElementById('senderMessage').value.trim();

    if (!name || !email || !message) {
      alert('Please complete all required fields.');
      return;
    }

    // Present success message
    statusMsg.className = 'form-status-msg success';
    statusMsg.textContent = `Thank you, ${name}! Your message has been prepared. Opening your email client to dispatch to yogeshkumar18503@gmail.com...`;

    // Construct mailto link
    setTimeout(() => {
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:yogeshkumar18503@gmail.com?subject=${subject}&body=${body}`;
    }, 1200);

    form.reset();
  });
}

/* ==========================================================================
   12. Back to Top Button
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
