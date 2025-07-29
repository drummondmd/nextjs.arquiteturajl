'use client'

import createUserAction from "../../actions/create/createUser"
import { FormField, SubmitButton } from "../../components/ui/form-field"

import { useActionState } from "react"
import generateRandomPassword, { generateToken } from "../../lib/hash/token"
import { parseISO } from "date-fns"

export default function CriarContaPage() {


    // await sendEmail("marceloll2@yahoo.com.br","teste",null,"Teste de envio")




    const userObj = {
        id: '17c2140d-8796-48f8-aae3-7d0a41811d5a',
        email: 'marcelo@gmail.com',
        emailVerified: false,
        passwordHash: 'hash',
        accountStatus: 'ativo',
        createdAt: null,
        lastLogin: null,
        userType: 'cliente'
    }

    const userProfile = {
        id: '6c73d5c2-f359-4eef-baa9-fe8eda6b1100',
        userId: '17c2140d-8796-48f8-aae3-7d0a41811d5a',
        firstName: 'Carlos',
        lastName: 'Almeida',
        phone: '(11) 91234-5678',
        avatarUrl: null,
        birthDate: null,
        gender: 'Masculino',
        identityDoc: null,
        cpf: null,
        occupation: 'Empresário',
        maritalStatus: 'Casado',
        hasChildren: true,
        ageGroup: '35-44',
        stylePreference: 'Moderno',
        referralSource: 'Indicação de amigo',
        privateNotes: null
    }

    const userTokens = {
        ///userid colocado programaticamente
        // id: 'uuid()',
        // userId: '17c2140d-8796-48f8-aae3-7d0a41811d5a',
        tokenType: 'email',
        token: 'asdasdasdasd',
        tokenExpiry: '2001-11-01T02:00:00.000Z',
        createdAt: '2001-11-01T02:00:00.000Z'
    }


    const [state, formAction, isPending] = useActionState(createUserAction.bind(null,"cliente"), {})

    return (
        <>
            <form action={formAction} className="mt-6 max-w-3xl mx-auto p-6 space-y-6 bg-white rounded shadow">
                <FormField label={"Email"} name={"email"} type="email" state={state} required />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField required state={state} label={"Nome"} name={"firstName"} type="text" />
                    <FormField required state={state} label={"Sobrenome"} name={"lastName"} type="text" />
                </div>

                <FormField required state={state} label={"Sexo"} name={"gender"} options={[{ label: "Masculino", value: "masculino" }, { label: "Feminino", value: "feminino" }]} as="radio" />
                <FormField required state={state} label="Data de Nascimento" as="date" name={"birthDate"} />
                <FormField required state={state} label={"CPF"} name={"cpf"} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField required state={state} label={"Senha"} type="password" name={"password"} />
                    <FormField  required state={state} label={"Confirme sua senha"} type="password" name={"passwordConfirm"} />

                </div>
                {state.success === false && (
                    <div className="text-red-600 bg-red-100 border border-red-300 p-3 rounded text-sm">
                        {state?.message}
                    </div>
                )}
                {state.success && <p className="text-green-600">Formulário enviado com sucesso!</p>}


                <SubmitButton loading={isPending} />



            </form>


        </>

    )



}