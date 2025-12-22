document.addEventListener('DOMContentLoaded', function() {
    const blobLeft = document.querySelector('.parallax-blob-left');
    const blobRight = document.querySelector('.parallax-blob-right');
    const blobBlocking = document.querySelector('.parallax-blob-blocking');
    const navbar = document.querySelector('.navbar');
    const container = document.querySelector('.container');
    
    // Елементи для анімації прокручуваного тексту
    const scrollingSection = document.querySelector('.scrolling-text-section');
    const scrollingLines = document.querySelectorAll('.scrolling-line');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        // Left blob: moves upward with scroll (1:1)
        if (blobLeft) {
            const speed = 0.3; // регулюєш швидкість
            const maxMove = 300; // максимально на скільки він підніметься
            const move = Math.min(window.scrollY * speed, maxMove);
        
            // Рух вгору від стартової позиції
            blobLeft.style.transform = `translateY(${-250 - move}px)`;
        }
        // Right blob: moves upward slower to overlap content when scrolling
        if (blobRight) {
            const speed = 0.3; // регулюєш швидкість
            const maxMove = 400; // максимально на скільки він підніметься
            const move = Math.min(window.scrollY * speed, maxMove);
        
            // Рух вгору від стартової позиції
            blobRight.style.transform = `translateY(${400 - move}px)`;
        }
        // Blocking blob: moves upward with scroll (same as right blob)
        if (blobBlocking) {
            const speed = 0.3; // регулюєш швидкість
            const maxMove = 600; // максимально на скільки він підніметься
            const move = Math.min(window.scrollY * speed, maxMove);
        
            // Рух вгору від стартової позиції (піднята стартова позиція)
            blobBlocking.style.transform = `translateY(${500 - move}px)`;
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
                    const translateY = (1 - opacity) * 30;
                    
                    line.style.opacity = opacity;
                    line.style.transform = `translateY(${translateY}px)`;
                    
                    if (opacity > 0.1) {
                        line.classList.add('visible');
                    }
                } else {
                    line.style.opacity = 0;
                    line.style.transform = 'translateY(30px)';
                    line.classList.remove('visible');
                }
            });
            
            // Зберігаємо попередню позицію скролу для визначення напрямку
            window.lastScrollY = scrolled;
        }
    }, { passive: true });
    
    // Обробка кліків на кнопки продуктів
    const productButtons = document.querySelectorAll('.product-button');
    
    productButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const isExpanded = button.classList.contains('expanded');
            
            // Якщо кнопка вже розширена, закриваємо її і показуємо всі інші
            if (isExpanded) {
                button.classList.remove('expanded');
                // Плавно показуємо всі інші кнопки з ефектом розмиття
                productButtons.forEach((otherButton, index) => {
                    setTimeout(() => {
                        otherButton.style.opacity = '1';
                        otherButton.style.filter = 'blur(0px)';
                        otherButton.style.transform = 'scale(1)';
                        otherButton.style.pointerEvents = 'auto';
                        otherButton.style.visibility = 'visible';
                    }, index * 50); // Послідовне з'явлення з невеликою затримкою
                });
            } else {
                // Плавно ховаємо всі інші кнопки з ефектом розмиття
                productButtons.forEach((otherButton, index) => {
                    if (otherButton !== button) {
                        setTimeout(() => {
                            otherButton.style.opacity = '0';
                            otherButton.style.filter = 'blur(8px)';
                            otherButton.style.transform = 'scale(0.95)';
                            otherButton.style.pointerEvents = 'none';
                            otherButton.style.visibility = 'hidden';
                        }, index * 30); // Послідовне зникнення
                    }
                });
                
                // Розширюємо поточну кнопку з плавною анімацією
                setTimeout(() => {
                    button.classList.add('expanded');
                }, 100);
            }
        });
    });
    
    // Закриваємо розширені кнопки при кліку поза ними
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.product-button')) {
            productButtons.forEach((button, index) => {
                setTimeout(() => {
                    button.classList.remove('expanded');
                    button.style.opacity = '1';
                    button.style.filter = 'blur(0px)';
                    button.style.transform = 'scale(1)';
                    button.style.pointerEvents = 'auto';
                    button.style.visibility = 'visible';
                }, index * 50);
            });
        }
    });
});

