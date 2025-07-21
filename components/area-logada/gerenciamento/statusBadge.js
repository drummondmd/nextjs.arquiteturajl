export default function StatusBadge({ status }) {

    let colors ={
        "concluido":"bg-emerald-500",
        "em_andamento":"bg-yellow-500",
        "planejado":"bg-stone-500",
        "cancelado":"bg-pink-600",
        "atrasado":"bg-red-500"
    }


    return <span className={`badge ${colors[status]}`}>{status}</span>

}

//   planejado
//   em_andamento
//   concluido
//   cancelado
//   atrasado