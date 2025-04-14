document.addEventListener("DOMContentLoaded", function(){
    // Verificando o DOM

    // Transoformando o nome do colaborador em seu email
    document.getElementById("nome-colaborador").addEventListener("input", function(){
        let nome = this.value.toLowerCase().replace(/ /g, "."); // transformando a informação inteira em minúsucla e susbtituindo espaço po ponto

        document.getElementById("email-colaborador").value = nome + "@workongroup.com.br" // atribuindo informação (dado) ao input
    });
    


    let formulario = document.getElementById("formulario"); // armazenando o fomulario em uma variável
    formulario.addEventListener("submit", function(event){
        event.preventDefault(); // nao deixa o a página resetar e perder as infos

        // coletando as informações do usuário
        let nome = document.getElementById("nome-colaborador").value // salvando os dados dentro de uma variável
        localStorage.setItem("nomeColaborador", nome); // pegando os dados dessa variavel e salvando no localStorage

        let email = document.getElementById("email-colaborador").value
        localStorage.setItem("emailColaborador", email);

        let rG = document.getElementById("rg").value
        localStorage.setItem("rg", rG);

        let cpf = document.getElementById("cpf").value
        localStorage.setItem("cpf", cpf);

        let funcao = document.getElementById("funcao").value
        localStorage.setItem("funcao", funcao);

        let setor = document.getElementById("setor").value
        localStorage.setItem("setor", setor);

        let escolhaEmpresa = document.getElementById("escolha-empresa").value
        localStorage.setItem("escolhaEmpresa", escolhaEmpresa);





        // coletando as informações da máquina

        let nomeMaquina = document.getElementById("nome-maquina").value
        localStorage.setItem("nomeMaquina", nomeMaquina);
        
        let patrimonio = document.getElementById("patrimonio").value
        localStorage.setItem("patrimonio", patrimonio);
        
        let locadora = document.getElementById("locadora").value
        localStorage.setItem("locadora", locadora);
        
        let marca = document.getElementById("marca").value
        localStorage.setItem("marca", marca);

        let modelo = document.getElementById("modelo").value
        localStorage.setItem("modelo", modelo);

        let carregador = document.getElementById("carregador");
        localStorage.setItem("carregador", carregador.checked ? "Sim" : "Não");

        let mochila = document.getElementById("mochila");
        localStorage.setItem("mochila", mochila.checked ? "Sim" : "Não");

        let boxFlutuante = document.getElementById("box-flutuante-assinatura")
        boxFlutuante.style.display = "flex"
    });

    let buttonNetPageImprimir = document.getElementById("netPageImprimir")
    document.getElementById("netPageImprimir").addEventListener("click", () => {
        setTimeout(() => {
            window.location.href = "/setores/ti/entrega-imprimir.html";
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

