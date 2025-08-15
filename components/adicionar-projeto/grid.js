'use client'

import { useState } from "react"
import Step1 from "./step1";
import Step2 from "./step2";

export default function GridAdicionarProjeto() {

    const [step, setStep] = useState(0);

    const step1Schema = {}
    const step2Schema = {}

    const steps = [
        { component: <Step1 />, schema: step1Schema },
        { component: <Step2 />, schema: step2Schema },
    ];

    const nextStep = async () => {

        /* Validação de dados por etapas.

        const currentSchema = steps[step].schema;
        const currentValues = methods.getValues();

        // valida apenas os campos da etapa atual
        const parsed = currentSchema.safeParse(currentValues);
        if (!parsed.success) {
            parsed.error.issues.forEach((issue) => {
                methods.setError(issue.path[0], { message: issue.message });
            });
            return;
        }
        */

        setStep((prev) => prev + 1);
    };

    const prevStep = () => setStep((prev) => prev - 1);

    return (
        <div>
            {/* Step Container */}
            <div>
                {steps[step].component}

            </div>
            {step > 0 && (
                <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded">
                    Voltar
                </button>
            )}
            {step < steps.length - 1 ? (
                <button type="button" onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white rounded">
                    Próximo
                </button>
            ) : (
                <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
                    Enviar
                </button>
            )}


        </div>


    )


}