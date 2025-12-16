// ============================================
// МОБІЛЬНЕ МЕНЮ
// ============================================

const menuToggle = document.getElementById('menuToggle');
const menuMobile = document.getElementById('menuMobile');
let isMenuOpen = false;

// Відкриття/закриття меню
function toggleMobileMenu() {
  isMenuOpen = !isMenuOpen;
  menuToggle.classList.toggle('active', isMenuOpen);
  menuMobile.classList.toggle('active', isMenuOpen);
}

// Клік по кнопці меню
menuToggle.addEventListener('click', toggleMobileMenu);

// Закриття меню при кліку на посилання
const mobileLinks = document.querySelectorAll('.link-mobile');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 1024) {
      isMenuOpen = false;
      menuToggle.classList.remove('active');
      menuMobile.classList.remove('active');
    }
  });
});

// Закриття меню при кліку поза ним
document.addEventListener('mousedown', (event) => {
  const header = document.querySelector('.header');
  if (isMenuOpen && window.innerWidth < 1024) {
    if (!header.contains(event.target)) {
      isMenuOpen = false;
      menuToggle.classList.remove('active');
      menuMobile.classList.remove('active');
    }
  }
});

// Закриття меню при зміні розміру вікна на desktop
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024 && isMenuOpen) {
    isMenuOpen = false;
    menuToggle.classList.remove('active');
    menuMobile.classList.remove('active');
  }
});


// ============================================
// ПЛАВНА ПРОКРУТКА
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const header = document.querySelector('.header');
        const headerHeight = header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});


// ============================================
// ФОРМА ПАРТНЕРСТВА
// ============================================

const partnerForm = document.getElementById('partnerForm');

if (partnerForm) {
  partnerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Отримуємо дані форми
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };
    
    // Тут можна додати відправку на сервер
    console.log('Partner form submitted:', formData);
    
    // Показуємо повідомлення про успіх
    alert('Thank you for your interest! We will contact you soon.');
    
    // Очищаємо форму
    partnerForm.reset();
  });
}

