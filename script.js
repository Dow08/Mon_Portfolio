// ========================================
// 📝 DONNÉES MODULAIRES - MODIFIEZ ICI
// ========================================
// 
// INSTRUCTIONS :
// - Pour AJOUTER un projet : Ajoutez un objet dans MES_PROJETS
// - Pour SUPPRIMER : Supprimez l'objet correspondant
// - Pour AJOUTER une compétence : Ajoutez dans le tableau "items"
//
// ========================================

// ----------------------------------------
// 🚀 MES PROJETS
// ----------------------------------------

const MES_PROJETS = [
    {
        titre: "Audit Sécurité Infrastructure",
        description: "Analyse complète des vulnérabilités d'une infrastructure d'entreprise avec mise en place de recommandations de remédiation et hardening.",
        tags: ["Pentest", "Nmap", "Metasploit", "Burp Suite"],
        lien: "https://github.com/Dow08",
        icone: "fas fa-search"
    },
    {
        titre: "SOC Monitoring Dashboard",
        description: "Développement d'un tableau de bord de surveillance sécurité en temps réel avec alertes personnalisées et corrélation d'événements.",
        tags: ["SIEM", "Python", "ELK Stack", "Grafana"],
        lien: "https://github.com/Dow08",
        icone: "fas fa-shield-alt"
    },
    {
        titre: "Automatisation DevSecOps",
        description: "Pipeline CI/CD sécurisé avec intégration de scans de vulnérabilités automatisés et tests de sécurité continus.",
        tags: ["GitHub Actions", "Docker", "OWASP ZAP", "SonarQube"],
        lien: "https://github.com/Dow08",
        icone: "fas fa-cogs"
    },
    {
        titre: "CTF Write-ups Collection",
        description: "Documentation détaillée des challenges CTF résolus sur TryHackMe et HackTheBox avec méthodologies d'exploitation.",
        tags: ["CTF", "Writeups", "Exploitation", "Forensics"],
        lien: "https://github.com/Dow08",
        icone: "fas fa-spider"
    }
];

// ----------------------------------------
// 🎯 MES COMPÉTENCES
// ----------------------------------------

const MES_COMPETENCES = {
    cyber: {
        titre: "Cybersécurité",
        icone: "fas fa-shield-alt",
        items: ["Pentest", "SIEM/SOC", "OWASP Top 10", "Forensics", "Threat Hunting", "Incident Response"]
    },
    dev: {
        titre: "Développement",
        icone: "fas fa-code",
        items: ["Python", "JavaScript", "SQL", "API REST", "Bash/PowerShell", "Git"]
    },
    reseau: {
        titre: "Réseau & Infrastructure",
        icone: "fas fa-network-wired",
        items: ["Linux", "Windows Server", "Active Directory", "Cloud AWS/Azure", "Docker", "Firewall"]
    }
};

// ----------------------------------------
// 📊 MES STATS
// ----------------------------------------

const MES_STATS = [
    { valeur: "99.9%", label: "Uptime" },
    { valeur: "15min", label: "Response" },
    { valeur: "200+", label: "Systems" },
    { valeur: "350+", label: "Threats" }
];

// ----------------------------------------
// 📬 INFOS CONTACT
// ----------------------------------------

const INFOS_CONTACT = {
    email: "Dow@ikmail.com",
    localisation: "France",
    disponibilite: "Ouvert aux opportunités",
    intro: "Je suis toujours ouvert aux discussions sur la cybersécurité, les opportunités de stage/alternance, ou simplement pour échanger sur les dernières techniques de sécurité offensive et défensive.",

    reseaux: [
        { nom: "GitHub", icone: "fab fa-github", url: "https://github.com/Dow08" },
        { nom: "LinkedIn", icone: "fab fa-linkedin", url: "https://www.linkedin.com/in/dorian-poncelet-1807612b5" },
        { nom: "Twitter", icone: "fab fa-twitter", url: "https://twitter.com/Dow163877" }
    ],

    ctf: [
        { nom: "TryHackMe", icone: "fas fa-flag", url: "https://tryhackme.com/p/seallia81", texte: "Voir mon profil TryHackMe" },
        { nom: "HackTheBox", icone: "fas fa-cube", url: "https://ctf.hackthebox.com/user/profile/1010141", texte: "Voir mon profil HackTheBox" }
    ]
};

// ========================================
// 🌌 ENHANCED PARTICLE SYSTEM
// ========================================

class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: null, y: null };
        this.particleCount = 100;
        this.connectionDistance = 150;
        this.mouseRadius = 100;

        this.colors = ['#00ff46', '#8b5cf6', '#3b82f6', '#00d4ff'];

        this.resize();
        this.init();
        this.animate();

        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            const color = this.colors[Math.floor(Math.random() * this.colors.length)];
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                color: color,
                baseOpacity: Math.random() * 0.5 + 0.3,
                pulseSpeed: Math.random() * 0.02 + 0.01,
                pulseOffset: Math.random() * Math.PI * 2
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        const time = Date.now() * 0.001;

        this.particles.forEach((p, i) => {
            // Mouse interaction
            if (this.mouse.x && this.mouse.y) {
                const dx = this.mouse.x - p.x;
                const dy = this.mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < this.mouseRadius) {
                    const force = (this.mouseRadius - dist) / this.mouseRadius;
                    p.vx -= (dx / dist) * force * 0.5;
                    p.vy -= (dy / dist) * force * 0.5;
                }
            }

            // Move
            p.x += p.vx;
            p.y += p.vy;

            // Friction
            p.vx *= 0.99;
            p.vy *= 0.99;

            // Random movement
            p.vx += (Math.random() - 0.5) * 0.1;
            p.vy += (Math.random() - 0.5) * 0.1;

            // Bounce
            if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

            // Pulsing opacity
            const pulse = Math.sin(time * p.pulseSpeed * 10 + p.pulseOffset);
            const opacity = p.baseOpacity + pulse * 0.2;

            // Draw particle with glow
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color.replace(')', `, ${opacity})`).replace('rgb', 'rgba').replace('#', '');

            // Convert hex to rgba for glow
            const hexToRgba = (hex, alpha) => {
                const r = parseInt(hex.slice(1, 3), 16);
                const g = parseInt(hex.slice(3, 5), 16);
                const b = parseInt(hex.slice(5, 7), 16);
                return `rgba(${r}, ${g}, ${b}, ${alpha})`;
            };

            this.ctx.fillStyle = hexToRgba(p.color, opacity);
            this.ctx.shadowBlur = 15;
            this.ctx.shadowColor = p.color;
            this.ctx.fill();
            this.ctx.shadowBlur = 0;

            // Connections
            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.connectionDistance) {
                    const lineOpacity = (1 - distance / this.connectionDistance) * 0.2;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = hexToRgba(p.color, lineOpacity);
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            }
        });

        requestAnimationFrame(() => this.animate());
    }
}

// ========================================
// 📄 PAGE NAVIGATION
// ========================================

let currentPage = 'home';

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const ctaButtons = document.querySelectorAll('[data-page]');

    function navigateToPage(pageId) {
        if (pageId === currentPage) return;

        const currentSection = document.getElementById(`page-${currentPage}`);
        const nextSection = document.getElementById(`page-${pageId}`);

        if (!nextSection) return;

        // Fade out current page
        currentSection.classList.add('fade-out');

        setTimeout(() => {
            currentSection.classList.remove('active', 'fade-out');

            // Fade in next page
            nextSection.classList.add('active');

            // Update nav
            navLinks.forEach(link => {
                link.classList.toggle('active', link.dataset.page === pageId);
            });

            currentPage = pageId;

            // Re-init reveal animations
            initScrollReveal();

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });

        }, 300);
    }

    // Nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateToPage(link.dataset.page);
        });
    });

    // CTA buttons
    ctaButtons.forEach(btn => {
        if (!btn.classList.contains('nav-link')) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                navigateToPage(btn.dataset.page);
            });
        }
    });
}

// ========================================
// 📜 SCROLL REVEAL ANIMATIONS
// ========================================

function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => {
        el.classList.remove('active');
        observer.observe(el);
    });
}

// ========================================
// 🖥️ DYNAMIC RENDERING
// ========================================

function renderStats() {
    const container = document.getElementById('hero-stats');
    if (!container) return;

    container.innerHTML = MES_STATS.map(stat => `
        <div class="hero-stat">
            <span class="stat-value">${stat.valeur}</span>
            <span class="stat-label">${stat.label}</span>
        </div>
    `).join('');
}

function renderProjects() {
    const container = document.getElementById('projects-grid');
    if (!container) return;

    container.innerHTML = MES_PROJETS.map((projet, i) => `
        <div class="project-card reveal" style="transition-delay: ${i * 0.1}s">
            <div class="project-icon">
                <i class="${projet.icone}"></i>
            </div>
            <h3 class="project-title">${projet.titre}</h3>
            <p class="project-description">${projet.description}</p>
            <div class="project-tags">
                ${projet.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <a href="${projet.lien}" target="_blank" class="project-link">
                <i class="fab fa-github"></i> Code Source
                <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    `).join('');
}

function renderSkills() {
    const container = document.getElementById('skills-grid');
    if (!container) return;

    container.innerHTML = Object.values(MES_COMPETENCES).map((cat, i) => `
        <div class="skill-category reveal" style="transition-delay: ${i * 0.1}s">
            <div class="skill-header">
                <div class="skill-icon">
                    <i class="${cat.icone}"></i>
                </div>
                <h3 class="skill-title">${cat.titre}</h3>
            </div>
            <div class="skill-items">
                ${cat.items.map(item => `<span class="skill-item">${item}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderContact() {
    const container = document.getElementById('contact-grid');
    if (!container) return;

    const info = INFOS_CONTACT;

    container.innerHTML = `
        <div class="contact-info reveal">
            <h2 class="contact-title">Restons en contact</h2>
            <p class="contact-intro">${info.intro}</p>
            
            <div class="contact-details">
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <span>${info.email}</span>
                </div>
                <div class="contact-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${info.localisation}</span>
                </div>
                <div class="contact-item">
                    <i class="fas fa-briefcase"></i>
                    <span>${info.disponibilite}</span>
                </div>
            </div>
            
            <div class="social-links">
                ${info.reseaux.map(r => `
                    <a href="${r.url}" target="_blank" class="social-btn" title="${r.nom}">
                        <i class="${r.icone}"></i>
                    </a>
                `).join('')}
            </div>
            
            <div class="ctf-section">
                <h4>CTF & Profils</h4>
                <div class="ctf-links">
                    ${info.ctf.map(c => `
                        <a href="${c.url}" target="_blank" class="ctf-link">
                            <i class="${c.icone}"></i>
                            <span>${c.texte}</span>
                            <i class="fas fa-arrow-right arrow"></i>
                        </a>
                    `).join('')}
                </div>
            </div>
        </div>
        
        <div class="contact-form-card reveal reveal-delay-1">
            <form id="contact-form">
                <div class="form-group">
                    <input type="text" name="name" placeholder="Nom complet" required>
                </div>
                <div class="form-group">
                    <input type="email" name="email" placeholder="Email" required>
                </div>
                <div class="form-group">
                    <input type="text" name="subject" placeholder="Sujet" required>
                </div>
                <div class="form-group">
                    <textarea name="message" placeholder="Votre message..." rows="5" required></textarea>
                </div>
                <button type="submit" class="form-btn">
                    <i class="fas fa-paper-plane"></i>
                    Envoyer le message
                </button>
            </form>
            <div class="form-footer">
                <i class="fas fa-shield-alt"></i>
                <span>Vos données ne seront jamais partagées avec des tiers.</span>
            </div>
        </div>
    `;

    // Form handler
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Message envoyé avec succès !');
            form.reset();
        });
    }
}

// ========================================
// 🍞 TOAST NOTIFICATION
// ========================================

function showToast(message = 'Action effectuée !') {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.querySelector('span').textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }
}

// ========================================
// ✨ CARD SPOTLIGHT EFFECT
// ========================================

function initSpotlightEffect() {
    document.querySelectorAll('.project-card, .skill-category').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// ========================================
// 🚀 INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize particle system
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        new ParticleSystem(canvas);
    }

    // Render all sections
    renderStats();
    renderProjects();
    renderSkills();
    renderContact();

    // Initialize interactions
    initNavigation();
    initScrollReveal();
    initSpotlightEffect();

    // Initial reveal
    setTimeout(() => {
        document.querySelectorAll('#page-home .reveal, #page-home .hero-stat, #page-home .hero-badge').forEach(el => {
            el.classList.add('active');
        });
    }, 100);

    console.log('🚀 Vision 2026 Multi-Page Portfolio Loaded');
});
