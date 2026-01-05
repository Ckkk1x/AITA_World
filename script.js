// Прокрутка на початок сторінки при завантаженні
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});

// Також прокручуємо на початок при завантаженні сторінки
window.addEventListener('load', function() {
    // Якщо в URL є hash, видаляємо його
    if (window.location.hash) {
        window.history.replaceState(null, null, ' ');
    }
    // Прокручуємо на початок
    window.scrollTo(0, 0);
});

// Додаткова перевірка при DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // Прокручуємо на початок сторінки
    window.scrollTo(0, 0);
    
    const blobLeft = document.querySelector('.parallax-blob-left');
    const blobRight = document.querySelector('.parallax-blob-right');
    const navbar = document.querySelector('.navbar');
    const container = document.querySelector('.container');
    const navLinks = document.querySelectorAll('.nav-link');
    const logoLink = document.querySelector('#logo-link');
    
    // Ініціалізуємо навігацію як прозору на початку
    if (navbar) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        navbar.classList.remove('scrolled');
    }
    
    // Перевірка reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Функція для плавної прокрутки на початок
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
    }
    
    // Робимо функцію глобальною для використання в HTML
    window.scrollToTop = scrollToTop;
    
    // Обробка кліку на логотип
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToTop();
        });
    }
    
    // Елементи для анімації прокручуваного тексту
    const scrollingSection = document.querySelector('.scrolling-text-section');
    const scrollingLines = document.querySelectorAll('.scrolling-line');
    
    // Змінна для відстеження стану scrolling-text секції
    let scrollingTextCompleted = false;
    let scrollAnimationSpeed = 1;
    
    // Секції для активного стану навігації
    const sections = {
        invest: document.querySelector('#invest'),
        assets: document.querySelector('#assets')
    };
    
    // Кнопка повернення на початок
    const scrollToTopButton = document.getElementById('scroll-to-top');
    
    // Показуємо/приховуємо кнопку при скролі
    function toggleScrollToTopButton() {
        if (scrollToTopButton) {
            if (window.scrollY > 300) {
                scrollToTopButton.classList.add('visible');
            } else {
                scrollToTopButton.classList.remove('visible');
            }
        }
    }
    
    // Обробник кліку на кнопку повернення на початок
    if (scrollToTopButton) {
        scrollToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToTop();
        });
        
        // Перевіряємо поточну позицію скролу при завантаженні
        toggleScrollToTopButton();
    }
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        // Показуємо/приховуємо кнопку повернення на початок
        toggleScrollToTopButton();
        
        // Left blob: moves upward with scroll (1:1)
        if (blobLeft && !prefersReducedMotion) {
            const speed = 0.3; // регулюєш швидкість
            const maxMove = 300; // максимально на скільки він підніметься
            const move = Math.min(window.scrollY * speed, maxMove);
        
            // Рух вгору від стартової позиції
            blobLeft.style.transform = `translateY(${-250 - move}px)`;
        }
        // Right blob: moves upward slower to overlap content when scrolling
        if (blobRight && !prefersReducedMotion) {
            const speed = 0.3; // регулюєш швидкість
            const maxMove = 400; // максимально на скільки він підніметься
            const move = Math.min(window.scrollY * speed, maxMove);
        
            // Рух вгору від стартової позиції
            blobRight.style.transform = `translateY(${400 - move}px)`;
        }
        
        // Додаємо плавний чорний фон навігації коли вона наїзжає на хедер (контейнер з логотипом)
        if (navbar) {
            const currentScroll = window.scrollY || window.pageYOffset || 0;
            
            if (container) {
                const navbarHeight = navbar.offsetHeight;
                const containerTop = container.offsetTop;
                const containerHeight = container.offsetHeight;
                
                // Визначаємо, коли навігація починає перекривати контейнер
                const overlapStart = containerTop;
                const overlapEnd = containerTop + containerHeight;
                
                // Якщо ми на початку сторінки або вище контейнера - повністю прозорий фон
                if (currentScroll === 0 || currentScroll + navbarHeight < overlapStart) {
                    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
                    navbar.classList.remove('scrolled');
                }
                // Якщо навігація перекриває контейнер
                else if (currentScroll + navbarHeight >= overlapStart && currentScroll < overlapEnd) {
                    // Обчислюємо прогрес перекриття (0 до 1)
                    const overlapProgress = Math.min(1, Math.max(0, 
                        (currentScroll + navbarHeight - overlapStart) / (containerHeight * 0.3)
                    ));
                    
                    // Встановлюємо прозорість фону на основі прогресy
                    const bgOpacity = overlapProgress;
                    navbar.style.backgroundColor = `rgba(0, 0, 0, ${bgOpacity})`;
                    if (bgOpacity > 0.01) {
                        navbar.classList.add('scrolled');
                    } else {
                        navbar.classList.remove('scrolled');
                    }
                } else {
                    // Повністю чорний фон після контейнера
                    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                    navbar.classList.add('scrolled');
                }
            } else {
                // Якщо контейнер не знайдено, використовуємо просту логіку
                if (currentScroll > 100) {
                    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                    navbar.classList.add('scrolled');
                } else if (currentScroll > 0) {
                    // Плавний перехід
                    const opacity = Math.min(0.8, currentScroll / 100);
                    navbar.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
                    navbar.classList.add('scrolled');
                } else {
                    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
                    navbar.classList.remove('scrolled');
                }
            }
        }
        
        // Активний стан навігації по скролу
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                const sectionId = href.substring(1);
                const section = sections[sectionId];
                if (section) {
                    const rect = section.getBoundingClientRect();
                    const isInView = rect.top <= 200 && rect.bottom >= 200;
                    if (isInView) {
                        link.setAttribute('aria-current', 'true');
                        link.classList.add('active');
                    } else {
                        link.removeAttribute('aria-current');
                        link.classList.remove('active');
                    }
                }
            }
        });
        
        // Анімація прокручуваного тексту
        if (scrollingSection && scrollingLines.length > 0) {
            const sectionTop = scrollingSection.offsetTop;
            const sectionHeight = scrollingSection.offsetHeight;
            const windowHeight = window.innerHeight;
            
            // Початок анімації коли секція входить у viewport
            const scrollStart = sectionTop - windowHeight * 0.5;
            const scrollEnd = sectionTop + sectionHeight * 0.8;
            const scrollRange = scrollEnd - scrollStart;
            const scrollProgress = Math.max(0, Math.min(1, (scrolled - scrollStart) / scrollRange));
            
            // Перевірка чи scrolling-text завершено
            if (scrollProgress >= 0.95 && !scrollingTextCompleted) {
                scrollingTextCompleted = true;
                // Контентна пауза: сповільнюємо scroll-trigger анімації
                scrollAnimationSpeed = 0.5;
                setTimeout(() => {
                    scrollAnimationSpeed = 1;
                }, 2000);
            }
            
            // Кількість рядків
            const totalLines = scrollingLines.length;
            
            // Показуємо рядки поступово при скролі з прискоренням під кінець
            scrollingLines.forEach((line, index) => {
                // Використовуємо експоненційну криву для прискорення під кінець
                const acceleratedProgress = Math.pow(scrollProgress, 0.7); // прискорення під кінець
                const lineProgress = (acceleratedProgress * totalLines * 1.2) - index;
                
                if (lineProgress > 0) {
                    // Швидше з'являються під кінець
                    const opacity = Math.min(1, lineProgress * 1.5);
                    const translateY = prefersReducedMotion ? 0 : (1 - opacity) * 30;
                    
                    line.style.opacity = opacity;
                    if (!prefersReducedMotion) {
                        line.style.transform = `translateY(${translateY}px)`;
                    }
                    
                    if (opacity > 0.1) {
                        line.classList.add('visible');
                    }
                } else {
                    line.style.opacity = 0;
                    if (!prefersReducedMotion) {
                        line.style.transform = 'translateY(30px)';
                    }
                    line.classList.remove('visible');
                }
            });
            
            // Зберігаємо попередню позицію скролу для визначення напрямку
            window.lastScrollY = scrolled;
        }
        
        // Анімація появи етапів "HOW AITA WORKS"
        const howItWorksSection = document.querySelector('.how-it-works-section');
        const howItWorksSteps = document.querySelectorAll('.how-it-works-step');
        
        if (howItWorksSection && howItWorksSteps.length > 0) {
            const sectionTop = howItWorksSection.offsetTop;
            const sectionHeight = howItWorksSection.offsetHeight;
            const windowHeight = window.innerHeight;
            
            // Початок анімації коли секція входить у viewport
            const scrollStart = sectionTop - windowHeight * 0.7;
            const scrollEnd = sectionTop + sectionHeight * 0.5;
            const scrollRange = scrollEnd - scrollStart;
            const scrollProgress = Math.max(0, Math.min(1, (scrolled - scrollStart) / scrollRange));
            
            // Показуємо етапи поступово при скролі
            howItWorksSteps.forEach((step, index) => {
                // Кожен етап з'являється з невеликою затримкою
                const stepProgress = Math.max(0, Math.min(1, (scrollProgress * howItWorksSteps.length * 1.2) - index));
                
                if (stepProgress > 0) {
                    const opacity = Math.min(1, stepProgress * 1.5);
                    const translateY = prefersReducedMotion ? 0 : (1 - opacity) * 30;
                    
                    step.style.opacity = opacity;
                    if (!prefersReducedMotion) {
                        step.style.transform = `translateY(${translateY}px)`;
                    }
                    
                    if (opacity > 0.1) {
                        step.classList.add('visible');
                    }
                } else {
                    step.style.opacity = 0;
                    if (!prefersReducedMotion) {
                        step.style.transform = 'translateY(30px)';
                    }
                    step.classList.remove('visible');
                }
            });
        }
        
        // Анімація прокручуваного тексту для about-aita-section
        const aboutAitaSection = document.querySelector('.about-aita-section');
        const aboutAitaLines = aboutAitaSection ? aboutAitaSection.querySelectorAll('.scrolling-line') : [];
        
        if (aboutAitaSection && aboutAitaLines.length > 0) {
            const sectionTop = aboutAitaSection.offsetTop;
            const sectionHeight = aboutAitaSection.offsetHeight;
            const windowHeight = window.innerHeight;
            
            // Початок анімації коли секція входить у viewport
            const scrollStart = sectionTop - windowHeight * 0.5;
            const scrollEnd = sectionTop + sectionHeight * 0.8;
            const scrollRange = scrollEnd - scrollStart;
            const scrollProgress = Math.max(0, Math.min(1, (scrolled - scrollStart) / scrollRange));
            
            // Кількість рядків
            const totalLines = aboutAitaLines.length;
            
            // Показуємо рядки поступово при скролі з прискоренням під кінець
            aboutAitaLines.forEach((line, index) => {
                // Використовуємо експоненційну криву для прискорення під кінець
                const acceleratedProgress = Math.pow(scrollProgress, 0.7); // прискорення під кінець
                const lineProgress = (acceleratedProgress * totalLines * 1.2) - index;
                
                if (lineProgress > 0) {
                    // Швидше з'являються під кінець
                    const opacity = Math.min(1, lineProgress * 1.5);
                    const translateY = prefersReducedMotion ? 0 : (1 - opacity) * 30;
                    
                    line.style.opacity = opacity;
                    if (!prefersReducedMotion) {
                        line.style.transform = `translateY(${translateY}px)`;
                    }
                    
                    if (opacity > 0.1) {
                        line.classList.add('visible');
                    }
                } else {
                    line.style.opacity = 0;
                    if (!prefersReducedMotion) {
                        line.style.transform = 'translateY(30px)';
                    }
                    line.classList.remove('visible');
                }
            });
        }
    }, { passive: true });
    
    // Функція закриття всіх product-кнопок
    function closeAllProducts() {
        productButtons.forEach((button, index) => {
            setTimeout(() => {
                button.classList.remove('expanded');
                button.setAttribute('aria-expanded', 'false');
                button.style.opacity = '1';
                button.style.filter = 'blur(0px)';
                button.style.transform = 'scale(1)';
                button.style.pointerEvents = 'auto';
                button.style.visibility = 'visible';
                
                // Видаляємо клас з рядка
                const row = button.closest('.products-row');
                if (row) {
                    row.classList.remove('has-expanded');
                }
            }, index * 50);
        });
        document.body.classList.remove('scroll-locked');
    }
    
    // Функція відкриття product-кнопки
    function openProduct(button) {
        // Плавно ховаємо всі інші кнопки з ефектом розмиття
        productButtons.forEach((otherButton, index) => {
            if (otherButton !== button) {
                setTimeout(() => {
                    otherButton.style.opacity = '0';
                    if (!prefersReducedMotion) {
                        otherButton.style.filter = 'blur(8px)';
                    }
                    otherButton.style.transform = 'scale(0.95)';
                    otherButton.style.pointerEvents = 'none';
                    otherButton.style.visibility = 'hidden';
                }, index * 30);
            }
        });
        
        // Розширюємо поточну кнопку з плавною анімацією
        setTimeout(() => {
            button.classList.add('expanded');
            button.setAttribute('aria-expanded', 'true');
            
            // Додаємо клас до рядка для центрування
            const row = button.closest('.products-row');
            if (row) {
                row.classList.add('has-expanded');
            }
            
            // Блокуємо скрол сторінки (тільки на десктопі)
            const isMobile = window.innerWidth <= 768;
            if (!isMobile) {
                document.body.classList.add('scroll-locked');
            }
            
            // Scroll anchoring: центруємо кнопку у viewport
            setTimeout(() => {
                const rect = button.getBoundingClientRect();
                const isMobile = window.innerWidth <= 768;
                // На мобільних просто скролимо до кнопки, не центруємо
                if (isMobile) {
                    button.scrollIntoView({
                        behavior: prefersReducedMotion ? 'auto' : 'smooth',
                        block: 'start'
                    });
                } else {
                    const scrollY = window.scrollY + rect.top - (window.innerHeight / 2) + (rect.height / 2);
                    window.scrollTo({
                        top: scrollY,
                        behavior: prefersReducedMotion ? 'auto' : 'smooth'
                    });
                }
            }, isMobile ? 200 : 100);
        }, 100);
    }
    
    // Обробка кліків на кнопки продуктів з debounce
    const productButtons = document.querySelectorAll('.product-button');
    let lastClickTime = 0;
    const debounceDelay = 350;

    productButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Debounce: запобігаємо випадковому подвійному кліку
            const now = Date.now();
            if (now - lastClickTime < debounceDelay) {
                return;
            }
            lastClickTime = now;
            
            const isExpanded = button.classList.contains('expanded');
            
            // Якщо кнопка вже розширена, закриваємо її і показуємо всі інші
            if (isExpanded) {
                closeAllProducts();
            } else {
                openProduct(button);
            }
        });
    });
    
    // ESC для закриття product-кнопки
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const expandedButton = document.querySelector('.product-button.expanded');
            if (expandedButton) {
                closeAllProducts();
            }
        }
    });
    
    // Закриваємо розширені кнопки при кліку поза ними (тільки на десктопі)
    document.addEventListener('click', function(e) {
        // На мобільних не закриваємо при кліку поза кнопкою, щоб уникнути випадкового закриття
        const isMobile = window.innerWidth <= 768;
        if (!isMobile && !e.target.closest('.product-button')) {
            const expandedButton = document.querySelector('.product-button.expanded');
            if (expandedButton) {
                closeAllProducts();
            }
        }
    });
    
    // Scroll indicator (логічний, для тестування)
    let lastScrollTime = Date.now();
    let scrollIndicatorTimeout;
    
    window.addEventListener('scroll', function() {
        lastScrollTime = Date.now();
        clearTimeout(scrollIndicatorTimeout);
        
        scrollIndicatorTimeout = setTimeout(() => {
            const timeSinceScroll = Date.now() - lastScrollTime;
            if (timeSinceScroll >= 2000) {
                // Користувач не скролив 2+ секунди
                document.body.setAttribute('data-scroll-paused', 'true');
                if (console && console.log) {
                    console.log('[UX Hint] User paused scrolling for 2+ seconds');
                }
            } else {
                document.body.removeAttribute('data-scroll-paused');
            }
        }, 2000);
    }, { passive: true });
    
    // Обробка контактної форми
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const WEBHOOK_URL = 'https://dmekhed.app.n8n.cloud/webhook/3830db74-e1bc-4c2d-bf18-57396c3df377';
        
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const contact = formData.get('contact');
            const message = formData.get('message');
            
            // Отримуємо кнопку відправки для показу стану завантаження
            const submitButton = contactForm.querySelector('.form-submit');
            const originalButtonText = submitButton ? submitButton.textContent : 'Submit';
            
            // Показуємо стан завантаження
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';
                submitButton.style.opacity = '0.6';
            }
            
            // Перенаправляємо на сторінку подяки після спроби відправки
            const thankYouUrl = 'thank-you.html' + (name ? '?name=' + encodeURIComponent(name) : '');
            
            try {
                // Відправляємо POST запит на webhook
                const response = await fetch(WEBHOOK_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: name,
                        contact: contact,
                        message: message || ''
                    })
                });
                
                // Логуємо результат для діагностики
                console.log('Form submission response status:', response.status);
                
                // Перенаправляємо на сторінку подяки незалежно від відповіді
                // (webhook може прийняти дані навіть якщо відповідь не ідеальна)
                window.location.replace(thankYouUrl);
                
            } catch (error) {
                console.error('Error submitting form:', error);
                
                // Навіть при помилці перенаправляємо на сторінку подяки
                // (на випадок, якщо дані все ж відправилися до webhook)
                window.location.replace(thankYouUrl);
            }
        });
    }
    
    // Бургер-меню функціонал
    const burgerMenu = document.getElementById('burger-menu');
    const navbarMenu = document.getElementById('navbar-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    
    if (burgerMenu && navbarMenu && menuOverlay) {
        const navLinks = navbarMenu.querySelectorAll('.nav-link, .nav-button');
        
        function toggleMenu() {
            const isActive = burgerMenu.classList.contains('active');
            
            if (isActive) {
                // Закриваємо меню
                burgerMenu.classList.remove('active');
                burgerMenu.setAttribute('aria-expanded', 'false');
                navbarMenu.classList.remove('active');
                menuOverlay.classList.remove('active');
                document.body.classList.remove('menu-open');
            } else {
                // Відкриваємо меню
                burgerMenu.classList.add('active');
                burgerMenu.setAttribute('aria-expanded', 'true');
                navbarMenu.classList.add('active');
                menuOverlay.classList.add('active');
                document.body.classList.add('menu-open');
            }
        }
        
        function closeMenu() {
            burgerMenu.classList.remove('active');
            burgerMenu.setAttribute('aria-expanded', 'false');
            navbarMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
        
        // Обробка кліку на бургер-меню
        burgerMenu.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });
        
        // Закриваємо меню при кліку на overlay
        menuOverlay.addEventListener('click', function() {
            closeMenu();
        });
        
        // Закриваємо меню при кліку на посилання
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                closeMenu();
            });
        });
        
        // Закриваємо меню при кліку поза меню
        document.addEventListener('click', function(e) {
            if (navbarMenu.classList.contains('active')) {
                if (!navbarMenu.contains(e.target) && !burgerMenu.contains(e.target) && !menuOverlay.contains(e.target)) {
                    closeMenu();
                }
            }
        });
        
        // Закриваємо меню при натисканні ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navbarMenu.classList.contains('active')) {
                closeMenu();
            }
        });
        
        // Закриваємо меню при зміні розміру вікна (якщо переходимо на десктоп)
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && navbarMenu.classList.contains('active')) {
                closeMenu();
            }
        });
    }
});


