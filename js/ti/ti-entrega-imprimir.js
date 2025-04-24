document.addEventListener("DOMContentLoaded", async function(){
    // Obtendo os dados do localStorage (com fallback para evitar valores null)
    let nome = localStorage.getItem("nomeColaborador") || "Nome não encontrado";
    let email = localStorage.getItem("emailColaborador") || "E-mail não informado";
    let rg = localStorage.getItem("rg") || "Não informado";
    let cpf = localStorage.getItem("cpf") || "Não informado";
    let funcao = localStorage.getItem("funcao") || "Não informado";
    let setor = localStorage.getItem("setor") || "Não informado";
    let escolhaEmpresa = localStorage.getItem("escolhaEmpresa") || "Empresa não informada";
    let nomeMaquina = localStorage.getItem("nomeMaquina") || "Não informado";
    let patrimonio = localStorage.getItem("patrimonio") || "Não informado";
    let locadora = localStorage.getItem("locadora") || "Não informado";
    let marca = localStorage.getItem("marca") || "Não informado";
    let modelo = localStorage.getItem("modelo") || "Não informado";
    let carregador = localStorage.getItem("carregador") || "Não informado";
    let mochila = localStorage.getItem("mochila") || "Não informado";
    let assinatura = localStorage.getItem("assinaturaColaborador") || "";

    document.title = `${nome} - Termo de Entrega`
    divMain = document.getElementById("main").innerHTML = ` <p>Eu, <span>${nome}</span>, portador do RG nº <span>${rg}</span>, CPF:  <span>${cpf}</span> funcionário da empresa: <span>${escolhaEmpresa}</span>,  no exercício da função de    <span> ${funcao}</span> do setor <span> ${setor}</span>, declaro que recebi nesta data, user ID de rede corporativa   em perfeitas condições de uso, equipamentos e ferramentas de uso permanente ou temporário, constante na relação que compõe este Termo, para uso exclusivo da minha função, independentemente do regime de trabalho ao qual esteja vinculado (permanente na sede da empresa e/ou residência ou híbrido).
        <br>
        <br><br><br><span>Comprometo-me a:</span>
        <br>
        <br>1-	Zelar pela integridade de todo o material recebido, conservando-os em perfeito estado de conservação, limpeza e em condições de uso, jamais transferindo sua posse, ainda que temporária, para terceiros;
        <br>2-	Mantê-los em local seguro, quando não utilizados;
        <br>3-	Utilizar os objetos abaixo descritos exclusivamente para empresa, estando ciente de que é expressamente proibida a utilização para fins particulares;
        <br>4-	Não efetuar qualquer alteração, modificação, agregação de componentes, acessórios ou programas diversos daqueles fornecidos pela empresa;
        <br>5-	Não utilizar internet, para outros fins que não corporativos;
        <br>6-	Comunicar prontamente a chefia imediata, qualquer deficiência do equipamento e/ou ferramenta que comprometa a utilização, solicitando a substituição, se for o caso, mediante devolução;
        <br>7-	Responsabilizar-se por qualquer sinistro causado, por imprudência, imperícia ou negligência, nestas estando implícita perda ou furto. Excluído o desgaste sofrido pelo uso normal (como riscos e desgastes eventuais);
        <br>8-	Sujeitar-se às penas de advertência / suspensão pelo descumprimento das normas da presente e na reincidência estar-se-á sujeito a demissão por justa causa, nos termos do artigo 482, alínea “e” da CLT;
        <br>9-	Autorizar, nos termos do artigo 462, §1º da CLT, o desconto (no salário ou rescisão) do dano causado, em valores atualizados a época do efetivo pagamento;
        <br>10-	Restituí-lo de imediato e em perfeito estado de conservação e limpeza como recebeu, salvo desgastes naturais, quando da extinção do contrato de trabalho ou promoção a outro cargo que não necessite da utilização dos aparelhos abaixo descritos.
        <br>11	A não devolução em cinco dias úteis constante no item dezesseis, acarretará ao desconto na importância do valor de R$ 5.000 (Cinco mil reais) referente ao notebook e o valor de R$ 48,90 (Quarenta e oito reais e noventa centavos) referente a mochila, o portador não será reembolsado após descrito acima.
        <br>12-	Não revelar, fora do âmbito profissional, fato ou informação de qualquer natureza de que tenha conhecimento por força de minhas atribuições, salvo em decorrência de decisão competente na esfera legal ou judicial;
        <br>13-	Manter a necessária cautela quando da exibição de dados em tela, impressora ou na gravação em meios eletrônicos, a fim de evitar que deles venham a tomar ciência pessoas não autorizadas;
        <br>14-	Não revelar a ninguém minha senha de acesso à rede corporativa, aos computadores, Internet e/ou de minha caixa postal (e-mail) coorporativo e tomar o máximo de cuidado para que ela permaneça somente de meu conhecimento;
        <br>15-	Responder, em todas as instâncias, pelas consequências das ações ou omissões de minha parte que possam pôr em risco ou comprometer a exclusividade de conhecimento de minha senha ou das transações a que tenha acesso.
        <br><br><br><br><span>Declaro, ainda, estar plenamente esclarecido e consciente que:</span>
        <br>Não é permitida a navegação aos sites pertencentes às categorias abaixo:
        <br>&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;Pornográfico e de caráter sexual;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;Compartilhamento de arquivos (ex.: peer to peer, Bit Torrent, Emule, etc.);
        <br>&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;Pornografia infantil (pedofilia);
        <br>&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;Apologia ao terrorismo;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;Apologia às drogas;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;Crackers;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;Violência e agressividade (racismo, preconceito, etc.);
        <br>&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;Violação de direito autoral (pirataria, etc.);
        <br>&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;Conteúdo impróprio, ofensivo, ilegal, discriminatório e similares
        </p>
        <table border="1">
            <tr>
                <th>Objeto</th>
                <th>Marca</th>
                <th>Identificação</th>
            </tr>
            <tr>
                <td>Notebook ${modelo}</td>
                <td>${marca}</td>
                <td>${nomeMaquina}</td>
            </tr>
            <tr>
                <td>Carregador</td>
                <td>${carregador}</td>
                <td>${locadora}-${patrimonio}</td>
            </tr>
            <tr>
                <td>Mochila</td>
                <td>${mochila}</td>
            </tr>
        </table>
        <img src="${assinatura}">
        `
        
    
        // let element = document.body;

        // let opt = {
        //   margin: 0.5,
        //   filename: `${nome} - entrega.pdf`,
        //   image: { type: 'jpeg', quality: 0.98 },
        //   html2canvas: { scale: 2 },
        //   jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        // };
        
        // html2pdf().set(opt).from(element).outputPdf('blob').then(async function (pdfBlob) {
        //   // Salva localmente
        //   html2pdf().set(opt).from(element).save();
        
        //   const formData = new FormData();
        //   formData.append("nome", nome);
        //   formData.append("email", email);
        //   formData.append("pdf", pdfBlob, `${nome}-entrega.pdf`);
        
        //   // try {
        //   //   const response = await fetch("http://localhost:5500/send-termo", {
        //   //     method: "POST",
        //   //     body: formData
        //   //   });
        
        //   //   if (response.ok) {
        //   //     alert("Termo enviado com sucesso!");
        //   //   } else {
        //   //     alert("Erro ao enviar termo.");
        //   //   }
        //   // } catch (error) {
        //   //   alert("Erro na requisição: " + error.message);
        //   // }
        // });
        let element = document.body;

        let opt = {
          margin: 0.5,
          filename: `${nome} - entrega.pdf`,
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
            formData.append("email", email);
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
            base64Link.download = `${nome} - entrega.pdf`;
            base64Link.click(); // Isso vai iniciar o download do PDF base64
          };

          // Lê o Blob como base64
          reader.readAsDataURL(pdfBlob);
        });


                  
                

            
        });
