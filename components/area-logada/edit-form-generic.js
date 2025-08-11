import { FormField } from "../ui/form-field"
import { useActionState } from "react"
import { formatISO, parseISO } from "date-fns"

export function EditFormGeneric({ data, table }) {

    ////terminar
    const [state, formAction, isPending] = useActionState(() => console.log("Foi"), {})



    const entradas = Object.keys(data)
    const defaultValues = Object.values(data)
    // id,projectId,paymentType,description,amount,dueDate,status,createdAt,notificationSent,project

    const hiddenInputs = ["id", "projectId", "createdAt", "notificationSent", "project"];
    const datas = ["dueDate"]
    return (
        <form action={formAction}>
            <input value={table} readOnly />
            {entradas.map((entrada, idx) => {
                if (hiddenInputs.find((elem) => elem === entrada)) {
                    return <input key={entrada} value={defaultValues[idx]} hidden readOnly></input>
                }else if(datas.find((elem) => elem === entrada)){
                    return <FormField type="date" key={entrada} name={entrada} label={entrada} defaultValue={formatISO(defaultValues[idx])} />
                }

                else {
                    return (
                        <>
                            <FormField key={entrada} name={entrada} label={entrada} defaultValue={defaultValues[idx]} />

                        </>
                    )

                }






            })}
            <button>Submit</button>

        </form>



    )
}