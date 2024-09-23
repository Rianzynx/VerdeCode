document.addEventListener('DOMContentLoaded', function() {
    // Função para observar elementos e adicionar a classe animated
    function observeElement(selector) {
        let observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    console.log(`${selector} está visível! Iniciando animação.`);
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target); // Para de observar após a animação
                }
            });
        }, { threshold: 0.1 });

        let target = document.querySelector(selector);

        if (target) {
            console.log(`${selector} foi encontrado. Iniciando observação.`);
            observer.observe(target);
        } else {
            console.log(`${selector} não foi encontrado no DOM.`);
        }
    }

    // Observa os dois elementos
    observeElement('#produtos');
    observeElement('#carrossel');

    // Alterna a visibilidade da barra de busca
    document.getElementById('btnBusca').addEventListener('click', function() {
        const divBusca = document.getElementById('divBusca');
        // Alterna a visibilidade da barra de busca
        if (divBusca.style.display === 'none' || divBusca.style.display === '') {
            divBusca.style.display = 'flex'; // Mostra a barra de busca
            document.getElementById('txtBusca').focus(); // Foca no input
        } else {
            divBusca.style.display = 'none'; // Esconde a barra de busca
        }
    });
    document.getElementById('menu-toggle').addEventListener('click', function() {
        const menu = document.getElementById('menu');
        menu.classList.toggle('show'); // Alterna a classe 'show' para mostrar/ocultar o menu
    });
});
