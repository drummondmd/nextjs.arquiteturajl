import { formatarDataBR } from "@/lib/utilis/formatDate"
import { endOfWeek, isSameMonth, isSameWeek, isToday } from "date-fns";
import convertToLocalDate from "@/lib/utilis/convertToLocalDate"
import splitArrayByStatus from "@/lib/utilis/splitArrayByStatus";
import StatusBadge from "@/components/area-logada/gerenciamento/statusBadge";
import CardTarefas from "@/components/area-logada/tarefas/card";
import normalizePrismaData from "@/lib/utilis/normalize-prisma";

export default function CardContainer({ title, objectOfArray,isOneProject }) {
    // Não há mudanças na lógica, apenas nas classes do Tailwind.
    // Supondo que as variáveis `title` e `objectOfArray` e o componente `CardTarefas`
    // estão disponíveis no escopo.

    return (
        // CONTAINER PRINCIPAL
        // Usamos 'h-screen' para fazer o layout ocupar a tela inteira.
        // 'flex' para o layout de duas colunas.
        // 'bg-gray-50' para um fundo geral muito sutil.
        <div className="flex bg-gray-50">

            {/* COLUNA DO TÍTULO (Barra Lateral) */}
            {/*
          - 'w-64' para uma largura fixa e generosa.
          - 'bg-white' e 'border-r' para criar uma distinção clara da área de conteúdo.
          - 'p-6' para um bom espaçamento interno.
          - 'flex flex-col' para permitir alinhamentos verticais.
        */}
            <div className="w-64 flex-shrink-0 bg-white border-r border-gray-200 p-6 flex flex-col">
                {/* Título do Projeto/Seção */}
                <h1 className="text-2xl font-bold text-gray-800">
                    {title}
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                    Visão geral das tarefas
                </p>
                {/* Você pode adicionar outros elementos aqui, como filtros ou menus */}
            </div>

            {/* ÁREA DE CONTEÚDO (Colunas de Tarefas) */}
            {/*
          - 'flex-1' faz esta área ocupar todo o espaço restante.
          - 'flex' e 'overflow-x-auto' para o layout de rolagem horizontal.
          - 'p-6' ou 'p-8' para um espaçamento generoso ao redor das colunas.
          - 'space-x-6' para um espaçamento consistente entre os cards.
        */}
            <div className="flex-1 flex overflow-x-auto space-x-6 p-6">
                {/* Seus cards de tarefas */}
                <CardTarefas color="bg-red-100" title="Atrasado" array={objectOfArray["atrasado"]} isOneProject={isOneProject} />
                <CardTarefas color="bg-blue-100" title="Hoje" array={objectOfArray["hoje"]} displayStatus={true} isOneProject={isOneProject} />
                <CardTarefas color="bg-yellow-100" title="Essa semana" array={objectOfArray["semana"]} displayStatus={true} isOneProject={isOneProject} />
                <CardTarefas color="bg-indigo-100" title="Esse mês" array={objectOfArray["mes"]} displayStatus={true} isOneProject={isOneProject} />
                <CardTarefas color="bg-purple-100" title="Mais adiante" array={objectOfArray["adiante"]} displayStatus={true} isOneProject={isOneProject} />
                <CardTarefas color="bg-green-100" title="Concluído" array={objectOfArray["concluido"]} collapsedAsDefault isOneProject={isOneProject} />
                <CardTarefas color="bg-gray-200" title="Cancelado" array={objectOfArray["cancelado"]} collapsedAsDefault isOneProject={isOneProject} />
            </div>
        </div>
    );


}

