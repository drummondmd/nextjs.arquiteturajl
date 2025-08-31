const both = [{ nome: "Projetos", slug: "projetos"}, {nome: "Orçamentos", slug: "orcamentos"}]

export const linksForSideBar = [
    { role: "arquiteto", links: [{ nome: "Home", slug: "home"},...both, {nome:"Tarefas" ,slug:"tarefas"}, {nome:"Documentos" ,slug:"documentos"},  {nome:"Financeiro" ,slug:"financeiro"}, { nome: "Calculadora de orçamento", slug: "calculadora-de-orcamento" },{ nome: "Estimativa Custo de Obra", slug: "estimativa-obra" },] }, { role: "cliente", links: [...both] }
]

///nextSteps ( proprietario e admin)
//arquiteto
// {nome:"Grafico de Grantt", slug:"grafico-de-grantt"}