'use client'

import programmaticallyUptadeAction from "@/actions/update/programmaticallyUptdateAction"
import { Button } from "@/components/ui/button"
import { toast, Toaster } from "sonner"

export default function ClientForHome() {

    async function handleClick() {
        let response = await programmaticallyUptadeAction()

        if (!response.succces) {
            toast.error(response.messages[0])
        } else {
            response.messages.forEach((item, index) => {
                setTimeout(() => {
                    toast.success(item)
                }, 1000 * (index + 1));
            })
        }

    }

    return (
        <>
            <Toaster richColors />
            <Button onClick={handleClick} className={"rounded"} variant={undefined} size={undefined}>Atualizar automaticamente status</Button>

        </>

    )

}

