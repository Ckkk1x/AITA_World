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
        const WEBHOOK_URL = 'https://n8n-prod.aita.today/webhook/universal-form';

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
                const currentLang = localStorage.getItem('aita-lang') || 'en';
                submitButton.textContent = (typeof translations !== 'undefined' && translations[currentLang]) ? translations[currentLang]['contact.sending'] : 'Sending...';
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
                        source: 'aita-world-landing',
                        name: name,
                        contact: contact,
                        extra: {
                            message: message || ''
                        }
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

// ── AI Cost Calculator (public landing endpoint) ─────────────────────
function initCostCalculator() {
    const employeesSlider = document.getElementById('pl-calc-employees');
    if (!employeesSlider) return; // Section absent on other pages

    // ── DOM refs ──────────────────────────────────────────────────────
    const employeesValueEl  = document.getElementById('pl-calc-employees-value');
    const sellersSlider     = document.getElementById('pl-calc-sellers');
    const sellersValueEl    = document.getElementById('pl-calc-sellers-value');
    const callsSlider       = document.getElementById('pl-calc-calls');
    const callsValueEl      = document.getElementById('pl-calc-calls-value');
    const minutesSlider     = document.getElementById('pl-calc-minutes');
    const minutesValueEl    = document.getElementById('pl-calc-minutes-value');
    const totalEl           = document.getElementById('pl-calc-total');
    const textPerUnitEl     = document.getElementById('pl-calc-text-perunit');
    const callsPerMonthEl   = document.getElementById('pl-calc-calls-per-month');
    const minutesPerMonthEl = document.getElementById('pl-calc-minutes-per-month');
    const callCostEl        = document.getElementById('pl-calc-call-cost');
    const currencyBtns      = document.querySelectorAll('.pl-calc-currency-btn');
    const heroBlock         = document.querySelector('.pl-calc-total-block');

    // ── API base: 3-branch smart switch ───────────────────────────────
    function getApiBase() {
        const host = location.hostname;
        if (host === 'localhost' || host === '127.0.0.1') {
            return 'http://localhost:8766';         // dev CORS proxy
        } else if (host.includes('aita.today')) {
            return 'https://api.aita.today';        // staging / dev
        } else {
            return 'https://api.aita.world';        // production
        }
    }

    // ── Constants ─────────────────────────────────────────────────────
    const REQUESTS_PER_EMPLOYEE_PER_MONTH = {
        AI_CHAT: 100, CHAT_MENTION: 20, TASK_AI: 40, MULTI_AGENT: 2,
        DOCUMENT_EXTRACTION: 6, CONTRACT_AUDIT: 1, CONTRACT_IMPORT: 1.6,
        IMPORT_EXTRACTION: 10, IMPORT_LAYER_CLASSIFY: 16, IMPORT_EMBEDDING: 100,
        TELEGRAM_BOT: 10, BESS_SCENARIO_PARSE: 0.2, AI_LISTING: 1.6, STRATEGY_DRAFT: 0.2,
    };
    const DAILY_REPORT_PER_COMPANY_PER_MONTH = 30;

    const CATEGORY_PLACES = {
        chat:      ['AI_CHAT', 'CHAT_MENTION'],
        tasks:     ['TASK_AI', 'MULTI_AGENT'],
        documents: ['DOCUMENT_EXTRACTION', 'CONTRACT_AUDIT', 'CONTRACT_IMPORT'],
        imports:   ['IMPORT_EXTRACTION', 'IMPORT_LAYER_CLASSIFY', 'IMPORT_EMBEDDING'],
        misc:      ['TELEGRAM_BOT', 'BESS_SCENARIO_PARSE', 'AI_LISTING', 'STRATEGY_DRAFT', 'DAILY_REPORT'],
    };

    // ── State ─────────────────────────────────────────────────────────
    let activeCurrency = 'EUR';
    let textDebounceTimer = null;
    let callDebounceTimer = null;
    let lastTextToken = 0;
    let lastCallToken = 0;
    // Client-side response cache keyed on URL + body. Backend has its own
    // 5-min cache; this layer dedupes identical client requests so rapid
    // slider movements (back-and-forth to the same value) don't burn the
    // rate limit. Entries never expire — the page itself is short-lived.
    const responseCache = new Map();
    // Remembered last *successful* values for each section. On error we
    // keep showing these (with reduced opacity) instead of swapping in
    // big "Slow down" text that resizes the layout.
    let lastText = null;  // { totals: {chat,tasks,documents,imports,misc}, employees, currency }
    let lastCall = null;  // { totalEur, callsPerMonth, minutesPerMonth, currency }
    let lastErrorTimer = null;

    // ── Helpers ───────────────────────────────────────────────────────
    function formatMoney(value, currency) {
        const cur = currency || activeCurrency;
        return new Intl.NumberFormat('en', {
            style: 'currency',
            currency: cur,
            maximumFractionDigits: 0,
        }).format(value);
    }

    function formatMoneySmall(value, currency) {
        const cur = currency || activeCurrency;
        return new Intl.NumberFormat('en', {
            style: 'currency',
            currency: cur,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(value);
    }

    /** Build items array for a given category and employee count. */
    function deriveItemsForCategory(employees, category) {
        const emp = Math.max(0, Math.round(employees));
        const places = CATEGORY_PLACES[category] || [];
        const items = [];
        for (const place of places) {
            if (place === 'DAILY_REPORT') {
                // DAILY_REPORT is per-company, not per-employee
                items.push({ place, requests: DAILY_REPORT_PER_COMPANY_PER_MONTH });
            } else {
                const rate = REQUESTS_PER_EMPLOYEE_PER_MONTH[place];
                const requests = Math.max(0, Math.round(emp * (rate || 0)));
                if (requests > 0) items.push({ place, requests });
            }
        }
        return items;
    }

    // ── Fetch helpers (with client-side cache) ────────────────────────
    async function postWithCache(path, currency, body) {
        const cacheKey = path + '|' + currency + '|' + JSON.stringify(body);
        if (responseCache.has(cacheKey)) return responseCache.get(cacheKey);
        const API_BASE = getApiBase();
        const res = await fetch(
            API_BASE + path + '?currency=' + currency,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            }
        );
        if (!res.ok) {
            const err = new Error('http ' + res.status);
            err.status = res.status;
            throw err;
        }
        const data = await res.json();
        responseCache.set(cacheKey, data);
        return data;
    }

    async function fetchCategoryTotal(items, currency) {
        if (!items || items.length === 0) return 0;
        const data = await postWithCache(
            '/api/public/billing/estimate',
            currency,
            { mode: 'advanced', items },
        );
        return data.totalEur || 0;
    }

    function fetchTranscription(sellers, callsPerDay, avgMinutes, currency) {
        return postWithCache(
            '/api/public/billing/estimate-transcription',
            currency,
            { sellers, callsPerDay, avgMinutes },
        );
    }

    // ── UI updaters ───────────────────────────────────────────────────
    function setChipValue(id, value) {
        const el = document.querySelector('[data-id="' + id + '"]');
        if (el) el.textContent = value;
    }

    function setLoadingState(loading) {
        if (heroBlock) heroBlock.setAttribute('data-loading', loading ? 'true' : 'false');
    }

    /**
     * Show an inline, non-disruptive error notice. Does NOT change the big
     * total text — that stays at its last-known good value with a subtle
     * opacity hint. The notice auto-dismisses after 3.5s so the user knows
     * to slow down without the layout shifting under them.
     */
    function showInlineError(messageKey, fallbackText) {
        const errEl = document.getElementById('pl-calc-error');
        if (!errEl) return;
        const lang = localStorage.getItem('aita-lang') || 'en';
        const translated = (typeof translations !== 'undefined'
            && translations[lang]
            && translations[lang][messageKey])
            || fallbackText;
        errEl.textContent = translated;
        errEl.removeAttribute('hidden');
        clearTimeout(lastErrorTimer);
        lastErrorTimer = setTimeout(() => errEl.setAttribute('hidden', ''), 3500);
    }

    function classifyError(err) {
        if (err && err.status === 429) return { key: 'pl.calc.err.ratelimit', fallback: 'Slow down — try again in a moment' };
        return { key: 'pl.calc.err.offline', fallback: 'Couldn’t reach the calculator — try again later' };
    }

    /** Read a unit-suffix string in the current UI language (falls back to EN). */
    function tUnit(key, fallback) {
        const lang = localStorage.getItem('aita-lang') || 'en';
        return (typeof translations !== 'undefined'
            && translations[lang]
            && translations[lang][key]) || fallback;
    }

    /** Render combined total from cached lastText + lastCall. */
    function renderCombined() {
        const currency = activeCurrency;
        const textTotal = lastText ? sumTextTotals(lastText.totals) : 0;
        const callTotal = lastCall ? (lastCall.totalEur || 0) : 0;
        const combined = textTotal + callTotal;
        if (lastText || lastCall) {
            totalEl.textContent = formatMoney(combined, currency) + ' ' + tUnit('pl.calc.unit.perMo', '/ mo');
            totalEl.setAttribute('data-state', 'ok');
        }
    }

    function sumTextTotals(t) {
        return (t.chat || 0) + (t.tasks || 0) + (t.documents || 0) + (t.imports || 0) + (t.misc || 0);
    }

    /** Render text-section helpers (chips + per-employee). Uses lastText. */
    function renderTextSection() {
        if (!lastText) return;
        const currency = activeCurrency;
        const t = lastText.totals;
        const employees = lastText.employees;
        const textTotal = sumTextTotals(t);
        if (textPerUnitEl) {
            const perEmployee = employees > 0 ? textTotal / employees : 0;
            textPerUnitEl.textContent = formatMoneySmall(perEmployee, currency) + ' ' + tUnit('pl.calc.unit.perEmployeeMo', '/ employee / mo');
        }
        setChipValue('cat-chat',      formatMoney(t.chat || 0, currency));
        setChipValue('cat-tasks',     formatMoney(t.tasks || 0, currency));
        setChipValue('cat-documents', formatMoney(t.documents || 0, currency));
        setChipValue('cat-imports',   formatMoney(t.imports || 0, currency));
        setChipValue('cat-misc',      formatMoney(t.misc || 0, currency));
    }

    /** Render call-section helpers (callsPerMonth, minutesPerMonth, per-call). Uses lastCall. */
    function renderCallSection() {
        const currency = activeCurrency;
        if (lastCall) {
            const perCall = lastCall.callsPerMonth > 0 ? (lastCall.totalEur || 0) / lastCall.callsPerMonth : 0;
            if (callsPerMonthEl)   callsPerMonthEl.textContent   = (lastCall.callsPerMonth || 0).toLocaleString('en');
            if (minutesPerMonthEl) minutesPerMonthEl.textContent = (lastCall.minutesPerMonth || 0).toLocaleString('en');
            if (callCostEl)        callCostEl.textContent        = formatMoneySmall(perCall, currency) + ' ' + tUnit('pl.calc.unit.perCall', '/ call');
        } else {
            if (callsPerMonthEl)   callsPerMonthEl.textContent   = '—';
            if (minutesPerMonthEl) minutesPerMonthEl.textContent = '—';
            if (callCostEl)        callCostEl.textContent        = '—';
        }
    }

    // ── Update functions (split: text and call are independent) ───────

    /** Fetch only the 5 text-category breakdowns. Triggered by employees / currency. */
    async function updateText() {
        const employees = Math.max(1, +employeesSlider.value);
        const currency  = activeCurrency;
        const myToken   = ++lastTextToken;
        setLoadingState(true);

        try {
            const catKeys = ['chat', 'tasks', 'documents', 'imports', 'misc'];
            const catItems = catKeys.map(cat => deriveItemsForCategory(employees, cat));
            const totals = await Promise.all(catItems.map(items => fetchCategoryTotal(items, currency)));
            if (myToken !== lastTextToken) return; // outdated
            lastText = {
                employees,
                currency,
                totals: { chat: totals[0], tasks: totals[1], documents: totals[2], imports: totals[3], misc: totals[4] },
            };
            renderTextSection();
            renderCombined();
        } catch (err) {
            if (myToken !== lastTextToken) return;
            const e = classifyError(err);
            showInlineError(e.key, e.fallback);
            // Keep last value visible with reduced opacity (handled by data-loading attr)
        } finally {
            if (myToken === lastTextToken) setLoadingState(false);
        }
    }

    /** Fetch only call transcription. Triggered by sellers / calls / minutes / currency. */
    async function updateCall() {
        const sellers    = Math.max(0, +sellersSlider.value);
        const callsPerDay = Math.max(0, +callsSlider.value);
        const avgMinutes  = Math.max(1, +minutesSlider.value);
        const currency    = activeCurrency;
        const myToken     = ++lastCallToken;

        if (sellers === 0) {
            lastCall = null;
            renderCallSection();
            renderCombined();
            return;
        }

        setLoadingState(true);
        try {
            const res = await fetchTranscription(sellers, callsPerDay, avgMinutes, currency);
            if (myToken !== lastCallToken) return;
            lastCall = res;
            renderCallSection();
            renderCombined();
        } catch (err) {
            if (myToken !== lastCallToken) return;
            const e = classifyError(err);
            showInlineError(e.key, e.fallback);
        } finally {
            if (myToken === lastCallToken) setLoadingState(false);
        }
    }

    function scheduleText() {
        clearTimeout(textDebounceTimer);
        textDebounceTimer = setTimeout(updateText, 500);
    }

    function scheduleCall() {
        clearTimeout(callDebounceTimer);
        callDebounceTimer = setTimeout(updateCall, 500);
    }

    function scheduleAll() {
        scheduleText();
        scheduleCall();
    }

    // ── Slider + number-input wiring ──────────────────────────────────
    // Each control has a paired range slider and a <input type="number">.
    // The slider drives the number field on drag; the number field drives
    // the slider on typing, with clamping to the slider's [min, max] range
    // applied on blur / Enter so partial typing (e.g. clearing the field
    // to retype "200") isn't snapped back to min while the user is mid-edit.
    function wirePair(slider, numberEl, schedule) {
        const min = +slider.min;
        const max = +slider.max;
        // Slider → number (live)
        slider.addEventListener('input', function() {
            numberEl.value = slider.value;
            schedule();
        });
        // Number → slider (live, unclamped while typing so partial input is ok)
        numberEl.addEventListener('input', function() {
            const raw = numberEl.value.trim();
            if (raw === '') return; // user is mid-edit; don't recalc yet
            const n = parseInt(raw, 10);
            if (!Number.isFinite(n)) return;
            // Clamp slider's displayed position to its range, but don't
            // overwrite the number field — let the user finish typing.
            const clamped = Math.min(max, Math.max(min, n));
            slider.value = String(clamped);
            schedule();
        });
        // On commit (blur / Enter), normalize the number field to a valid
        // value in [min, max].
        function commit() {
            const raw = numberEl.value.trim();
            const n = parseInt(raw, 10);
            const clamped = Number.isFinite(n)
                ? Math.min(max, Math.max(min, n))
                : +slider.value;
            numberEl.value = String(clamped);
            slider.value = String(clamped);
            schedule();
        }
        numberEl.addEventListener('blur', commit);
        numberEl.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                numberEl.blur();
            }
        });
    }

    // employees → text only (call is independent of employees count)
    wirePair(employeesSlider, employeesValueEl, scheduleText);
    // sellers / calls / minutes → call only (text doesn't depend on these)
    wirePair(sellersSlider,   sellersValueEl,   scheduleCall);
    wirePair(callsSlider,     callsValueEl,     scheduleCall);
    wirePair(minutesSlider,   minutesValueEl,   scheduleCall);

    // ── Currency toggle wiring ────────────────────────────────────────
    currencyBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const currency = btn.dataset.currency;
            if (currency === activeCurrency) return;
            activeCurrency = currency;
            currencyBtns.forEach(function(b) {
                const isActive = b.dataset.currency === currency;
                b.classList.toggle('active', isActive);
                b.setAttribute('aria-selected', isActive ? 'true' : 'false');
            });
            scheduleAll();
        });
    });

    // ── Language change: re-render imperatively-built strings ─────────
    // The "/ mo", "/ employee / mo" and "/ call" suffixes are built in JS,
    // not via [data-i18n], so setLanguage() can't touch them. Re-render
    // from the cached last values when the locale switches.
    document.addEventListener('aita:langchange', function() {
        renderCombined();
        renderTextSection();
        renderCallSection();
    });

    // ── Initial render ────────────────────────────────────────────────
    updateText();
    updateCall();
}

// script.js is loaded in <head> without `defer`, so the body isn't parsed yet
// when this file runs. Wait for DOMContentLoaded so the calculator elements
// exist before we wire up listeners and fire the initial fetch.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCostCalculator);
} else {
    initCostCalculator();
}


