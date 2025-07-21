////porcentagem das tarefas feitas

/**

@param {Array} tasks - Array de tarefas a ser reavaliado
@returns {Number} - porcentagem de tarefas completadas, null se não tiver nenhuma tarefa

*/


export default function getPercentageOfTasks(tasks) {

    if(!tasks || tasks.length === 0){
        return null
    }

    const taskStatus = tasks.map(task => {
        if (task.status === "planejado" || task.status === "atrasado") {
            return 0
        } else if (task.status === "em_andamento") {
            return 0.5
        } else if (task.status === "concluido") {
            return 1
        } else {
            return null
        }
    });
    const lengthAjustado = taskStatus.filter(status => status !== null).length;
    const percentage = Math.round(taskStatus.reduce((acc, curr) => acc + curr, 0) / lengthAjustado * 100)

    return percentage

}