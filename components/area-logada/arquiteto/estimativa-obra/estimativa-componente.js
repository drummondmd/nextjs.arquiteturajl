'use client'

import { useState } from "react"
import { calcularEstimativa } from "./calcularEstimativa";

export default function EstimativaComponent({ referencia }) {

    const serverReferencia = referencia;


    const componentesObject = referencia.map((elem) => {
        return { nome: elem.item, valor: false }
    })



    const [metragem, setMetragem] = useState(0)
    const [checkbox, setCheck] = useState(componentesObject)
    const [resultado, setResultado] = useState(undefined)
    const [total, setTotal] = useState(undefined)

    function handleCheckChange(e) {
        const componente = e.target.value
        const valor = e.target.checked
        const newArray = checkbox.map((elem) => {
            if (elem.nome === componente) {
                return { ...elem, valor: valor }
            } else {
                return elem
            }
        })
        setCheck(newArray)
    }

    function selecionarTodos() {
        setCheck(() => {
            return checkbox.map((elem) => {
                return { ...elem, valor: true }
            })
        })
    }

    function limparTodos() {
        setCheck(() => {
            return checkbox.map((elem) => {
                return { ...elem, valor: false }
            })
        })

    }

    function handleCalculo() {
        const isArrayEmpty = checkbox.some((elem) => elem.valor === true)
        if (metragem === 0 || !isArrayEmpty) {
            alert("Entre com a metragem ou selecione componentes")
        } else {
            referencia = serverReferencia
            setResultado(undefined)
            const result = calcularEstimativa(referencia, metragem, checkbox)
            setResultado(result.calcArray)
            setTotal(result.soma)

        }

    }


    return (
        <div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6 mt-4">
            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Metragem:</label>
                <input
                    name="metragem"
                    type="number"
                    value={metragem}
                    onChange={(e) => setMetragem(e.target.value)}
                    className=" w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 "
                />
            </div>

            <div className="flex flex-wrap gap-4">
                <button
                    onClick={selecionarTodos}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                    Selecionar todos
                </button>
                <button
                    onClick={limparTodos}
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
                >
                    Limpar
                </button>
            </div>

            <div id="checkbox-grid" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {checkbox.map((componente) => (
                    <div key={componente.nome} className="flex items-center gap-2">
                        <input
                            onChange={handleCheckChange}
                            checked={componente.valor}
                            type="checkbox"
                            name="componentes"
                            value={componente.nome}
                            className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label className="text-sm text-gray-700">{componente.nome}</label>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap gap-4">
                <button
                    type="button"
                    onClick={handleCalculo}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                >
                    Calcular
                </button>
                <button
                    type="button"
                    onClick={() => setResultado(undefined)}
                    className="px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 transition"
                >
                    Limpar Resultado
                </button>
            </div>

            {resultado && (
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-gray-600 border border-gray-200 rounded-lg">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 font-semibold">Item</th>
                                <th className="px-4 py-2 font-semibold">Classe Média</th>
                                <th className="px-4 py-2 font-semibold">Rico</th>
                                <th className="px-4 py-2 font-semibold">Rico Médio</th>
                                <th className="px-4 py-2 font-semibold">Ultra Rico</th>
                                <th className="px-4 py-2 font-semibold">Extremo Ultra Rico</th>
                            </tr>
                        </thead>
                        <tbody>
                            {resultado.map((item) => (
                                <tr key={item.item} className="border-t">
                                    <td className="px-4 py-2 font-medium">{item.item}</td>
                                    <td className="px-4 py-2">R$ {item.cme.toLocaleString('pt-BR')}</td>
                                    <td className="px-4 py-2">R$ {item.r.toLocaleString('pt-BR')}</td>
                                    <td className="px-4 py-2">R$ {item.re.toLocaleString('pt-BR')}</td>
                                    <td className="px-4 py-2">R$ {item.ur.toLocaleString('pt-BR')}</td>
                                    <td className="px-4 py-2">R$ {item.eur.toLocaleString('pt-BR')}</td>
                                </tr>
                            ))}
                            {total && (
                                <tr className="border-t-4 border-gray-300 bg-blue-50 font-semibold text-blue-800">
                                    <td className="px-4 py-3">Total</td>
                                    <td className="px-4 py-3">R$ {total.cme.toLocaleString('pt-BR')}</td>
                                    <td className="px-4 py-3">R$ {total.r.toLocaleString('pt-BR')}</td>
                                    <td className="px-4 py-3">R$ {total.re.toLocaleString('pt-BR')}</td>
                                    <td className="px-4 py-3">R$ {total.ur.toLocaleString('pt-BR')}</td>
                                    <td className="px-4 py-3">R$ {total.eur.toLocaleString('pt-BR')}</td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )


}