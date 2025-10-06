import { FormField, SubmitButton } from "../ui/form-field"
import { useActionState } from "react"
import { lightFormat } from "date-fns"
import updateByModal from "../../actions/update/updateByModal"

export function EditFormGeneric({ data, table }) {

    ////terminar
    const [state, formAction, isPending] = useActionState(updateByModal, {})



    const entradas = Object.keys(data)

    const defaultValues = Object.values(data)
    // id,projectId,paymentType,description,amount,dueDate,status,createdAt,notificationSent,project

    const iasdasd = ["name", "budget", "actualCost", "notes", "order"]

    const hiddenInputs = ["id", "projectId","phaseId"];
    const datas = ["dueDate", "startDate", "expectedEndDate"];
    const excludedeInputs = ["createdAt", "project", "notificationSent", "status", "paymentType", "endDate", "responsible", "tasks","actualCost"];

    return (
        <form action={formAction}>
            <input name="table" value={table} readOnly hidden />
            <div className="grid md:grid-cols-2 gap-4">
                {entradas.map((entrada, idx) => {
                    if (hiddenInputs.find((elem) => elem === entrada)) {
                        return <input name={entrada} key={entrada} value={defaultValues[idx]} readOnly hidden></input>
                    } else if (datas.find((elem) => elem === entrada)) {
                        return <FormField staticForm={true} type="date" key={entrada} name={entrada} label={entrada} defaultValue={lightFormat(defaultValues[idx], 'yyyy-MM-dd')} />
                    } else if (excludedeInputs.find((elem) => elem === entrada)) { return null }
                    else {
                        return <FormField staticForm={true} key={entrada} name={entrada} label={entrada} defaultValue={defaultValues[idx]} />
                    }






                })}

            </div>

            {state.success === false && (
                <div className="text-red-600 bg-red-100 border border-red-300 p-3 rounded text-sm">
                    {state?.message}
                </div>
            )}
            {state.success && <p className="text-green-600">Formulário enviado com sucesso!</p>}

            <SubmitButton loading={isPending} />
        </form>



    )
}