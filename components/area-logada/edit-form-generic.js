import { FormField, SubmitButton } from "../ui/form-field"
import { useActionState } from "react"
import { lightFormat } from "date-fns"
import updateByModal from "../../actions/update/updateByModal"

export function EditFormGeneric({ data, table }) {

    ////terminar
    const [state, formAction, isPending] = useActionState(updateByModal, {})



    const entradas = Object.keys(data)
    const defaultValues =  Object.values(data)
    // id,projectId,paymentType,description,amount,dueDate,status,createdAt,notificationSent,project

    const hiddenInputs = ["id", "projectId"];
    const datas = ["dueDate"]
    const excludedeInputs = ["createdAt", "project", "notificationSent", "status", "paymentType"]

    /*buscar outros elementos que não podem ser atualizados dessa forma
    entradas.forEach((entrada, idx) => {
        if (hiddenInputs.find((elem) => elem === entrada) || datas.find((elem) => elem === entrada)) {
        } else {
            console.log(entrada, defaultValues[idx])

        }
    })
    console.log(defaultValues.map((elem) => typeof (elem)))
    */


    return (
        <form action={formAction}>
            <input name="table" value={table} readOnly hidden />
            {entradas.map((entrada, idx) => {
                if (hiddenInputs.find((elem) => elem === entrada)) {
                    return <input name={entrada} key={entrada} value={defaultValues[idx]} readOnly hidden></input>
                } else if (datas.find((elem) => elem === entrada)) {
                    return <FormField type="date" key={entrada} name={entrada} label={entrada} defaultValue={lightFormat(defaultValues[idx], 'yyyy-MM-dd')} />
                } else if (excludedeInputs.find((elem) => elem === entrada)) { return null }
                else {
                    return <FormField key={entrada} name={entrada} label={entrada} defaultValue={defaultValues[idx]} />
                }






            })}
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