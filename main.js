document.addEventListener("DOMContentLoaded", function(){

    let buttonAddTermo = document.getElementById("addTermo")
    let boxFlutuanteAddTermo = document.getElementById("boxFlutuanteAddTermo")
    let fecharAddTermo = document.getElementById("fecharAddTermo")
    buttonAddTermo.addEventListener("click", function(event){
        boxFlutuanteAddTermo.style.display = "flex"

    });
    fecharAddTermo.addEventListener("click", function(event){
        boxFlutuanteAddTermo.style.display = "none"
    });
    
    let login = [
        {email: "pietro.abrahamian@workongroup.com.br", user: "Pietro Abrahamian", id: "54539712829"},
        {email: "ana.silva@empresa.com", user: "Ana Silva", id: "12345678901"},
        {email: "joao.souza@empresa.com", user: "João Souza", id: "23456789012"},
        {email: "maria.oliveira@empresa.com", user: "Maria Oliveira", id: "34567890123"},
        {email: "carlos.pereira@empresa.com", user: "Carlos Pereira", id: "45678901234"},
        {email: "juliana.costa@empresa.com", user: "Juliana Costa", id: "56789012345"},
        {email: "rafael.almeida@empresa.com", user: "Rafael Almeida", id: "67890123456"},
        {email: "fernanda.lima@empresa.com", user: "Fernanda Lima", id: "78901234567"},
        {email: "lucas.martins@empresa.com", user: "Lucas Martins", id: "89012345678"},
        {email: "patricia.santos@empresa.com", user: "Patrícia Santos", id: "90123456789"}
    ];
    for (let pessoa of login){
        console.log("email" + pessoa.email)
    }
    
});