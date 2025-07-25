'use client'

import { useActionState } from "react"
import { addFileToDriveAndDB } from "../../../../../actions/create/addFileToDbs"

////criando separado por ora, depois pode mudar.

export default function AddDocumentPage() {
    const [state, formAction, isPending] = useActionState(addFileToDriveAndDB,"Ainda sem resultado")


    const dbobj = {
        id: '9f5d94aa-16bc-402a-8e84-45d36bc1d67c',
        projectId: 'c960305c-36d3-48e1-8e83-112fbf9e0069',
        name: 'Planta Arquitetônica',
        type: 'planta',
        link: 'https://example.com/planta-moema.pdf',
        notes: 'Versão inicial da planta.',
        uploadedAt: "2025-07-07T18: 13: 43.377Z",
        uploadedById: null,
        visibleToClient: true,
        description: 'Planta baixa com layout de móveis'
    }


    return (
        <div className="mt-5 my-5">
            <p>{isPending && "Carregando"}</p>
            {state?<p>{state}</p>:"Sem resultado"}

            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action={formAction}>
                <div className="form-group">
                    <label className="form-label">Projeto -select depois</label>
                    <input name="projectId" className="form-control" defaultValue={"c960305c-36d3-48e1-8e83-112fbf9e0069"}/>
                </div>
                <div className="form-group">
                    <label className="form-label">Nome do arquivo.</label>
                    <input type="text" defaultValue={"Orçamento"} name="name" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Tipo do arquivo.</label>
                    <input type="text" defaultValue={"Orçamento"} name="type" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Descrição do arquivo</label>
                    <input defaultValue={"Orçamento de Fulano"} name="description" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Notas</label>
                    <input name="notes" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Sim</label>
                    <input defaultChecked={true} type="radio" value={true} name="visible" className="form-radio" />
                </div>
                <div className="form-group">
                    <label className="form-label">Não</label>
                    <input type="radio" value={false} name="visible" className="form-radio" />
                </div>
                <div className="form-group">
                    <label className="form-label">Arquivo</label>
                    <input type="file" name="file" className="form-control" />
                </div>
                <div className="mt-4">
                    <input type="submit" className="btn btn-primary" />
                </div>

            </form>



        </div>
    )
}