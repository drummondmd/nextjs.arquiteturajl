'use server'

import { hashPassword } from "../../lib/hash/hash"
import generateRandomPassword, { generateToken } from "../../lib/hash/token";


export default async function createUserAction(userType, currentState, formData) {

    console.log(userType)
    const today = new Date()

    const inputs = Object.fromEntries(formData)


    ////validar erros depois.

    ///hashPassword
    const hashedPassword = await hashPassword(inputs.password);
    const token = generateToken()
    console.log(token)
    console.log(generateRandomPassword())


    ///userObject
    const user = {
        email: inputs.email,
        emailVerified: false,
        passwordHash: hashedPassword,
        accountStatus: 'ativo',
        createdAt: today,
        lastLogin: null,
        userType: 'cliente'
    }

    const userProfile = {
        ///userID - colocado programaticamente depois
        // userId: '17c2140d-8796-48f8-aae3-7d0a41811d5a',

        firstName: inputs.firstName,
        lastName: inputs.lastName,
        ///setar nulo os campos não diponiveis ainda
        phone: null,
        avatarUrl: null,
        birthDate: inputs.birthDate,
        gender: inputs.gender,
        identityDoc: null,
        cpf: inputs.cpf,
        occupation: null,
        maritalStatus: null,
        hasChildren: null,
        ageGroup: null,
        stylePreference: null,
        referralSource: null,
        privateNotes: null
    }



    return { success: false, payload: formData, message: "Erro" }


}