document.addEventListener("DOMContentLoaded", function(){
    let mudarPLogin = document.getElementById("mudarPLogin");
    let formCadastro = document.getElementById("formCadastro");
    let formLogin = document.getElementById("formLogin");
    mudarPLogin.addEventListener("click", function(event){
        formCadastro.style.display = "none";
        formLogin.style.display = "flex";
    });
    mudarPCadastro.addEventListener("click", function(event){
        formCadastro.style.display = "flex";
        formLogin.style.display = "none";
    });
});