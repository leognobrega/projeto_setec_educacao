# Projeto Mobilidade Urbana - Guia de Desenvolvimento & Regras do Sistema

## Visão Geral do Sistema

O aplicativo será usado em dois canais principais:

- Mobile: aplicativo para cidadãos
- Totens: equipamentos instalados em eventos e palestras da Prefeitura

O sistema conta com 3 vertentes de quiz/game:

1. Educacional Jovem (Acesso Livre)
2. Educacional Adulto (Acesso Livre)
3. Reciclagem de CNH / Infrator (Bloqueado por padrão e exigindo autorização do palestrante/totem via CPF + senha)

---

## Regras de Negócio (Business Rules)

### 1. Usuário e Faixa Etária

- A validação da idade deve ocorrer no cadastro.
- Menores que 7 anos não podem se cadastrar.
- Usuários com 7 a 15 anos são classificados como JOVEM.
- Usuários com 16 anos ou mais são classificados como ADULTO.
- O cadastro deve incluir nome/usuário e senha.
- A senha precisa ser armazenada com hash seguro usando Argon2.
- A autenticação deve retornar um JWT Token.

### 2. Acesso aos Games / Módulos

- Módulos Educacionais Jovem e Adulto: acesso livre.
- Módulo Reciclagem CNH / Infrator: fica bloqueado por padrão na interface.
- Para desbloquear a sessão no totem, o palestrante ou instrutor deve informar suas credenciais de acesso: CPF + senha.

### 3. Funcionamento da Partida (Game Engine)

- Cada partida sorteia exatamente 4 perguntas do módulo selecionado.
- O quiz possui cronômetro geral.
- Se o tempo encerrar antes da finalização, todas as perguntas restantes devem ser marcadas como não respondidas/incorretas.
- Quando o usuário erra uma pergunta, ela permanece na fila da partida até ser respondida corretamente.
- O histórico da partida deve retornar:
  - perguntas acertadas de primeira;
  - número de tentativas por questão;
  - tempo total gasto;
  - taxa de acerto dinâmica.

---

## Especificação de Rotas da API (NestJS Back-end)

### Autenticação & Usuários (/auth & /users)

- `POST /auth/register`
  - Cria conta do usuário.
  - Valida idade mínima de 7 anos.
  - Gera hash com Argon2.

- `POST /auth/login`
  - Autentica usuário.
  - Retorna Bearer JWT Token.

- `POST /auth/unlock-infrator`
  - Permite ao palestrante desbloquear a sessão do totem com CPF + senha.

- `GET /users/me`
  - Retorna perfil do usuário autenticado e sua faixa etária.

- `DELETE /users/me`
  - Exclui conta via soft delete.

### Perguntas (/questions)

- `GET /questions`
  - Lista e filtra perguntas.

- `POST /questions`
  - Cadastra nova pergunta.
  - Requer papel de ADMIN.

### Games / Partidas (/games)

- `POST /games/start`
  - Inicia uma partida.
  - Parâmetros esperados: `{ modulo: "jovem" | "adulto" | "infrator" }`
  - Retorna ID do game, 4 perguntas e tempo limite.

- `POST /games/submit`
  - Finaliza a partida.
  - Recebe ID do game e respostas do usuário.
  - Se o tempo expirou, marca as restantes como incorretas.

- `GET /games/history`
  - Retorna partidas do usuário autenticado para montar histórico de desempenho.

---

## Orientações para o Front-end (React Native / Web)

### Fluxo de Telas

1. Tela de Cadastro/Login
   - Entrada com validação de idade.
   - Bloqueia menores de 7 anos.

2. Dashboard (Menu de Módulos)
   - Card Educacional Jovem: ativo para idade <= 15
   - Card Educacional Adulto: ativo para idade >= 16
   - Card Reciclagem CNH: exibe cadeado
   - Ao clicar, abre modal solicitando credenciais do palestrante

3. Tela de Quiz/Totem
   - Cronômetro no topo
   - Pergunta atual + 4 opções + imagens de apoio
   - Feedback explicativo logo após a resposta

4. Tela de Resultado
   - Percentual final de acerto
   - Desconto conquistado na multa para módulo de reciclagem CNH

---

## CONTEXTO_TECNICO.md (Memória do Back-end NestJS)

### Modelo de Banco de Dados (Entidades TypeORM / Prisma)

#### 1. Entity User

- `id`: UUID (Primary Key)
- `username`: String (Unique)
- `passwordHash`: String (Argon2)
- `dataNascimento`: Date
- `faixaEtaria`: Enum (`JOVEM`, `ADULTO`) calculado na criação
- `role`: Enum (`CITIZEN`, `PALESTRANTE`, `ADMIN`)
- `deletedAt`: Date | null (Soft Delete)
- `createdAt`: Date
- `updatedAt`: Date

#### 2. Entity Question

- `id`: UUID
- `modulo`: Enum (`JOVEM`, `ADULTO`, `INFRATOR`)
- `tema`: String
- `pergunta`: Text
- `imagemUrl`: String | null
- `opcoes`: JSON / array de strings
- `respostaCorreta`: Int (índice de 0 a 3)
- `explicacao`: Text
- `imagemExplicacaoUrl`: String | null
- `deletedAt`: Date | null (Soft Delete)

#### 3. Entity GameSession

- `id`: UUID
- `userId`: UUID (relation User)
- `modulo`: Enum (`JOVEM`, `ADULTO`, `INFRATOR`)
- `tempoLimiteSegundos`: Int
- `tempoGastoSegundos`: Int
- `tempoEsgotado`: Boolean
- `createdAt`: Date

#### 4. Entity GameAnswer

- `id`: UUID
- `gameSessionId`: UUID (relation GameSession)
- `questionId`: UUID (relation Question)
- `opcaoEscolhida`: Int
- `estavaCorreta`: Boolean
- `tentativaNumero`: Int

---

## Dependências do Back-end NestJS

- `@nestjs/jwt`
- `@nestjs/passport`
- `passport-jwt`
- `argon2`
- `class-validator`
- `class-transformer`
- `@nestjs/typeorm`
- `typeorm`
- `pg`

---

## Cálculo Dinâmico de Pontuação no Back-end

A porcentagem não precisa ser armazenada diretamente no banco.

- Total de perguntas da sessão: 4
- Perguntas acertadas na 1ª tentativa: $N$
- Porcentagem de acerto: $\left(\frac{N}{4}\right) \times 100$
- Desconto na multa (módulo INFRATOR): $N \times 0.5\%$
- Máximo de desconto: $2\%$

---

## Resumo Executivo

O projeto combina educação, gamificação e reeducação de condutores em uma solução que pode ser usada em mobile e em totens de eventos. A lógica principal é simples e consistente:

- usuário se cadastra com idade válida;
- módulos juvenis e adultos ficam abertos;
- módulo infrator exige autorização de palestrante;
- cada partida é curta, com 4 perguntas e cronômetro;
- a repetição de erro é tratada como parte do jogo;
- a resposta final é calculada dinamicamente com base no histórico de acertos e tentativas.

---

## Observações de Implementação

- Recomenda-se separar claramente as responsabilidades de autenticação, módulo e engine de quiz.
- A camada de auth deve tratar hash, JWT e autorização.
- A camada de games deve calcular tempo, respostas e resultados sem depender de valores pré-calculados.
- O front-end deve refletir a lógica de módulos ativos/inativos conforme idade e permissões.
