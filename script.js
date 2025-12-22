document.addEventListener('DOMContentLoaded', function() {
    const blobLeft = document.querySelector('.parallax-blob-left');
    const blobRight = document.querySelector('.parallax-blob-right');
    const navbar = document.querySelector('.navbar');
    const container = document.querySelector('.container');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Перевірка reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Елементи для анімації прокручуваного тексту
    const scrollingSection = document.querySelector('.scrolling-text-section');
    const scrollingLines = document.querySelectorAll('.scrolling-line');
    
    // Змінна для відстеження стану scrolling-text секції
    let scrollingTextCompleted = false;
    let scrollAnimationSpeed = 1;
    
    // Секції для активного стану навігації
    const sections = {
        invest: document.querySelector('#invest'),
        platform: document.querySelector('#platform'),
        assets: document.querySelector('#assets')
    };
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
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
        
        // Додаємо чорний фон навігації після скролу першого блоку
        if (navbar && container) {
            const containerHeight = container.offsetHeight;
            const scrollThreshold = containerHeight * 0.8; // 80% висоти контейнера
            
            if (window.scrollY > scrollThreshold) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
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
            
            // Блокуємо скрол сторінки
            document.body.classList.add('scroll-locked');
            
            // Scroll anchoring: центруємо кнопку у viewport
            setTimeout(() => {
                const rect = button.getBoundingClientRect();
                const scrollY = window.scrollY + rect.top - (window.innerHeight / 2) + (rect.height / 2);
                window.scrollTo({
                    top: scrollY,
                    behavior: prefersReducedMotion ? 'auto' : 'smooth'
                });
            }, 100);
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
    
    // Закриваємо розширені кнопки при кліку поза ними
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.product-button')) {
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
});

