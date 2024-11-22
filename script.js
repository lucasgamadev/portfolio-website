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
