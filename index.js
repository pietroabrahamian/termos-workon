// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const PDFDocument = require("pdfkit"); // Para gerar o PDF
// const { Readable } = require("stream"); // Para converter o PDF em buffer
// const Mailjet = require("node-mailjet"); // SDK oficial da Mailjet

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Instanciando o cliente da Mailjet com as variáveis de ambiente
// const mailjet = Mailjet.apiConnect(
//   process.env.MJ_APIKEY_PUBLIC,  // Altere o nome da variável no .env
//   process.env.MJ_APIKEY_PRIVATE  // para MJ_APIKEY_PUBLIC e MJ_APIKEY_PRIVATE
// );

// // Exemplo de rota que envia um e-mail
// app.post("/send-email", async (req, res) => {
//   const { toEmail, toName, subject, htmlContent, textContent } = req.body;
//   toEmail = "murilo.santos@workongroup.com.br";
//   toName = "Pietro Abrahamian";
//   subject = "Assunto do e-mail";
//   htmlContent = "<h3>Conteúdo HTML</h3>";
//   textContent = "Texto alternativo";

//   try {
//     const request = await mailjet
//       .post("send", { version: "v3.1" })
//       .request({
//         Messages: [
//           {
//             From: {
//               Email: "pietro.abrahamian@workongroup.com.br", // substitua pelo seu e-mail verificado
//               Name: "Seu Nome ou Empresa",
//             },
//             To: [
//               {
//                 Email: toEmail,
//                 Name: toName,
//               },
//             ],
//             Subject: subject,
//             TextPart: textContent || "Texto alternativo",
//             HTMLPart: htmlContent || "<h3>Conteúdo HTML</h3>",
//           },
//         ],
//       });

//     res.status(200).json({ message: "Email enviado com sucesso", data: request.body });
//   } catch (error) {
//     console.error("Erro ao enviar e-mail:", error);
//     res.status(500).json({ message: "Erro ao enviar e-mail", error });
//   }
// });

// // Inicializando o servidor
// // const porta_1 = process.env.porta_1 || 5500;
// // app.listen(porta_1, () => {
// //   console.log(`Servidor rodando na porta ${porta_1}`);
// // });

// // Função para gerar o PDF
// function generatePDF(nome, email) {
//   const doc = new PDFDocument();
  
//   // Cria um stream para o PDF
//   const stream = new Readable();
//   stream._read = () => {}; // Necessário para o stream funcionar corretamente
//   doc.pipe(stream);

//   // Adiciona conteúdo ao PDF
//   doc.fontSize(12).text(`Termo de entrega - ${nome}`, { align: "center" });
//   doc.text(`Nome: ${nome}`);
//   doc.text(`Email: ${email}`);

//   // Finaliza o PDF
//   doc.end();

//   return stream;
// }

// // Rota para enviar o termo gerado
// app.post("/enviar-termo", async (req, res) => {
//   const nome = req.body.nome;
//   const email = req.body.email;

//   // Verifica se os dados estão presentes
//   if (!nome || !email) {
//     return res.status(400).json({ message: "Nome e E-mail são obrigatórios." });
//   }

//   // Gera o PDF com os dados
//   const pdfStream = generatePDF(nome, email);

//   // Envia o e-mail com o PDF como anexo
//   const mailOptions = {
//     from: process.env.EMAIL_REMETENTE,
//     to: email,
//     subject: `Termo de entrega - ${nome}`,
//     html: `<p>Termo de entrega enviado por <strong>${nome}</strong> (${email})</p>`,
//     attachments: [
//       {
//         filename: `Termo_${nome}.pdf`,
//         content: pdfStream,
//       },
//     ],
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: "E-mail enviado com sucesso!" });
//   } catch (error) {
//     console.error("Erro ao enviar e-mail:", error);
//     res.status(500).json({ message: "Erro ao enviar o e-mail." });
//   }
// });

// // Iniciar o servidor
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Mailjet = require("node-mailjet"); // SDK oficial da Mailjet
const fs = require("fs");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Instanciando o cliente da Mailjet com as variáveis de ambiente
const mailjet = Mailjet.apiConnect(
  process.env.MJ_APIKEY_PUBLIC,  // Altere o nome da variável no .env
  process.env.MJ_APIKEY_PRIVATE  // para MJ_APIKEY_PUBLIC e MJ_APIKEY_PRIVATE
);

// Exemplo de rota que envia um e-mail
app.post("/send-email", async (req, res) => {
  const { toEmail, toName, subject, htmlContent, textContent, fileName } = req.body;

  
    toEmail =  "destinatario@example.com";
    toName = "Nome do Destinatário";
    subject = "Assunto do E-mail";
    htmlContent = "<h3>Conteúdo HTML do E-mail</h3>";
    textContent = "Texto alternativo do E-mail";
    fileName = "pdf_base64.txt";
  
  
  
  // Verifica se o nome do arquivo foi fornecido
  if (!fileName) {
    return res.status(400).json({ message: "Nome do arquivo não fornecido." });
  }

  try {
    // Caminho para o arquivo PDF
    const filePath = path.join(__dirname, 'pasta', fileName); // Alterar 'pasta' para o nome da sua pasta
    
    // Lê o arquivo PDF da pasta e converte para base64
    const fileBuffer = fs.readFileSync(filePath);
    const base64File = fileBuffer.toString('base64');

    // Caminho do arquivo .txt com conteúdo base64
    const base64FilePath = path.join(__dirname, "arquivos", "pdf_base64.txt");

    // Lê o conteúdo base64 do arquivo
    const base64 = fs.readFileSync(base64FilePath, "utf-8");
    
    // Envia o e-mail com o PDF (base64) como anexo
    const request = await mailjet
      .post("send", { version: "v3.1" })
      .request({
        Messages: [
          {
            From: {
              Email: "pietro.abrahamian@workongroup.com.br", // substitua pelo seu e-mail verificado
              Name: "Seu Nome ou Empresa",
            },
            To: [
              {
                Email: toEmail,
                Name: toName,
              },
            ],
            Subject: subject,
            TextPart: textContent || "Texto alternativo",
            HTMLPart: htmlContent || "<h3>Conteúdo HTML</h3>",
            Attachments: [
              {
                ContentType: "application/pdf", // Tipo de conteúdo do anexo
                Filename: fileName,
                Base64Content: base64, // Conteúdo base64 do arquivo
              },
            ],
          },
        ],
      });

    res.status(200).json({ message: "Email enviado com sucesso", data: request.body });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    res.status(500).json({ message: "Erro ao enviar e-mail", error });
  }
});

// Inicializando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

