'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Page() {

    const [email, setEmail] = useState("")
    const router = useRouter()

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="rounded border p-5">
                <h5 className="">Digite seu email</h5>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="block" placeholder="email@exemplo.com"></input>
                <Button onClick={() => router.push(`/auth/esqueceu-senha/callback?userEmail=${email}`)} className={"mt-2 w-full rounded"} variant={undefined} size={undefined} >Enviar</Button>


            </div>
        </div>
    )

}