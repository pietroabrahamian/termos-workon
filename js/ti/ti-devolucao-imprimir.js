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

     document.title = `${nome} - Termo de Devolução`
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

        let element = document.body;

        let opt = {
        margin: 0.5,
        filename: `${nome} - devolucao.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(element).outputPdf('blob').then(async function (pdfBlob) {
        // Converte o Blob para Base64
        const reader = new FileReader();
        reader.onloadend = function() {
            const base64PDF = reader.result.split(',')[1]; // Pega o conteúdo base64 do Blob
            console.log(base64PDF);

            // Agora você pode enviar o base64 para o servidor, salvar localmente ou usar da forma que preferir

            // Exemplo: Enviar o base64 para o servidor via POST
            const formData = new FormData();
            formData.append("nome", nome);
            formData.append("pdfBase64", base64PDF);

            // Aqui você pode enviar para o seu servidor
            fetch('/seu-endpoint', {
            method: 'POST',
            body: formData
            })
            .then(response => response.json())
            .then(data => {
            console.log("PDF enviado com sucesso!", data);
            })
            .catch(error => {
            console.error("Erro ao enviar PDF:", error);
            });

            // Caso queira salvar o PDF como arquivo base64 no cliente:
            const base64Link = document.createElement('a');
            base64Link.href = `data:application/pdf;base64,${base64PDF}`;
            base64Link.download = `${nome} - devolucao.pdf`;
            base64Link.click(); // Isso vai iniciar o download do PDF base64
        };

        // Lê o Blob como base64
        reader.readAsDataURL(pdfBlob);
        });
    
    let boxFlutuante = document.getElementById("box-flutuante-agradecimento")
    setTimeout(() => {
        boxFlutuante.style.display = "flex";
    },3000);
    boxFlutuante.addEventListener("click", function(event){
        boxFlutuante.style.display = "none";
    })
    document.getElementById("fechar-agradecimento").addEventListener*"click", function(event){
        boxFlutuante.style.display = "none";
    }
});