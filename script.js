const projects = [
    {
        title: "UptimeMonitor",
        desc: "Бот для мониторинга доступности серверов в реальном времени.",
        tech: ["Python", "Flask", "Requests"],
        link: "#"
    },
    {
        title: "PassVault",
        desc: "Безопасный менеджер паролей с шифрованием AES-256.",
        tech: ["Python", "Cryptography", "SQLite"],
        link: "#"
    },
    {
        title: "VPScope",
        desc: "CLI инструмент для анализа статистики Linux серверов.",
        tech: ["Python", "Psutil", "Rich"],
        link: "#"
    }
];

function loadProjects() {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = projects.map(p => `
        <div class="stat-card" style="text-align: left; margin-bottom: 20px;">
            <h3 style="color: #3fb950; margin-bottom: 10px;">${p.title}</h3>
            <p style="font-size: 14px; color: #8b949e; margin-bottom: 15px;">${p.desc}</p>
            <div class="skill-tags">
                ${p.tech.map(t => `<span class="skill-tag">${t}</span>`).join('')}
            </div>
            <a href="${p.link}" style="display: block; margin-top: 15px; color: white; text-decoration: none; font-size: 13px;">View Source →</a>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', loadProjects);
