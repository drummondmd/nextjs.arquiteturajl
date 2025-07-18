const both = [{ nome: "Home", slug: "home"},{ nome: "Projetos", slug: "projetos"}, {nome: "Orçamentos", slug: "orcamentos"}, {nome:"Informaçoes/Preferencias",slug:"info"}]

export const linksForSideBar = [
    { role: "arquiteto", links: [...both, {nome:"Financeiro" ,slug:"financeiro"}, { nome: "Calculadora de orçamento", slug: "calculadora-de-orcamento" },{ nome: "Estimativa Custo de Obra", slug: "estimativa-obra" },{nome:"Grafico de Grantt", slug:"grafico-de-grantt"}] }, { role: "cliente", links: [...both] }
]