'use server'

import { revalidatePath } from "next/cache";
import { hashPassword } from "../../lib/hash/hash"
import generateRandomPassword, { generateToken } from "../../lib/hash/token";
import { createFunction } from "../../lib/db/create";
import { parseISO } from "date-fns";
import sendEmail from "../../lib/nodemailer/sendEmail";
import { htmlNewUser } from "../../lib/nodemailer/htmlBoiler";
import { getUser } from "../../lib/db/select";
import { redirect } from "next/navigation";


/**
 *
 * @param {string} userType - admin ou cliente ( muda a rota de cadastro), fazer bind na chamada.
 * @param {*} _currentState  -padrão
 * @param {*} formData - padrão
 * @returns {Object} - success(boolean), message, payload se erro.
 */


export default async function createUserAction(userType: string, _currentState?: any, formData?: any): Promise<{ success: boolean; payload?: Object; message?: string; }> {

    const today = new Date()
    const tempPassword = generateRandomPassword()

    const inputs = Object.fromEntries(formData)
    let isAdminCreate = false

    //se user criado pelo admin, fazer senha aleatória.
    if (userType === "arquiteto") {
        inputs.password = tempPassword
        isAdminCreate = true
    }

    ///validação de erros (somente usuario e senha por ora)
    ///resto fazer validação somente no frontEnd, saber que não é ideal.

    const tryTofindUser = await getUser(inputs.email)
    if (tryTofindUser) {
        return { success: false, payload: formData, message: "Email já cadastrado no banco de dados." }
    }
    if (!isAdminCreate && inputs.password != inputs.passwordConfirm || inputs.password.length < 6) {
        return { success: false, payload: formData, message: "Senhas devem corresponder e ter pelo menos 6 caracteres." }

    }

    ///hashPassword
    const hashedPassword = await hashPassword(inputs.password);

    //generate token
    const token = generateToken()

    //objetos que serão upados na database
    const user = {
        email: inputs.email.toLowerCase(),
        emailVerified: false,
        passwordHash: hashedPassword,
        accountStatus: 'ativo',
        createdAt: today,
        lastLogin: null,
        userType: "cliente"
    }

    const userProfile = {
        ///userID - colocado programaticamente depois
        // userId: '17c2140d-8796-48f8-aae3-7d0a41811d5a',

        firstName: inputs.firstName,
        lastName: inputs.lastName,
        ///setar nulo os campos não diponiveis ainda
        phone: null,
        avatarUrl: null,
        birthDate: parseISO(inputs.birthDate),
        gender: inputs.gender,
        identityDoc: null,
        cpf: inputs.cpf,
        occupation: null,
        maritalStatus: null,
        hasChildren: null,
        ageGroup: null,
        stylePreference: null,
        referralSource: null,
        privateNotes: null,
        userId: null
    }

    const userToken = {
        ///userid colocado programaticamente
        // id: 'uuid()',
        // userId: '17c2140d-8796-48f8-aae3-7d0a41811d5a',
        tokenType: 'email_confirmation',
        token: token,
        tokenExpiry: null,
        createdAt: today,
        userId: null
    }


    ///try catch block para colocar na base de dados.

    try {

        ///criando usuario
        const response = await createFunction("user", user)
        ///se resposta verdadeira acrescentar as outras tabelas
        if (response) {
            userProfile.userId = response.id;
            userToken.userId = response.id

            ///apos ter id, inserir nas tabelas correspondentes
            const secondResponse = await createFunction("userProfile", userProfile);
            const thirdResponse = await createFunction("userToken", userToken);
            if (!secondResponse || !thirdResponse) {
                throw new Error("Erro na inserção da segunda e terceira tabela")
            }


        } else {
            throw new Error("Erro na inserção da primeira tabela")
        }
        ////checar se respo

    } catch (error) {
        console.error(error, "Erro ao inserir dados na base de dados.")
        return { success: false, payload: formData, message: "Erro ao cadastrar usuario no banco de dados." }


    }



    ///nodemailer
    const html = htmlNewUser(isAdminCreate, inputs.firstName, inputs.lastName, tempPassword, token, inputs.email)
    sendEmail(inputs.email, "Cadastro de Usuário", html, "Usuário cadastrado com sucesso.")


    //revalidar rotas, pode ser melhorado depois

    revalidatePath('/', 'layout')

    ///redirecionar.
    if (isAdminCreate) {
        redirect("/arquiteto/usuarios")
    } else {
        redirect("/login")
    }




    // return { success: true, payload: formData, message: "Deu certo" }


}