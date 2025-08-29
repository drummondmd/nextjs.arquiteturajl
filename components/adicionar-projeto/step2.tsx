import { Controller, FormProvider, useForm } from "react-hook-form";
import { FormField } from "../ui/form-field";
import transformArrayinOptions from "@/lib/utilis/transformArrayInOptions";

export default function Step2({ methods, users, formState }) {
    return (
        <div className="space-y-6">
            <div>
                <Controller
                    control={methods.control}
                    name="standart"
                    render={({ field }) =>
                        <FormField
                            as="select"
                            options={transformArrayinOptions(["Altissimo Padrão", "Alto Padrão", "Convencional", "Baixo padrão"])}
                            error={formState.errors?.standart?.message}
                            {...field}
                            label="Padrão de acabamento"
                            className="mb-2"
                        />
                    }
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Controller
                    control={methods.control}
                    name="postalCode"
                    render={({ field }) =>
                        <FormField
                            as="input"
                            type="text"
                            error={formState.errors?.postalCode?.message}
                            {...field}
                            label="CEP"
                            className="mb-2"
                        />
                    }
                />
                <Controller
                    control={methods.control}
                    name="country"
                    render={({ field }) =>
                        <FormField
                            as="input"
                            type="text"
                            error={formState.errors?.country?.message}
                            {...field}
                            label="País"
                            className="mb-2"
                        />
                    }
                />
                <Controller
                    control={methods.control}
                    name="state"
                    render={({ field }) =>
                        <FormField
                            as="input"
                            type="text"
                            error={formState.errors?.state?.message}
                            {...field}
                            label="Estado"
                            className="mb-2"
                        />
                    }
                />
                <Controller
                    control={methods.control}
                    name="city"
                    render={({ field }) =>
                        <FormField
                            as="input"
                            type="text"
                            error={formState.errors?.city?.message}
                            {...field}
                            label="Cidade"
                            className="mb-2"
                        />
                    }
                />
                <Controller
                    control={methods.control}
                    name="neighborhood"
                    render={({ field }) =>
                        <FormField
                            as="input"
                            type="text"
                            error={formState.errors?.neighborhood?.message}
                            {...field}
                            label="Bairro"
                            className="mb-2"
                        />
                    }
                />
                <Controller
                    control={methods.control}
                    name="street"
                    render={({ field }) =>
                        <FormField
                            as="input"
                            type="text"
                            error={formState.errors?.street?.message}
                            {...field}
                            label="Rua"
                            className="mb-2"
                        />
                    }
                />
                <Controller
                    control={methods.control}
                    name="number"
                    render={({ field }) =>
                        <FormField
                            as="input"
                            type="text"
                            error={formState.errors?.number?.message}
                            {...field}
                            label="Número"
                            className="mb-2"
                        />
                    }
                />
                <Controller
                    control={methods.control}
                    name="complement"
                    render={({ field }) =>
                        <FormField
                            as="input"
                            type="text"
                            error={formState.errors?.complement?.message}
                            {...field}
                            label="Complemento"
                            className="mb-2"
                        />
                    }
                />
            </div>
        </div>
    )
}