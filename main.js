document.addEventListener("DOMContentLoaded", function(){

    let formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function(event){
        event.preventDefault();

        let nome = document.getElementById("nome_colaborador").value;
        let sobrenome = document.getElementById("sobrenome").value;
        let funcao = document.getElementById("funcao").value;
        let patrimonio = document.getElementById("patrimonio").value;
        let data_entrega = document.getElementById("data_entrega").value;

        let resultado = document.getElementById("resultado")
        resultado.innerHTML = `
            Nome: ${nome} ${sobrenome}
            <br>Função: ${funcao}
            <br>Patrimônio: ${patrimonio}
            <br>Data de Entrega: ${data_entrega}
          `;
    });

    let p_button = this.documentElement.getElementsByClassName("p")
    
});