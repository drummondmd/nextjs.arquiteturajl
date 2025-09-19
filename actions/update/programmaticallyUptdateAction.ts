'use server'

import {prgmUpdatePayments,prgmUpdatePhasesAndTasks } from "@/lib/utilis/programmaticallyUpdateStatus"

type Response = {
    succces: boolean,
    messages: Array<String>
}

export default async function programmaticallyUptadeAction(): Promise<Response> {

    let messages: Array<String> = []

    try {

        const payments = await prgmUpdatePayments()
        const phaseAndTasks = await prgmUpdatePhasesAndTasks()
        messages = [...messages,payments.message,...phaseAndTasks.messages]


    } catch (error) {
        console.error(error)
        return { succces: false, messages: ["Erro na execução do código"] }

    }

    return {
        succces: true,
        messages
    }

}