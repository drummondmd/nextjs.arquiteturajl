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

function ExampleCombobox() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? frameworks.find((framework) => framework.value === value)?.label
                        : "Select framework..."}
                    <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search framework..." />
                    <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                            {frameworks.map((framework) => (
                                <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <CheckIcon
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === framework.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {framework.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}


export default function AssingClient() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const [usuarios, setUsuarios] = React.useState([])
    const [fetched,setFetched] = React.useState(false)

    // const usuarios: { value: string, label: string }[] = [{ label: "usuario1", value: "usuario1" }, { label: "usuario2", value: "usuario2" }]

    function fetchOptions(){
        const users = [{ label: "usuario1", value: "usuario1" }, { label: "usuario2", value: "usuario2" }];
        setUsuarios(users)
    }

    console.log(usuarios)


    return (
        <Popover onOpenChange={(open)=>{
            if(open) fetchOptions()
        }} >
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="justify-between"
                >
                    {value
                        ? usuarios.find((user) => user.value === value)?.label
                        : "Selecione o Cliente..."}
                    <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <Command>
                    <CommandInput placeholder="Selecione o Cliente..." />
                    <CommandList>
                        <CommandEmpty>Nenhum cliente encontrado</CommandEmpty>
                        <CommandGroup>
                            {usuarios.map((user) => (
                                <CommandItem
                                    key={user.value}
                                    value={user.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <CheckIcon
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === user.value ? "opacity-100" : "opacity-0"
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
    )
}
