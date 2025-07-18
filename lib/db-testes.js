
export const projetosFromDatabase = [
    { id: "p1", slug: "casa-bonita", endereco: "Rua José da Silva Braga", cidade: "Belo Horizonte", orcamento_inicial: "120000", orcamento_previsto: "145000", orcamento_realizado: "450000", data_criacao: "2025-06-01", data_finalizacao: "2026-01-01", cliente_id: "u1", padrao: "u2", titulo: "Casa Bonita", status: "em_andamento" },
    { id: "p2", slug: "apartamento-verde", endereco: "Rua José da Silva Braga", cidade: "Belo Horizonte", orcamento_inicial: "120000", orcamento_previsto: "145000", orcamento_realizado: "450000", data_criacao: "2025-06-02", data_finalizacao: "2026-01-01", cliente_id: "u1", padrao: "u2", titulo: "Apartamento Verde", status: "planejado" },
    { id: "p3", slug: "loft-moderno", endereco: "Rua José da Silva Braga", cidade: "Belo Horizonte", orcamento_inicial: "120000", orcamento_previsto: "145000", orcamento_realizado: "450000", data_criacao: "2025-06-03", data_finalizacao: "2026-01-01", cliente_id: "u1", padrao: "u2", titulo: "Loft Moderno", status: "concluido" },
    { id: "p4", slug: "reforma-gourmet", endereco: "Rua José da Silva Bragaa", cidade: "Belo Horizonte", orcamento_inicial: "120000", orcamento_previsto: "145000", orcamento_realizado: "450000", data_criacao: "2025-06-04", data_finalizacao: "2026-01-01", cliente_id: "u5", padrao: "u2", titulo: "Reforma Gourmet", status: "em_andamento" },
    { id: "p5", slug: "cobertura-nobre", endereco: "Rua José da Silva Braga", cidade: "Belo Horizonte", orcamento_inicial: "120000", orcamento_previsto: "145000", orcamento_realizado: "450000", data_criacao: "2025-06-05", data_finalizacao: "2026-01-01", cliente_id: "u2", padrao: "u2", titulo: "Cobertura Nobre", status: "planejado" },
];

export const etapasProjetosFromDatabase = [
    { id: "ai", projeto_id: "p1", nome: "Préliminar", status: "Em andamento", data_inicio: "2024-11-01", data_prevista_fim: "2024-11-15", data_fim: null, observacao: "Aguardando aprovação do cliente para seguir com detalhamento" }, { projeto_id: "p1", nome: "Anteprojeto", status: "Pendente", data_inicio: null, data_prevista_fim: "2024-11-30", data_fim: null, observacao: "Início previsto após aprovação da etapa preliminar" }, { projeto_id: "p1", nome: "Projeto Executivo", status: "Pendente", data_inicio: null, data_prevista_fim: "2024-12-20", data_fim: null, observacao: "" }, { projeto_id: "p1", nome: "Compatibilização", status: "Pendente", data_inicio: null, data_prevista_fim: "2025-01-10", data_fim: null, observacao: "Será realizada após finalização do executivo" }, { projeto_id: "p1", nome: "Entrega Final", status: "Pendente", data_inicio: null, data_prevista_fim: "2025-01-20", data_fim: null, observacao: "Entrega digital + reunião final com cliente" }];

export const orcamentosFromDatabase = [
    { id: "o1", projeto_id: "p1", valor_total: 180000, data_criacao: "2025-06-10", cliente_id: "u1" },
    { id: "o2", projeto_id: "p2", valor_total: 220000, data_criacao: "2025-06-11",cliente_id: "u1"},
    { id: "o3", projeto_id: "p3", valor_total: 145000, data_criacao: "2025-06-12",cliente_id: "u1"},
    { id: "o4", projeto_id: "p4", valor_total: 198000, data_criacao: "2025-06-13",cliente_id: "u1" },
    { id: "o5", projeto_id: "p5", valor_total: 310000, data_criacao: "2025-06-14",cliente_id: "u1" },
];

export const gerenciamento_obraFromDatabase = [
    { id: "et1", projeto_id: "p1", nome_etapa: "Demolição", status: "em_andamento", data_inicio: "2025-06-02", data_prevista_fim: "2025-06-24T00:00:00", data_fim: "2025-06-04", orcamento: "1200", realizado: "3000", observacoes: "" },
    { id: "et6", projeto_id: "p1", nome_etapa: "Moveis Soltos", status: "concluido", data_inicio: "2025-06-02", data_prevista_fim: "2025-07-26T00:00:00", data_fim: "2025-06-04", orcamento: "1200", realizado: "3000", observacoes: "" },
    { id: "et7", projeto_id: "p1", nome_etapa: "Pedreiro", status: "atrasada", data_inicio: "2025-06-02", data_prevista_fim: "2025-06-23T00:00:00", data_fim: "2025-06-04", orcamento: "1200", realizado: "3000", observacoes: "" },
    { id: "et2", projeto_id: "p1", nome_etapa: "Alvenaria", status: "em_andamento", data_inicio: "2025-06-05", data_prevista_fim: "2025-07-23T00:00:00", data_fim: null, orcamento: "1200", realizado: "3000", observacoes: "Chuva atrasou 2 dias" },
    { id: "et3", projeto_id: "p2", nome_etapa: "Gesso", status: "planejada", data_inicio: null, data_prevista_fim: "2025-06-31T00:00:00", data_fim: null, orcamento: "1200", realizado: "3000", observacoes: "" },
    { id: "et4", projeto_id: "p3", nome_etapa: "Pintura", status: "concluido", data_inicio: "2025-06-06", data_prevista_fim: "2025-06-31T00:00:00", data_fim: "2025-06-10", orcamento: "1200", realizado: "3000", observacoes: "Finalizado com tinta lavável" },
    { id: "et5", projeto_id: "p4", nome_etapa: "Marcenaria", status: "em_andamento", data_inicio: "2025-06-08", data_prevista_fim: "2025-06-31T00:00:00", data_fim: null, orcamento: "1200", realizado: "3000", observacoes: "Falta entrega de MDF" },
];

export const subitens_etapaFromDatabase = [
    { id: "s1", projeto_id: "p1", etapa_id: "et1", nome_subitem: "Contratar equipe de demolição", status: "concluido", orcamento: "1200", realizado: "3000", data_inicio: "2025-06-02", data_prevista_fim: "2025-06-03", data_fim: null, observacoes: "Equipe chegou no horário e finalizou antes do prazo" },
    { id: "s2", projeto_id: "p1", etapa_id: "et1", nome_subitem: "Compra de tijolos e cimento", status: "concluido", orcamento: "1200", realizado: "3000", data_inicio: "2025-06-04", data_prevista_fim: "2025-06-05", data_fim: null, observacoes: "Entrega feita parcialmente, segunda parte dia 06" },
    { id: "s3", projeto_id: "p1", etapa_id: "et1", nome_subitem: "Montagem das paredes internas", status: "em_andamento", orcamento: "1200", realizado: "3000", data_inicio: "2025-06-06", data_prevista_fim: null, data_fim: null, observacoes: "Avanço de 60% até agora" },
    { id: "s4", projeto_id: "p2", etapa_id: "et4", nome_subitem: "Compra de tinta branca fosca", status: "concluido", orcamento: "1200", realizado: "3000", data_inicio: "2025-06-06", data_prevista_fim: "2025-06-07", data_fim: null, observacoes: "Tintas recebidas e conferidas" },
    { id: "s5", projeto_id: "p2", etapa_id: "et5", nome_subitem: "Contratar marceneiro", status: "pendente", orcamento: "1200", realizado: "3000", data_inicio: null, data_prevista_fim: null, data_fim: null, observacoes: "Orçamento aprovado, aguardando assinatura de contrato" }
];

//(13) ['id', 'slug', 'endereco', 'cidade', 'orcamento_inicial', 'orcamento_previsto', 'orcamento_realizado', 'data_criacao', 'data_finalizacao', 'cliente_id', 'padrao', 'titulo', 'status']
//  [situação, tipo,responsavel_tecnico,cliente_id,titulo,slug, metragem,data_inicio, data_prevista_fim,data_fim,cep, pais,estado,cidade, bairro,rua,numero,complemento.bairro
//     dados_adiconais_projeto = outra tabela

// tabela financeiro projeto (despesas,ganhos) =  projeto_id,tipo_pagamento, data_prevista, status, valor, obs

///programo de necessidades????/

///horas (task) tarefa_id, tempo_gasto, reponsavel_id, custo_hora


////fases do projeto ( tarefas do projeto, inicio, data_prevista_fim, data_fim, responsavel, Nome da tarefa,)

///documentos
// id, projeto_id, nome, tipo, obs

///GRAFICO de grant