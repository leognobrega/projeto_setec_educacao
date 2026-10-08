# EducaTrânsito - Educação e Reeducação no Trânsito

Este projeto reúne as regras, fluxos e arquitetura inicial para o desenvolvimento do sistema de mobilidade urbana com foco em educação e reciclagem de CNH.

## Conteúdo principal

- [CONTEXT_TECNICO.md](CONTEXT_TECNICO.md): documentação completa com regras de negócio, rotas da API, entidades e cálculo de pontuação.

## Visão geral

- Mobile para cidadãos
- Totens em eventos e palestras
- Três módulos de quiz/game:
  - Jovem
  - Adulto
  - Infrator / Reciclagem de CNH

## Regras principais

- Menor que 7 anos: bloqueado
- 7 a 15: Jovem
- 16+ : Adulto
- Módulos educacionais: acesso livre
- Módulo infrator: bloqueado até autorização do palestrante
- Cada partida: 4 perguntas
- Tempo limite: obrigatório
- Questões erradas permanecem até serem acertadas

## Próximo passo recomendado

- Definir a stack do front-end em React Native ou Web
- Estruturar o back-end NestJS com autenticação JWT + Argon2
- Implementar o módulo de quiz e histórico de partidas
# EducaTrânsito
