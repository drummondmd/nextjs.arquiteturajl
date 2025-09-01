'use client'

import { constructionTaskUI } from "@/lib/validationSchemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { ConstructionTask } from "@prisma/client"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Toaster } from "sonner";
import z from "zod";
import FormForTasks from "./form";

export default function FormContainerForTasks({ phaseId, prevTasks,projectSlug }: { phaseId: string, prevTasks: Object[], projectSlug:string }) {
    const router = useRouter();

    function ActualPhases() {
        return (<>
            Fases atuais: {JSON.stringify(prevTasks)}
            {prevTasks.length === 0 && <p>Nenhuma fase até o momento</p>}
        </>

        )

    }



    return (
        <div className="px-4 py-8">
            <div> <ActualPhases /></div>
            <div><FormForTasks projectSlug={projectSlug} table="constructionPhases" phaseId={phaseId} /></div>
        </div>


    )

}