import { Controller, FormProvider, useForm } from "react-hook-form";
import { FormField } from "../ui/form-field";
import transformArrayinOptions from "@/lib/utilis/transformArrayInOptions";
import { register } from "module";


export default function Step1({ methods, users, formState }) {

    return (
        <div>
            <div>
                <Controller name="clientId" render={({ field }) => <FormField error={formState.errors?.clientId?.message} label={"Selecione o client"} as="select" options={transformArrayinOptions(users)} {...field} />} />

            </div>
            < div >
            </div>
            < div className="grid grid-cols-2 gap-4" >
                {/* title */}
                < Controller name="title" render={({ field }) => <FormField label={"Nome do projeto"} {...field} />} />
                <p className="text-sm text-red-500 mt-1" > {formState.errors?.title?.message} </p>

                {/* projectType */}
                <Controller name="projectType" render={({ field }) => <FormField error={formState.errors?.projectType?.message} as="select" options={transformArrayinOptions(["Comercial", "Residencial", "Outro"])} label={"Tipo do projeto"} {...field} />} />
            </div>
            < div className="grid grid-cols-2 gap-4" >
                {/* investmentExpectation */}
                < Controller name="investmentExpectation" render={({ field }) => <FormField error={formState.errors?.investmentExpectation?.message} label={"Expectativa de investimento"} {...field} />} />
                {/* area */}
                < Controller name="area" render={({ field }) => <FormField error={formState.errors?.area?.message} label={"Área total"} {...field} />} />
            </div>
            <div>
                {/* coverUrl */}
                <Controller control={methods.control} name="coverUrl" render={({ field }) => <FormField name={"coverUrl"} onChange={e => field.onChange(e.target.files[0])} error={formState.errors?.coverUrl?.message} as="file" label={"URL da imagem de capa"} />} />/
            </div>
        </div>
    )



}