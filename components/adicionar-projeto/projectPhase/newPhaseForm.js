'use client'

import { FormProvider, useForm } from "react-hook-form"
import { SubmitButton } from "../../ui/form-field";

export default function NewPhaseForm({ }) {

    let defaultValues = [
        {
            "projectId": "c960305c-36d3-48e1-8e83-112fbf9e0069",
            "name": "Briefing (Levantamento de Necessidades)",
            "startDate": "2025-08-18",
            "expectedEndDate": "2025-08-27",
            "order": 1
        },
        {
            "projectId": "c960305c-36d3-48e1-8e83-112fbf9e0069",
            "name": "Segundo Nome ",
            "startDate": "2025-08-18",
            "expectedEndDate": "2025-08-27",
            "order": 2
        }
    ]

    const methods = useForm();

    function onSubmit(data) {
        alert("oi")
    }

    function InputUnitario({ item }) {
        return (
            <>
                <input readOnly value={item.projectId} {...methods.register("projectId")}></input>
                <div className="border p-4 my-2 grid grid-cols-4 gap-4">
                    <input placeholder="teste" defaultValue={item.order}></input>
                    <input placeholder="teste1" defaultValue={item.name}></input>
                    <input placeholder="teste2" defaultValue={item.startDate}></input>
                    <input placeholder="teste3" defaultValue={item.expectedEndDate}></input>
                </div>


            </>

        )
    }

    return (
        <div>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    {defaultValues.length > 0 && <div>Cabeçalho</div>}
                    {defaultValues.map((elem) => <InputUnitario key={elem.name} item={elem} />)}
                    <SubmitButton loading={methods.loading} />

                </form>

            </FormProvider>


        </div>
    )


}