'use client'

import { useActionState, useEffect, useState } from "react"
import calcOrcamento from "./action"

export default function CalculadoraDeOrcamentoGrid() {
  const [state, formAction, isPending] = useActionState(calcOrcamento, null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    setResult(state?.result);
  }, [state]);

  return (
    <div className="p-6">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3" id="novo-orcamento">
          <p className="text-lg font-semibold mb-4">Calculadora de Orçamento</p>

          <form id="orcamento-form" action={formAction} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium">Fator de correção</label>
                <input
                  readOnly
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  step={0.1}
                  type="number"
                  name="fator-correcao"
                  defaultValue={0.2}
                  min={0.1}
                  max={1}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <div>
                <label className="block text-sm font-medium">Metragem:</label>
                <input
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  type="number"
                  placeholder="M2 do espaço, se descoberto colocar 1/4"
                  name="amb"
                  min="1"
                  max="999"
                  required

                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Tipo de Estabelecimento</label>
                <select
                  name="tipo"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  defaultValue="residencial"
                >
                  <option value="residencial">Residencial</option>
                  <option value="comercial">Comercial</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Padrão de construção:</label>
                <select
                  name="padrao"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  defaultValue="normal"
                >
                  <option value="baixo">Baixo padrão</option>
                  <option value="normal">Normal</option>
                  <option value="alto">Alto padrão</option>
                </select>
              </div>
            </div>

            <hr />

            <p className="text-md font-semibold">Grau de Complexidade do projeto:</p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium">Porte do Projeto:</label>
                <select name="porte-projeto" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue="1">
                  <option value="0.7">Baixo</option>
                  <option value="1">Normal</option>
                  <option value="1.3">Alto</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium">Indefinição de Escopo</label>
                <select name="escopo-projeto" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue="1">
                  <option value="0.7">Baixo</option>
                  <option value="1">Normal</option>
                  <option value="1.3">Alto</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium">Indefinição de Prazo</label>
                <select name="prazo-projeto" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue="1">
                  <option value="0.7">Baixo</option>
                  <option value="1">Normal</option>
                  <option value="1.3">Alto</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium">Controle de Custo</label>
                <select name="controle-custo-projeto" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue="1">
                  <option value="0.7">Baixo</option>
                  <option value="1">Normal</option>
                  <option value="1.3">Alto</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium">Intervenção do Cliente</label>
                <select name="intervencao-cliente" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue="1">
                  <option value="0.7">Baixo</option>
                  <option value="1">Normal</option>
                  <option value="1.3">Alto</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium">Grau de detalhamento</label>
                <select name="grau-detalhamento" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue="1">
                  <option value="0.7">Baixo</option>
                  <option value="1">Normal</option>
                  <option value="1.3">Alto</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium">Qnt. de Aprovações</label>
                <select name="aprovacoes" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue="1">
                  <option value="0.7">Baixo</option>
                  <option value="1">Normal</option>
                  <option value="1.3">Alto</option>
                </select>
              </div>
            </div>

            <div className="pt-4">
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                name="calcular-orcamento"
              >
                Calcular Orçamento
              </button>
            </div>
          </form>
        </div>

        <div className="lg:w-1/3">
          <p className="text-lg font-semibold mb-2">Resultado</p>
          {isPending && <p className="text-gray-500">Carregando...</p>}
          {result && <div className="mt-2 text-green-600">{result}</div>}
        </div>
      </div>
    </div>
  );
}
