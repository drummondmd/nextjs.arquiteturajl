'use client'

import { formatDate } from "date-fns"
import { Fragment, useEffect } from "react";
import { useState } from "react";
import { addDaysAndFormatISO } from "../../../lib/utilis/formatDate";

export default function AddProjectPhaseGrid({ project }) {

    const defaultPhase = ["Briefing (Levantamento de Necessidades)", "Levantamento Técnico", "Estudo Preliminar / Conceito", "Anteprojeto", "Projeto Executivo", "Compatibilização e Orçamento", "Obra / Acompanhamento", "Entrega e Pós-Obra"];
    const defaultCheckboxs = defaultPhase.map((phase, index) => {
        return (
            {
                label: phase,
                checked: false,
            }
        )
    })

    const [selectors, setSelectors] = useState({ date: formatDate(new Date(), "yyyy-MM-dd"), checkboxs: defaultCheckboxs });
    const [selected, setSelected] = useState([])
    const [formDefault, setFormDefault] = useState([])

    const handleSelectorsChange = (e) => {
        if (e.target.name === "date") {
            setSelectors({ ...selectors, date: e.target.value })
        } else {
            const selectedName = e.target.name
            const index = selectors.checkboxs.findIndex((elem) => elem.label === selectedName)
            const newObject = { ...selectors.checkboxs[index], checked: !selectors.checkboxs[index].checked }
            const newArray = [...selectors.checkboxs]
            newArray[index] = newObject
            console.log(index, newObject, newArray)
            setSelectors({ ...selectors, checkboxs: newArray })

        }
    }


    ///useEffect para mudar tabela sempre que mudar seletor.
    useEffect(() => {
        const filter = selectors.checkboxs.filter((checkbox) => checkbox.checked == true)
        const filterMaped = filter.map((item, index) => {
            return ({
                ...item,
                order: index + 1,
                duration: 10
            })
        })
        setSelected(filterMaped)

    }, [selectors])


    ////mudar state ao mexer em tabela
    const handleTableChange = (e, item) => {
        const value = e.target.value;
        const name = e.target.name;
        const index = selected.findIndex((elem) => elem.label === item);
        const newObject = { ...selected[index], [name]: value }
        console.log(newObject)
        const newArray = [...selected];
        newArray[index] = newObject;
        setSelected(newArray)
    }

    ///fazer os defaultvalues para o formulario
    const inputToForm = () => {
        // const ref = {
        //     projectId:z.string(),
        //     name:z.string().min(1,"Insira um nome válido"),
        //     startDate:z.iso.date(),
        //     expectedEndDate:z.iso.date(),
        //     order:z.number()
        // }
        const defaultValues = [];
        selected.forEach((elem, index) => {
            if (index === 0) {
                defaultValues.push({
                    projectId: project.id,
                    name: elem.label,
                    startDate: selectors.date,
                    expectedEndDate: addDaysAndFormatISO(selectors.date,elem.duration),
                    order: elem.order
                })
            }else{

            }

        })
        console.log(defaultValues)
        alert("inputtoform")
    }


    return (
        <div className="mt-2">
            <div className="my-5">
                Cabeçalho {project.title}
            </div>
            <div>
                <div>
                    <div>
                        <input type="date" name="date" value={selectors.date} onChange={handleSelectorsChange} />
                        <div>
                            {selectors.checkboxs.map((elem) => <label key={elem.label}> {elem.label}
                                <input type="checkbox" name={elem.label} checked={elem.checked} onChange={handleSelectorsChange} />
                            </label>)}

                        </div>
                    </div>
                    <div className="my-3 bg-gray-200">
                        <div className="grid grid-cols-3 gap-2">
                            <div>Ordem</div>
                            <div>Nome</div>
                            <div>Dias Uteis</div>
                            {selected.map((elem) => {
                                return (
                                    <Fragment key={elem.label}>
                                        <div><input name="order" onChange={(e) => handleTableChange(e, elem.label)} value={elem.order} type="number" /></div>
                                        <div>{elem.label}</div>
                                        <div><input type="number" name="duration" onChange={(e) => handleTableChange(e, elem.label)} value={elem.duration} /></div>
                                    </Fragment>
                                )
                            })}

                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={inputToForm}>Fazer o formulario</button>
                </div>
                <div>

                </div>
            </div>
            <div>
                Footer
            </div>

        </div >
    )

}