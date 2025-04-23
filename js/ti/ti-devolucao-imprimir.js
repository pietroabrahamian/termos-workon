document.addEventListener("DOMContentLoaded", async function(){
    let nome = localStorage.getItem("nomeColaborador") || "Nome não encontrado";
    let data = localStorage.getItem("data") || "Data nao informada";
    let recebedorTI = localStorage.getItem("recebedorTI") || "Recebedor do TI nao informado";
    let mochila = localStorage.getItem("mochila") || "Não informado";
    let carregador = localStorage.getItem("carregador") || "Não informado";
    let nomeMaquina = localStorage.getItem("nomeMaquina")    || "Não informado";
    let locadora = localStorage.getItem("locadora") || "Não informado";
    let patrimonio = localStorage.getItem("patrimonio")  || "Não informado";
    let assinatura = localStorage.getItem("assinaturaColaborador") || "";

     document.title = `${nome} - Termo de Entrega`
     divMain = document.getElementById("main").innerHTML =` <h1>Devolução</h1>
     <div class="texto-termo-devolucao">
         <p>Declaro que no dia  <span>${data}</span>, estou realizando a devolução do notebook.</p>
         <p>Nome do Colaborador: <span>${nome}</span></p>
         <p>Recebdor TI: <span>${recebedorTI}</span></p>
          <p>Assinatura do colaborador:</p>
     </div>
     <img src="${assinatura}" alt="">
     
     <table border="1">
         <tr>
             <th>Objeto</th>
             <th>Opção</th>
             <th>Identificação</th>
         </tr>
         <tr>
             <td>Carregador</td>
             <td><span>${carregador}</span></td>
             <td><span>${nomeMaquina}</span></td>
         </tr>
         <tr>
             <td>Mochila</td>
             <td><span>${mochila}</span></td>
             <td><span>${locadora}-${patrimonio}</span></td>
         </tr>
     </table>
     `
});