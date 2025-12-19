document.addEventListener('DOMContentLoaded', function() {
    const blobLeft = document.querySelector('.parallax-blob-left');
    const blobRight = document.querySelector('.parallax-blob-right');
    const blobBlocking = document.querySelector('.parallax-blob-blocking');
    const navbar = document.querySelector('.navbar');
    const container = document.querySelector('.container');
    
    // Елементи для анімації прокручуваного тексту
    const scrollingSection = document.querySelector('.scrolling-text-section');
    const scrollingLines = document.querySelectorAll('.scrolling-line');
    const nextSection = document.querySelector('.depth-animation-section');
    
    // Елементи для анімації заглиблення
    const depthSection = document.querySelector('.depth-animation-section');
    const depthGradient = document.querySelector('.depth-gradient-overlay');
    const depthText = document.querySelector('.depth-text-container');
    const depthBlops = document.querySelectorAll('.depth-blop');
    
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
        
            // Рух вгору від стартової позиції (така ж анімація як у blop2)
            blobBlocking.style.transform = `translateY(${600 - move}px)`;
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
            
            // Ефект примагнічування до наступного блоку
            if (nextSection && scrollProgress > 0.85) {
                const lastLine = scrollingLines[scrollingLines.length - 1];
                const lastLineProgress = (scrollProgress * totalLines) - (totalLines - 1);
                
                // Перевіряємо чи останній рядок видимий
                if (lastLineProgress > 0.6 && lastLine.classList.contains('visible')) {
                    const nextSectionTop = nextSection.offsetTop;
                    const currentScrollBottom = scrolled + windowHeight;
                    const distanceToNext = nextSectionTop - currentScrollBottom;
                    
                    // Магнітний ефект: якщо наближаємось до наступного блоку
                    if (distanceToNext < 200 && distanceToNext > -50) {
                        // Додаємо плавне прискорення скролу до наступного блоку
                        const magnetZone = 200;
                        const magnetStrength = Math.max(0, (magnetZone - distanceToNext) / magnetZone);
                        
                        // Тільки якщо користувач активно скролить вниз
                        if (magnetStrength > 0.5 && distanceToNext < 50 && !window.isSnapping) {
                            const scrollDelta = window.lastScrollY ? scrolled - window.lastScrollY : 0;
                            
                            // Якщо скролимо вниз і наближаємось до наступного блоку
                            if (scrollDelta > 0) {
                                window.isSnapping = true;
                                const targetScroll = nextSectionTop - windowHeight * 0.2;
                                
                                // Плавний скрол до наступного блоку
                                requestAnimationFrame(() => {
                                    window.scrollTo({
                                        top: targetScroll,
                                        behavior: 'smooth'
                                    });
                                });
                                
                                // Скидаємо прапорець після завершення скролу
                                setTimeout(() => {
                                    window.isSnapping = false;
                                }, 1500);
                            }
                        }
                    }
                }
            }
            
            // Зберігаємо попередню позицію скролу для визначення напрямку
            window.lastScrollY = scrolled;
        }
        
        // Анімація заглиблення
        if (depthSection && depthGradient && depthText) {
            const sectionTop = depthSection.offsetTop;
            const sectionHeight = depthSection.offsetHeight;
            const windowHeight = window.innerHeight;
            
            // Початок анімації коли секція входить у viewport
            const scrollStart = sectionTop - windowHeight * 0.3;
            const scrollEnd = sectionTop + sectionHeight * 0.5;
            const scrollRange = scrollEnd - scrollStart;
            const scrollProgress = Math.max(0, Math.min(1, (scrolled - scrollStart) / scrollRange));
            
            // Швидка зміна градієнта (темнішає як заглиблення) - експоненційна крива
            const gradientOpacity = Math.pow(scrollProgress, 0.7) * 1.2; // швидко досягає максимуму
            depthGradient.style.opacity = Math.min(1, gradientOpacity);
            
            // Анімація блопів - рух вглиб та зміна масштабу
            depthBlops.forEach((blop, index) => {
                const speed = 0.4 + (index * 0.15); // різна швидкість для кожного
                const moveY = scrollProgress * 300 * speed;
                const scale = 1 + scrollProgress * 0.8; // збільшується при заглибленні
                const opacity = 0.7 - scrollProgress * 0.5; // зменшується при заглибленні
                
                // Додаємо легке обертання для ефекту глибини
                const rotation = scrollProgress * 10 * (index % 2 === 0 ? 1 : -1);
                
                blop.style.transform = `translateY(${moveY}px) scale(${scale}) rotate(${rotation}deg)`;
                blop.style.opacity = Math.max(0.15, opacity);
            });
            
            // Показуємо текст після того, як градієнт досягне певного рівня (70%)
            if (scrollProgress > 0.7) {
                const textOpacity = (scrollProgress - 0.7) / 0.3; // плавно з'являється
                depthText.style.opacity = Math.min(1, textOpacity);
                depthText.classList.add('visible');
            } else {
                depthText.style.opacity = 0;
                depthText.classList.remove('visible');
            }
        }
    }, { passive: true });
});

