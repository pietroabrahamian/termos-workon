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


        setTimeout(() => {
            window.location.href = "/setores/ti/entrega-imprimir.html";
        }, 100);
    });

    let p_button = document.getElementsByClassName("p")
});