// Rolagem suave para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação de visibilidade das seções
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observar seções para animação
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Tratamento de envio do formulário
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('message').value;

    // Validação básica do formulário
    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos');
        return;
    }

    // TODO: Implementar lógica real de envio do formulário
    // Isso poderia ser uma chamada de API, serviço de email ou endpoint de envio de formulário
    alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
    
    // Resetar formulário após envio
    this.reset();
});

// Menu mobile
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuLinks = mobileMenu.querySelectorAll('a');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
});

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    });
});

// Animação suave ao scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animação de entrada dos elementos
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer2.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
    section.classList.add('opacity-0', 'transform', 'translate-y-8', 'transition-all', 'duration-700');
    observer2.observe(section);
});
