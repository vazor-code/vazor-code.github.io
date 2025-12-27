const projects = [
    {
        title: "UptimeMonitor",
        desc: "Бот для мониторинга доступности серверов в реальном времени.",
        tech: ["Python", "Flask", "Requests"],
        link: "https://github.com/vazor-code/UptimeMonitor"
    },
    {
        title: "PassVault",
        desc: "Безопасный менеджер паролей с шифрованием AES-256.",
        tech: ["Python", "Cryptography", "SQLite"],
        link: "https://github.com/vazor-code/PassVault"
    },
    {
        title: "VPScope",
        desc: "CLI инструмент для анализа статистики Linux серверов.",
        tech: ["Python", "Psutil", "Rich"],
        link: "https://github.com/vazor-code/VPScope"
    }
];

// Функция инициализации проектов
function initProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    grid.innerHTML = projects.map(p => `
        <div class="project-card glass reveal">
            <div class="project-image">
                <i class="fas fa-project-diagram" style="font-size: 3rem; opacity: 0.5;"></i>
            </div>
            <div class="project-info">
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                <div class="project-tags">
                    ${p.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Эффект печатающегося текста в терминале
function typeTerminal() {
    const text = "System.initialize_portfolio(user='vazor')...";
    const container = document.querySelector('.terminal-loader .command');
    let i = 0;

    if (!container) return;
    container.textContent = '';

    function type() {
        if (i < text.length) {
            container.textContent += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    type();
}

// Анимация появления при скролле (Intersection Observer)
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // По желанию можно перестать наблюдать после первого появления
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    initProjects();
    typeTerminal();

    // Добавляем класс анимации для элементов
    const revealElements = document.querySelectorAll('.glass, .hero-main-content, .section-heading');
    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)";
        observer.observe(el);
    });
});

// Добавляем стили для анимации прямо в JS для удобства
const style = document.createElement('style');
style.textContent = `
    .active {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    .wave {
        display: inline-block;
        animation: wave 2.5s infinite;
        transform-origin: 70% 70%;
    }
    @keyframes wave {
        0% { transform: rotate( 0.0deg) }
        10% { transform: rotate(14.0deg) }
        20% { transform: rotate(-8.0deg) }
        30% { transform: rotate(14.0deg) }
        40% { transform: rotate(-4.0deg) }
        50% { transform: rotate(10.0deg) }
        60% { transform: rotate( 0.0deg) }
        100% { transform: rotate( 0.0deg) }
    }
`;
document.head.appendChild(style);
