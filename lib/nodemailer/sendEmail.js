
import { transporter } from "./config";

export default async function sendEmail(reciverEmail, subject, html, textAlternative) {

    try {
        const info = await transporter.sendMail({
            from: '"Julia Lima Arquitetura" <angelindigital@gmail.com>', // sender address
            to: reciverEmail,
            subject: subject,
            html: html,
            text: textAlternative
        })

        ///se funcionar fazer log de mensagem enviada.
        console.log("Message sent:", info.messageId);

    } catch (error) {
        console.error(error, "Erro ao enviar mensagem com o Nodemailer")
        return null

    }
    return true

}


/*
try {
    const info = await transporter.sendMail({
        from: '"MedTexto" <angelindigital@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'Redefinição de Senha Solicitada', // Subject line
        html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #333;">Olá ${username || ''},</h2>
        <p>Você solicitou a redefinição da sua senha para o MedTexto.</p>
        <p>Por favor, clique no link abaixo para criar uma nova senha:</p>
        <p style="text-align: center;">
          <a href="${resetLink}"
             style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;"
          >Redefinir Senha</a>
        </p>
        <p>Se você não solicitou esta redefinição, por favor ignore este e-mail. Sua senha atual permanecerá a mesma.</p>
        <p>Este link é válido por 6 horas.</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;"/>
        <p style="font-size: 0.9em; color: #777;">
          Atenciosamente,<br/>
          Equipe MedTexto.
        </p>
      </div>
    `, text: "Você solicitou a redefinição da sua senha para o MedTexto.Por favor, clique no link abaixo para criar uma nova senha:" + resetLink, // plain text body


    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
} catch (err) {
    console.error("Error while sending mail", err);
    return {
        erro: "Error while sending mail",
        payload: formData
    }
}
*/
