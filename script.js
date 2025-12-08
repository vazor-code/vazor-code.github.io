// Projects data
const projects = [
    {
        title: "Automation Bot",
        description: "Python bot that automates daily tasks and workflows",
        tech: ["Python", "Selenium", "Requests", "SQLite"],
        github: "https://github.com/vazor-code/automation-bot",
        live: "#",
        status: "Active"
    },
    {
        title: "Web App with Flask",
        description: "Full-stack web application with user authentication",
        tech: ["Python", "Flask", "HTML/CSS", "MySQL"],
        github: "https://github.com/vazor-code/flask-app",
        live: "#",
        status: "Completed"
    },
    {
        title: "CLI Tool",
        description: "Command-line interface for developer productivity",
        tech: ["Python", "Click", "API", "JSON"],
        github: "https://github.com/vazor-code/cli-tool",
        live: "#",
        status: "In Progress"
    },
    {
        title: "Game Automation",
        description: "Scripts for automating repetitive game tasks",
        tech: ["Python", "PyAutoGUI", "OpenCV", "NumPy"],
        github: "https://github.com/vazor-code/game-automation",
        live: "#",
        status: "Active"
    },
    {
        title: "API Wrapper",
        description: "Python wrapper for popular web APIs",
        tech: ["Python", "Requests", "AsyncIO", "Pydantic"],
        github: "https://github.com/vazor-code/api-wrapper",
        live: "#",
        status: "Completed"
    },
    {
        title: "Docker Configs",
        description: "Docker configurations for various projects",
        tech: ["Docker", "Docker Compose", "Linux", "Python"],
        github: "https://github.com/vazor-code/docker-configs",
        live: "#",
        status: "Active"
    }
];

// Load projects
function loadProjects() {
    const grid = document.getElementById('projectsGrid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <span class="project-badge">${project.status}</span>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
                ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.github}" class="project-link" target="_blank">
                    <i class="fab fa-github"></i> Code
                </a>
                ${project.live !== '#' ? 
                    `<a href="${project.live}" class="project-link" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>` : ''
                }
            </div>
        `;
        
        grid.appendChild(projectCard);
    });
}

// Typewriter effect
function typeWriter() {
    const elements = document.querySelectorAll('.typewriter');
    
    elements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, 50);
            }
        }
        
        type();
    });
}

// Terminal typing effect
function terminalTyping() {
    const terminal = document.querySelector('.terminal-body');
    const lines = [
        "$ echo 'Hello World!'",
        "Hello World!",
        "$ python --version",
        "Python 3.11.0",
        "$ git status",
        "On branch main\nYour branch is up to date with 'origin/main'."
    ];
    
    let lineIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeLine() {
        if (lineIndex < lines.length) {
            if (!isDeleting && charIndex <= lines[lineIndex].length) {
                terminal.innerHTML += lines[lineIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeLine, 50);
            } else if (isDeleting && charIndex >= 0) {
                terminal.textContent = terminal.textContent.slice(0, -1);
                charIndex--;
                setTimeout(typeLine, 30);
            } else {
                isDeleting = !isDeleting;
                if (!isDeleting) {
                    lineIndex++;
                    terminal.innerHTML += '<br>';
                }
                setTimeout(typeLine, 1000);
            }
        }
    }
    
    typeLine();
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    typeWriter();
    terminalTyping();
    
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.section, .stat-card, .project-card').forEach(el => {
        observer.observe(el);
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .section, .stat-card, .project-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .section.animate, .stat-card.animate, .project-card.animate {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
});

// Add console greeting
console.log(`%c👋 Hello from vazor's portfolio!`, 
    'color: #00ff88; font-size: 18px; font-family: "Fira Code";'
);
console.log(`%c🚀 Check out my GitHub: https://github.com/vazor-code`, 
    'color: #8a2be2; font-size: 14px;'
);
