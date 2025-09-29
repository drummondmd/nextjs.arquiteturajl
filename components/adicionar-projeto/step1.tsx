import { Controller, FormProvider, useForm } from "react-hook-form";
import { FormField } from "../ui/form-field";
import transformArrayinOptions from "@/lib/utilis/transformArrayInOptions";
import { register } from "module";
import { CirclePlus } from "lucide-react";
import Link from "next/link";


export default function Step1({ methods, users, formState }: { methods: any, users: any, formState: any }) {
    return (
        <div className="space-y-6">
            <div className="flex">
                <Controller
                    name="clientId"
                    render={({ field }) =>
                        <FormField
                            error={formState.errors?.clientId?.message}
                            label="Selecione o cliente"
                            as="select"
                            options={transformArrayinOptions(users)}
                            {...field}
                            className="mb-2 w-5/6"
                        />
                    }
                />
                <button className="p-2 mx-auto" title="Adicionar novo Cliente"><Link href="/arquiteto/usuarios/add"><CirclePlus color="black" /></Link></button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Controller
                    name="title"
                    render={({ field }) =>
                        <FormField
                            error={formState.errors?.title?.message}
                            label="Nome do projeto"
                            {...field}
                            className="mb-2"
                        />
                    }
                />
                <Controller
                    name="projectType"
                    render={({ field }) =>
                        <FormField
                            error={formState.errors?.projectType?.message}
                            as="select"
                            options={transformArrayinOptions(["Comercial", "Residencial", "Corporativo", "Outro"])}
                            label="Tipo do projeto"
                            {...field}
                            className="mb-2"
                        />
                    }
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Controller
                    name="investmentExpectation"
                    render={({ field }) =>
                        <FormField
                            error={formState.errors?.investmentExpectation?.message}
                            label="Expectativa de investimento"
                            value={field.value ? field.value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) : " "}
                            onChange={(e: any) => {
                                const raw = e.target.value.replace(/\D/g, "");
                                const numeric = Number(raw) / 100;
                                field.onChange(numeric);
                            }}
                            name={field.name}



                            // {...field}
                            className="mb-2"
                        />
                    }
                />
                <Controller
                    name="area"
                    render={({ field }) =>
                        <FormField
                            placeholder="m2"
                            error={formState.errors?.area?.message}
                            label="Área total (m2)"
                            {...field}
                            className="mb-2"
                        />
                    }
                />
            </div>
            <div>
                <Controller
                    control={methods.control}
                    name="coverUrl"
                    render={({ field }) =>
                        <FormField
                            name="coverUrl"
                            onChange={(e: any) => field.onChange(e.target.files[0])}
                            error={formState.errors?.coverUrl?.message}
                            as="file"
                            label="Imagem de capa"
                            className="mb-2"
                        />
                    }
                />
            </div>
        </div>
    )
}