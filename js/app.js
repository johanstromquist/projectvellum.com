// Project Vellum Marketing Site
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the app
    init();
});

function init() {
    setupNavigation();
    setupSmoothScrolling();
    loadStories();
    setupSubscribeForm();
    setupScrollEffects();
}

// Navigation functionality
function setupNavigation() {
    const nav = document.querySelector('.nav-main');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        } else {
            nav.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        }

        lastScroll = currentScroll;
    });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.nav-main').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Load stories dynamically
function loadStories() {
    const storiesGrid = document.querySelector('.stories-grid');
    
    // Sample stories data - in production, this would come from an API
    const stories = [
        {
            title: "The Crimson Veil",
            description: "A tale of shadows and secrets in Victorian London",
            releaseDate: "Coming Soon",
            type: "Short Story"
        },
        {
            title: "Echoes of the Void",
            description: "A graphic novel exploring the depths of cosmic horror",
            releaseDate: "Now Available",
            type: "Graphic Novel"
        },
        {
            title: "Midnight's Children",
            description: "Where nightmares breed and dreams go to die",
            releaseDate: "Trickling Now",
            type: "Short Story"
        }
    ];

    stories.forEach(story => {
        const storyCard = createStoryCard(story);
        storiesGrid.appendChild(storyCard);
    });
}

// Create story card element
function createStoryCard(story) {
    const card = document.createElement('div');
    card.className = 'story-card';
    
    card.innerHTML = `
        <h3 class="story-title">${story.title}</h3>
        <p class="story-type">${story.type}</p>
        <p class="story-description">${story.description}</p>
        <span class="story-release">${story.releaseDate}</span>
    `;
    
    return card;
}

// Subscribe form handling
function setupSubscribeForm() {
    const form = document.querySelector('.subscribe-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        
        // In production, this would send to your backend
        console.log('Subscribe email:', email);
        
        // Show success message
        form.innerHTML = '<p class="subscribe-success">Thank you for joining the darkness. Check your email for confirmation.</p>';
    });
}

// Scroll-based animations
function setupScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section:not(.hero)');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });
}