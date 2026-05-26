// ===== CARROSSEL DE CERTIFICADOS =====

document.addEventListener('DOMContentLoaded', function() {
    // Lista de certificados com seus nomes e caminhos atualizados
    const certificates = [
        { name: 'Luizalabs - Back-end com Python', image: 'Certificados_img/Luizalabs - Back-end com Python-1.png' },
        { name: 'Python Essentials 1 (Cisco Networking Academy)', image: 'Certificados_img/Python_Essentials_1_certificate_theodorogabriel53-gmail-com_7980fd93-ffb9-4e10-b117-0efff50d6331-1.png' },
        { name: 'Python Essentials 2 (Cisco Networking Academy)', image: 'Certificados_img/python-essential-2.png' },
        { name: 'Fluência - Fundamentos da Inteligência Artificial', image: 'Certificados_img2/Certificado_FLUÊNCIA - FUNDAMENTOS DA INTELIGÊNCIA ARTIFICIA-1.png' },
        { name: 'Desvendando o E-Social', image: 'Certificados_img2/Certificado_Desvendando o ES-1.png' },
        { name: 'Empreender SENAI', image: 'Certificados_img2/Certificado_Empreender SENA-1.png' },
        { name: 'Desvendando a Indústria 4.0', image: 'Certificados_img2/Certificado_Desvendando a Indústria 4.-1.png' },
        { name: 'Competência Transversal - Segurança no Trabalho', image: 'Certificados_img2/Certificado_Competência Transversal - Segurança no Trabalh (2)-1.png' },
        { name: 'Desvendando o 5G', image: 'Certificados_img2/Certificado_Desvendando o 5g-1.png' },
        { name: 'Economia Circular', image: 'Certificados_img2/Certificado_Economia Circula (1)-1.png' },
        { name: 'Privacidade e Proteção de Dados (LGPD)', image: 'Certificados_img2/Certificado_Privacidade e Proteção de Dados (LGPD (1)-1.png' },
        { name: 'WEB 3.0', image: 'Certificados_img2/Certificado_WEB 3.-1.png' },
        { name: 'Introdução ao Bootcamp - Back-end com Python', image: 'Certificados_img/Introdução ao Bootcamp - Back - end - com Python-1.png' },
        { name: 'Ambiente de Desenvolvimento e Primeiros Passos com Python', image: 'Certificados_img2/Ambiente de Desenvolvimento e Primeiros Passos com Python-1.png' },
        { name: 'Conhecendo a Linguagem de Programação Python', image: 'Certificados_img2/Conhecendo a Linguagem de Programação Python-1.png' },
        { name: 'Conhecendo Tuplas em Python', image: 'Certificados_img2/Conhecendo Tuplas em Python-1.png' },
        { name: 'Decoradores, Iteradores e Geradores com Python', image: 'Certificados_img2/Decoradores, Iteradores e Geradores com Python-1.png' },
        { name: 'Dominando Funções Python', image: 'Certificados_img/Dominando Funções Python-1.png' },
        { name: 'Manipulando Strings com Python', image: 'Certificados_img/Manipulando Strings com Python-1.png' },
        { name: 'Primeiros Passos com Python e Versionamento de Código', image: 'Certificados_img/Primeiros Passos com Pythone Versionamento de Código-1.png' },
        { name: 'Trabalhando com Listas em Python', image: 'Certificados_img/Trabalhando com Listas em Python-1.png' },
        { name: 'Aprendendo a Utilizar Dicionários em Python', image: 'Certificados_img2/Aprendendo a Utilizar Dicionários em Python-1.png' },
        { name: 'Desafios de Projetos - Crie Um Portfólio Vencedor', image: 'Certificados_img/Desafios de Projetos - Crie Um Portfólio Vencedor-1.png' },
        { name: 'Estruturas Condicionais e de Repetição em Python', image: 'Certificados_img/Estruturas Condicionais e de Repetição em Python-1.png' },
        { name: 'Live de Lançamento - LuizaLabs Back-End com Python', image: 'Certificados_img/Live de Lançamento - LuizaLabs Back-End com Python-1.png' },
        { name: 'Otimizando o Sistema Bancário com Funções Python', image: 'Certificados_img/Otimizando o Sistema Bancário com Funções Python-1.png' },
        { name: 'Tipos de Operadores com Python', image: 'Certificados_img/Tipos de Operadores com Python-1.png' },
        { name: 'Versionamento de Código com Git e GitHub', image: 'Certificados_img/Versionamento de Código com Git e GitHub-1.png' },
        { name: 'Aplicando Encapsulamento em Python', image: 'Certificados_img2/Aplicando Encapsulamento em Python-1.png' },
        { name: 'Aprendendo o Conceito de Herança com Python', image: 'Certificados_img2/Aprendendo o Conceito de Herança com Python-1.png' },
        { name: 'Boas Práticas Para APIs RESTful', image: 'Certificados_img2/Boas Práticas Para APIs RESTful-1.png' },
        { name: 'Conhecendo Polimorfismo em Python', image: 'Certificados_img2/Conhecendo Polimorfismo em Python-1.png' },
        { name: 'Desafios de Código - Aperfeiçoe Sua Lógica e Pensamento Computacional', image: 'Certificados_img/Desafios de Código - Aperfeiçoe Sua Lógica e Pensamento Computacional-1.png' },
        { name: 'Desenvolvendo sua Primeira API com FastAPI, Python e Docker', image: 'Certificados_img/Desenvolvendo sua Primeira API com FastAPI, Python e Docker-1.png' },
        { name: 'Explorando Banco de Dados Relacionais com Python DB API', image: 'Certificados_img/Explorando Banco de Dados Relacionais com Python DB API-1.png' },
        { name: 'Gerenciamento de Pacotes, Convenções e Boas Práticas Python', image: 'Certificados_img/Gerenciamento de Pacotes, Convenções e Boas Práticas Python-1.png' },
        { name: 'Integrando Python com Banco de Dados Relacionais Utilizando SQLAIchemy', image: 'Certificados_img/Integrando Python com Banco de Dados Relacionais Utilizando SQLAIchemy-1.png' },
        { name: 'Interfaces e Classes Abstratas com Python', image: 'Certificados_img/Interfaces e Classes Abstratas com Python-1.png' },
        { name: 'Introdução Banco de Dados', image: 'Certificados_img/Introdução Banco de Dados-1.png' },
        { name: 'Introdução a Aplicações Rest', image: 'Certificados_img/Introdução a Aplicações Rest-1.png' },
        { name: 'Introdução ao FastAPI para APIs RESTful Assícronas', image: 'Certificados_img/Introdução ao FastAPI para APIs RESTful Assícronas-1.png' },
        { name: 'Introdução à Programação Orientada a Objetos (POO) com Python', image: 'Certificados_img/Introdução à Programação Orientada a Objetos (POO) com Python-1.png' },
        { name: 'Manipulando Arquivos em Python', image: 'Certificados_img/Manipulando Arquivos em Python-1.png' },
        { name: 'Modelando o Sistema Bancário em POO com Python', image: 'Certificados_img/Modelando o Sistema Bancário em POO com Python-1.png' },
        { name: 'Primeiros passos com FastAPI', image: 'Certificados_img/Primeiros passos com FastAPI-1.png' },
        { name: 'Autenticação e Autorização em FastAPI', image: 'Certificados_img2/Autenticação e Autorização em FastAPI-1.png' },
        { name: 'Bases de Prompt Engineering para o GitHub Copilot', image: 'Certificados_img2/Bases de Prompt Engineering para o GitHub Copilot-1.png' },
        { name: 'Boas Práticas para APIs RESTful Assíncronas com FastAPI', image: 'Certificados_img2/Boas Práticas para APIs RESTful Assíncronas com FastAPI-1.png' },
        { name: 'Configurando e Usando o GitHub Copilot', image: 'Certificados_img2/Configurando e Usando o GitHub Copilot-1.png' },
        { name: 'Conhecendo o GitHub Copilot-Aumentando sua Produtividade na Programação', image: 'Certificados_img2/Conhecendo o GitHub Copilot-Aumentando sua Produtividade na Programação-1.png' },
        { name: 'Criando sua API Bancária Assíncrona com FastAPI', image: 'Certificados_img2/Criando sua API Bancária Assíncrona com FastAPI-1.png' },
        { name: 'Deploy de uma API FastAPI Assíncrona', image: 'Certificados_img/Deploy de uma API FastAPI Assícrona-1.png' },
        { name: 'Manipulação de Dados com FastAPI Assícrono', image: 'Certificados_img/Manipulação de Dados com FastAPI Assícrono-1.png' },
        { name: 'Testando APIs RESTful Assíncronas em FastAPI', image: 'Certificados_img/Testando APIs RESTful Assíncronas em FastAPI-1.png' },
        { name: 'Técnicas de Engenharia de Prompt', image: 'Certificados_img/Técnicas de Engenharia de Prompt-1.png' },
        { name: 'Utilizando as Ferramentas do GitHub para Solucionar Algoritmos em Python', image: 'Certificados_img/Utilizando as Ferramentas do GitHub para Solucionar Algoritmos em Python-1.png' }
    ];

    let currentSlide = 0;
    let autoplayInterval;
    let isAutoplayActive = true;

    // Elementos do DOM
    const carouselTrack = document.getElementById('carouselTrack');
    const carouselIndicators = document.getElementById('carouselIndicators');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const certificateInfo = document.getElementById('certificateInfo');
    const certificateName = document.getElementById('certificateName');
    const carouselWrapper = document.querySelector('.carousel-wrapper');

    // Inicializar carrossel
    function initCarousel() {
        // Criar slides
        certificates.forEach((cert, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.innerHTML = `<img src="${cert.image}" alt="${cert.name}" loading="lazy">`;
            carouselTrack.appendChild(slide);

            // Criar indicador
            const indicator = document.createElement('div');
            indicator.className = 'carousel-indicator';
            if (index === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => goToSlide(index));
            carouselIndicators.appendChild(indicator);
        });

        // Atualizar informações do primeiro certificado
        updateCertificateInfo();
    }

    // Atualizar informações do certificado
    function updateCertificateInfo() {
        certificateName.textContent = certificates[currentSlide].name;
    }

    // Ir para um slide específico
    function goToSlide(index) {
        currentSlide = index;
        updateCarousel();
        updateCertificateInfo();
        resetAutoplay();
    }

    // Atualizar posição do carrossel
    function updateCarousel() {
        const offset = -currentSlide * 100;
        carouselTrack.style.transform = `translateX(${offset}%)`;

        // Atualizar indicadores
        document.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }

    // Próximo slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % certificates.length;
        updateCarousel();
        updateCertificateInfo();
        resetAutoplay();
    }

    // Slide anterior
    function prevSlide() {
        currentSlide = (currentSlide - 1 + certificates.length) % certificates.length;
        updateCarousel();
        updateCertificateInfo();
        resetAutoplay();
    }

    // Autoplay
    function startAutoplay() {
        if (isAutoplayActive) {
            autoplayInterval = setInterval(nextSlide, 5000);
        }
    }

    // Pausar autoplay
    function pauseAutoplay() {
        clearInterval(autoplayInterval);
    }

    // Resetar autoplay
    function resetAutoplay() {
        pauseAutoplay();
        startAutoplay();
    }

    // Event listeners para botões
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Pausar autoplay ao passar o mouse
    carouselWrapper.addEventListener('mouseenter', pauseAutoplay);
    carouselWrapper.addEventListener('mouseleave', startAutoplay);

    // Suporte a teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });

    // Inicializar
    initCarousel();
    startAutoplay();
});

// ===== MENU MOBILE =====

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav') && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});
