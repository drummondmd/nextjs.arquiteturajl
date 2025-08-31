"use client"

import * as React from "react"
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
import { prisma } from "@/lib/db/prisma"
import { NextResponse } from "next/server"
import transformArrayinOptions from "@/lib/utilis/transformArrayInOptions"
import { toast, Toaster } from "sonner"
import { success } from "zod"
import assingProjectOwnerAction from "@/actions/update/assingClientToProjectAction"

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

// function ExampleCombobox() {
//     const [open, setOpen] = React.useState(false)
//     const [value, setValue] = React.useState("")

//     return (
//         <Popover open={open} onOpenChange={setOpen}>
//             <PopoverTrigger asChild>
//                 <Button size={"24px"}
//                     variant="outline"
//                     role="combobox"
//                     aria-expanded={open}
//                     className="w-[200px] justify-between"
//                 >
//                     {value
//                         ? frameworks.find((framework) => framework.value === value)?.label
//                         : "Select framework..."}
//                     <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//                 </Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-[200px] p-0">
//                 <Command>
//                     <CommandInput placeholder="Search framework..." />
//                     <CommandList>
//                         <CommandEmpty>No framework found.</CommandEmpty>
//                         <CommandGroup>
//                             {frameworks.map((framework) => (
//                                 <CommandItem
//                                     key={framework.value}
//                                     value={framework.value}
//                                     onSelect={(currentValue) => {
//                                         setValue(currentValue === value ? "" : currentValue)
//                                         setOpen(false)
//                                     }}
//                                 >
//                                     <CheckIcon
//                                         className={cn(
//                                             "mr-2 h-4 w-4",
//                                             value === framework.value ? "opacity-100" : "opacity-0"
//                                         )}
//                                     />
//                                     {framework.label}
//                                 </CommandItem>
//                             ))}
//                         </CommandGroup>
//                     </CommandList>
//                 </Command>
//             </PopoverContent>
//         </Popover>
//     )
// }


export default function AssingClient({ projectId }) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const [usuarios, setUsuarios] = React.useState([])
    const [fetched, setFetched] = React.useState(false)

    async function fetchOptions() {
        if (fetched) return;
        const res = await fetch("/api/usuarios?userType=cliente")
        const rawResponse = (await res.json()).response;
        setUsuarios(transformArrayinOptions(rawResponse))
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

    console.log(usuarios)
    console.log(usuarios.find((user) => user.label.includes(value)))
    console.log(value)

    return (
        <>
            <Toaster richColors />
            <Popover onOpenChange={(open) => {
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
                                        onSelect={(currentValue) => {
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
