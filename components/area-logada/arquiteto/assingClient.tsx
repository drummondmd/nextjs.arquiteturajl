"use client"

import { CheckIcon, ChevronsUpDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import transformArrayinOptions from "@/lib/utilis/transformArrayInOptions"
import { toast, Toaster } from "sonner"
import assingProjectOwnerAction from "@/actions/update/assingClientToProjectAction"
import { User, UserProfile } from "@prisma/client"
import { useState } from "react"

const frameworks = [
    {
        value: "next.js",
        label: "Next.js",
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
]


export default function AssingClient({ projectId }: { projectId: string }) {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const [usuarios, setUsuarios] = useState<{ value: string; label: string }[] | []>([])
    const [fetched, setFetched] = useState(false)

    async function fetchOptions() {
        if (fetched) return;
        const res = await fetch("/api/usuarios?userType=cliente")
        const rawResponse = (await res.json()).response as Array<User & { profile: NonNullable<UserProfile> }>
        setUsuarios(
            transformArrayinOptions(
                rawResponse.map(user => ({
                    id: user.id,
                    profile: {
                        firstName: user.profile.firstName ?? undefined,
                        lastName: user.profile.lastName ?? undefined
                    }
                }))
            )
        )
        setFetched(true)
    }

    async function OnSelectClient(value: string) {

        ////server function
        const response = await assingProjectOwnerAction(projectId, value)
        if (response.success) {
            toast.success("Projeto atribuido ao cliente com sucesso.")
        } else {
            toast.error(response.message)
        }

    }
    return (
        <>
            <Toaster richColors />
            <Popover onOpenChange={(open: boolean) => {
                if (open) fetchOptions()
            }} >
                <PopoverTrigger asChild>
                    <Button
                        size=""
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="justify-between px-2 m-0"
                    >
                        {value
                            ? usuarios.find((user) => user.label.includes(value))?.label
                            : "Selecione o Cliente..."}
                        <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="">
                    <Command className="">
                        <CommandInput className={""} placeholder="Selecione o Cliente..." />
                        <CommandList className={""}>
                            <CommandEmpty>Nenhum cliente encontrado</CommandEmpty>
                            <CommandGroup className={""}>
                                {usuarios.map((user) => (
                                    <CommandItem className={""}
                                        key={user.value}
                                        value={user.label}
                                        onSelect={(currentValue: string) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            OnSelectClient(user.value)
                                            setOpen(false)
                                        }}
                                    >
                                        <CheckIcon
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                user.label.includes(value) && value != "" ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {user.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>


                        </CommandList>


                    </Command>

                </PopoverContent>


            </Popover>


        </>


    )
}
