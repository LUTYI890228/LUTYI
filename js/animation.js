document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainProductImage');
    const productDetails = document.querySelectorAll('.product-details');

    // Show first product details by default
    document.getElementById('product1').classList.add('active');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Update main image with fade effect
            mainImage.style.opacity = '0';
            setTimeout(() => {
                mainImage.src = this.querySelector('img').src;
                mainImage.style.opacity = '1';
            }, 200);

            // Update active thumbnail
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Update product details with fade effect
            const productNumber = this.dataset.product;
            
            // Hide all product details
            productDetails.forEach(detail => {
                detail.classList.remove('active');
                setTimeout(() => {
                    detail.style.display = 'none';
                }, 300);
            });

            // Show selected product details
            const selectedDetail = document.getElementById(`product${productNumber}`);
            setTimeout(() => {
                selectedDetail.style.display = 'block';
                requestAnimationFrame(() => {
                    selectedDetail.classList.add('active');
                });
            }, 300);
        });
    });

    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Update the search functionality
    const searchIcon = document.querySelector('.icon i.fa-search');
    const searchOverlay = document.querySelector('.search-overlay');
    const closeSearch = document.querySelector('.close-search');
    const searchInput = document.getElementById('searchInput');

    const openSearch = () => {
        searchOverlay.classList.add('active');
        document.body.classList.add('search-active');
        setTimeout(() => {
            searchInput.focus();
        }, 400);
    };

    const closeSearchOverlay = () => {
        searchOverlay.classList.remove('active');
        setTimeout(() => {
            document.body.classList.remove('search-active');
            searchInput.value = '';
        }, 400);
    };

    searchIcon.addEventListener('click', openSearch);
    closeSearch.addEventListener('click', closeSearchOverlay);

    // Close search on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            closeSearchOverlay();
        }
    });

    // Close search when clicking outside
    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) {
            closeSearchOverlay();
        }
    });

    // Smooth scroll functionality
    const navLinks = document.querySelectorAll('header nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                // Add active class to clicked link
                this.classList.add('active');
                
                // Smooth scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNav() {
        const scrollPosition = window.scrollY + 100; // Add offset for header

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNav);
    // Initial check for active nav link
    updateActiveNav();

    // Add this after the navLinks smooth scroll functionality
    const logo = document.querySelector('header .logo');

    logo.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Update active nav state
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[0].classList.add('active'); // Activate home link
    });

    // Add scroll progress indicator
    window.addEventListener('scroll', () => {
        const scrollProgress = document.querySelector('.scroll-progress');
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        
        const progressWidth = `${(scrolled / scrollable) * 100}%`;
        scrollProgress.style.width = progressWidth;
    });

    // Enhanced parallax effect for hero section
    const heroUpper = document.querySelector('.hero-upper');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        // Scale up the background as user scrolls
        heroUpper.style.backgroundSize = `${100 + rate}%`;
    });
});
