'use client'

import { useActionState } from "react";
import updatePassword from "../../../actions/update/updatePassword";

export default function ResetPasswordClient({ success, email, tokenId,errorMessage }) {

    function Form() {

        const [state, formAction, isPending] = useActionState(updatePassword, {});
        return (

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-6">
                        <div className="card shadow-sm border-0 rounded-3">
                            <div className="card-body p-4">
                                <h3 className="card-title text-center mb-4">Redefinição de Senha</h3>

                                <div className="alert alert-info mb-4">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-shield-lock me-2"></i>
                                        <div>
                                            <p className="mb-0">Digite sua nova senha.</p>
                                        </div>
                                    </div>
                                </div>

                                <form action={formAction}>
                                    {state?.erro && (
                                        <div className="alert alert-danger" role="alert">
                                            <i className="bi bi-exclamation-triangle-fill me-2"></i>
                                            {state.erro}
                                        </div>
                                    )}

                                    {isPending && (
                                        <div className="alert alert-warning" role="alert">
                                            <div className="d-flex align-items-center">
                                                <div className="spinner-border spinner-border-sm me-2" role="status"></div>
                                                <span>Enviando, aguarde um momento...</span>
                                            </div>
                                        </div>
                                    )}
                                    <input name="email" value={email} readOnly hidden />
                                    <input name="tokenId" value={tokenId} readOnly hidden />

                                    <div className="mb-4">
                                        <label htmlFor="password" className="form-label fw-semibold">Nova senha:</label>
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                <i className="bi bi-key"></i>
                                            </span>
                                            <input
                                                id="password"
                                                className="form-control form-control-lg"
                                                type="password"
                                                minLength={6}
                                                name="password"
                                                placeholder="Digite sua nova senha"
                                                required
                                            />
                                        </div>
                                        <div className="form-text">A senha deve ter no mínimo 6 caracteres.</div>
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="passwordConfirmation" className="form-label fw-semibold">Confirme sua senha:</label>
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                <i className="bi bi-check-lg"></i>
                                            </span>
                                            <input
                                                id="passwordConfirmation"
                                                className="form-control form-control-lg"
                                                type="password"
                                                name="passwordConfirmation"
                                                placeholder="Digite novamente sua senha"
                                                required
                                            />
                                        </div>
                                        <div className="form-text">Digite a mesma senha novamente para confirmar.</div>
                                    </div>

                                    <div className="d-grid gap-2">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-lg"
                                            disabled={isPending}
                                        >
                                            {isPending ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                    Processando...
                                                </>
                                            ) : (
                                                'Confirmar Nova Senha'
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );


    }

    function Erro() {
        return (
            <div className="max-w-md mx-auto mt-10">

                <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-md shadow-sm">
                    <div className="flex items-center">
                        {/* Ícone de alerta */}
                        <svg
                            className="h-5 w-5 text-red-500 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8.257 3.099c.765-1.36 2.721-1.36 3.486 0l6.518 11.6A1.75 1.75 0 0116.768 17H3.232a1.75 1.75 0 01-1.493-2.301l6.518-11.6zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-.25-6.75a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"
                                clipRule="evenodd"
                            />
                        </svg>

                        {/* Texto da mensagem */}
                        <p className="text-sm font-medium">{errorMessage}</p>
                    </div>
                </div>
            </div>
        );
    }

    if (success) {
        return <Form />
    } else {
        return <Erro />
    }

}

