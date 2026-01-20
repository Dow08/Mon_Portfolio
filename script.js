// Matrix effect
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

const chars = '01'.split('');
const fontSize = 14;
let columns = 0;
let drops = [];

function initDrops() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = canvas.width / fontSize;
    drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -50);
    }
}

initDrops();

window.addEventListener('resize', initDrops);

function drawMatrix() {
    ctx.fillStyle = 'rgba(15, 15, 17, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(0, 255, 70, 0.3)';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

// Smart Copy Feature
const email = "Dow@ikmail.com";
const copyBtn = document.getElementById('copy-email');
const toast = document.getElementById('toast');

if (copyBtn) {
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(email).then(() => {
            showToast();
        }).catch(err => {
            console.error('Failed to copy: ', err); // Error handling
        });
    });
}

function showToast() {
    if (toast) { // Safety check
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Automatically target important elements
const elementsToAnimate = document.querySelectorAll('.card, .card-header > *, .bio, .stat-card, .btn-container > *, .social-link, .journey');

elementsToAnimate.forEach((el, index) => {
    el.classList.add('reveal');
    // Staggered delay for a nice cascading effect
    el.style.transitionDelay = `${index * 50}ms`;
    observer.observe(el);
});
