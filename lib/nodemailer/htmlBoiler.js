export function htmlNewUser(isAdminCreate, firstName,lastName, tempPassword, token) {
    const year = new Date().getFullYear()

    const path = "/auth/email-confirmation"
    const baseUrl = process.env.URL_BASE
    const href = baseUrl + path + "?token=" + token

    let text = '<p style="color:#666666; margin-top:8px;">Obrigado por se cadastrar. Para completar seu cadastro, confirme seu e-mail clicando no botão abaixo:</p>'

    if (isAdminCreate) {
        text = `<p style="color:#666666; margin - top: 8px; ">Seu acesso foi criado pelo arquiteto.Use a senha provisória abaixo para fazer login:</p >
                <p style="font-size:16px; background-color:#f1f1f1; padding:10px 20px; border-radius:4px; font-weight:bold; display:inline-block; margin-top:10px;">
                  ${tempPassword}</p>
                <p style="color:#666666; margin-top:20px;">
                    Acesse o sistema clicando no botão abaixo:
                </p>`
    }

    return (
        `
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4; padding:40px 0;">
            <tr>
                <td align="center">
                    <table width="100%" max-width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; padding:20px; border-radius:8px; box-shadow:0 0 10px rgba(0,0,0,0.05);">
                        <tr>
                            <td align="center" style="padding: 20px;">
                                <h2 style="color:#333333; margin-bottom:0;"> Seja Bem-vindo ${firstName}  ${lastName}!</h2>
                                ${text}

                                <a href=${href} target="_blank"
                                    style="display:inline-block; margin-top:20px; padding:12px 24px; background-color:#007BFF; color:#ffffff; text-decoration:none; border-radius:4px; font-weight:bold;">
                                    Confirmar E-mail
                                </a>
                                <p style="color:#999999; font-size:12px; margin-top:30px;">
                                    Se você não se cadastrou, pode ignorar este e-mail.
                                </p>
                            </td>
                        </tr>
                    </table>
                    <p style="font-size:12px; color:#aaaaaa; margin-top:20px;">   © ${year} Júlia Lima Arquitetura </p>
                </td>
            </tr>
        </table>
        `

    )
}