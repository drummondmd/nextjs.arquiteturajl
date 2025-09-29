'use client'

import { UserWithProfile } from "@/lib/db/select";
import { FormField, SubmitButton } from "../ui/form-field";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userProfileSchema, UserProfileType } from "@/lib/validationSchemas/schemas";
import { format, formatDate, parseISO } from "date-fns";
import { toast, Toaster } from "sonner";
import { success } from "zod";
import uptadeUserProfileAction from "@/actions/update/updateUserProfileAction";
import transformArrayinOptions from "@/lib/utilis/transformArrayInOptions";
import convertToLocalDate from "@/lib/utilis/convertToLocalDate";
import { Label } from "recharts";
import { UserProfile } from "@prisma/client";

export default function EditProfileForm({ user }: { user: NonNullable<UserWithProfile> }) {

    // if (!user) return <p>Erro ao encontrar usuário</p>
    type ProfileInClient = Omit<UserProfile, "birthDate"> & { birthDate: string | null }

    const profile = user.profile as ProfileInClient

    user.profile?.birthDate ? profile.birthDate = format(user.profile?.birthDate, "yyyy-MM-dd") : profile.birthDate = null
    profile.avatarUrl = null

    // const defaultNotNullValues = Object.fromEntries(
    //     Object.entries(profile).filter(([chave, valor]) => valor !== null && valor !== undefined)
    // ) as UserProfileType

    ////problemaparase resolver depois


    const methods = useForm({
        resolver: zodResolver(userProfileSchema),
        // defaultValues: defaultNotNullValues
    })

    async function onSubmit(data: any) {
        const toastId = toast.loading("Enviando")
        const response = await uptadeUserProfileAction(data)
        toast.dismiss(toastId)
        if (response.success) {
            toast.success("Dados atualizados com sucesso")
        } else {
            toast.error(response.message)
        }
    }
    const onError = () => {
        toast.error("Confira todos os campos.")
        console.log(methods.formState.errors)
    };






    return (
        <div>
            <Toaster richColors />
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
                    <input hidden {...methods.register("id")} type="text" name="id" readOnly value={profile.id} />
                    <div className="grid md:grid-cols-2 gap-2">
                        <Controller name="firstName"
                            render={({ field }) =>
                                <FormField
                                    error={methods.formState.errors?.firstName?.message}
                                    label={"Nome"}
                                    {...field} />}
                        />
                        <Controller name="lastName"
                            render={({ field }) =>
                                <FormField
                                    error={methods.formState.errors?.lastName?.message}
                                    label={"Sobrenome"}
                                    {...field}
                                />
                            }
                        />

                    </div>
                    <div className="grid md:grid-cols-2 gap-2">
                        <Controller name="identityDoc"
                            render={({ field }) =>
                                <FormField
                                    error={methods.formState.errors?.identityDoc?.message}
                                    label={"Documento de Identidade"}
                                    {...field}
                                />
                            }
                        />
                        <Controller name="cpf"
                            render={({ field }) =>
                                <FormField
                                    error={methods.formState.errors?.cpf?.message}
                                    label={"CPF"}
                                    {...field}
                                />
                            }
                        />
                    </div>
                    <div className="grid md:grid-cols-3 gap-2">
                        <Controller name="phone"
                            render={({ field }) =>
                                <FormField
                                    error={methods.formState.errors?.phone?.message}
                                    label={"Telefone"}
                                    {...field}
                                />
                            }
                        />
                        <Controller name="birthDate"
                            render={({ field }) =>
                                <FormField
                                    error={methods.formState.errors?.birthDate?.message}
                                    label={"Data de Nascimento"}
                                    type="date"
                                    {...field}
                                />
                            }
                        />
                        <Controller name="gender"
                            render={({ field }) =>
                                <FormField
                                    as="select"
                                    options={transformArrayinOptions(["masculino", "feminino", "outro"])}
                                    error={methods.formState.errors?.gender?.message}
                                    label={"Gênero"}
                                    {...field}
                                />
                            }
                        />

                    </div>
                    <div className="grid md:grid-cols-2 md:gap-2">
                        <Controller name="referralSource"
                            render={({ field }) =>
                                <FormField
                                    error={methods.formState.errors?.referralSource?.message}
                                    label={"Como conheceu o escritório"}
                                    {...field}
                                />
                            }
                        />
                        <Controller name="occupation"
                            render={({ field }) =>
                                <FormField
                                    error={methods.formState.errors?.occupation?.message}
                                    label={"Ocupação"}
                                    {...field}
                                />
                            }
                        />
                        <Controller name="maritalStatus"
                            render={({ field }) =>
                                <FormField
                                    error={methods.formState.errors?.maritalStatus?.message}
                                    label={"Estado Civil"}
                                    {...field}
                                />
                            }
                        />
                        {/* Has childen comentado por ora, por não saber validar. */}
                        {/* <Controller name="hasChildren"
                            render={({ field }) =>
                                <FormField
                                    name={"hasChildren"}
                                    as="radio"
                                    options={[{ value: true, label: "Sim" }, { value: "", label: "Não" }]}
                                    error={methods.formState.errors?.hasChildren?.message}
                                    label={"Possui filhos?"}
                                    onChange={e => field.onChange(e.target.checked)}
                                />
                            }
                        /> */}
                    </div>


                    <Controller name="avatarUrl"
                        render={({ field }) =>
                            <FormField
                                name={"avatarUrl"}
                                as="file"
                                error={methods.formState.errors?.avatarUrl?.message}
                                label={"Foto de Capa"}
                                onChange={(e: any) => field.onChange(e.target.files[0])}
                            />
                        }
                    />




                    <Controller name="stylePreference"
                        render={({ field }) =>
                            <FormField
                                error={methods.formState.errors?.stylePreference?.message}
                                label={"Preferência de Estilo"}
                                {...field}
                            />
                        }
                    />



                    <SubmitButton />
                </form>

            </FormProvider>



        </div>
    )
}