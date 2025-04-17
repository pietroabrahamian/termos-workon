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

document.getElementById("netPageImprimir").addEventListener("click", () => {
    const nome = localStorage.getItem("nomeColaborador");
    const email = localStorage.getItem("emailColaborador");
    const rg = localStorage.getItem("rg");
    const cpf = localStorage.getItem("cpf");
    const funcao = localStorage.getItem("funcao");
    const setor = localStorage.getItem("setor");
    const empresa = localStorage.getItem("escolhaEmpresa");
    const nomeMaquina = localStorage.getItem("nomeMaquina");
    const patrimonio = localStorage.getItem("patrimonio");
    const locadora = localStorage.getItem("locadora");
    const marca = localStorage.getItem("marca");
    const modelo = localStorage.getItem("modelo");
    const carregador = localStorage.getItem("carregador");
    const mochila = localStorage.getItem("mochila");
    const assinaturaBase64 = localStorage.getItem("assinaturaColaborador");

    const apiKey = 'ff33a177-c4a8-41bf-842a-9bce34c4cfecdfe093df-3d41-4786-a790-fccc05f1277a'; // troque pela sua chave de API
    const templateId = '68b78932-21ff-4f50-a896-ffcb8a3b1dc8'; // seu template

    const payload = {
        template_id: templateId,
        signers: [
            {
                name: nome,
                email: email,
                identifier: cpf,
                send_email: true
            }
        ],
        custom_fields: [
            { field: "nome", value: nome },
            { field: "email", value: email },
            { field: "cpf", value: cpf },
            { field: "rg", value: rg },
            { field: "funcao", value: funcao },
            { field: "setor", value: setor },
            { field: "empresa", value: empresa },
            { field: "nome_maquina", value: nomeMaquina },
            { field: "patrimonio", value: patrimonio },
            { field: "locadora", value: locadora },
            { field: "marca", value: marca },
            { field: "modelo", value: modelo },
            { field: "carregador", value: carregador },
            { field: "mochila", value: mochila },
            { field: "assinatura", value: `<img src="${assinaturaBase64}" width="300"/>` }
        ],
        send_automatic_email: true
    };

    fetch("https://sandbox.api.zapsign.com.br/api/v1/documents/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${apiKey}`
        },
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => {
        console.log("Documento criado na ZapSign:", data);
        alert("Documento enviado para assinatura! Verifique o e-mail.");
    })
    .catch(error => {
        console.error("Erro ao enviar para ZapSign:", error);
        alert("Erro ao enviar o documento. Veja o console.");
    });
});
