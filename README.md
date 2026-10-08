# EducaTrânsito

Guia de produto, interface, regras de negócio e proposta de componentização React para a plataforma de educação e reeducação no trânsito.

> **Status:** o projeto executável neste repositório é um protótipo web em HTML, CSS, JavaScript e Vite. React, autenticação real, API e banco de dados são etapas futuras descritas neste documento; não fazem parte da implementação atual.

## Índice

- [Objetivo e públicos](#objetivo-e-públicos)
- [Executar o protótipo](#executar-o-protótipo)
- [Estrutura atual](#estrutura-atual)
- [Jornadas e navegação](#jornadas-e-navegação)
- [Especificação visual](#especificação-visual)
- [Componentização proposta em React](#componentização-proposta-em-react)
- [Modelos de domínio sugeridos](#modelos-de-domínio-sugeridos)
- [Regras implementadas no protótipo](#regras-implementadas-no-protótipo)
- [Regras de negócio planejadas](#regras-de-negócio-planejadas)
- [Acessibilidade e comportamento responsivo](#acessibilidade-e-comportamento-responsivo)
- [Conteúdo educativo existente](#conteúdo-educativo-existente)
- [Decisões pendentes e riscos](#decisões-pendentes-e-riscos)
- [Plano de migração React](#plano-de-migração-react)

## Objetivo e públicos

EducaTrânsito apresenta conteúdos para desenvolver consciência, respeito às regras e escolhas mais seguras na circulação. O conceito de produto está organizado em três jornadas:

| Jornada | Público e propósito | Tom da experiência |
| --- | --- | --- |
| **Jornada Educacional Infantil** | Crianças e adolescentes; aprendizagem lúdica sobre travessia, sinalização e proteção. A página atual comunica a faixa de 7 a 14 anos. | Colorido, acolhedor, ilustrado e acompanhado por mascotes. |
| **Jornada Educacional Adulto** | Adultos que dirigem, caminham, pedalam, transportam pessoas ou influenciam hábitos. | Direto, informativo e centrado em responsabilidade cotidiana. |
| **Jornada Reeducacional** | Condutores em processo de reflexão após infrações, com foco em riscos, consequências e mudança de hábitos. | Sério, sóbrio, respeitoso e não infantilizado. |

O produto foi pensado para uso em navegadores de celular e em totens de eventos. A interface existente é web responsiva; não há ainda um aplicativo mobile nativo nem integração com totem.

## Executar o protótipo

### Requisitos

- Node.js e npm compatíveis com a versão instalada do Vite.
- Navegador moderno.

### Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

O servidor de desenvolvimento Vite informa a URL local no terminal. Os scripts atuais disponíveis são `dev`, `build` e `preview`; não há script de testes automatizados configurado.

### Tecnologias atuais

- Vite 8 como servidor de desenvolvimento e empacotador.
- HTML semântico, CSS e JavaScript em módulos.
- Google Fonts: Poppins nas páginas gerais e infantis; DM Sans e DM Serif Display na Jornada Reeducacional.
- Imagens PNG locais para as ilustrações e mascotes.
- `localStorage` do navegador para o progresso da trilha reeducacional.

React e React Router são recomendações para a próxima etapa, não dependências do `package.json` atual.

## Estrutura atual

```text
.
├── index.html                 # Apresentação das jornadas e conteúdo institucional
├── selecao-frente.html        # Seleção da jornada antes do acesso
├── login.html                 # Formulário demonstrativo e roteamento por jornada
├── frente-infantil.html       # Conteúdo infantil, mascotes e quiz
├── frente-adulto.html         # Conteúdo adulto e quiz
├── frente-reeducacional.html  # Trilha sequencial de 24 dias
├── styles.css                 # Estilos da página inicial
├── frente.css                 # Estilos das jornadas, quizzes e trilha
├── login.css                  # Estilos do acesso demonstrativo
├── script.js                  # Conteúdo, navegação e interações do protótipo
├── CONTEXT_TECNICO.md         # Regras propostas para API e backend
├── package.json               # Metadados e comandos do Vite
└── *.png                      # Mascotes, ilustrações e estados emocionais
```

Os nomes `frente-*.html`, a chave de query `frente` e o atributo `data-front` são identificadores legados da implementação. Eles não definem a nomenclatura visual das jornadas e podem ser migrados para rotas e tipos mais explícitos no React.

## Jornadas e navegação

### Páginas existentes

| Página atual | Responsabilidade | Próxima experiência React sugerida |
| --- | --- | --- |
| `index.html` | Página inicial, apresentação das três jornadas, princípios e contato. | `/` |
| `selecao-frente.html` | Escolha de jornada antes da tela de acesso. | `/jornadas` |
| `login.html?frente=infantil` | Formulário demonstrativo; ao enviar, encaminha para a jornada infantil. | `/entrar?jornada=infantil` |
| `login.html?frente=adulto` | Formulário demonstrativo; ao enviar, encaminha para a jornada adulta. | `/entrar?jornada=adulto` |
| `login.html?frente=reeducacional` | Formulário demonstrativo; ao enviar, encaminha para a jornada reeducacional. | `/entrar?jornada=reeducacional` |
| `frente-infantil.html` | Apresentação infantil, guias e quiz de perguntas sequenciais. | `/jornadas/infantil` |
| `frente-adulto.html` | Apresentação adulta e quiz de perguntas sequenciais. | `/jornadas/adulto` |
| `frente-reeducacional.html` | Trilha de 24 dias, progresso e reflexão diária. | `/jornadas/reeducacional` |

O login atual **não autentica**: não verifica campos, credenciais, idade, token ou autorização de palestrante. O envio do formulário apenas escolhe uma página com base no parâmetro `frente`.

### Página inicial

A página inicial tem cabeçalho fixo, navegação por âncoras, hero com chamada principal, imagem temática, indicadores, três seções de jornada, pilares educativos, chamada de contato e rodapé. As seções alternam fundos claro, acentuado e escuro. No desktop, conteúdo e imagens aparecem lado a lado; em telas menores, as colunas se empilham.

### Seleção e acesso

A seleção apresenta três links grandes com cores e mascotes diferentes. Os links levam à página de login com uma chave de jornada na query string. No React, a jornada deve ser validada por um conjunto fechado de slugs; parâmetros desconhecidos devem voltar à seleção ou exibir estado de não encontrado.

### Jornada Educacional Infantil

- Hero verde, amarelo e azul-claro, com a turma de mascotes.
- Três guias: PareZinho, Alertinha e Avisônio, cada um associado a uma missão educativa.
- Bloco de início do desafio seguido de pergunta única, quatro alternativas, feedback e justificativa.
- Mascote do quiz alterna entre Avisônio, PareZinho e Alertinha conforme a pergunta.
- Estados emocionais feliz/triste mudam a imagem e a fala do mascote.

### Jornada Educacional Adulto

- Resumo da jornada e três áreas de conteúdo: direção sem distração, preferência/sinalização e convivência segura.
- Quiz de uma pergunta por vez, com quatro alternativas.
- Após escolher: alternativas ficam desativadas, resposta correta é destacada, feedback e justificativa são exibidos e o botão de avanço é liberado.
- Ao terminar, o resultado mostra acertos e permite refazer o quiz.
- Não usa mascotes na experiência de perguntas.

### Jornada Reeducacional

- Identidade visual própria, sem linguagem ou ilustração infantil.
- Cabeçalho compacto com marca e navegação.
- Apresentação do percurso, contador de progresso, barra e prazo de 30 dias.
- Lista sequencial de 24 dias, agrupados em quatro unidades de seis dias.
- Painel da etapa atual com contexto curto, questão de reflexão, opções, explicação e ação para concluir.
- Estados distintos: concluída, disponível, liberada amanhã, bloqueada e prazo encerrado.
- Etapas já concluídas podem ser abertas para revisão; respostas e avanço ficam bloqueados nessa revisão.

## Especificação visual

### Princípios de interface

1. **A identidade acompanha o público.** A experiência infantil é expressiva e guiada; a adulta é informativa; a reeducacional trata o condutor com seriedade e respeito.
2. **Hierarquia clara.** Cada tela tem um título principal, texto de contexto e ação principal identificável.
3. **Conteúdo escaneável.** Perguntas, alternativas, progresso, estados e justificativas têm áreas distintas.
4. **Responsividade.** Conteúdo deve caber em telas pequenas sem depender de hover, rolagem horizontal ou controles inacessíveis.
5. **Ilustração com função.** Os mascotes ajudam a ensinar na jornada infantil; não são decorativos na reeducacional.

### Tokens atuais do site institucional e das jornadas gerais

Os valores abaixo refletem os estilos atuais e devem ser migrados para variáveis CSS ou tokens do tema React.

| Token sugerido | Valor atual | Uso |
| --- | --- | --- |
| `color.page` | `#f5f9ff` | Fundo-base claro. |
| `color.page-strong` | `#dfeeff` | Azul-claro de apoio. |
| `color.primary` | `#0a6bb8` | Ações, links e ênfase. |
| `color.primary-dark` | `#084a7a` | Marca e texto azul escuro. |
| `color.accent` | `#ffbe3d` | Destaques e sinalização. |
| `color.text` | `#122033` | Texto principal. |
| `color.muted` | `#53657a` | Texto secundário. |
| `color.surface` | `#ffffff` | Cards e superfícies. |
| `color.success` | `#1ca67a` | Confirmação e listas. |
| `color.error` | `#b23b3b` / tons de vermelho claro | Resposta incorreta e feedback. |
| `shadow.default` | `0 18px 40px rgba(12, 66, 110, 0.12)` | Elevação de elementos principais. |

Fundo institucional: gradiente vertical de `#f8fbff` a `#eef6ff`. Largura padrão do conteúdo: até 1120 px, com margem fluida de 1 rem.

### Tipografia

- **Poppins**: marca institucional, home, seleção, login, páginas gerais e jornada infantil. Pesos carregados: 400, 500, 600, 700 e 800.
- **DM Sans**: texto corrido e controles da Jornada Reeducacional.
- **DM Serif Display**: títulos de destaque da Jornada Reeducacional, para criar contraste editorial e um tom adulto.
- Títulos de hero: grandes, com linha compacta; corpo de texto: linha confortável e cor secundária; metadados: menores, em caixa alta e peso forte.
- Na migração, não dimensionar fontes por largura de viewport; usar escala tipográfica consistente e limites responsivos por breakpoint.

### Layout, superfícies e controles

- Cabeçalho da home: altura mínima de 76 px, posição sticky e fundo translúcido.
- Hero desktop: grade de duas colunas, texto e imagem com área de destaque; conteúdo limitado a aproximadamente 1120 px.
- Seções institucionais: bandas de largura total com conteúdo interno alinhado; grades de princípios e atividades com três colunas em telas largas.
- Cards institucionais: fundos brancos, borda sutil, raio entre 22 e 32 px e sombras suaves.
- Seleção de jornada: cartões empilhados, largura máxima aproximada de 680 px e altura mínima de 142 px. Infantil verde (`#168a4a`), adulto amarelo (`#ffd23f`) e reeducacional vermelho (`#d93737`). Cada cartão contém mascote, nome e descrição.
- Botões gerais: formato arredondado, altura definida pelo padding, ação primária azul e secundária branca com borda.
- Quiz geral: um cartão de pergunta, número atual/total, opções em coluna, feedback visual e justificativa abaixo das opções.

### Tema infantil

- Fundo em gradiente verde-claro, amarelo-claro e azul-claro (`#d9f6b8`, `#fff4c8`, `#ccefff`).
- Hero de duas colunas, borda branca espessa, cantos de 28 px e mascotes em imagem contida.
- Cards dos mascotes com imagem de altura estável de 210 px, fundo branco e sombra verde discreta.
- Falas em balões coloridos: amarelo para estado neutro, verde para acerto e pêssego para erro.
- Cartão de início do desafio em gradiente amarelo/verde, com ícone, texto e ação.
- Quiz em duas colunas no desktop: pergunta e mascote acompanhante; empilhado em telas menores.
- Animação curta de comemoração ao acertar, sem animação obrigatória para leitura do conteúdo.

### Tema adulto

- Mantém a linguagem de superfície e controles compartilhada com as páginas gerais.
- Resumo, cards de atividade e área de quiz em sequência vertical.
- A seleção de resposta usa os estados `correct`, `wrong` e `disabled`; o feedback não depende de mascote ou animação.
- Preservar leitura objetiva e contraste para conteúdo legal, sem reproduzir o tema lúdico infantil.

### Tema reeducacional

- Fundo cinza-esverdeado claro (`#f3f4f1`) com padrão horizontal sutil; texto principal `#202b29`.
- Largura máxima de 1160 px; margens laterais fluidas.
- Paleta: verde profundo `#304b43`, verde de progresso `#4c7662`, texto secundário `#64716d`, bordas `#d9ddda` e terracota `#984e45` para ênfase e alerta.
- Tipografia DM Sans para leitura e DM Serif Display em títulos de página, lição e conclusão.
- Barra de progresso fina de 5 px, sem cartão decorativo ao redor do resumo.
- Grade principal em duas colunas: trilha e painel da lição. O painel acompanha a rolagem no desktop e sobe para o topo da composição em telas menores.
- Unidades aparecem em títulos pequenos em caixa alta; cada dia é uma linha de trilha com círculo, número/estado, nome e status.
- Estados: verde preenchido e check para concluído; contorno terracota para etapa atual; cinza para bloqueio; branco para painel de atividade.
- Alternativas são botões retangulares, com letra identificadora e estado correto/incorreto por borda e fundo. Evitar linguagem punitiva no erro.

### Breakpoints existentes

| Largura | Comportamento atual |
| --- | --- |
| Até 860 px | Menu institucional vira botão expansível; hero e seções em colunas passam a uma coluna; ilustrações reduzem altura. |
| Até 820 px | No tema infantil, quiz e mascote deixam de dividir a mesma linha. |
| Até 780 px | Na trilha reeducacional, o painel da lição sobe acima da lista e deixa de ser sticky. |
| Até 560 px | Hero e ações se compactam; cartões e listas ajustam hierarquia; status da etapa vai para uma linha própria; links e botões devem continuar cabendo sem transbordar. |

Na migração, consolidar os breakpoints para evitar regras concorrentes e validar pelo menos 390 px, 768 px e 1280 px.

## Componentização proposta em React

A estrutura abaixo é uma proposta de organização por produto e domínio. Evitar um único componente de página que contenha dados, regras de jogo, autenticação e markup.

```text
src/
├── app/
│   ├── App.tsx
│   ├── router.tsx
│   └── providers.tsx
├── components/
│   ├── layout/                 # SiteHeader, SiteFooter, PageContainer
│   ├── navigation/             # MainNavigation, MobileNavigation
│   ├── feedback/               # InlineFeedback, LoadingState, ErrorState
│   └── ui/                     # Button, Badge, ProgressBar, Dialog
├── features/
│   ├── home/                   # HomePage, Hero, JourneyOverview, Principles
│   ├── journey-selection/     # JourneySelectionPage, JourneyCard
│   ├── auth/                   # LoginPage, LoginForm, AgeGate
│   ├── quizzes/                # QuizSession, QuestionCard, AnswerOption,
│   │                           # AnswerFeedback, QuizResult, MascotGuide
│   └── reeducation/            # ReeducationPage, ProgressOverview,
│                               # LearningPath, UnitGroup, LessonNode,
│                               # LessonPanel, LessonReflection
├── domain/
│   ├── journeys.ts             # IDs, nomes, permissões e metadados
│   ├── quiz.ts                 # tipos e regras puras do quiz
│   └── reeducation.ts          # unidades, aulas e regras de prazo
├── data/
│   ├── questions.ts            # banco de perguntas inicial
│   └── lessons.ts              # conteúdo dos 24 dias
├── hooks/
│   ├── useQuizSession.ts
│   └── useReeducationProgress.ts
├── services/
│   ├── authService.ts
│   ├── questionService.ts
│   └── gameService.ts
└── styles/
    ├── tokens.css
    ├── global.css
    └── themes.css
```

### Responsabilidades recomendadas

- **`App` e roteador:** montar layout, resolver rota, proteger páginas quando existir autenticação e renderizar estados de rota inválida.
- **`JourneySelectionPage`:** listar opções disponíveis e sinalizar bloqueios com motivo acessível; não deve conter regras de autenticação.
- **`LoginForm`:** validar campos e apresentar erro; delegar autenticação a um serviço, nunca redirecionar como se uma senha qualquer fosse validação real.
- **`QuizSession`:** controlar índice, resposta selecionada, tentativas, cronômetro e transições da sessão. Receber perguntas por props ou serviço.
- **`QuestionCard` e `AnswerOption`:** componentes de apresentação reutilizáveis para as jornadas infantil e adulta.
- **`MascotGuide`:** recurso opcional usado apenas pela jornada infantil; receber personagem, expressão e mensagem como dados.
- **`QuizResult`:** mostrar métricas fornecidas pela regra de domínio, sem calcular resultados a partir de texto da interface.
- **`LearningPath`:** apresentar unidades, dias e estados; não deve duplicar a regra de desbloqueio dentro de cada linha.
- **`useReeducationProgress`:** carregar/salvar progresso, calcular dia decorrido, prazo expirado e próxima etapa. Trocar o adaptador local por API sem alterar os componentes.
- **Serviços:** centralizar chamadas HTTP e conversão de payloads. A UI não deve chamar `fetch` diretamente em cada botão.
- **Dados de conteúdo:** perguntas, alternativas, justificativas, imagens e aulas devem ser estruturas tipadas separadas do JSX.

### Rotas sugeridas

```text
/                              HomePage
/jornadas                      JourneySelectionPage
/entrar                        LoginPage
/jornadas/infantil             InfantilJourneyPage
/jornadas/adulto               AdultJourneyPage
/jornadas/reeducacional        ReeducationPage
```

Use slugs estáveis (`infantil`, `adulto`, `reeducacional`) como IDs de domínio; os nomes longos são rótulos localizados. A nomenclatura atual varia entre home, seleção e páginas internas; durante a migração, definir os nomes oficiais uma única vez em `domain/journeys.ts`.

## Modelos de domínio sugeridos

Exemplo de contratos TypeScript para o front-end. Ajustar nomes ao contrato definitivo da API antes de integrar.

```ts
type JourneyId = 'infantil' | 'adulto' | 'reeducacional';
type ModuleId = 'JOVEM' | 'ADULTO' | 'INFRATOR';

interface Journey {
  id: JourneyId;
  title: string;
  description: string;
  route: string;
  module: ModuleId;
  access: 'open' | 'instructor-authorized';
}

interface Question {
  id: string;
  module: ModuleId;
  topic: string;
  prompt: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  imageUrl?: string;
}

interface QuizAnswer {
  questionId: string;
  selectedOptionIndex: number;
  isCorrect: boolean;
  attemptNumber: number;
}

interface Lesson {
  id: string;
  day: number;
  unitId: string;
  title: string;
  summary: string;
  prompt: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
}

interface ReeducationProgress {
  startedAt: string | null;
  lastCompletedAt: string | null;
  completedLessonIds: string[];
}
```

Guardar índices/IDs, datas ISO e resultados numéricos; não persistir conteúdo renderizado nem HTML. A resposta correta não deve ser enviada ao cliente em um produto real antes da submissão, se isso permitir manipulação do resultado ou do desconto.

## Regras implementadas no protótipo

Esta seção descreve o que o JavaScript atual faz, não o comportamento futuro proposto em `CONTEXT_TECNICO.md`.

### Navegação e seleção

- O menu da home abre/fecha no botão responsivo e fecha quando um link é selecionado.
- A seleção encaminha para `login.html?frente=<slug>`.
- O mapa de jornadas conhece `infantil`, `adulto` e `reeducacional`.
- O formulário atual não exige campos e não valida identidade. Ao enviar, a query string determina qual HTML será aberto; sem valor reconhecido, volta para `index.html`.

### Quizzes infantil e adulto

- O banco atual tem cinco perguntas por jornada: cinco infantis e cinco adultas.
- A interface apresenta uma pergunta de cada vez, com quatro alternativas, e não mostra a resposta correta antes da escolha.
- Ao escolher uma alternativa, todas as opções daquela pergunta ficam desativadas; a correta fica marcada em verde e, se necessário, a escolhida incorreta em vermelho.
- Feedback e justificativa aparecem após a escolha. A pessoa pode seguir mesmo após errar; não há repetição da pergunta na mesma sessão.
- `correctAnswers` aumenta somente quando a opção selecionada está correta. A conclusão mostra acertos sobre total e oferece reinício.
- O quiz infantil alterna mascotes/falas e troca as imagens conforme acerto/erro. O quiz adulto usa feedback textual sem mascotes.
- Não há cronômetro, sorteio de perguntas, persistência de sessões, histórico, autenticação nem envio de resultado no protótipo.

### Trilha reeducacional de 24 dias

- Há 24 lições em quatro unidades de seis dias: **Responsabilidade e regras**, **Percepção de riscos**, **Condução preventiva** e **Novos hábitos**.
- O prazo começa no primeiro clique na etapa disponível, não apenas ao abrir a página.
- O progresso atual é salvo no `localStorage`, na chave `setec-reeducacional-progress-v1`, com datas de início/última conclusão e índices concluídos.
- Apenas a próxima etapa não concluída pode ser iniciada. Concluir uma etapa libera a seguinte no próximo dia do calendário local.
- Resposta incorreta é desativada, mas as outras opções continuam disponíveis para nova tentativa.
- Resposta correta desativa todas as opções e revela a explicação e a ação para concluir.
- É possível concluir no máximo uma etapa por dia; a trilha tem 24 dias de conteúdo e 30 dias corridos de prazo, deixando margem de seis dias sem conclusão.
- Após 30 dias decorridos desde o início, etapas pendentes não podem mais ser respondidas. Etapas concluídas continuam disponíveis para revisão.
- Revisar etapa concluída mostra que ela já foi registrada e não altera o progresso.
- Ao concluir as 24 etapas, o painel mostra a mensagem final do percurso.
- O progresso fica somente neste navegador e dispositivo. Limpar dados do site ou trocar de dispositivo remove o acesso ao progresso, salvo cópia/exportação externa.
- O protótipo não tem opção de reiniciar a trilha, sincronização, conta de usuário ou aprovação administrativa.

## Regras de negócio planejadas

As regras a seguir estão descritas em `CONTEXT_TECNICO.md` como proposta de produto/backend. Ainda não são aplicadas pelo protótipo e precisam ser implementadas e testadas no servidor para terem efeito real.

### Cadastro, idade e perfil

- Validar idade no cadastro usando data de nascimento.
- Menores de 7 anos não podem se cadastrar.
- A regra técnica atual classifica de 7 a 15 anos como `JOVEM`; a partir de 16 anos como `ADULTO`.
- Cadastro deve armazenar usuário e senha; senha persistida somente como hash seguro com Argon2.
- Login deve emitir token Bearer JWT.
- Usuário autenticado pode consultar seu perfil e solicitar exclusão lógica (soft delete).

### Acesso às jornadas

- Módulos educacionais jovem e adulto são de acesso livre, respeitando a política etária definida.
- Reciclagem de CNH/Jornada Reeducacional começa bloqueada por padrão no fluxo de totem.
- Palestrante/instrutor desbloqueia a sessão usando CPF e senha.
- Perfis de usuário esperados: cidadão, palestrante e administrador.
- O front-end deve mostrar a disponibilidade ou bloqueio recebido do servidor, não confiar apenas em uma condição local.

### Partida de quiz / game engine

- Uma partida sorteia exatamente quatro perguntas do módulo selecionado.
- A partida tem um cronômetro geral, com limite recebido ao iniciar.
- Se o tempo acabar, perguntas restantes são registradas como não respondidas/incorretas.
- Pergunta errada permanece na fila até ser respondida corretamente, enquanto a partida estiver ativa.
- Histórico registra acertos de primeira tentativa, quantidade de tentativas por questão, tempo total e taxa dinâmica de acerto.
- Resultado planejado mostra percentual de acerto.
- Para o módulo infrator, a regra documentada calcula desconto de multa de `0,5%` por pergunta acertada na primeira tentativa, limitado a `2%` por partida de quatro perguntas. Validar com responsáveis legais antes de apresentar como benefício real.

### Contrato de API planejado

| Método e rota | Responsabilidade planejada |
| --- | --- |
| `POST /auth/register` | Criar usuário, validar idade mínima e gerar hash de senha. |
| `POST /auth/login` | Autenticar e emitir JWT Bearer. |
| `POST /auth/unlock-infrator` | Autorizar sessão reeducacional no totem com credenciais de palestrante. |
| `GET /users/me` | Retornar o perfil autenticado e faixa etária. |
| `DELETE /users/me` | Solicitar exclusão lógica da conta. |
| `GET /questions` | Listar e filtrar perguntas por módulo/tema. |
| `POST /questions` | Criar pergunta; acesso restrito a administrador. |
| `POST /games/start` | Iniciar partida com módulo; retornar ID, quatro perguntas e limite de tempo. |
| `POST /games/submit` | Encerrar partida e calcular respostas, tempo e resultado. |
| `GET /games/history` | Buscar partidas anteriores do usuário. |

### Entidades planejadas

- **User:** UUID, username único, hash, data de nascimento, faixa etária, papel, datas e `deletedAt` para soft delete.
- **Question:** UUID, módulo, tema, texto, imagem opcional, opções, índice da resposta correta, explicação, imagem de explicação opcional e `deletedAt`.
- **GameSession:** UUID, usuário, módulo, limite e duração em segundos, indicador de tempo esgotado e data de criação.
- **GameAnswer:** UUID, sessão, pergunta, opção selecionada, correção e número da tentativa.

O contexto técnico sugere NestJS, JWT, Passport, Argon2, validação com `class-validator`/`class-transformer` e persistência PostgreSQL por TypeORM ou Prisma. A implementação do backend não existe neste projeto.

## Acessibilidade e comportamento responsivo

- Preservar hierarquia semântica: um `h1` por página, títulos em ordem, landmarks `header`, `nav`, `main`, `section`, `aside` e `footer` quando aplicáveis.
- Cada imagem informativa deve ter texto alternativo que descreva sua função; imagens puramente decorativas devem usar `alt=""`.
- Botões de resposta devem ser botões reais, com estado `disabled` e foco de teclado perceptível.
- Manter feedback de respostas e mudanças de progresso em regiões `aria-live` apropriadas, sem anunciar a tela inteira a cada atualização.
- A barra da trilha deve expor `role="progressbar"`, `aria-valuemin`, `aria-valuemax` e `aria-valuenow`.
- Estados correto/incorreto não podem ser comunicados apenas por cor; incluir texto, ícone acessível ou descrição.
- No React, mover o foco para o título da próxima pergunta ao avançar, como o protótipo já faz, e restaurar foco de forma previsível em modais.
- Garantir alvos de toque confortáveis, texto sem corte, quebra de títulos longos e ausência de rolagem horizontal em 390 px.
- Respeitar `prefers-reduced-motion` para animações de mascotes e transições.
- Validar contraste de texto e controles antes de produção; os valores atuais são referência visual, não uma auditoria WCAG.

## Conteúdo educativo existente

### Infantil: banco atual de cinco perguntas

1. Travessia na faixa por ciclista: descer e empurrar a bicicleta.
2. Caminhada na calçada: manter distância do meio-fio e observar saídas de garagem.
3. Travessia por crianças menores de 10 anos: acompanhamento adulto e observação dos dois lados.
4. Cinto: uso por todos os ocupantes, inclusive no banco traseiro.
5. Bicicleta infantil: capacete bem ajustado como recomendação de proteção.

### Adulto: banco atual de cinco perguntas

1. Responsabilidade no trânsito e proteção de usuários mais vulneráveis.
2. Uso/manuseio de celular ao dirigir.
3. Preferência de pedestre em faixa não semaforizada.
4. Direção sob influência de álcool e penalidades descritas no conteúdo.
5. Preferência em cruzamento sem sinalização.

### Reeducacional: quiz legado de cinco perguntas

O banco legado em `script.js` contém cinco perguntas de excesso de velocidade: até 20% acima do limite, entre 20% e 50%, acima de 50%, relação entre pagamento e pontos e conceito de velocidade considerada. A página reeducacional atual não renderiza esse quiz; sua experiência ativa é a trilha diária de 24 lições.

### Trilha reeducacional: 24 tópicos

| Unidade | Dias e temas |
| --- | --- |
| Responsabilidade e regras | 1. Responsabilidade no trânsito; 2. A infração e suas consequências; 3. Sinalização viária; 4. Velocidade: limite e contexto; 5. Velocidade e distância de parada; 6. Distância segura. |
| Percepção de riscos | 7. Atenção ao dirigir; 8. Celular e direção; 9. Álcool e direção; 10. Sono e fadiga; 11. Cinto de segurança; 12. Respeito aos vulneráveis. |
| Condução preventiva | 13. Direção defensiva; 14. Chuva e baixa visibilidade; 15. Cruzamentos; 16. Mudança de faixa; 17. Emergências na via; 18. Antecipação de riscos. |
| Novos hábitos | 19. Reincidência e mudança; 20. Rotina antes de sair; 21. Autocontrole; 22. Influência dos passageiros; 23. Compromisso com a segurança; 24. Decisão segura: cenário final. |

As questões, respostas corretas e explicações estão hardcoded em `script.js`. Rever precisão legal, valores monetários, pontuação e texto educativo com especialista antes de publicar ou usar em formação oficial. Conteúdo de trânsito e penalidades pode mudar com a legislação.

## Decisões pendentes e riscos

1. **Faixa infantil divergente:** telas atuais dizem 7 a 14 anos; `CONTEXT_TECNICO.md` classifica 7 a 15 como jovem e 16+ como adulto. Definir a regra oficial e refletir a mesma faixa no cadastro, seleção e conteúdo.
2. **Tamanho e repetição das partidas:** o backend planejado usa quatro perguntas sorteadas e mantém erros na fila até acerto; o protótipo apresenta cinco perguntas fixas e permite avançar após erro. Escolher um comportamento único antes de componentizar a engine.
3. **Natureza da trilha:** existem 24 lições diárias em um prazo de 30 dias, além do quiz legado de cinco perguntas sobre velocidade. Definir se ambos coexistem, se um substitui o outro e se a conclusão tem validade/certificado.
4. **Acesso reeducacional:** a regra de bloqueio por palestrante não está aplicada nas páginas HTML. Definir quais pessoas podem iniciar, quais credenciais são aceitas e como o desbloqueio expira.
5. **Autenticação e dados pessoais:** idade, username, senha, CPF de palestrante e histórico exigem API segura, política de privacidade, retenção e controles de acesso. Nunca guardar senhas ou CPF em `localStorage`.
6. **Persistência da trilha:** decidir se o progresso será por usuário e sincronizado com backend ou continuará local. Para uso em totem compartilhado, a persistência local precisa de isolamento/limpeza por sessão.
7. **Regra de desconto:** a fórmula de desconto está apenas documentada; confirmar autorização, condições, arredondamento, limites e validade jurídica antes de exibir valores.
8. **Nomenclatura:** consolidar os nomes oficiais — Jornada Educacional Infantil, Jornada Educacional Adulto e Jornada Reeducacional — em conteúdo, navegação, metadados e backend. As páginas atuais ainda contêm variações curtas.
9. **Contato da home:** o e-mail atual usa o domínio `educarparaviver.org`; confirmar se continua válido após a mudança de marca.
10. **Acessibilidade e conteúdo:** revisar contraste, leitura por faixa etária, linguagem não estigmatizante e precisão jurídica com usuários e especialistas.

## Plano de migração React

1. Confirmar as decisões pendentes de idade, jogo, autorização e nomenclatura.
2. Adicionar React e TypeScript ao Vite e configurar roteamento; migrar uma página por vez, mantendo os slugs atuais durante a transição.
3. Extrair tokens e estilos globais sem mudar o desenho aprovado; separar os temas infantil, adulto e reeducacional.
4. Mover `questions` e `lessons` para dados tipados, com testes de integridade para IDs únicos, alternativas e índice correto válido.
5. Implementar quiz como máquina de estados/reducer, cobrindo resposta certa, resposta errada, próxima pergunta, tempo esgotado, conclusão e reinício.
6. Implementar a trilha com funções puras para elegibilidade diária, conclusão, expiração e revisão; cobrir datas de borda e mudança de fuso horário com testes.
7. Trocar redirecionamento demonstrativo por autenticação real e autorização do backend; transportar tokens com estratégia segura definida pela aplicação.
8. Integrar perguntas, sessões e histórico à API; manter cálculo de pontuação/desconto no servidor.
9. Validar teclado, leitores de tela, estados vazios/erro/carregamento e dimensões mobile/tablet/desktop.

## Referências internas

- [CONTEXT_TECNICO.md](CONTEXT_TECNICO.md): proposta de regras de negócio, entidades e API NestJS.
- [package.json](package.json): dependências e scripts atualmente instalados.
- [script.js](script.js): dados de perguntas, lições e regras do protótipo.
- [styles.css](styles.css) e [frente.css](frente.css): tokens e estilos das páginas.
