import splitArrayByStatus from "@/lib/utilis/splitArrayByStatus"
import CardContainer from "../tarefas/cardContainer"

export default function StatusGerenciamento({ user, projeto, etapas }) {


    const splitedConstructionPhase = splitArrayByStatus(projeto.constructionPhases)
    let tasks = []
    projeto.constructionPhases.forEach((fase) => {
        let arrayOfTasks = fase.tasks
        if (arrayOfTasks.length > 0) {
            arrayOfTasks.forEach((elem) => tasks.push(elem))
        }

    })
    const splitedConstructionTask = splitArrayByStatus(tasks)


    return (
        <>
            <CardContainer title={"Etapas de Construção"} objectOfArray={splitedConstructionPhase} isOneProject />
            <CardContainer title={"Tarefas de Construção"} objectOfArray={splitedConstructionTask} isOneProject />

        </>

    )



}