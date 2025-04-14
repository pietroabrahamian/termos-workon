require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const PDFDocument = require("pdfkit"); // Para gerar o PDF
const { Readable } = require("stream"); // Para converter o PDF em buffer

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração do nodemailer
const transporter = nodemailer.createTransport({
  host: "in-v3.mailjet.com",
  port: 587,
  auth: {
    user: process.env.API_USER,
    pass: process.env.API_PASS,
  },
});

// Função para gerar o PDF
function generatePDF(nome, email) {
  const doc = new PDFDocument();
  
  // Cria um stream para o PDF
  const stream = new Readable();
  stream._read = () => {}; // Necessário para o stream funcionar corretamente
  doc.pipe(stream);

  // Adiciona conteúdo ao PDF
  doc.fontSize(12).text(`Termo de entrega - ${nome}`, { align: "center" });
  doc.text(`Nome: ${nome}`);
  doc.text(`Email: ${email}`);

  // Finaliza o PDF
  doc.end();

  return stream;
}

// Rota para enviar o termo gerado
app.post("/enviar-termo", async (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;

  // Verifica se os dados estão presentes
  if (!nome || !email) {
    return res.status(400).json({ message: "Nome e E-mail são obrigatórios." });
  }

  // Gera o PDF com os dados
  const pdfStream = generatePDF(nome, email);

  // Envia o e-mail com o PDF como anexo
  const mailOptions = {
    from: process.env.EMAIL_REMETENTE,
    to: email,
    subject: `Termo de entrega - ${nome}`,
    html: `<p>Termo de entrega enviado por <strong>${nome}</strong> (${email})</p>`,
    attachments: [
      {
        filename: `Termo_${nome}.pdf`,
        content: pdfStream,
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    res.status(500).json({ message: "Erro ao enviar o e-mail." });
  }
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
