// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const navContainer = document.querySelector('.nav-container');
    const navList = document.querySelector('nav ul');

    // Only set up mobile menu if a nav ul exists (lews-blog pages)
    if (navList && window.innerWidth <= 768) {
        const menuToggle = document.createElement('button');
        menuToggle.classList.add('menu-toggle');
        menuToggle.innerHTML = '☰';
        menuToggle.setAttribute('aria-label', 'Toggle navigation menu');

        const style = document.createElement('style');
        style.textContent = `
            .menu-toggle {
                display: none;
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
            }
            @media (max-width: 768px) {
                .menu-toggle { display: block; }
                nav ul {
                    display: none;
                    flex-direction: column;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: var(--bg2, #13131f);
                    padding: 1rem;
                    box-shadow: 0 4px 24px rgba(0,0,0,0.4);
                    border-bottom: 1px solid var(--border, #2a2a4e);
                }
                nav ul.show { display: flex; }
                nav ul li { margin: 0.5rem 0; }
            }
        `;
        document.head.appendChild(style);
        navContainer.insertBefore(menuToggle, navList);

        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('show');
        });

        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('show');
            });
        });
    }
});

// Add active class to current page in navigation
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Add a simple script to handle form submissions if there are any
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // Prevent default form submission for static site
            e.preventDefault();

            // If this is a contact form or similar, show a message
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Submitted!';
                submitBtn.disabled = true;

                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }
        });
    });
});

// Blog filtering functionality for main blog index
function initBlogFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const blogCards = document.querySelectorAll('.blog-card');

    if (filterButtons.length === 0) return; // Only run if filter buttons exist

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            blogCards.forEach(card => {
                const category = card.getAttribute('data-category') || '';
                
                if (filter === 'all' || category.includes(filter)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// Initialize blog filtering if on main blog page
document.addEventListener('DOMContentLoaded', function() {
    initBlogFiltering();
});

// Search functionality for blogs
function initSearch() {
    const searchInput = document.getElementById('blog-search');
    if (!searchInput) {
        // Try to initialize article search on blog pages
        const postSearchInput = document.getElementById('post-search');
        if (!postSearchInput) return;
        
        // Initialize article search
        postSearchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const articles = document.querySelectorAll('.highlight');
            
            articles.forEach(article => {
                const title = article.querySelector('h3 a').textContent.toLowerCase();
                const description = article.querySelector('p').textContent.toLowerCase();
                const tags = Array.from(article.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
                
                const matches = title.includes(searchTerm) || 
                              description.includes(searchTerm) || 
                              tags.some(tag => tag.includes(searchTerm));
                
                if (matches) {
                    article.style.display = 'block';
                } else {
                    article.style.display = 'none';
                }
            });
        });
        return;
    }

    // Main blog search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const blogCards = document.querySelectorAll('.blog-card');
        
        blogCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
            
            const matches = title.includes(searchTerm) || 
                          description.includes(searchTerm) || 
                          tags.some(tag => tag.includes(searchTerm));
            
            if (matches) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
}

// Initialize search if on any page that has search
document.addEventListener('DOMContentLoaded', function() {
    initSearch();
});