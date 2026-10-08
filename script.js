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
    label: 'Frente Infantil',
    page: 'frente-infantil.html',
  },
  adulto: {
    label: 'Frente Adulto',
    page: 'frente-adulto.html',
  },
  reeducacional: {
    label: 'Frente Reeducacional',
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
