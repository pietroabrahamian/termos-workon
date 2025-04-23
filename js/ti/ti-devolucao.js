document.addEventListener("DOMContentLoaded", function(){
    let formulario = document.getElementById("formulario"); // armazenando o fomulario em uma variável
    formulario.addEventListener("submit", function(event){
        event.preventDefault(); // nao deixa o a página resetar e perder as infos

        // coletando as informações do usuário
        let nome = document.getElementById("nome-colaborador").value // salvando os dados dentro de uma variável
        localStorage.setItem("nomeColaborador", nome); // pegando os dados dessa variavel e salvando no localStorage

        let data = document.getElementById("data").value
        localStorage.setItem("data", data);

        let recebedorTI = document.getElementById("recebedor-ti").value
        localStorage.setItem("recebedorTI", recebedorTI);

        let nomeMaquina = document.getElementById("nome-maquina").value
        localStorage.setItem("nomeMaquina", nomeMaquina);

        let patrimonio = document.getElementById("patrimonio").value
        localStorage.setItem("patrimonio", patrimonio);

        let locadora = document.getElementById("locadora").value
        localStorage.setItem("locadora", locadora);

        let mochila = document.getElementById("mochila");
        localStorage.setItem("mochila", mochila.checked ? "Sim" : "Não");

        let carregador = document.getElementById("carregador");
        localStorage.setItem("carregador", carregador.checked ? "Sim" : "Não");


        let boxFlutuante = document.getElementById("box-flutuante-assinatura")
        boxFlutuante.style.display = "flex"
    });

    let buttonNetPageImprimir = document.getElementById("netPageImprimir")
    document.getElementById("netPageImprimir").addEventListener("click", () => {
        setTimeout(() => {
            window.location.href = "/setores/ti/devolucao-imprimir.html";
        }, 100);
    });
});

// ASSINATURA COLABORADOR

document.addEventListener("DOMContentLoaded", function () {
    let canvas = document.getElementById("assinaturaCanvas");
    let ctx = canvas.getContext("2d");
    let desenhando = false;

    // Funções auxiliares para toque
    function getTouchPos(canvas, touchEvent) {
        let rect = canvas.getBoundingClientRect();
        return {
            x: touchEvent.touches[0].clientX - rect.left,
            y: touchEvent.touches[0].clientY - rect.top
        };
    }

    // Mouse Events (PC)
    canvas.addEventListener("mousedown", (e) => {
        desenhando = true;
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    });

    canvas.addEventListener("mousemove", (e) => {
        if (!desenhando) return;
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    });

    canvas.addEventListener("mouseup", () => {
        desenhando = false;
    });

    canvas.addEventListener("mouseleave", () => {
        desenhando = false;
    });

    // Touch Events (Celular)
    canvas.addEventListener("touchstart", (e) => {
        e.preventDefault(); // evita scroll
        desenhando = true;
        let pos = getTouchPos(canvas, e);
        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
    });

    canvas.addEventListener("touchmove", (e) => {
        e.preventDefault(); // evita scroll
        if (!desenhando) return;
        let pos = getTouchPos(canvas, e);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
    });

    canvas.addEventListener("touchend", () => {
        desenhando = false;
    });

    // Limpar assinatura
    document.getElementById("limparAssinatura").addEventListener("click", () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    // Salvar assinatura
    document.getElementById("salvarAssinatura").addEventListener("click", () => {
        let assinaturaDataURL = canvas.toDataURL();
        localStorage.setItem("assinaturaColaborador", assinaturaDataURL);
        alert("Assinatura salva com sucesso!");
    });

    document.getElementById("box-flutuante-assinatura").addEventListener("click", function(event){
        if(!canvas.contains(event.target)) {
            document.getElementById("box-flutuante-assinatura").style.display = "none"
        }
    });

    // Carrega assinatura anterior se existir
    let assinaturaSalva = localStorage.getItem("assinaturaColaborador");
    if (assinaturaSalva) {
        let img = new Image();
        img.src = assinaturaSalva;
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
    }
});