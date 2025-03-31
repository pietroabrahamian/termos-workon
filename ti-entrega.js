document.addEventListener("DOMContentLoaded", function(){
    
    document.getElementById("nome-colaborador").addEventListener("input", function(){
        let nome = this.value.toLowerCase().replace(/ /g, ".");

        document.getElementById("email-colaborador").value = nome + "@workongroup.com.br"
    });
    

    let formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", function(event){
        event.preventDefault();
        let bruto_nome = document.getElementById("nome-colaborador").value.trim()
        let nome_sobrenome = bruto_nome.split(" ")
        let nome = nome_sobrenome[0]
        let sobrenome = nome_sobrenome[1]
        let email = nome+"_"+sobrenome+"@workongroup.com.br"

        let resultado = document.getElementById("resultado")
        resultado.innerHTML = `
            Nome Inteiro: ${nome_sobrenome}
            <br>Nome ${nome}
            <br>Sobrenome: ${sobrenome}
            <br>email: ${email}
          `;
    });

    let p_button = document.getElementsByClassName("p")
});