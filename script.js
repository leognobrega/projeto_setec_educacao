const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => menu.classList.remove('open'));
  });
}

const frontMap = {
  infantil: {
    label: 'Jornada Educacional Infantil',
    page: 'frente-infantil.html',
  },
  adulto: {
    label: 'Jornada Educacional Adulto',
    page: 'frente-adulto.html',
  },
  reeducacional: {
    label: 'Jornada Reeducacional',
    page: 'frente-reeducacional.html',
  },
};

const questions = [
  {
    id: 1,
    frente: 'Infantil e Juvenil',
    pergunta: 'Quando você está andando de bicicleta e precisa atravessar a rua na faixa de pedestres, qual é a atitude correta e mais segura?',
    opcoes: {
      A: 'Atravessar pedalando bem rápido para não atrapalhar os carros.',
      B: 'Descer da bicicleta e atravessar empurrando-a.',
      C: 'Atravessar pedalando devagar junto com os pedestres.',
      D: 'Levantar a mão e atravessar pedalando.'
    },
    resposta_correta: 'B',
    justificativa: 'Ao desmontar, o ciclista se equipara ao pedestre em direitos e segurança, facilitando a visualização e evitando acidentes.'
  },
  {
    id: 2,
    frente: 'Infantil e Juvenil',
    pergunta: 'Ao caminhar pelas calçadas, como o pedestre deve se comportar para evitar acidentes?',
    opcoes: {
      A: 'Andar sempre na beirada da calçada, bem perto da rua.',
      B: 'Caminhar pelo meio da rua se a calçada estiver cheia.',
      C: 'Andar afastado do meio-fio (guia) e prestar atenção nas saídas de garagens.',
      D: 'Andar correndo e olhando para o celular.'
    },
    resposta_correta: 'C',
    justificativa: 'Afastar-se do fluxo de veículos aumenta o tempo de reação caso algum imprevisto ocorra, além de evitar ser surpreendido por carros saindo de garagens.'
  },
  {
    id: 3,
    frente: 'Infantil e Juvenil',
    pergunta: 'Para crianças menores de 10 anos, qual é a regra de ouro na hora de atravessar a rua?',
    opcoes: {
      A: 'Atravessar sempre correndo e sem olhar para os lados.',
      B: 'Atravessar sozinha apenas se o semáforo estiver verde para os carros.',
      C: 'Atravessar acompanhada de um adulto, olhando para os dois lados várias vezes.',
      D: 'Atravessar entre os carros parados para chegar mais rápido.'
    },
    resposta_correta: 'C',
    justificativa: 'Crianças menores de 10 anos ainda não possuem total capacidade de julgamento de distância e velocidade dos veículos no trânsito.'
  },
  {
    id: 4,
    frente: 'Infantil e Juvenil',
    pergunta: 'Você está de carona no carro com sua família. Qual a regra fundamental sobre o cinto de segurança?',
    opcoes: {
      A: 'O cinto só é obrigatório para quem senta no banco da frente.',
      B: 'Todos os ocupantes do veículo devem usar o cinto, inclusive no banco de trás.',
      C: 'Crianças não precisam usar cinto se o trajeto for muito curto.',
      D: 'O cinto de segurança só deve ser usado em rodovias.'
    },
    resposta_correta: 'B',
    justificativa: 'É obrigatório para todos os passageiros. Em caso de colisão, o passageiro sem cinto no banco de trás é arremessado e pode se ferir gravemente ou machucar quem está na frente.'
  },
  {
    id: 5,
    frente: 'Infantil e Juvenil',
    pergunta: 'Qual equipamento não é uma obrigação geral na lei, mas é uma medida importantíssima de proteção para crianças que andam de bicicleta?',
    opcoes: {
      A: 'Fones de ouvido.',
      B: 'Boné de aba larga.',
      C: 'Capacete bem ajustado.',
      D: 'Óculos escuros.'
    },
    resposta_correta: 'C',
    justificativa: 'Embora o capacete para bicicletas convencionais não seja uma exigência federal com multa no CTB, ele é vital para prevenir traumatismos cranianos em quedas.'
  },
  {
    id: 6,
    frente: 'Adultos (Geral)',
    pergunta: 'Segundo o Código de Trânsito Brasileiro (CTB), qual é a regra de ouro sobre a responsabilidade no trânsito?',
    opcoes: {
      A: 'A responsabilidade é exclusiva da prefeitura e da engenharia de tráfego.',
      B: 'O pedestre é o único responsável por sua própria segurança.',
      C: 'Os veículos maiores são responsáveis pela segurança dos menores, e todos cuidam dos pedestres.',
      D: 'Os motociclistas são responsáveis pelos carros.'
    },
    resposta_correta: 'C',
    justificativa: 'Este é um princípio básico do CTB (Art. 29): a proteção à vida e aos mais vulneráveis (pedestres e ciclistas) é dever de todos os motorizados.'
  },
  {
    id: 7,
    frente: 'Adultos (Geral)',
    pergunta: 'O que a legislação de trânsito determina sobre o uso do celular na direção?',
    opcoes: {
      A: 'É permitido se o motorista estiver no viva-voz ou enviando áudios curtos.',
      B: 'É proibido segurar ou manusear o celular enquanto dirige, sendo infração gravíssima.',
      C: 'É permitido o uso livremente quando o semáforo estiver vermelho.',
      D: 'É infração leve apenas se causar algum acidente.'
    },
    resposta_correta: 'B',
    justificativa: 'O manuseio do aparelho celular divide a atenção visual, cognitiva e mecânica do motorista, aumentando drasticamente o risco de acidentes.'
  },
  {
    id: 8,
    frente: 'Adultos (Geral)',
    pergunta: 'Quando um pedestre inicia a travessia em uma faixa não semaforizada, qual é o dever do motorista?',
    opcoes: {
      A: 'Acelerar levemente para liberar a faixa mais rápido.',
      B: 'Buzinar para alertar o pedestre.',
      C: 'Reduzir a velocidade, dar a preferência e aguardar a travessia completa.',
      D: 'Desviar do pedestre mudando de faixa.'
    },
    resposta_correta: 'C',
    justificativa: 'O pedestre tem prioridade absoluta na faixa sem semáforo. O veículo deve imobilizar-se para garantir a travessia segura.'
  },
  {
    id: 9,
    frente: 'Adultos (Geral)',
    pergunta: 'Qual é a penalidade para o condutor flagrado dirigindo sob influência de álcool (Lei Seca)?',
    opcoes: {
      A: 'Advertência por escrito na primeira autuação.',
      B: 'Infração média com retenção do veículo.',
      C: 'Infração gravíssima (multa multiplicada por 10) e suspensão do direito de dirigir por 12 meses.',
      D: 'Apreensão imediata do veículo, sem possibilidade de liberação.'
    },
    resposta_correta: 'C',
    justificativa: 'O Brasil adota tolerância zero para álcool na direção. A multa tem fator multiplicador x10 e o motorista perde o direito de dirigir.'
  },
  {
    id: 10,
    frente: 'Adultos (Geral)',
    pergunta: 'Em cruzamentos sem sinalização, de quem é a preferência de passagem?',
    opcoes: {
      A: 'Do veículo que se aproxima pela esquerda.',
      B: 'Do veículo que estiver em maior velocidade.',
      C: 'Do veículo que trafega na via mais larga.',
      D: 'Do veículo que se aproxima pela direita do condutor.'
    },
    resposta_correta: 'D',
    justificativa: 'É a regra geral de circulação do CTB: em cruzamentos não sinalizados, a preferência é sempre do veículo que vier pela direita.'
  },
  {
    id: 11,
    frente: 'Condutores Infratores (Velocidade)',
    pergunta: 'Se o motorista transita em velocidade até 20% superior à máxima permitida da via (Art. 218, I), qual é a penalidade aplicada?',
    opcoes: {
      A: 'Infração leve, gerando 3 pontos.',
      B: 'Infração média, com multa de R$ 130,16 e 4 pontos na CNH.',
      C: 'Infração grave, com 5 pontos na CNH.',
      D: 'Apenas advertência educativa obrigatória.'
    },
    resposta_correta: 'B',
    justificativa: 'De acordo com o Art. 218, inciso I do CTB, o excesso de velocidade de até 20% configura infração de gravidade média.'
  },
  {
    id: 12,
    frente: 'Condutores Infratores (Velocidade)',
    pergunta: 'O excesso de velocidade entre 20% e 50% acima do limite (Art. 218, II) é classificado no CTB como infração grave. Qual o impacto na habilitação?',
    opcoes: {
      A: '3 pontos.',
      B: '4 pontos.',
      C: '5 pontos e multa de R$ 195,23.',
      D: '7 pontos.'
    },
    resposta_correta: 'C',
    justificativa: 'Infrações graves geram 5 pontos no prontuário do condutor e o valor padrão da multa.'
  },
  {
    id: 13,
    frente: 'Condutores Infratores (Velocidade)',
    pergunta: 'Qual é a consequência direta para o condutor flagrado a uma velocidade superior a 50% do limite da via (Art. 218, III)?',
    opcoes: {
      A: 'Apreensão do veículo por 30 dias.',
      B: 'Multa simples de infração grave sem perda da habilitação.',
      C: 'Multa gravíssima (R$ 880,41), 7 pontos e suspensão imediata do direito de dirigir.',
      D: 'Multa multiplicada por 5 e prisão em flagrante.'
    },
    resposta_correta: 'C',
    justificativa: 'Esta infração tem efeito suspensivo. A suspensão ocorre independentemente do saldo de pontos que o motorista já possui na CNH.'
  },
  {
    id: 14,
    frente: 'Condutores Infratores (Velocidade)',
    pergunta: 'O pagamento financeiro da multa de excesso de velocidade apaga os pontos da Carteira Nacional de Habilitação?',
    opcoes: {
      A: 'Sim, os pontos são cancelados imediatamente no sistema do Detran.',
      B: 'Não, o pagamento não interfere na pontuação; os pontos continuam registrados no prontuário por 12 meses.',
      C: 'Sim, mas apenas se o pagamento for feito até a data de vencimento.',
      D: 'Não, os pontos dobram após o pagamento.'
    },
    resposta_correta: 'B',
    justificativa: 'O pagamento resolve apenas a questão administrativa-financeira. Os pontos permanecem vinculados ao prontuário do condutor por um ano.'
  },
  {
    id: 15,
    frente: 'Condutores Infratores (Velocidade)',
    pergunta: 'O radar não autua o motorista com base na velocidade exata medida pela máquina, mas sim na chamada "velocidade considerada". O que isso significa juridicamente?',
    opcoes: {
      A: 'Que o agente de trânsito considera a velocidade que ele acredita ser a real.',
      B: 'Que é aplicado um desconto metrológico (margem de erro do equipamento) sobre a velocidade lida.',
      C: 'Que a velocidade do carro é somada à velocidade dos veículos ao redor.',
      D: 'Que o radar calcula a média de velocidade de todo o quarteirão.'
    },
    resposta_correta: 'B',
    justificativa: 'Esse desconto é uma margem de erro técnica exigida pelo Inmetro, que garante a confiabilidade do processo e evita autuações injustas.'
  }
];

const loginForm = document.getElementById('loginForm');
const frenteLabel = document.getElementById('frenteLabel');
const tituloFrente = document.getElementById('tituloFrente');

const selectedFront = new URLSearchParams(window.location.search).get('frente');

if (frenteLabel && tituloFrente && selectedFront && frontMap[selectedFront]) {
  frenteLabel.textContent = frontMap[selectedFront].label;
  tituloFrente.textContent = frontMap[selectedFront].label;
}

if (loginForm) {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const targetFront = new URLSearchParams(window.location.search).get('frente');
    const route = targetFront && frontMap[targetFront] ? frontMap[targetFront].page : 'index.html';

    window.location.href = route;
  });
}

const questionContainer = document.getElementById('questions-container');

const learningPath = document.getElementById('learning-path');
const lessonView = document.getElementById('lesson-view');

if (learningPath && lessonView) {
  const pathStorageKey = 'setec-reeducacional-progress-v1';
  const lessons = [
    ['Responsabilidade no trânsito', 'Reconhecer o impacto das próprias escolhas.', 'A segurança no trânsito depende de quem?', ['Somente dos órgãos de fiscalização.', 'De todos que participam da circulação.', 'Apenas de quem dirige veículos grandes.'], 1, 'Cada pessoa tem responsabilidade pela própria conduta e pela proteção das demais.'],
    ['A infração e suas consequências', 'Entender o que acontece depois de uma autuação.', 'Receber uma multa deve ser entendido como:', ['Um registro sem relação com a segurança.', 'Uma oportunidade de rever a conduta e seus riscos.', 'Uma autorização para repetir a infração após o pagamento.'], 1, 'A autuação registra uma conduta que precisa ser compreendida para evitar novos riscos.'],
    ['Sinalização viária', 'Interpretar sinais antes de agir.', 'Ao encontrar uma sinalização que você não reconhece, o mais seguro é:', ['Reduzir a velocidade e agir com cautela.', 'Seguir o fluxo sem observar o sinal.', 'Parar no meio da pista para consultar o celular.'], 0, 'Reduzir e observar permite reagir com segurança sem criar um novo perigo.'],
    ['Velocidade: limite e contexto', 'Adequar a velocidade ao ambiente.', 'Mesmo dentro do limite sinalizado, pode ser necessário reduzir quando:', ['A via está molhada ou a visibilidade está baixa.', 'O trânsito está livre.', 'O veículo da frente está distante.'], 0, 'O limite não elimina a necessidade de adequar a velocidade às condições da via.'],
    ['Velocidade e distância de parada', 'Perceber como a velocidade afeta a reação.', 'Quando a velocidade aumenta, a distância necessária para parar tende a:', ['Diminuir.', 'Permanecer sempre igual.', 'Aumentar.'], 2, 'Mais velocidade significa menos tempo para reagir e mais espaço para imobilizar o veículo.'],
    ['Distância segura', 'Manter espaço para reagir.', 'Para manter uma distância segura do veículo da frente, você deve:', ['Acompanhar de perto para evitar que outro veículo entre.', 'Manter espaço suficiente para reagir e frear.', 'Olhar apenas para o veículo da frente.'], 1, 'O espaço de segurança ajuda a evitar colisões diante de uma freada ou imprevisto.'],
    ['Atenção ao dirigir', 'Reduzir distrações durante o trajeto.', 'Qual atitude preserva melhor a atenção ao volante?', ['Ajustar o GPS com o veículo em movimento.', 'Deixar o celular guardado e configurar a rota antes de sair.', 'Alternar o olhar entre a via e as notificações.'], 1, 'Preparar a rota antes da viagem evita que a atenção saia da via.'],
    ['Celular e direção', 'Compreender o risco da distração.', 'Uma mensagem chega enquanto você dirige. O que fazer?', ['Ler rapidamente no próximo semáforo.', 'Parar em local seguro antes de olhar o aparelho.', 'Segurar o celular abaixo da linha do painel.'], 1, 'Mesmo uma consulta breve desvia atenção. Pare em local seguro antes de usar o aparelho.'],
    ['Álcool e direção', 'Separar consumo de álcool e condução.', 'Se você consumiu bebida alcoólica, qual é a escolha segura?', ['Esperar alguns minutos e dirigir devagar.', 'Pedir que alguém sóbrio conduza ou escolher outro transporte.', 'Tomar café antes de sair.'], 1, 'Não há atalho confiável para eliminar os efeitos do álcool. Não conduza após consumir.'],
    ['Sono e fadiga', 'Identificar sinais de cansaço.', 'Durante o trajeto, você começa a bocejar e perde concentração. O que fazer?', ['Abrir a janela e manter a velocidade.', 'Parar em local seguro e descansar antes de continuar.', 'Aumentar o volume do rádio.'], 1, 'Cansaço reduz atenção e tempo de reação. Interromper a viagem é a medida responsável.'],
    ['Cinto de segurança', 'Proteger todos os ocupantes.', 'Quem deve usar o cinto de segurança?', ['Somente quem está nos bancos dianteiros.', 'Todas as pessoas no veículo.', 'Apenas em rodovias.'], 1, 'O cinto protege todos os ocupantes em qualquer trajeto.'],
    ['Respeito aos vulneráveis', 'Proteger quem está mais exposto.', 'Ao se aproximar de pedestres ou ciclistas, a conduta adequada é:', ['Reduzir a velocidade e manter distância lateral segura.', 'Buzinar para que saiam do caminho.', 'Manter a velocidade se houver espaço na faixa.'], 0, 'Pedestres e ciclistas estão mais expostos. A condução deve priorizar sua segurança.'],
    ['Direção defensiva', 'Antecipar riscos em vez de reagir tarde.', 'Dirigir defensivamente significa:', ['Prever situações de risco e agir para evitá-las.', 'Confiar que os outros sempre vão obedecer às regras.', 'Usar a buzina para garantir preferência.'], 0, 'A direção defensiva combina atenção, previsão e decisões que reduzem riscos.'],
    ['Chuva e baixa visibilidade', 'Adaptar a condução às condições do tempo.', 'Em uma chuva forte, a primeira atitude deve ser:', ['Reduzir a velocidade e ampliar a distância de segurança.', 'Acionar o pisca-alerta e seguir normalmente.', 'Aproximar-se do veículo da frente para enxergar melhor.'], 0, 'Pista molhada e visibilidade reduzida exigem menor velocidade e mais espaço para parar.'],
    ['Cruzamentos', 'Aproximar-se com cautela de conflitos de fluxo.', 'Ao se aproximar de um cruzamento sem boa visibilidade, você deve:', ['Reduzir e observar antes de avançar.', 'Acelerar para liberar a via rapidamente.', 'Presumir que os demais vão parar.'], 0, 'A aproximação cautelosa permite identificar veículos, pedestres e sinalização.'],
    ['Mudança de faixa', 'Sinalizar e conferir antes de manobrar.', 'Antes de mudar de faixa, é necessário:', ['Sinalizar, conferir os espelhos e verificar o ponto cego.', 'Sinalizar depois de iniciar a manobra.', 'Confiar apenas no espelho retrovisor interno.'], 0, 'A verificação completa e a sinalização antecipada tornam a manobra previsível.'],
    ['Emergências na via', 'Tomar decisões seguras diante de um imprevisto.', 'Se o veículo apresentar uma falha, procure:', ['Imobilizá-lo em local seguro e sinalizar a situação.', 'Parar imediatamente em qualquer faixa.', 'Continuar até o veículo deixar de funcionar.'], 0, 'Sair do fluxo e sinalizar reduz o risco para você e para os demais.'],
    ['Antecipação de riscos', 'Ler o ambiente ao redor do veículo.', 'Ao passar por veículos estacionados, é prudente:', ['Observar portas, pessoas e possíveis saídas para a via.', 'Manter a atenção apenas no centro da faixa.', 'Acelerar para reduzir o tempo ao lado deles.'], 0, 'Pessoas podem abrir portas ou entrar na via. Antecipar esses movimentos permite reagir.'],
    ['Reincidência e mudança', 'Transformar a reflexão em novas escolhas.', 'Para reduzir a chance de repetir uma infração, ajuda:', ['Identificar o hábito que levou à conduta e planejar uma alternativa.', 'Depender apenas da fiscalização.', 'Ignorar a situação depois de pagar a multa.'], 0, 'Reconhecer o comportamento e definir uma resposta diferente ajuda a evitar reincidência.'],
    ['Rotina antes de sair', 'Preparar veículo, rota e condições pessoais.', 'Antes de iniciar uma viagem, é importante:', ['Verificar condições do veículo, rota e disposição para dirigir.', 'Conferir apenas o nível de combustível.', 'Deixar ajustes e planejamento para fazer na via.'], 0, 'Uma preparação simples previne distrações e problemas previsíveis durante o trajeto.'],
    ['Autocontrole', 'Evitar que a pressa determine a condução.', 'Outro condutor age de forma provocadora. Qual é a resposta mais segura?', ['Evitar confronto e manter distância.', 'Acelerar para mostrar que você tem razão.', 'Seguir o veículo para discutir depois.'], 0, 'Não entrar em confronto reduz a escalada de risco e preserva a segurança de todos.'],
    ['Influência dos passageiros', 'Manter decisões seguras mesmo sob pressão.', 'Um passageiro pede que você ultrapasse onde não há segurança. Você deve:', ['Recusar e manter uma distância segura.', 'Fazer a manobra para evitar discussão.', 'Ultrapassar se o passageiro estiver com pressa.'], 0, 'A decisão de condução continua sendo responsabilidade de quem dirige.'],
    ['Compromisso com a segurança', 'Definir um hábito concreto para mudar.', 'Um compromisso útil para uma condução mais segura é:', ['Escolher uma atitude específica e praticá-la em todos os trajetos.', 'Esperar que a motivação apareça antes de mudar.', 'Mudar apenas quando houver fiscalização.'], 0, 'Mudanças consistentes começam com ações específicas que podem ser repetidas.'],
    ['Decisão segura: cenário final', 'Aplicar o aprendizado a uma situação real.', 'Você está atrasado, chove e o trânsito está lento. Qual decisão reduz riscos?', ['Manter a calma, reduzir a velocidade e aceitar chegar depois.', 'Usar o celular para avisar enquanto dirige.', 'Seguir muito próximo ao veículo da frente.'], 0, 'Segurança vem antes da pressa. Reduzir a velocidade e evitar distrações protege todos na via.'],
  ].map(([title, summary, question, options, answer, explanation], index) => ({
    title,
    summary,
    question,
    options,
    answer,
    explanation,
    unit: Math.floor(index / 6),
  }));

  const units = ['Responsabilidade e regras', 'Percepção de riscos', 'Condução preventiva', 'Novos hábitos'];
  const readProgress = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(pathStorageKey));
      if (saved && Array.isArray(saved.completed)) {
        return {
          completed: [...new Set(saved.completed.filter((index) => Number.isInteger(index) && index >= 0 && index < lessons.length))],
          startedAt: typeof saved.startedAt === 'string' ? saved.startedAt : null,
          lastCompletedAt: typeof saved.lastCompletedAt === 'string' ? saved.lastCompletedAt : null,
        };
      }
    } catch {
      return { completed: [], startedAt: null, lastCompletedAt: null };
    }
    return { completed: [], startedAt: null, lastCompletedAt: null };
  };

  const previewMode = new URLSearchParams(window.location.search).get('demo') === 'progress';
  const formatLocalDate = (date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  const createPreviewProgress = () => {
    const today = new Date();
    const startedAt = new Date(today);
    const lastCompletedAt = new Date(today);
    startedAt.setDate(startedAt.getDate() - 6);
    lastCompletedAt.setDate(lastCompletedAt.getDate() - 1);
    return {
      completed: [0, 1, 2, 3, 4, 5],
      startedAt: formatLocalDate(startedAt),
      lastCompletedAt: formatLocalDate(lastCompletedAt),
    };
  };

  let progress = previewMode ? createPreviewProgress() : readProgress();
  let selectedLesson = null;

  const saveProgress = () => {
    if (!previewMode) localStorage.setItem(pathStorageKey, JSON.stringify(progress));
  };
  const getElapsedDays = () => {
    if (!progress.startedAt) return 0;
    const [year, month, day] = progress.startedAt.split('-').map(Number);
    const start = new Date(year, month - 1, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return Math.floor((today - start) / 86400000);
  };
  const getTodayDate = () => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  };
  const isExpired = () => Boolean(progress.startedAt && getElapsedDays() >= 30 && progress.completed.length < lessons.length);
  const getNextLesson = () => lessons.findIndex((_, index) => !progress.completed.includes(index));
  const isNextAvailableToday = () => !progress.lastCompletedAt || getTodayDate() > progress.lastCompletedAt;

  const renderSummary = () => {
    const completedCount = progress.completed.length;
    const progressTrack = document.querySelector('.progress-track');
    document.getElementById('completed-count').textContent = completedCount;
    document.getElementById('progress-fill').style.width = `${(completedCount / lessons.length) * 100}%`;
    progressTrack.setAttribute('aria-valuenow', completedCount);

    const deadlineStatus = document.getElementById('deadline-status');
    if (!progress.startedAt) {
      deadlineStatus.textContent = 'O prazo começa quando você iniciar a primeira etapa.';
    } else if (completedCount === lessons.length) {
      deadlineStatus.textContent = 'Percurso concluído. Obrigado por assumir esse compromisso.';
    } else if (isExpired()) {
      deadlineStatus.textContent = 'O prazo de 30 dias terminou. As etapas concluídas continuam disponíveis para revisão.';
    } else {
      const daysLeft = 30 - getElapsedDays();
      const pacing = progress.lastCompletedAt === getTodayDate() ? ' · próxima etapa amanhã' : '';
      deadlineStatus.textContent = `Dia ${getElapsedDays() + 1} de 30 · ${daysLeft} ${daysLeft === 1 ? 'dia restante' : 'dias restantes'}${pacing}.`;
    }
  };

  const renderPath = () => {
    let previousUnit = -1;
    learningPath.innerHTML = lessons.map((lesson, index) => {
      const isCompleted = progress.completed.includes(index);
      const isNext = index === getNextLesson();
      const isAvailable = isNext && isNextAvailableToday() && !isExpired();
      const isLocked = !isCompleted && !isAvailable;
      const unitHeading = lesson.unit !== previousUnit
        ? `<h3 class="path-unit-title">${units[lesson.unit]}</h3>`
        : '';
      previousUnit = lesson.unit;
      const status = isCompleted ? 'Concluída' : isAvailable ? 'Disponível' : isNext && isExpired() ? 'Prazo encerrado' : isNext ? 'Amanhã' : 'Bloqueada';

      return `${unitHeading}
        <button class="path-step${isCompleted ? ' is-completed' : ''}${isAvailable ? ' is-current' : ''}${isLocked ? ' is-locked' : ''}" type="button" data-lesson="${index}" ${isLocked ? 'disabled' : ''} aria-label="Dia ${index + 1}: ${lesson.title}. ${status}">
          <span class="step-marker">${isCompleted ? '&#10003;' : String(index + 1).padStart(2, '0')}</span>
          <span class="step-copy"><span class="step-day">DIA ${String(index + 1).padStart(2, '0')}</span><span class="step-title">${lesson.title}</span></span>
          <span class="step-status">${status}</span>
        </button>`;
    }).join('');
  };

  const renderLesson = (index) => {
    selectedLesson = index;
    const lesson = lessons[index];
    const isCompleted = progress.completed.includes(index);
    const expired = isExpired() && !isCompleted;
    const options = lesson.options.map((option, optionIndex) => `
      <button class="lesson-option" type="button" data-option="${optionIndex}">
        <span class="option-letter">${String.fromCharCode(65 + optionIndex)}</span><span>${option}</span>
      </button>`).join('');

    lessonView.innerHTML = `
      <article class="lesson-content">
        <p class="lesson-index">DIA ${String(index + 1).padStart(2, '0')} <span>·</span> ${units[lesson.unit]}</p>
        <h2>${lesson.title}</h2>
        <p class="lesson-summary">${lesson.summary}</p>
        <div class="lesson-activity">
          <span class="activity-label">REFLEXÃO</span>
          <h3>${lesson.question}</h3>
          <div class="lesson-options">${options}</div>
          <p class="lesson-feedback" aria-live="polite"></p>
          <div class="lesson-explanation" hidden></div>
          <button class="lesson-continue" type="button" hidden>${index === lessons.length - 1 ? 'Concluir percurso' : 'Concluir etapa'}</button>
        </div>
        ${expired ? '<p class="lesson-expired">O prazo de 30 dias terminou. Esta etapa ainda pode ser revisada.</p>' : ''}
        ${isCompleted ? '<p class="lesson-note">Etapa concluída. Você pode revisá-la quando quiser.</p>' : ''}
      </article>`;

    if (expired || isCompleted) {
      lessonView.querySelectorAll('.lesson-option').forEach((button) => { button.disabled = true; });
      lessonView.querySelector('.lesson-feedback').textContent = isCompleted ? 'Resposta registrada anteriormente.' : 'A etapa está disponível apenas para revisão.';
      lessonView.querySelector('.lesson-continue').remove();
    }
  };

  renderSummary();
  renderPath();
  if (previewMode) document.getElementById('demo-progress-note').hidden = false;

  learningPath.addEventListener('click', (event) => {
    const step = event.target.closest('[data-lesson]');
    if (!step || step.disabled) return;
    const index = Number(step.dataset.lesson);
    if (!progress.startedAt && !progress.completed.length) {
      const now = new Date();
      progress.startedAt = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
      saveProgress();
      renderSummary();
    }
    renderLesson(index);
  });

  lessonView.addEventListener('click', (event) => {
    const option = event.target.closest('.lesson-option');
    if (option && !option.disabled) {
      const answer = Number(option.dataset.option);
      const isCorrect = answer === lessons[selectedLesson].answer;
      const feedback = lessonView.querySelector('.lesson-feedback');
      const explanation = lessonView.querySelector('.lesson-explanation');
      option.disabled = true;
      option.classList.add(isCorrect ? 'is-correct' : 'is-incorrect');

      if (isCorrect) {
        lessonView.querySelectorAll('.lesson-option').forEach((button) => { button.disabled = true; });
        feedback.textContent = 'Resposta correta.';
        explanation.innerHTML = `<strong>Para levar com você</strong><span>${lessons[selectedLesson].explanation}</span>`;
        explanation.hidden = false;
        lessonView.querySelector('.lesson-continue').hidden = false;
      } else {
        feedback.textContent = 'Essa escolha não é a mais segura. Reflita e tente outra resposta.';
      }
      return;
    }

    if (event.target.closest('.lesson-continue')) {
      const index = selectedLesson;
      if (!progress.completed.includes(index)) {
        progress.completed.push(index);
        progress.completed.sort((first, second) => first - second);
        progress.lastCompletedAt = getTodayDate();
        saveProgress();
      }
      renderSummary();
      renderPath();
      if (progress.completed.length === lessons.length) {
        lessonView.innerHTML = '<div class="lesson-complete"><span class="lesson-index">PERCURSO CONCLUÍDO</span><h2>Uma nova escolha, a cada trajeto.</h2><p>Você concluiu as 24 etapas. Leve esse compromisso para todas as suas viagens.</p></div>';
      } else {
        const nextLesson = getNextLesson();
        const nextDay = String(nextLesson + 1).padStart(2, '0');
        lessonView.innerHTML = `<div class="lesson-empty"><span class="lesson-index">DIA ${nextDay} <span>·</span> DISPONÍVEL AMANHÃ</span><h2>Por hoje, percurso concluído.</h2><p>Uma etapa por dia ajuda a transformar conhecimento em hábito. Sua próxima reflexão estará disponível amanhã.</p><span class="lesson-note">${lessons[nextLesson].title}</span></div>`;
      }
    }
  });
}

if (questionContainer) {
  const bodyFront = document.body.dataset.front;
  const frontName = {
    infantil: 'Infantil e Juvenil',
    adulto: 'Adultos (Geral)',
    reeducacional: 'Condutores Infratores (Velocidade)'
  }[bodyFront];

  const filteredQuestions = questions.filter((item) => item.frente === frontName);

  if (bodyFront === 'infantil') {
    let currentQuestionIndex = 0;
    let correctAnswers = 0;
    const quizMascot = document.querySelector('.quiz-mascot');
    const quizGuideOrder = ['avisonio', 'parezinho', 'alertinha'];
    const quizMascotNames = {
      parezinho: 'PareZinho',
      alertinha: 'Alertinha',
      avisonio: 'Avisônio',
    };
    const quizMascotMessages = {
      parezinho: {
        ready: 'Vamos com calma: qual atitude deixa a travessia segura?',
        correct: 'Boa! Parar, olhar e escolher bem protege vidas!',
        incorrect: 'Vamos parar um instante e pensar no caminho seguro.',
      },
      alertinha: {
        ready: 'Fique de olho nos detalhes desta situação!',
        correct: 'Olho vivo! Você percebeu o risco e acertou!',
        incorrect: 'Atenção aos sinais. Vamos pensar no risco mais uma vez.',
      },
      avisonio: {
        ready: 'Prepare-se para encontrar o caminho mais seguro!',
        correct: 'Que boa rota! Essa atitude protege todo mundo.',
        incorrect: 'Quase! Vamos encontrar juntos um caminho mais seguro.',
      },
    };
    const mascotEmotions = {
      parezinho: {
        happy: new URL('./parezinho feliz.png', import.meta.url).href,
        sad: new URL('./parezinho triste.png', import.meta.url).href,
      },
      alertinha: {
        happy: new URL('./Alertinha feliz.png', import.meta.url).href,
        sad: new URL('./Alertinha triste.png', import.meta.url).href,
      },
      avisonio: {
        happy: new URL('./Avisonio feliz.png', import.meta.url).href,
        sad: new URL('./Avisonio triste.png', import.meta.url).href,
      },
    };

    const setQuizMascot = (mascotName, mood, message) => {
      const image = quizMascot.querySelector('img');
      quizMascot.dataset.quizMascot = mascotName;
      quizMascot.classList.remove('is-happy', 'is-sad');
      quizMascot.classList.add(mood === 'happy' ? 'is-happy' : 'is-sad');
      image.src = mascotEmotions[mascotName][mood];
      image.alt = `${quizMascotNames[mascotName]} ${mood === 'happy' ? 'está feliz' : 'ficou triste'} com a resposta`;
      quizMascot.querySelector('.quiz-mascot-name').textContent = quizMascotNames[mascotName];
      quizMascot.querySelector('.quiz-mascot-speech').textContent = message;
    };

    const renderQuestion = () => {
      const guide = quizGuideOrder[currentQuestionIndex % quizGuideOrder.length];
      setQuizMascot(guide, 'happy', quizMascotMessages[guide].ready);
      const item = filteredQuestions[currentQuestionIndex];
      const optionButtons = Object.entries(item.opcoes)
        .map(([key, value]) => `
          <button class="answer-button" data-answer="${key}" data-correct="${item.resposta_correta}">
            ${key}. ${value}
          </button>
        `)
        .join('');

      questionContainer.innerHTML = `
        <article class="question-card">
          <div class="question-header">
            <span class="question-number">Pergunta ${currentQuestionIndex + 1} de ${filteredQuestions.length}</span>
            <span class="question-answer">Escolha sua resposta</span>
          </div>
          <h3 tabindex="-1">${item.pergunta}</h3>
          <div class="answer-options">${optionButtons}</div>
          <div class="feedback-box" aria-live="polite"></div>
          <div class="question-justification" hidden></div>
          <button class="next-question" type="button" hidden>
            ${currentQuestionIndex === filteredQuestions.length - 1 ? 'Concluir desafio' : 'Próxima pergunta'}
          </button>
        </article>
      `;
    };

    const renderCompletion = () => {
      questionContainer.innerHTML = `
        <article class="question-card quiz-complete">
          <p class="question-number">Desafio concluído</p>
          <h3>Missão cumprida!</h3>
          <p>Você acertou ${correctAnswers} de ${filteredQuestions.length} perguntas. Cada resposta ajuda a deixar o trânsito mais seguro!</p>
          <button class="next-question restart-quiz" type="button">Jogar novamente</button>
        </article>
      `;
      setQuizMascot('avisonio', 'happy', 'Parabéns! Você completou todas as perguntas.');
    };

    renderQuestion();

    questionContainer.addEventListener('click', (event) => {
      const button = event.target.closest('.answer-button');
      if (button) {
        const card = button.closest('.question-card');
        const feedbackBox = card.querySelector('.feedback-box');
        const explanation = card.querySelector('.question-justification');
        const correctAnswer = button.dataset.correct;
        const selectedAnswer = button.dataset.answer;
        const isCorrect = selectedAnswer === correctAnswer;

        card.querySelectorAll('.answer-button').forEach((option) => {
          option.disabled = true;
          if (option.dataset.answer === correctAnswer) {
            option.classList.add('correct');
          }
          if (option.dataset.answer === selectedAnswer && option.dataset.answer !== correctAnswer) {
            option.classList.add('wrong');
          }
        });

        if (isCorrect) {
          correctAnswers += 1;
        }

        feedbackBox.textContent = isCorrect
          ? 'Você acertou! Os mascotes estão felizes e orgulhosos da sua escolha!'
          : 'Não foi dessa vez. Vamos aprender com a resposta e tentar a próxima!';
        feedbackBox.classList.add(isCorrect ? 'correct' : 'wrong', 'visible');
        explanation.innerHTML = `<strong>Aprenda:</strong> ${filteredQuestions[currentQuestionIndex].justificativa}`;
        explanation.hidden = false;
        card.querySelector('.next-question').hidden = false;
        const guide = quizGuideOrder[currentQuestionIndex % quizGuideOrder.length];
        const mood = isCorrect ? 'happy' : 'sad';
        setQuizMascot(guide, mood, quizMascotMessages[guide][isCorrect ? 'correct' : 'incorrect']);
        return;
      }

      if (event.target.closest('.restart-quiz')) {
        currentQuestionIndex = 0;
        correctAnswers = 0;
        renderQuestion();
        return;
      }

      if (event.target.closest('.next-question')) {
        if (currentQuestionIndex === filteredQuestions.length - 1) {
          renderCompletion();
          return;
        }

        currentQuestionIndex += 1;
        renderQuestion();
        questionContainer.querySelector('.question-card h3').focus();
      }
    });
  } else if (bodyFront === 'adulto') {
    let currentQuestionIndex = 0;
    let correctAnswers = 0;
    const quizMascot = document.querySelector('.adult-quiz-mascot');
    const quizGuideOrder = ['semaforo', 'parezinho'];
    const quizMascotNames = {
      semaforo: 'Semáforo',
      parezinho: 'PareZinho',
    };
    const mascotEmotions = {
      semaforo: {
        happy: new URL('./turma.png', import.meta.url).href,
        sad: new URL('./turma.png', import.meta.url).href,
      },
      parezinho: {
        happy: new URL('./parezinho feliz.png', import.meta.url).href,
        sad: new URL('./parezinho triste.png', import.meta.url).href,
      },
    };
    const quizMascotMessages = {
      semaforo: {
        ready: 'Observe os sinais e avalie o que a via pede.',
        correct: 'Atenção à sinalização ajuda a proteger todos.',
        incorrect: 'Reveja a situação e escolha a conduta mais segura.',
      },
      parezinho: {
        ready: 'Faça uma pausa e avalie os riscos antes de agir.',
        correct: 'Decisões responsáveis começam com respeito ao próximo.',
        incorrect: 'Na dúvida, reduza e dê prioridade à segurança.',
      },
    };

    const setQuizMascot = (mascotName, mood, message) => {
      const image = quizMascot.querySelector('img');
      quizMascot.dataset.quizMascot = mascotName;
      quizMascot.classList.remove('is-happy', 'is-sad');
      quizMascot.classList.add(mood === 'happy' ? 'is-happy' : 'is-sad');
      image.src = mascotEmotions[mascotName][mood];
      image.alt = mascotName === 'semaforo'
        ? 'Mascote do semáforo acompanhado pelos outros sinais educativos'
        : `PareZinho ${mood === 'happy' ? 'está satisfeito' : 'orienta a rever a resposta'}`;
      quizMascot.querySelector('.quiz-mascot-name').textContent = quizMascotNames[mascotName];
      quizMascot.querySelector('.quiz-mascot-speech').textContent = message;
    };

    const renderQuestion = () => {
      const guide = quizGuideOrder[currentQuestionIndex % quizGuideOrder.length];
      setQuizMascot(guide, 'happy', quizMascotMessages[guide].ready);
      const item = filteredQuestions[currentQuestionIndex];
      const optionButtons = Object.entries(item.opcoes)
        .map(([key, value]) => `
          <button class="answer-button" data-answer="${key}" data-correct="${item.resposta_correta}">
            ${key}. ${value}
          </button>
        `)
        .join('');

      questionContainer.innerHTML = `
        <article class="question-card">
          <div class="question-header">
            <span class="question-number">Pergunta ${currentQuestionIndex + 1} de ${filteredQuestions.length}</span>
            <span class="question-answer">Escolha sua resposta</span>
          </div>
          <h3 tabindex="-1">${item.pergunta}</h3>
          <div class="answer-options">${optionButtons}</div>
          <div class="feedback-box" aria-live="polite"></div>
          <div class="question-justification" hidden></div>
          <button class="next-question" type="button" hidden>
            ${currentQuestionIndex === filteredQuestions.length - 1 ? 'Concluir desafio' : 'Próxima pergunta'}
          </button>
        </article>
      `;
    };

    const renderCompletion = () => {
      questionContainer.innerHTML = `
        <article class="question-card quiz-complete">
          <p class="question-number">Desafio concluído</p>
          <h3>Etapa concluída.</h3>
          <p>Você acertou ${correctAnswers} de ${filteredQuestions.length} perguntas. Continue aplicando esse cuidado em cada trajeto.</p>
          <button class="next-question restart-quiz" type="button">Refazer desafio</button>
        </article>
      `;
      setQuizMascot('semaforo', 'happy', 'Desafio concluído. Leve essa atenção para o próximo trajeto.');
    };

    renderQuestion();

    questionContainer.addEventListener('click', (event) => {
      const button = event.target.closest('.answer-button');
      if (button) {
        const card = button.closest('.question-card');
        const feedbackBox = card.querySelector('.feedback-box');
        const explanation = card.querySelector('.question-justification');
        const correctAnswer = button.dataset.correct;
        const selectedAnswer = button.dataset.answer;
        const isCorrect = selectedAnswer === correctAnswer;

        card.querySelectorAll('.answer-button').forEach((option) => {
          option.disabled = true;
          if (option.dataset.answer === correctAnswer) option.classList.add('correct');
          if (option.dataset.answer === selectedAnswer && !isCorrect) option.classList.add('wrong');
        });

        if (isCorrect) correctAnswers += 1;
        feedbackBox.textContent = isCorrect
          ? 'Resposta correta. Boa escolha!'
          : 'Resposta incorreta. Confira a explicação e siga para a próxima questão.';
        feedbackBox.classList.add(isCorrect ? 'correct' : 'wrong', 'visible');
        explanation.innerHTML = `<strong>Justificativa:</strong> ${filteredQuestions[currentQuestionIndex].justificativa}`;
        explanation.hidden = false;
        card.querySelector('.next-question').hidden = false;
        const guide = quizGuideOrder[currentQuestionIndex % quizGuideOrder.length];
        setQuizMascot(guide, isCorrect ? 'happy' : 'sad', quizMascotMessages[guide][isCorrect ? 'correct' : 'incorrect']);
        return;
      }

      if (event.target.closest('.restart-quiz')) {
        currentQuestionIndex = 0;
        correctAnswers = 0;
        renderQuestion();
        return;
      }

      if (event.target.closest('.next-question')) {
        if (currentQuestionIndex === filteredQuestions.length - 1) {
          renderCompletion();
          return;
        }
        currentQuestionIndex += 1;
        renderQuestion();
        questionContainer.querySelector('.question-card h3').focus();
      }
    });
  } else {

    questionContainer.innerHTML = filteredQuestions.map((item) => {
      const optionsHtml = Object.entries(item.opcoes)
        .map(([key, value]) => `<li><strong>${key}.</strong> ${value}</li>`)
        .join('');

      return `
        <article class="question-card">
          <div class="question-header">
            <span class="question-number">Pergunta ${item.id}</span>
            <span class="question-answer">Resposta correta: ${item.resposta_correta}</span>
          </div>
          <h3>${item.pergunta}</h3>
          <ul class="question-options">${optionsHtml}</ul>
          <div class="question-justification">
            <strong>Justificativa:</strong> ${item.justificativa}
          </div>
        </article>
      `;
    }).join('');
  }
}
