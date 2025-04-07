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
    

});