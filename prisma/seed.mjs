import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


const userFict = [{ email: 'carlos.almeida@gmail.com', emailVerified: true, passwordHash: '$2b$10$abcdefgh1234567890hashhashhash', accountStatus: 'ativo', createdAt: new Date('2025-05-10T10:00:00Z'), lastLogin: new Date('2025-07-02T12:30:00Z'), userType: 'cliente', }, { email: 'bianca.menezes@gmail.com', emailVerified: false, passwordHash: '$2b$10$hashdef4567890abcdefghijkllll', accountStatus: 'pendente', createdAt: new Date('2025-06-01T09:00:00Z'), lastLogin: null, userType: 'cliente', }, { email: 'juliana.oliveira@outlook.com', emailVerified: true, passwordHash: '$2b$10$hash7890123456lmnopqrstu', accountStatus: 'ativo', createdAt: new Date('2025-04-20T15:45:00Z'), lastLogin: new Date('2025-06-30T17:10:00Z'), userType: 'cliente', }, { email: 'ana.silva@gmail.com', emailVerified: true, passwordHash: '$2b$10$aaaaaaabbbbbbbcccccc123456', accountStatus: 'ativo', createdAt: new Date('2025-03-18T08:15:00Z'), lastLogin: new Date('2025-07-01T08:00:00Z'), userType: 'arquiteto', }, { email: 'marcos.ribeiro@hotmail.com', emailVerified: true, passwordHash: '$2b$10$zzzzzzxxxxxxxyyyyyywwwww', accountStatus: 'ativo', createdAt: new Date('2025-05-05T11:30:00Z'), lastLogin: new Date('2025-07-02T14:00:00Z'), userType: 'admin', },]
const profFict = [{ userId: '17c2140d-8796-48f8-aae3-7d0a41811d5a', firstName: 'Carlos', lastName: 'Almeida', phone: '(11) 91234-5678', occupation: 'Empresário', gender: 'Masculino', maritalStatus: 'Casado', hasChildren: true, ageGroup: '35-44', stylePreference: 'Moderno', referralSource: 'Indicação de amigo' }, { userId: '40155cf1-fbad-47cf-9b87-74fdeab134cd', firstName: 'Juliana', lastName: 'Oliveira', phone: '(21) 99876-1234', occupation: 'Advogada', gender: 'Feminino', maritalStatus: 'Solteira', hasChildren: false, ageGroup: '25-34', stylePreference: 'Minimalista', referralSource: 'Instagram' }, { userId: '205fcd24-4f8a-4900-bb93-ed70fbe47840', firstName: 'Marcos', lastName: 'Ribeiro', phone: '(31) 98888-7777', occupation: 'Engenheiro Civil', maritalStatus: 'Casado', hasChildren: true, ageGroup: '45-54', stylePreference: 'Industrial' }, { userId: 'fcd925ef-e75c-4a31-9f01-914629c3923b', firstName: 'Ana', lastName: 'Silva', phone: '(19) 99777-1111', occupation: 'Designer de Interiores', gender: 'Feminino', stylePreference: 'Escandinavo' }, { userId: '3df1c6dc-58b3-4905-a084-1d46cd54a6d7', firstName: 'Bianca', lastName: 'Menezes', phone: '(47) 99666-5555', occupation: 'Publicitária', maritalStatus: 'Solteira', referralSource: 'Google' }, { userId: 'ea5befc1-dec6-4bed-a7a7-38f0d874f8c4', firstName: 'Rodrigo', lastName: 'Ferraz', phone: '(62) 91212-3434', occupation: 'Contador', gender: 'Masculino', hasChildren: false, referralSource: 'Evento presencial', stylePreference: 'Clássico' }]
const budgets = [{ clientId: '17c2140d-8796-48f8-aae3-7d0a41811d5a', totalValue: 185000, status: 'enviado', version: 1, sentAt: new Date('2025-07-01'), acceptedAt: null, paymentTerms: '50% na aprovação, 50% na entrega', summary: 'Projeto residencial completo', notes: 'Cliente solicitou incluir paisagismo', fileUrl: 'https://example.com/orcamento1.pdf', title: 'Orçamento Casa Moderna', }, { clientId: '40155cf1-fbad-47cf-9b87-74fdeab134cd', totalValue: 72000, status: 'aceito', version: 2, sentAt: new Date('2025-06-28'), acceptedAt: new Date('2025-07-02'), paymentTerms: '100% na entrega', summary: 'Reforma de fachada comercial', notes: '', fileUrl: 'https://example.com/orcamento2.pdf', title: 'Fachada Centro Comercial', }, { clientId: '205fcd24-4f8a-4900-bb93-ed70fbe47840', totalValue: 250000, status: 'revisão', version: 1, sentAt: new Date('2025-07-01'), acceptedAt: null, paymentTerms: '30% na assinatura, 40% na metade, 30% na entrega', summary: 'Projeto de interiores e execução', notes: 'Verificar possibilidade de desconto', fileUrl: 'https://example.com/orcamento3.pdf', title: 'Apartamento Luxo - Paulista', }, { clientId: 'fcd925ef-e75c-4a31-9f01-914629c3923b', totalValue: 98000, status: 'enviado', version: 1, sentAt: new Date('2025-06-30'), acceptedAt: null, paymentTerms: '70% na aprovação, 30% na entrega', summary: 'Regularização e aprovação em órgãos públicos', notes: 'Aguardando retorno da prefeitura', fileUrl: 'https://example.com/orcamento4.pdf', title: 'Regularização Casa de Campo', }, { clientId: '3df1c6dc-58b3-4905-a084-1d46cd54a6d7', totalValue: 134000, status: 'aceito', version: 1, sentAt: new Date('2025-06-25'), acceptedAt: new Date('2025-06-27'), paymentTerms: '60% na aprovação, 40% na entrega', summary: 'Projeto completo para startup', notes: 'Incluir mobiliário no orçamento', fileUrl: 'https://example.com/orcamento5.pdf', title: 'Escritório em Pinheiros', }, { clientId: 'ea5befc1-dec6-4bed-a7a7-38f0d874f8c4', totalValue: 105000, status: 'enviado', version: 1, sentAt: new Date('2025-07-03'), acceptedAt: null, paymentTerms: '40% na aprovação, 60% na entrega', summary: 'Projeto de ampliação residencial', notes: 'Cliente pediu sugestão de acabamentos premium', fileUrl: 'https://example.com/orcamento6.pdf', title: 'Ampliação Residência Carlos', },]
const projetosFicticios = [{ title: "Apartamento Moderno em Moema", slug: "apartamento-moderno-moema", status: "em_andamento", projectType: "Residencial", developmentType: "Reforma", investmentExpectation: 350000, area: 120, initialBudget: 330000, expectedBudget: 340000, actualBudget: 345000, startDate: new Date("2025-03-01"), expectedEndDate: new Date("2025-07-15"), endDate: null, coverUrl: "https://source.unsplash.com/featured/?apartment", clientId: "17c2140d-8796-48f8-aae3-7d0a41811d5a" }, { title: "Casa de Campo em Itu", slug: "casa-campo-itu", status: "concluido", projectType: "Residencial", developmentType: "Construção", investmentExpectation: 950000, area: 300, initialBudget: 900000, expectedBudget: 920000, actualBudget: 915000, startDate: new Date("2024-05-10"), expectedEndDate: new Date("2024-12-20"), endDate: new Date("2024-12-18"), coverUrl: "https://source.unsplash.com/featured/?country-house", clientId: "40155cf1-fbad-47cf-9b87-74fdeab134cd" }, { title: "Escritório Tech em São Paulo", slug: "escritorio-tech-sp", status: "planejamento", projectType: "Comercial", developmentType: "Interiores", investmentExpectation: 600000, area: 180, initialBudget: 580000, expectedBudget: 590000, actualBudget: null, startDate: null, expectedEndDate: null, endDate: null, coverUrl: "https://source.unsplash.com/featured/?office", clientId: "205fcd24-4f8a-4900-bb93-ed70fbe47840" }, { title: "Clínica Estética no Centro", slug: "clinica-estetica-centro", status: "em_andamento", projectType: "Comercial", developmentType: "Reforma", investmentExpectation: 480000, area: 150, initialBudget: 460000, expectedBudget: 470000, actualBudget: 465000, startDate: new Date("2025-01-20"), expectedEndDate: new Date("2025-06-10"), endDate: null, coverUrl: "https://source.unsplash.com/featured/?clinic", clientId: "fcd925ef-e75c-4a31-9f01-914629c3923b" }, { title: "Loja Boutique em Shopping", slug: "loja-boutique-shopping", status: "em_andamento", projectType: "Comercial", developmentType: "Construção", investmentExpectation: 750000, area: 95, initialBudget: 700000, expectedBudget: 720000, actualBudget: null, startDate: new Date("2025-05-01"), expectedEndDate: new Date("2025-10-01"), endDate: null, coverUrl: "https://source.unsplash.com/featured/?store", clientId: "ea5befc1-dec6-4bed-a7a7-38f0d874f8c4" }];
const projectDetails = [{ projectId: 'c960305c-36d3-48e1-8e83-112fbf9e0069', type: 'Residencial', standard: 'Alto', technicalManager: 'Eng. Paulo Martins', postalCode: '04500-000', country: 'Brasil', state: 'SP', city: 'São Paulo', neighborhood: 'Moema', street: 'Av. Ibirapuera', number: '145', complement: 'Apto 82' }, { projectId: 'fd63a0ee-fa8c-48cf-b68f-d82b0544a01a', type: 'Residencial', standard: 'Médio', technicalManager: 'Arq. Carla Mendes', postalCode: '13300-000', country: 'Brasil', state: 'SP', city: 'Itu', neighborhood: 'Zona Rural', street: 'Estrada Velha', number: 'km 12', complement: null }, { projectId: '4b553b17-6073-4437-b219-6de2fb5fa967', type: 'Comercial', standard: 'Alto', technicalManager: 'Eng. Rogério Souza', postalCode: '01000-000', country: 'Brasil', state: 'SP', city: 'São Paulo', neighborhood: 'Centro', street: 'Rua Augusta', number: '980', complement: '3º andar' }, { projectId: '951bdeee-3579-4ef3-af0d-bcfe09b22de5', type: 'Comercial', standard: 'Alto', technicalManager: 'Arq. Marina Duarte', postalCode: '01310-000', country: 'Brasil', state: 'SP', city: 'São Paulo', neighborhood: 'Bela Vista', street: 'Av. Paulista', number: '1500', complement: 'Sala 1204' }, { projectId: 'ca3444df-14cf-4301-9664-58712ce13ace', type: 'Comercial', standard: 'Luxo', technicalManager: 'Eng. Renato Lima', postalCode: '01400-000', country: 'Brasil', state: 'SP', city: 'São Paulo', neighborhood: 'Jardins', street: 'Rua Oscar Freire', number: '500', complement: 'Loja 2' }];
const projectPhases = [
  // Apartamento em Moema
  { projectId: 'c960305c-36d3-48e1-8e83-112fbf9e0069', name: 'Levantamento Inicial', status: 'Concluído', order: 1 },
  { projectId: 'c960305c-36d3-48e1-8e83-112fbf9e0069', name: 'Anteprojeto', status: 'Em andamento', order: 2 },
  { projectId: 'c960305c-36d3-48e1-8e83-112fbf9e0069', name: 'Projeto Executivo', status: 'Pendente', order: 3 },

  // Casa de Campo
  { projectId: 'fd63a0ee-fa8c-48cf-b68f-d82b0544a01a', name: 'Estudo Preliminar', status: 'Concluído', order: 1 },
  { projectId: 'fd63a0ee-fa8c-48cf-b68f-d82b0544a01a', name: 'Anteprojeto', status: 'Concluído', order: 2 },
  { projectId: 'fd63a0ee-fa8c-48cf-b68f-d82b0544a01a', name: 'Projeto Executivo', status: 'Em andamento', order: 3 },

  // Escritório Tech
  { projectId: '4b553b17-6073-4437-b219-6de2fb5fa967', name: 'Briefing com Cliente', status: 'Concluído', order: 1 },
  { projectId: '4b553b17-6073-4437-b219-6de2fb5fa967', name: 'Layout Inicial', status: 'Concluído', order: 2 },
  { projectId: '4b553b17-6073-4437-b219-6de2fb5fa967', name: 'Projeto Executivo', status: 'Em andamento', order: 3 },

  // Clínica Estética
  { projectId: '951bdeee-3579-4ef3-af0d-bcfe09b22de5', name: 'Estudo de Viabilidade', status: 'Concluído', order: 1 },
  { projectId: '951bdeee-3579-4ef3-af0d-bcfe09b22de5', name: 'Anteprojeto', status: 'Em andamento', order: 2 },
  { projectId: '951bdeee-3579-4ef3-af0d-bcfe09b22de5', name: 'Projeto Executivo', status: 'Pendente', order: 3 },

  // Loja Boutique
  { projectId: 'ca3444df-14cf-4301-9664-58712ce13ace', name: 'Levantamento Técnico', status: 'Concluído', order: 1 },
  { projectId: 'ca3444df-14cf-4301-9664-58712ce13ace', name: 'Anteprojeto', status: 'Concluído', order: 2 },
  { projectId: 'ca3444df-14cf-4301-9664-58712ce13ace', name: 'Detalhamento Técnico', status: 'Em andamento', order: 3 },
];
const constructionPhases = [
  // Apartamento em Moema
  { projectId: 'c960305c-36d3-48e1-8e83-112fbf9e0069', name: 'Demolição', status: 'Concluído', order: 1 },
  { projectId: 'c960305c-36d3-48e1-8e83-112fbf9e0069', name: 'Alvenaria', status: 'Em andamento', order: 2 },
  { projectId: 'c960305c-36d3-48e1-8e83-112fbf9e0069', name: 'Acabamentos', status: 'Pendente', order: 3 },

  // Casa de Campo
  { projectId: 'fd63a0ee-fa8c-48cf-b68f-d82b0544a01a', name: 'Fundação', status: 'Concluído', order: 1 },
  { projectId: 'fd63a0ee-fa8c-48cf-b68f-d82b0544a01a', name: 'Estrutura', status: 'Concluído', order: 2 },
  { projectId: 'fd63a0ee-fa8c-48cf-b68f-d82b0544a01a', name: 'Cobertura', status: 'Em andamento', order: 3 },

  // Escritório Tech
  { projectId: '4b553b17-6073-4437-b219-6de2fb5fa967', name: 'Instalações Elétricas', status: 'Concluído', order: 1 },
  { projectId: '4b553b17-6073-4437-b219-6de2fb5fa967', name: 'Divisórias', status: 'Em andamento', order: 2 },
  { projectId: '4b553b17-6073-4437-b219-6de2fb5fa967', name: 'Pintura Final', status: 'Pendente', order: 3 },

  // Clínica Estética
  { projectId: '951bdeee-3579-4ef3-af0d-bcfe09b22de5', name: 'Demolições', status: 'Concluído', order: 1 },
  { projectId: '951bdeee-3579-4ef3-af0d-bcfe09b22de5', name: 'Drywall', status: 'Concluído', order: 2 },
  { projectId: '951bdeee-3579-4ef3-af0d-bcfe09b22de5', name: 'Revestimentos', status: 'Em andamento', order: 3 },

  // Loja Boutique
  { projectId: 'ca3444df-14cf-4301-9664-58712ce13ace', name: 'Layout Interno', status: 'Concluído', order: 1 },
  { projectId: 'ca3444df-14cf-4301-9664-58712ce13ace', name: 'Iluminação', status: 'Em andamento', order: 2 },
  { projectId: 'ca3444df-14cf-4301-9664-58712ce13ace', name: 'Decoração Final', status: 'Pendente', order: 3 },
];
const projectDocuments = [
  // Apartamento Moderno em Moema
  {
    projectId: 'c960305c-36d3-48e1-8e83-112fbf9e0069',
    name: 'Planta Arquitetônica',
    type: 'planta',
    link: 'https://example.com/planta-moema.pdf',
    notes: 'Versão inicial da planta.',
    description: 'Planta baixa com layout de móveis',
    visibleToClient: true
  },
  {
    projectId: 'c960305c-36d3-48e1-8e83-112fbf9e0069',
    name: 'Contrato de Prestação de Serviço',
    type: 'contrato',
    link: 'https://example.com/contrato-moema.pdf',
    notes: 'Assinado pelo cliente.',
    description: 'Contrato firmado entre arquiteto e cliente',
    visibleToClient: true
  },
  {
    projectId: 'c960305c-36d3-48e1-8e83-112fbf9e0069',
    name: 'Memorial Descritivo',
    type: 'documento',
    link: 'https://example.com/memorial-moema.pdf',
    notes: 'Lista de materiais e acabamentos.',
    description: 'Memorial técnico completo',
    visibleToClient: true
  },

  // Casa de Campo em Itu
  {
    projectId: 'fd63a0ee-fa8c-48cf-b68f-d82b0544a01a',
    name: 'Projeto Elétrico',
    type: 'planta',
    link: 'https://example.com/eletrico-itu.pdf',
    notes: '',
    description: 'Esquema das instalações elétricas',
    visibleToClient: true
  },
  {
    projectId: 'fd63a0ee-fa8c-48cf-b68f-d82b0544a01a',
    name: 'Contrato Inicial',
    type: 'contrato',
    link: 'https://example.com/contrato-itu.pdf',
    notes: '',
    description: 'Contrato padrão de serviços técnicos',
    visibleToClient: true
  },
  {
    projectId: 'fd63a0ee-fa8c-48cf-b68f-d82b0544a01a',
    name: 'Laudo Topográfico',
    type: 'documento',
    link: 'https://example.com/topografia-itu.pdf',
    notes: 'Topografia do terreno rural.',
    description: 'Inclui curvas de nível e pontos de referência',
    visibleToClient: false
  },

  // Escritório Tech em São Paulo
  {
    projectId: '4b553b17-6073-4437-b219-6de2fb5fa967',
    name: 'Layout Corporativo',
    type: 'planta',
    link: 'https://example.com/layout-tech.pdf',
    notes: 'Revisado com cliente.',
    description: 'Distribuição de ambientes e mobiliário',
    visibleToClient: true
  },
  {
    projectId: '4b553b17-6073-4437-b219-6de2fb5fa967',
    name: 'Contrato Executivo',
    type: 'contrato',
    link: 'https://example.com/contrato-tech.pdf',
    notes: 'Inclui cláusulas de revisão.',
    description: 'Contrato de responsabilidade técnica',
    visibleToClient: false
  },
  {
    projectId: '4b553b17-6073-4437-b219-6de2fb5fa967',
    name: 'Tabela de Cores',
    type: 'documento',
    link: 'https://example.com/cores-tech.pdf',
    notes: '',
    description: 'Padrão cromático da identidade visual',
    visibleToClient: true
  },

  // Clínica Estética no Centro
  {
    projectId: '951bdeee-3579-4ef3-af0d-bcfe09b22de5',
    name: 'Projeto Hidráulico',
    type: 'planta',
    link: 'https://example.com/hidraulico-clinica.pdf',
    notes: '',
    description: 'Instalações de água e esgoto',
    visibleToClient: true
  },
  {
    projectId: '951bdeee-3579-4ef3-af0d-bcfe09b22de5',
    name: 'Contrato de Reforma',
    type: 'contrato',
    link: 'https://example.com/contrato-clinica.pdf',
    notes: '',
    description: 'Contrato para execução da obra',
    visibleToClient: false
  },
  {
    projectId: '951bdeee-3579-4ef3-af0d-bcfe09b22de5',
    name: 'Manual de Equipamentos',
    type: 'documento',
    link: 'https://example.com/equipamentos-clinica.pdf',
    notes: '',
    description: 'Especificações dos aparelhos estéticos',
    visibleToClient: true
  },

  // Loja Boutique em Shopping
  {
    projectId: 'ca3444df-14cf-4301-9664-58712ce13ace',
    name: 'Layout Comercial',
    type: 'planta',
    link: 'https://example.com/layout-loja.pdf',
    notes: '',
    description: 'Posição de vitrines e expositores',
    visibleToClient: true
  },
  {
    projectId: 'ca3444df-14cf-4301-9664-58712ce13ace',
    name: 'Contrato de Obra',
    type: 'contrato',
    link: 'https://example.com/contrato-loja.pdf',
    notes: '',
    description: 'Contrato com cronograma físico-financeiro',
    visibleToClient: true
  },
  {
    projectId: 'ca3444df-14cf-4301-9664-58712ce13ace',
    name: 'Tabela de Materiais',
    type: 'documento',
    link: 'https://example.com/materiais-loja.pdf',
    notes: '',
    description: 'Materiais usados na decoração e acabamento',
    visibleToClient: true
  }
];
const constructionTasks = [{ phaseId: 'c0469132-83c0-4f06-af39-0195536e0d92', name: 'Contratação da equipe de demolição', status: 'concluído', budget: 2000, actualCost: 2200, startDate: new Date('2025-07-01'), expectedEndDate: new Date('2025-07-03'), endDate: new Date('2025-07-02'), responsible: 'Carlos Souza', priority: 1 }, { phaseId: 'c0469132-83c0-4f06-af39-0195536e0d92', name: 'Remoção de entulho', status: 'em andamento', budget: 1500, actualCost: 0, startDate: new Date('2025-07-03'), expectedEndDate: new Date('2025-07-05'), endDate: null, responsible: 'Equipe LimpaTudo', priority: 2 }, { phaseId: 'c0469132-83c0-4f06-af39-0195536e0d92', name: 'Inspeção pós-demolição', status: 'pendente', budget: 500, actualCost: 0, startDate: new Date('2025-07-06'), expectedEndDate: new Date('2025-07-07'), endDate: null, responsible: 'Eng. Ana Ribeiro', priority: 3 }, { phaseId: '986c2ffd-03bd-4acc-be00-a8f797bc55b2', name: 'Levantamento de paredes', status: 'em andamento', budget: 8000, actualCost: 4500, startDate: new Date('2025-07-08'), expectedEndDate: new Date('2025-07-15'), endDate: null, responsible: 'Construtora Ideal', priority: 1 }, { phaseId: '986c2ffd-03bd-4acc-be00-a8f797bc55b2', name: 'Verificação de prumo e esquadro', status: 'pendente', budget: 1200, actualCost: null, startDate: new Date('2025-07-16'), expectedEndDate: new Date('2025-07-17'), endDate: null, responsible: 'Técnico Jorge Silva', priority: 2 }, { phaseId: '986c2ffd-03bd-4acc-be00-a8f797bc55b2', name: 'Aplicação de reboco interno', status: 'pendente', budget: 3000, actualCost: null, startDate: new Date('2025-07-18'), expectedEndDate: new Date('2025-07-20'), endDate: null, responsible: 'Equipe Acabamento Fino', priority: 3 }, { phaseId: '5351d9c2-398b-4d7b-be20-120a4c37c0dd', name: 'Instalação de pisos', status: 'pendente', budget: 5000, actualCost: null, startDate: new Date('2025-08-01'), expectedEndDate: new Date('2025-08-05'), endDate: null, responsible: 'Revest Mais', priority: 1 }, { phaseId: '5351d9c2-398b-4d7b-be20-120a4c37c0dd', name: 'Revestimento de paredes', status: 'pendente', budget: 3500, actualCost: null, startDate: new Date('2025-08-06'), expectedEndDate: new Date('2025-08-09'), endDate: null, responsible: 'Equipe Parede Nobre', priority: 2 }, { phaseId: '5351d9c2-398b-4d7b-be20-120a4c37c0dd', name: 'Instalação de louças e metais', status: 'pendente', budget: 2500, actualCost: null, startDate: new Date('2025-08-10'), expectedEndDate: new Date('2025-08-12'), endDate: null, responsible: 'Encanador Roberto', priority: 3 }];



async function main() {
  // console.log(await prisma.constructionPhase.findMany({ select: { id: true, name: true } }))

  const projetos = await prisma.project.findMany({
    select: { id: true, title: true }
  })
  projetos.forEach( async (p) => {
    console.log(`Projeto: ${p.title} - ID: ${p.id}`)
    await prisma.payment.createMany({
      data:[{
        projectId: p.id,
        paymentType: 'entrada',
        description: 'Pagamento inicial',
        amount: 50000,
        dueDate: new Date('2025-07-15'),
        status: 'pendente',
        notificationSent: false
      },
      {
        projectId: p.id,
        paymentType: 'entrada',
        description: 'Pagamento intermediário',
        amount: 100000,
        dueDate: new Date('2025-08-15'),
        status: 'pendente',
        notificationSent: false
      },
      {
        projectId: p.id,
        paymentType: 'saida',
        description: 'Tercerização de serviços',
        amount: 150000,
        dueDate: new Date('2025-09-15'),
        status: 'pendente',
        notificationSent: false
      }   ]
    })
  })

  console.log("dados inseridos com sucesso")


  //function here
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })