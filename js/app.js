/* ==========================================================================
   KIBOKO GARAGE - CORE UI INTERACTIONS & GLOBALS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initStickyHeader();
    initMobileMenu();
    initStatsCounter();
    initBeforeAfterSlider();
    initTestimonialSlider();
    initFaqAccordion();
    initGalleryLightbox();
    initFloatingWidgets();
});

/* 1. STICKY HEADER & ACTIVE LINKS */
function initStickyHeader() {
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        // Sticky class
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Active link tracking
        let scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);
            
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    });
}

/* 2. MOBILE NAVIGATION MENU */
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
        
        // Close menu when any link or action button inside the menu list is clicked
        const menuAnchors = navMenu.querySelectorAll('a');
        menuAnchors.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });
    }
}

/* 3. STATISTICS COUNTER ANIMATION */
function initStatsCounter() {
    const statCards = document.querySelectorAll('.hero-badge-card, .about-badge');
    const counters = document.querySelectorAll('.counter-val');
    
    if (counters.length === 0) return;
    
    const runCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000; // 2 seconds
        const stepTime = 20;
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.innerText = Math.round(target);
                clearInterval(timer);
            } else {
                counter.innerText = Math.round(current);
            }
        }, stepTime);
    };
    
    // Intersection Observer to trigger counting
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const elementCounters = entry.target.querySelectorAll('.counter-val');
                elementCounters.forEach(runCounter);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // Observe containers
    const triggerContainer = document.querySelector('.hero-badges-grid');
    if (triggerContainer) observer.observe(triggerContainer);
    
    const aboutBadge = document.querySelector('.about-badge');
    if (aboutBadge) observer.observe(aboutBadge);
}

/* 4. BEFORE & AFTER IMAGE SLIDER */
function initBeforeAfterSlider() {
    const slider = document.querySelector('.showcase-slider');
    if (!slider) return;
    
    const imgAfter = slider.querySelector('.img-after');
    const handle = slider.querySelector('.slider-handle');
    
    let isDragging = false;
    
    const moveSlider = (clientX) => {
        const rect = slider.getBoundingClientRect();
        const position = clientX - rect.left;
        let percentage = (position / rect.width) * 100;
        
        if (percentage < 0) percentage = 0;
        if (percentage > 100) percentage = 100;
        
        imgAfter.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0% 100%)`;
        handle.style.left = `${percentage}%`;
    };
    
    // Mouse Events
    handle.addEventListener('mousedown', () => isDragging = true);
    window.addEventListener('mouseup', () => isDragging = false);
    
    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        moveSlider(e.clientX);
    });
    
    // Touch Events for Mobile
    handle.addEventListener('touchstart', () => isDragging = true);
    window.addEventListener('touchend', () => isDragging = false);
    
    window.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        if (e.touches.length > 0) {
            moveSlider(e.touches[0].clientX);
        }
    });
    
    // Allow clicking anywhere on the slider to transition
    slider.addEventListener('click', (e) => {
        if (e.target === handle) return;
        moveSlider(e.clientX);
    });
}

/* 5. TESTIMONIALS SLIDER */
function initTestimonialSlider() {
    const track = document.getElementById('testimonialsTrack');
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    
    if (!track || slides.length === 0) return;
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoPlayInterval;
    
    const updateSlidePosition = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    };
    
    const showNextSlide = () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlidePosition();
    };
    
    const showPrevSlide = () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    };
    
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            showNextSlide();
            resetAutoPlay();
        });
        
        prevBtn.addEventListener('click', () => {
            showPrevSlide();
            resetAutoPlay();
        });
    }
    
    const startAutoPlay = () => {
        autoPlayInterval = setInterval(showNextSlide, 6000); // change every 6s
    };
    
    const resetAutoPlay = () => {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    };
    
    startAutoPlay();
}

/* 6. FAQ ACCORDION */
function initFaqAccordion() {
    const faqHeaders = document.querySelectorAll('.faq-header');
    
    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close all items
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

/* 7. GALLERY LIGHTBOX & CATEGORY FILTER */
function initGalleryLightbox() {
    const filterBtns = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');
    
    // Gallery filter logic
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                if (category === 'all' || itemCategory === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Lightbox zoom logic
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (img && lightbox && lightboxImg) {
                lightboxImg.src = img.src;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden'; // Lock scrolling
            }
        });
    });
    
    if (lightboxClose && lightbox) {
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto'; // Restore scroll
        });
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
}

/* 8. FLOATING WIDGETS (WHATSAPP, LIVE CHAT) */
function initFloatingWidgets() {
    const chatBubble = document.getElementById('chatBubble');
    const chatWindow = document.getElementById('chatWindow');
    const chatClose = document.getElementById('chatClose');
    
    if (chatBubble && chatWindow && chatClose) {
        chatBubble.addEventListener('click', () => {
            chatWindow.classList.add('active');
            chatBubble.style.display = 'none';
        });
        
        chatClose.addEventListener('click', () => {
            chatWindow.classList.remove('active');
            chatBubble.style.display = 'flex';
        });
    }
}
