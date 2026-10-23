# Introdução ao JavaScript

Material de apoio com os fundamentos da linguagem JavaScript Cada conceito é explicado neste guia e demonstrado em exemplos curtos que podem ser executados no navegador.

## Sumário

- [Estrutura do projeto](#estrutura-do-projeto)
- [Como executar os exemplos](#como-executar-os-exemplos)
- [Como os exemplos estão organizados](#como-os-exemplos-estão-organizados)
- [Convenções de nomenclatura](#convenções-de-nomenclatura)
- Parte 1 — Fundamentos da linguagem
  1. [Declaração de variáveis](#1-declaração-de-variáveis)
  2. [Tipos primitivos](#2-tipos-primitivos)
  3. [Manipulação de strings](#3-manipulação-de-strings)
  4. [Operadores aritméticos](#4-operadores-aritméticos)
  5. [Operadores relacionais](#5-operadores-relacionais)
  6. [Operadores lógicos](#6-operadores-lógicos)
  7. [Estruturas de tomada de decisão](#7-estruturas-de-tomada-de-decisão)
  8. [Laços de repetição](#8-laços-de-repetição)
  9. [Funções e arrow functions](#9-funções-e-arrow-functions)
  10. [Objetos](#10-objetos)
  11. [Arrays](#11-arrays)
- [Parte 2 — JavaScript no navegador](#parte-2--javascript-no-navegador)
  1. [DOM](#12-dom)
  2. [Seletores de elementos](#13-seletores-de-elementos)
  3. [Eventos](#14-eventos)
  - [Estudo de caso: o `pagina.js`](#estudo-de-caso-o-paginajs)
- [Referências](#referências)

---

## Estrutura do projeto

```
IntroducaoAoJavaScript/
├── index.html   → estrutura da página
├── style.css    → aparência da página
├── script.js    → TODOS os exemplos da aula (é o arquivo de estudo)
├── pagina.js    → monta a página a partir dos exemplos do script.js
└── readme.md    → este guia
```

- **`script.js`** é o arquivo principal de estudo. Ele contém os exemplos, separados por tópico e escritos como funções independentes. No final dele há a lista `topicos`, que organiza os exemplos e é usada para montar a página.
- **`pagina.js`** apenas cria a interface: lê a lista `topicos`, mostra o código de cada exemplo e exibe a saída quando você clica em **Executar**. Ele usa manipulação do DOM, assunto da [Parte 2](#parte-2--javascript-no-navegador), e **não faz parte do conteúdo da Parte 1**. Depois de estudar a Parte 2, ele pode ser lido como um [estudo de caso](#estudo-de-caso-o-paginajs).

> O código exibido na página é lido diretamente das funções do `script.js`. Por isso, o que você vê na página é exatamente o que está no arquivo.

---

## Como executar os exemplos

Os exemplos são executados **no navegador** (Chrome, Edge, Firefox ou outro navegador atual). Não é preciso instalar nada.

### 1. Pela página (forma mais simples)

1. Abra a pasta do projeto.
2. Dê dois cliques no arquivo **`index.html`**. Ele abrirá no navegador padrão.
3. Use o **Sumário** para navegar entre os tópicos.
4. Em cada exemplo, clique em **▶ Executar**. A saída aparece logo abaixo do código.
5. Para executar todos os exemplos de um tópico de uma vez, clique em **Executar todos**, ao lado do título do tópico.

> O destaque de cores no código usa uma biblioteca carregada da internet (highlight.js). Sem conexão, a página funciona normalmente, apenas com o código sem cores.

### 2. Pelo console do navegador

O console é a ferramenta que os desenvolvedores usam para testar código JavaScript e ver mensagens do programa.

1. Com a página aberta, abra as ferramentas do desenvolvedor:
   - **Windows/Linux:** tecla `F12` ou `Ctrl + Shift + J` (Chrome/Edge) / `Ctrl + Shift + K` (Firefox);
   - **macOS:** `Cmd + Option + J` (Chrome) / `Cmd + Option + K` (Firefox).
2. Clique na aba **Console**.
3. Ao clicar em **Executar** na página, a mesma saída também aparece no console, agrupada pelo título do exemplo.
4. Você também pode chamar qualquer exemplo diretamente, digitando o nome da função seguido de `()` e pressionando `Enter`:

   ```js
   exemploTiposPrimitivos();
   exemploBoletimDoAluno();
   ```

5. O console também aceita código novo. Experimente digitar linha por linha:

   ```js
   const nome = "Ana";
   `Olá, ${nome}!`;
   ```

> O nome de cada função aparece na página, ao lado do título do exemplo (por exemplo, `exemploFor()`).

### 3. Alterando os exemplos

Aprender a programar exige experimentar. Para testar suas próprias alterações:

1. Abra o `script.js` no editor (por exemplo, o VS Code).
2. Altere os valores de um exemplo. Muitos exemplos têm o comentário _"Altere os valores e execute de novo"_.
3. Salve o arquivo (`Ctrl + S`).
4. Volte ao navegador e recarregue a página (`F5`).
5. Clique em **Executar** novamente.

**Dica:** a extensão **Live Server** do VS Code recarrega a página automaticamente sempre que um arquivo é salvo. Depois de instalá-la, clique com o botão direito no `index.html` e escolha **Open with Live Server**.

### 4. Criando o seu próprio exemplo

1. No `script.js`, escreva uma nova função na seção do tópico correspondente. Mantenha o padrão de nome `exemplo...`:

   ```js
   function exemploMinhaTabuada() {
     for (let numero = 1; numero <= 10; numero++) {
       console.log(`9 x ${numero} = ${9 * numero}`);
     }
   }
   ```

2. No final do arquivo, adicione a função à lista `exemplos` do tópico:

   ```js
   {
       id: "loops",
       titulo: "Laços de repetição (loops)",
       resumo: "...",
       exemplos: [
           // ...exemplos existentes...
           { titulo: "Minha tabuada", funcao: exemploMinhaTabuada },
       ],
   },
   ```

3. Salve e recarregue a página. O novo exemplo aparecerá com o botão **Executar**.

### 5. Sobre os erros propositais

Cinco exemplos terminam com uma linha que **gera um erro de propósito**, para mostrar o que acontece quando uma regra da linguagem é desrespeitada. Essa linha sempre vem acompanhada do comentário _"A linha abaixo gera um erro DE PROPÓSITO"_, e o erro aparece em vermelho na saída:

| Exemplo                     | Erro demonstrado                                      |
| --------------------------- | ----------------------------------------------------- |
| `exemploDeclaracaoComConst` | reatribuir uma `const`                                |
| `exemploDeclaracaoComVar`   | usar uma variável `let` antes da declaração           |
| `exemploEscopoDeBloco`      | acessar uma variável `let` fora do seu bloco          |
| `exemploEscopoDeFuncao`     | acessar uma variável local fora da sua função         |
| `exemploObjetosAninhados`   | acessar uma propriedade dentro de algo que não existe |

Quando um erro acontece, a execução da função é interrompida. Por isso, a linha com erro é sempre a última de cada um desses exemplos.

---

## Como os exemplos estão organizados

Os tópicos seguem uma **escala de evolução**:

- **Cada tópico usa apenas o que foi apresentado nos tópicos anteriores.** Na página, isso aparece abaixo do resumo de cada tópico (por exemplo, _"Usa o que foi visto nos tópicos 1 a 6"_).
- **Dentro de cada tópico, os exemplos vão do mais simples ao mais completo.**
- **O último exemplo de cada tópico é uma _aplicação prática_** (destacada na página), que combina o conteúdo novo com o que já foi visto.

As aplicações práticas evoluem o mesmo cenário, um pequeno **sistema acadêmico de notas**. Assim, é possível perceber como cada novo conceito resolve uma limitação do tópico anterior:

| Tópico              | Aplicação prática                  | O que ela acrescenta                                           |
| ------------------- | ---------------------------------- | -------------------------------------------------------------- |
| 1. Variáveis        | Ficha do aluno                     | guardar os dados do aluno com `const` e `let`                  |
| 2. Tipos primitivos | Dados vindos de um formulário      | converter textos digitados em números                          |
| 3. Strings          | Padronizando um cadastro           | formatar nome, e-mail e matrícula; corrigir a nota com vírgula |
| 4. Aritméticos      | Calculando média e frequência      | calcular médias, frequência e limite de faltas                 |
| 5. Relacionais      | Verificando critérios de aprovação | comparar a média e a frequência com os mínimos                 |
| 6. Lógicos          | Regras de aprovação                | combinar os critérios em regras completas                      |
| 7. Decisão          | Boletim do aluno                   | definir a situação do aluno com `if / else if`                 |
| 8. Laços            | Simulando as provas do semestre    | repetir o cálculo para várias provas                           |
| 9. Funções          | Boletim com funções reutilizáveis  | gerar o boletim de vários alunos sem repetir código            |
| 10. Objetos         | Aluno como objeto                  | reunir os dados e os cálculos do aluno em um objeto            |
| 11. Arrays          | Relatório da turma                 | processar a turma inteira, gerar ranking e estatísticas        |

> **Sobre a ordem dos tópicos:** os operadores relacionais (tópico 5) vêm antes dos lógicos (tópico 6) porque os operadores lógicos são usados, principalmente, para combinar comparações.

---

## Convenções de nomenclatura

Bons nomes tornam o código fácil de ler. Os exemplos seguem as convenções abaixo, que são as mais usadas em JavaScript:

| Convenção                                                                   | Onde usar                                                  | Exemplos                              |
| --------------------------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------- |
| **camelCase** (primeira palavra minúscula, as demais iniciam com maiúscula) | variáveis e funções                                        | `quantidadeDeAlunos`, `calcularMedia` |
| **UPPER_SNAKE_CASE** (maiúsculas separadas por `_`)                         | constantes com valores fixos, conhecidos antes da execução | `NOTA_MINIMA`, `TOTAL_DE_AULAS`       |

Outras boas práticas usadas nos exemplos:

- **Nomes descritivos em vez de abreviações:** `quantidadeDeAlunos` em vez de `qtd` ou `q`.
- **Funções começam com um verbo**, pois executam uma ação: `calcularMedia`, `exibirBoletim`, `formatarNome`, `criarAluno`.
- **Variáveis booleanas parecem perguntas de sim ou não**, começando com `esta`, `tem`, `possui`, `pode` ou `eh` (de "é"): `estaAprovado`, `temCarteiraDeEstudante`, `podeDirigir`, `ehFeriado`.
- **Arrays no plural e itens no singular:** `for (const aluno of alunos)`, `notas.map((nota) => ...)`.
- **Sem acentos e sem `ç` nos nomes:** o JavaScript até aceita, mas evitá-los previne problemas de teclado e de codificação de arquivos. Por isso, `periodo` em vez de `período`, e `eh` em vez de `é`.

---

## 1. Declaração de variáveis

Uma **variável** é um nome associado a um valor guardado na memória. Ela permite armazenar um dado para usá-lo depois, sem precisar repeti-lo.

```js
let quantidadeDeAlunos = 30;
//  └── nome ──────────┘   └ valor
```

Em JavaScript, há três palavras-chave para declarar variáveis: `let`, `const` e `var`.

### `let`: valores que podem mudar

Use `let` quando o valor precisar ser **reatribuído** (trocado por outro) ao longo do programa.

```js
let quantidadeDeAlunos = 30;
quantidadeDeAlunos = 32; // reatribuição permitida

let notaDaProva; // declarada sem valor: começa como undefined
notaDaProva = 8.5;
```

### `const`: valores que não são reatribuídos

Uma variável `const` **não pode receber outro valor** depois de declarada. Por isso, ela precisa ser inicializada na própria declaração.

```js
const nomeDaUniversidade = "Universidade Federal";
nomeDaUniversidade = "Outra"; // TypeError: Assignment to constant variable.
```

> **Atenção:** `const` impede a _reatribuição da variável_, não a alteração do _conteúdo_. Se a constante guardar um objeto ou um array, suas propriedades e itens ainda podem ser modificados (veja os [tópicos 10](#10-objetos) e [11](#11-arrays)).

### `var`: a forma antiga

`var` era a única opção antes de 2015 (versão ES6 da linguagem). Ainda funciona, mas tem dois comportamentos que facilitam erros:

1. **Ignora o escopo de bloco:** uma variável `var` criada dentro de chaves `{ }` continua visível fora delas.
2. **Permite redeclaração:** é possível declarar a mesma variável duas vezes sem nenhum aviso, sobrescrevendo um valor sem querer.

### Escopo de bloco

**Escopo** é a região do código em que uma variável existe. Um **bloco** é qualquer trecho entre chaves `{ }`, como o corpo de um `if` ou de um `for`.

```js
{
  var comVar = "visível fora do bloco";
  let comLet = "visível só dentro do bloco";
}
console.log(comVar); // funciona
console.log(comLet); // ReferenceError: comLet is not defined
```

### Hoisting

Antes de executar o código, o JavaScript "registra" todas as declarações. Esse comportamento é chamado de **hoisting** (içamento):

- Com `var`, a variável já existe antes da linha da declaração, valendo `undefined`. Isso esconde erros.
- Com `let` e `const`, a variável também é registrada, mas **não pode ser usada antes da declaração**. Tentar usá-la gera um erro. Esse trecho é chamado de _zona morta temporal_.

```js
console.log(disciplina); // undefined (sem erro, o que é perigoso)
var disciplina = "Algoritmos";

console.log(semestre); // ReferenceError: Cannot access 'semestre' before initialization
let semestre = 1;
```

### Resumo comparativo

| Característica                       | `var`                  | `let`      | `const`    |
| ------------------------------------ | ---------------------- | ---------- | ---------- |
| Escopo                               | função                 | bloco      | bloco      |
| Pode ser reatribuída                 | sim                    | sim        | **não**    |
| Pode ser redeclarada no mesmo escopo | sim                    | não        | não        |
| Pode ser usada antes da declaração   | sim (vale `undefined`) | não (erro) | não (erro) |
| Precisa de valor inicial             | não                    | não        | **sim**    |

### Regras para nomes de variáveis

- Podem conter letras, números, `_` e `$`, mas **não podem começar com número**.
- Não podem ter espaços nem hífens.
- Diferenciam maiúsculas de minúsculas: `nota` e `Nota` são variáveis diferentes.
- Não podem ser palavras reservadas da linguagem (`let`, `if`, `function`, `return` etc.).

> **Boa prática:** use `const` por padrão. Troque para `let` somente quando o valor realmente precisar mudar. Evite `var` em códigos novos.

### Exemplos no `script.js`

| Função                      | O que demonstra                                                             |
| --------------------------- | --------------------------------------------------------------------------- |
| `exemploDeclaracaoComLet`   | declaração, reatribuição e variável sem valor inicial                       |
| `exemploDeclaracaoComConst` | `const`, constantes em maiúsculas e o erro ao reatribuir                    |
| `exemploDeclaracaoComVar`   | hoisting e redeclaração com `var`; o erro ao usar `let` antes da declaração |
| `exemploEscopoDeBloco`      | diferença de escopo entre `var` e `let`                                     |
| `exemploFichaDoAluno`       | **aplicação prática:** quando usar `const` e quando usar `let`              |

---

## 2. Tipos primitivos

Todo valor em JavaScript tem um **tipo**. O tipo define que tipo de dado o valor representa e quais operações podem ser feitas com ele. Os **tipos primitivos** representam valores simples. Existem sete:

| Tipo        | Representa                           | Exemplo                         |
| ----------- | ------------------------------------ | ------------------------------- |
| `string`    | textos                               | `"Carlos"`, `'Olá'`, `` `Oi` `` |
| `number`    | números inteiros e decimais          | `20`, `1.75`, `-3`              |
| `bigint`    | inteiros muito grandes               | `8000000000n`                   |
| `boolean`   | verdadeiro ou falso                  | `true`, `false`                 |
| `undefined` | variável que ainda não recebeu valor | `let telefone;`                 |
| `null`      | ausência de valor intencional        | `const orientador = null;`      |
| `symbol`    | identificador único (uso avançado)   | `Symbol("id")`                  |

O JavaScript é uma linguagem de **tipagem dinâmica**: não declaramos o tipo da variável, ele é definido pelo valor guardado e pode mudar durante a execução.

### O operador `typeof`

Retorna, em forma de texto, o tipo de um valor:

```js
typeof "Carlos"; // "string"
typeof 20; // "number"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object"  ← erro histórico da linguagem
```

> `typeof null` retorna `"object"` por causa de um erro da primeira versão do JavaScript, mantido para não quebrar códigos antigos. `null` é, sim, um tipo primitivo.

### `null` x `undefined`

Os dois representam "ausência de valor", mas com intenções diferentes:

- **`undefined`**: o valor ainda não foi definido. É colocado **automaticamente** pelo JavaScript, por exemplo, em uma variável declarada sem valor.
- **`null`**: o programador indica, **de propósito**, que não há valor. Exemplo: `let dataDeFormatura = null;` para um aluno que ainda não se formou.

### O tipo `number`

- Inteiros e decimais são do mesmo tipo.
- O separador decimal é o **ponto**: `8.5`, e não `8,5`.
- Há dois valores especiais do tipo `number`:
  - **`NaN`** (_Not a Number_): resultado de uma operação numérica inválida, como `Number("abc")`. Curiosamente, `typeof NaN` é `"number"`.
  - **`Infinity`**: valor maior que qualquer número (por exemplo, `10 / 0`).
- Inteiros são representados com segurança até `Number.MAX_SAFE_INTEGER` (9.007.199.254.740.991). Acima disso, use `bigint`, com a letra `n` no final.

### Conversão de tipos

**Conversão explícita** é quando você pede a conversão:

| Expressão             | Resultado | Observação                               |
| --------------------- | --------- | ---------------------------------------- |
| `Number("42")`        | `42`      | texto para número                        |
| `Number("abc")`       | `NaN`     | texto inválido                           |
| `Number("")`          | `0`       | cuidado: texto vazio vira zero           |
| `parseInt("42px")`    | `42`      | lê o início do texto, até onde conseguir |
| `parseInt("7.9")`     | `7`       | descarta a parte decimal                 |
| `parseFloat("7.9kg")` | `7.9`     | mantém a parte decimal                   |
| `String(2025)`        | `"2025"`  | número para texto                        |
| `Boolean(0)`          | `false`   | qualquer valor para boolean              |

Para saber se uma conversão para número falhou, use `Number.isNaN(valor)`.

A **conversão implícita** (ou _coerção_) é feita automaticamente pelo JavaScript em algumas operações, como `"5" * 2`. Ela é estudada no [tópico 4](#4-operadores-aritméticos).

### Valores _truthy_ e _falsy_

Quando um valor é usado como condição (em um `if`, por exemplo), ele é tratado como verdadeiro ou falso. Os valores tratados como falso são chamados de **falsy**, e são apenas estes:

```
false   0   -0   0n   ""   null   undefined   NaN
```

**Todo o resto é truthy**, inclusive `"0"`, `"false"`, `" "` (espaço) e `-1`. Isso é muito útil para verificar se um campo foi preenchido: `Boolean("")` é `false`.

### Cópia por valor

Valores primitivos são **copiados por valor**: ao atribuir uma variável a outra, o valor é duplicado, e as duas variáveis passam a ser independentes.

```js
const notaOriginal = 6;
let notaCopiada = notaOriginal;
notaCopiada = 9;
// notaOriginal continua 6
```

Primitivos também são **imutáveis**: o valor em si nunca é modificado. O que muda é o valor que a variável guarda. Objetos e arrays se comportam de outra forma, como será visto no [tópico 10](#10-objetos).

### Exemplos no `script.js`

| Função                     | O que demonstra                                                            |
| -------------------------- | -------------------------------------------------------------------------- |
| `exemploTiposPrimitivos`   | os 7 tipos e o operador `typeof`                                           |
| `exemploNullEUndefined`    | a diferença entre `null` e `undefined`                                     |
| `exemploTipoNumber`        | inteiros, decimais, `NaN`, `Infinity` e `bigint`                           |
| `exemploConversaoDeTipos`  | `Number`, `parseInt`, `parseFloat`, `String` e `Boolean`                   |
| `exemploTruthyEFalsy`      | quais valores são tratados como verdadeiro ou falso                        |
| `exemploCopiaPorValor`     | cópia independente de valores primitivos                                   |
| `exemploDadosDoFormulario` | **aplicação prática:** converter dados digitados (e o problema da vírgula) |

---

## 3. Manipulação de strings

Uma **string** é uma sequência de caracteres, usada para representar textos.

### Criando strings

```js
const comAspasSimples = "Olá, turma!";
const comAspasDuplas = "Olá, turma!";
const comCrase = `Olá, turma!`; // template literal
```

Aspas simples e duplas funcionam da mesma forma. A **crase** cria um _template literal_, que tem dois recursos extras:

1. **Interpolação:** insere valores no texto com `${ }`. Dentro das chaves pode ir qualquer expressão.

   ```js
   const nome = "Beatriz";
   const periodo = 3;
   `A aluna ${nome} está no ${periodo}º período.``Faltam ${10 - periodo} períodos.`;
   ```

2. **Várias linhas:** a quebra de linha digitada faz parte do texto.

Antes dos template literals, a forma comum de montar textos era a **concatenação**, com o operador `+`:

```js
"A aluna " + nome + " está no " + periodo + "º período.";
```

> **Boa prática:** prefira a interpolação. Ela é mais fácil de ler e evita erros com espaços esquecidos.

### Caracteres especiais (escape)

A barra invertida `\` indica um caractere especial:

| Sequência | Significado                           |
| --------- | ------------------------------------- |
| `\n`      | quebra de linha                       |
| `\t`      | tabulação                             |
| `\"`      | aspas duplas dentro de aspas duplas   |
| `\'`      | aspas simples dentro de aspas simples |
| `\\`      | a própria barra invertida             |

### Tamanho e acesso aos caracteres

- `texto.length` retorna a quantidade de caracteres.
- Cada caractere tem uma posição, chamada **índice**, que **começa em 0**.

```
 J  a  v  a  S  c  r  i  p  t
 0  1  2  3  4  5  6  7  8  9
```

```js
const linguagem = "JavaScript";
linguagem[0]; // "J"
linguagem[linguagem.length - 1]; // "t" (último caractere)
linguagem.at(-1); // "t" (at aceita índices negativos)
linguagem[50]; // undefined
```

### Strings são imutáveis

Não é possível alterar um caractere de uma string existente: `linguagem[0] = "j"` não tem efeito. **Todos os métodos de string retornam uma nova string**, sem modificar a original. Para "alterar" uma string, guardamos o resultado em uma variável:

```js
const nomePadronizado = nomeDigitado.trim().toLowerCase();
```

### Principais métodos

| Método             | O que faz                                            | Exemplo                        | Resultado  |
| ------------------ | ---------------------------------------------------- | ------------------------------ | ---------- |
| `trim()`           | remove os espaços do início e do fim                 | `"  ana  ".trim()`             | `"ana"`    |
| `toUpperCase()`    | converte para maiúsculas                             | `"ana".toUpperCase()`          | `"ANA"`    |
| `toLowerCase()`    | converte para minúsculas                             | `"ANA".toLowerCase()`          | `"ana"`    |
| `replace(a, b)`    | troca a **primeira** ocorrência de `a` por `b`       | `"7,5".replace(",", ".")`      | `"7.5"`    |
| `replaceAll(a, b)` | troca **todas** as ocorrências                       | `"a b c".replaceAll(" ", ".")` | `"a.b.c"`  |
| `padStart(n, c)`   | completa no início até `n` caracteres                | `"7".padStart(3, "0")`         | `"007"`    |
| `padEnd(n, c)`     | completa no final até `n` caracteres                 | `"Nota".padEnd(6, ".")`        | `"Nota.."` |
| `repeat(n)`        | repete o texto `n` vezes                             | `"-".repeat(5)`                | `"-----"`  |
| `includes(t)`      | verifica se contém `t`                               | `"ana@uf.br".includes("@")`    | `true`     |
| `startsWith(t)`    | verifica se começa com `t`                           | `"joao".startsWith("jo")`      | `true`     |
| `endsWith(t)`      | verifica se termina com `t`                          | `"site.br".endsWith(".br")`    | `true`     |
| `indexOf(t)`       | posição da primeira ocorrência (`-1` se não existir) | `"ana@uf".indexOf("@")`        | `3`        |
| `slice(i, f)`      | extrai do índice `i` até `f` (sem incluir `f`)       | `"JavaScript".slice(0, 4)`     | `"Java"`   |

Sobre o `slice`:

- Se o fim for omitido, o trecho vai até o final: `"JavaScript".slice(4)` resulta em `"Script"`.
- Índices negativos contam a partir do final: `"edu.br".slice(-2)` resulta em `"br"`.

### Encadeamento de métodos

Como cada método retorna uma nova string, é possível chamar outro método sobre o resultado:

```js
"   mariana COSTA   ".trim().toLowerCase().replaceAll(" ", ".");
// "mariana.costa"
```

### Exemplos no `script.js`

| Função                             | O que demonstra                                                  |
| ---------------------------------- | ---------------------------------------------------------------- |
| `exemploCriandoStrings`            | aspas, crase e caracteres especiais                              |
| `exemploConcatenacaoEInterpolacao` | `+`, `${ }` e strings de várias linhas                           |
| `exemploAcessandoCaracteres`       | `length`, índices, `at()` e imutabilidade                        |
| `exemploTransformandoStrings`      | `trim`, maiúsculas/minúsculas, `replace`, `pad` e `repeat`       |
| `exemploBuscandoEExtraindo`        | `includes`, `startsWith`, `endsWith`, `indexOf` e `slice`        |
| `exemploPadronizandoCadastro`      | **aplicação prática:** padronizar nome, e-mail, matrícula e nota |

---

## 4. Operadores aritméticos

Os operadores aritméticos realizam cálculos matemáticos.

| Operador | Operação                 | Exemplo   | Resultado |
| -------- | ------------------------ | --------- | --------- |
| `+`      | adição                   | `17 + 5`  | `22`      |
| `-`      | subtração                | `17 - 5`  | `12`      |
| `*`      | multiplicação            | `17 * 5`  | `85`      |
| `/`      | divisão                  | `17 / 5`  | `3.4`     |
| `%`      | resto da divisão inteira | `17 % 5`  | `2`       |
| `**`     | potência                 | `17 ** 2` | `289`     |

Em JavaScript, a divisão por zero não gera erro: `17 / 0` resulta em `Infinity`.

### Resto da divisão (`%`)

O operador `%` retorna o que **sobra** de uma divisão inteira: `17 % 5` é `2`, porque `17 = 5 × 3 + 2`. Ele tem usos muito comuns:

- **Par ou ímpar:** `numero % 2 === 0` indica um número par.
- **Múltiplos:** `numero % 3 === 0` indica um múltiplo de 3.
- **Conversão de unidades:** `135 % 60` é `15`, ou seja, 135 minutos são 2 horas e **15** minutos.

### Incremento e decremento

`++` soma 1 e `--` subtrai 1 de uma variável. A posição do operador muda o valor que a expressão retorna:

| Forma     | Nome       | Comportamento                                    |
| --------- | ---------- | ------------------------------------------------ |
| `valor++` | pós-fixado | retorna o valor atual e **depois** incrementa    |
| `++valor` | pré-fixado | incrementa **primeiro** e depois retorna o valor |

```js
let valor = 5;
console.log(valor++); // 5 (valor passa a ser 6)
console.log(++valor); // 7
```

> Quando o operador é usado sozinho em uma linha (`contador++;`), as duas formas têm o mesmo efeito.

### Atribuição composta

Combina uma operação com a atribuição, guardando o resultado na própria variável:

| Operador      | Equivale a           |
| ------------- | -------------------- |
| `saldo += 50` | `saldo = saldo + 50` |
| `saldo -= 30` | `saldo = saldo - 30` |
| `saldo *= 2`  | `saldo = saldo * 2`  |
| `saldo /= 4`  | `saldo = saldo / 4`  |
| `saldo %= 7`  | `saldo = saldo % 7`  |
| `saldo **= 2` | `saldo = saldo ** 2` |

Com strings, `+=` concatena: `mensagem += ", turma!"`.

### Precedência

Assim como na matemática, alguns operadores são calculados antes de outros:

1. `( )` parênteses
2. `**` potência
3. `*`, `/`, `%`
4. `+`, `-`

Operadores com a mesma prioridade são avaliados **da esquerda para a direita**: `10 - 4 - 2` é `4`.

Um erro clássico é esquecer os parênteses ao calcular uma média:

```js
const mediaErrada = nota1 + nota2 + nota3 / 3; // só nota3 é dividida
const mediaCorreta = (nota1 + nota2 + nota3) / 3;
```

### O operador `+` com strings

O `+` tem dois papéis: entre números, ele **soma**; se um dos lados for string, ele **concatena**. Os demais operadores aritméticos convertem strings em números:

| Expressão     | Resultado | Motivo                             |
| ------------- | --------- | ---------------------------------- |
| `5 + 3`       | `8`       | soma                               |
| `"5" + 3`     | `"53"`    | há uma string: concatena           |
| `"5" - 3`     | `2`       | `-` converte a string em número    |
| `"5" * "2"`   | `10`      | `*` converte as strings em números |
| `"abc" * 2`   | `NaN`     | `"abc"` não é um número válido     |
| `1 + 2 + "3"` | `"33"`    | soma `1 + 2` e depois concatena    |
| `"1" + 2 + 3` | `"123"`   | concatena desde o início           |

> **Erro comum:** valores vindos de formulários são texto. Somar `"100" + "50"` resulta em `"10050"`. Converta antes: `Number("100") + Number("50")`.

### O objeto `Math`

| Função          | O que faz                                      | Exemplo             | Resultado    |
| --------------- | ---------------------------------------------- | ------------------- | ------------ |
| `Math.round(x)` | arredonda para o inteiro mais próximo          | `Math.round(4.5)`   | `5`          |
| `Math.floor(x)` | arredonda para baixo                           | `Math.floor(4.9)`   | `4`          |
| `Math.ceil(x)`  | arredonda para cima                            | `Math.ceil(4.1)`    | `5`          |
| `Math.abs(x)`   | valor absoluto                                 | `Math.abs(-8)`      | `8`          |
| `Math.sqrt(x)`  | raiz quadrada                                  | `Math.sqrt(81)`     | `9`          |
| `Math.max(...)` | maior valor                                    | `Math.max(3, 9, 1)` | `9`          |
| `Math.min(...)` | menor valor                                    | `Math.min(3, 9, 1)` | `1`          |
| `Math.random()` | decimal aleatório de 0 até 1 (sem incluir o 1) |                     |              |
| `Math.PI`       | constante π                                    |                     | `3.14159...` |

Para gerar um inteiro aleatório de 1 a 6 (um dado): `Math.floor(Math.random() * 6) + 1`.

### Precisão de números decimais

Computadores armazenam números decimais em binário, o que gera pequenas imprecisões em quase todas as linguagens:

```js
0.1 +
  0.2(
    // 0.30000000000000004
    0.1 + 0.2,
  ).toFixed(2); // "0.30"
```

O método `toFixed(casas)` formata o número com a quantidade de casas decimais desejada. Atenção: **ele retorna uma string**, ideal para exibir valores, e não para continuar calculando.

### Exemplos no `script.js`

| Função                              | O que demonstra                                              |
| ----------------------------------- | ------------------------------------------------------------ |
| `exemploOperadoresBasicos`          | os seis operadores e a divisão por zero                      |
| `exemploDivisaoEResto`              | `/` x `%`, par ou ímpar e conversão de minutos               |
| `exemploIncrementoEDecremento`      | `++` e `--`, nas formas pré e pós-fixada                     |
| `exemploAtribuicaoComposta`         | `+=`, `-=`, `*=`, `/=`, `%=` e `**=`                         |
| `exemploPrecedencia`                | ordem de avaliação e o erro da média sem parênteses          |
| `exemploOperadorMaisComStrings`     | soma x concatenação e conversões implícitas                  |
| `exemploObjetoMath`                 | funções do `Math`, números aleatórios e `toFixed`            |
| `exemploCalculandoMediaEFrequencia` | **aplicação prática:** médias, frequência e limite de faltas |

---

## 5. Operadores relacionais

Os operadores relacionais **comparam dois valores** e sempre resultam em um `boolean` (`true` ou `false`).

| Operador | Significado                       | Exemplo     | Resultado |
| -------- | --------------------------------- | ----------- | --------- |
| `>`      | maior que                         | `6.5 > 7`   | `false`   |
| `<`      | menor que                         | `6.5 < 7`   | `true`    |
| `>=`     | maior ou igual                    | `7 >= 7`    | `true`    |
| `<=`     | menor ou igual                    | `6.5 <= 7`  | `true`    |
| `===`    | igual (valor e tipo)              | `7 === 7`   | `true`    |
| `!==`    | diferente (valor ou tipo)         | `7 !== "7"` | `true`    |
| `==`     | igual (com conversão de tipo)     | `7 == "7"`  | `true`    |
| `!=`     | diferente (com conversão de tipo) | `7 != "7"`  | `false`   |

Como o resultado é um boolean, ele pode ser guardado em uma variável com nome de pergunta:

```js
const atingiuNotaMinima = nota >= NOTA_MINIMA;
```

### Igualdade estrita (`===`) x igualdade solta (`==`)

- **`===` (estrita):** compara o valor **e** o tipo. Não faz conversões.
- **`==` (solta):** converte os tipos antes de comparar, seguindo regras pouco intuitivas.

| Comparação           | `==`   | `===`   |
| -------------------- | ------ | ------- |
| `5` e `"5"`          | `true` | `false` |
| `0` e `false`        | `true` | `false` |
| `""` e `0`           | `true` | `false` |
| `null` e `undefined` | `true` | `false` |

> **Boa prática:** use sempre `===` e `!==`. Se os tipos forem diferentes (por exemplo, um texto digitado e um número), converta o valor antes de comparar.

### O caso especial do `NaN`

`NaN` não é igual a nenhum valor, nem a ele mesmo: `NaN === NaN` resulta em `false`. Para verificar se um valor é `NaN`, use `Number.isNaN(valor)`.

### Comparando strings

Strings são comparadas **caractere por caractere**, de acordo com a ordem da tabela Unicode. Isso gera alguns resultados inesperados:

- **Maiúsculas vêm antes das minúsculas:** `"Zebra" < "abelha"` é `true`.
- **Números em formato de texto são comparados como texto:** `"10" < "9"` é `true`, porque o caractere `"1"` vem antes de `"9"`.
- **A igualdade diferencia maiúsculas de minúsculas:** `"JavaScript" === "javascript"` é `false`.

Para comparar textos ignorando essa diferença, padronize-os antes:

```js
codigoDigitado.trim().toUpperCase() === "ALG101";
```

### Exemplos no `script.js`

| Função                          | O que demonstra                                                         |
| ------------------------------- | ----------------------------------------------------------------------- |
| `exemploComparacoesNumericas`   | `>`, `<`, `>=` e `<=`, e o resultado boolean                            |
| `exemploIgualdadeEstritaESolta` | `===` x `==`, `!==` x `!=` e o `NaN`                                    |
| `exemploComparandoStrings`      | ordem Unicode e comparação sem diferenciar maiúsculas                   |
| `exemploVerificandoCriterios`   | **aplicação prática:** conferir nota, frequência e código da disciplina |

---

## 6. Operadores lógicos

Os operadores lógicos **combinam ou invertem condições**.

| Operador | Nome | Resultado                                             |
| -------- | ---- | ----------------------------------------------------- |
| `&&`     | E    | `true` somente se **os dois** lados forem verdadeiros |
| `\|\|`   | OU   | `true` se **pelo menos um** dos lados for verdadeiro  |
| `!`      | NÃO  | inverte o valor: `!true` é `false`                    |

### Tabela-verdade

| A       | B       | `A && B` | `A \|\| B` | `!A`    |
| ------- | ------- | -------- | ---------- | ------- |
| `true`  | `true`  | `true`   | `true`     | `false` |
| `true`  | `false` | `false`  | `true`     | `false` |
| `false` | `true`  | `false`  | `true`     | `true`  |
| `false` | `false` | `false`  | `false`    | `true`  |

### Combinando condições

```js
const temDireitoAMeiaEntrada = idade < 18 || temCarteiraDeEstudante;
const podeDirigir = idade >= 18 && possuiHabilitacao;
const bibliotecaEstaAberta = !ehFeriado;
```

### Precedência e intervalos

A ordem de avaliação é: primeiro `!`, depois `&&` e, por último, `||`. Assim, `true || false && false` resulta em `true`, porque o `&&` é calculado primeiro.

Dois padrões aparecem com muita frequência:

- **Valor dentro de um intervalo** (use `&&`): `nota >= 5 && nota < 7`
- **Valor fora de um intervalo** (use `||`): `nota < 0 || nota > 10`

> **Atenção:** a expressão matemática `5 <= nota < 7` **não funciona** em JavaScript. É preciso escrever as duas comparações, unidas por `&&`.

> **Boa prática:** quando uma expressão mistura `&&` e `||`, use parênteses para deixar a intenção clara.

### Curto-circuito

O JavaScript para de avaliar uma expressão lógica assim que o resultado já é conhecido:

- `&&` para no **primeiro valor falsy**. Se não houver nenhum, retorna o último valor.
- `||` para no **primeiro valor truthy**. Se não houver nenhum, retorna o último valor.

Por isso, esses operadores **retornam um dos valores** da expressão, e não necessariamente `true` ou `false`:

```js
"Ana" && "Bruno"; // "Bruno"
0 && "Bruno"; // 0
"Ana" || "Bruno"; // "Ana"
0 || "Bruno"; // "Bruno"
```

Esse comportamento é usado para:

- **Definir valores padrão com `||`:** `const nomeDeExibicao = nomeInformado || "Visitante";`
- **Executar algo somente se uma condição for verdadeira, com `&&`:** `usuarioEstaLogado && console.log("Bem-vindo!");`

### Coalescência nula (`??`)

O `||` usa o valor padrão sempre que o valor da esquerda é **falsy**, o que inclui `0` e `""`. Às vezes, esses são valores válidos. O operador `??` usa o padrão **somente** quando o valor é `null` ou `undefined`:

| Expressão                 | Resultado         |
| ------------------------- | ----------------- |
| `0 \|\| "não informado"`  | `"não informado"` |
| `0 ?? "não informado"`    | `0`               |
| `null ?? "não informado"` | `"não informado"` |

### Exemplos no `script.js`

| Função                       | O que demonstra                                                      |
| ---------------------------- | -------------------------------------------------------------------- |
| `exemploOperadoresLogicos`   | a tabela-verdade de `&&`, `\|\|` e `!`                               |
| `exemploCombinandoCondicoes` | combinações de condições do dia a dia                                |
| `exemploPrecedenciaLogica`   | ordem de avaliação e verificação de intervalos                       |
| `exemploCurtoCircuito`       | valores retornados, valor padrão com `\|\|` e `??`                   |
| `exemploRegrasDeAprovacao`   | **aplicação prática:** regras de aprovação, recuperação e reprovação |

---

## 7. Estruturas de tomada de decisão

As estruturas de decisão permitem que o programa **siga caminhos diferentes** de acordo com uma condição. A condição é, normalmente, uma expressão com operadores relacionais e lógicos.

### `if`

Executa o bloco somente se a condição for verdadeira. Se for falsa, o bloco é ignorado e o programa continua.

```js
if (temperatura > 30) {
  console.log("Está muito quente. Beba água!");
}
```

### `if / else`

Escolhe entre **dois** caminhos:

```js
if (idade >= 18) {
  console.log("É maior de idade.");
} else {
  console.log("É menor de idade.");
}
```

A condição pode ser qualquer valor, avaliado como _truthy_ ou _falsy_ ([tópico 2](#2-tipos-primitivos)). Por exemplo, `if (emailInformado)` é verdadeiro quando o texto não está vazio.

### `else if`

Testa **várias condições em sequência**. As condições são avaliadas de cima para baixo, e **somente o primeiro bloco verdadeiro é executado**:

```js
if (nota >= 9) {
  conceito = "A";
} else if (nota >= 7) {
  conceito = "B"; // nota 8.3 cai aqui; os blocos abaixo são ignorados
} else if (nota >= 5) {
  conceito = "C";
} else {
  conceito = "D";
}
```

> A ordem das condições importa. Se `nota >= 5` viesse primeiro, uma nota 9.5 receberia o conceito "C".

### `if` aninhado

Um `if` pode ficar dentro de outro. Muitos níveis de aninhamento, porém, dificultam a leitura. Quando possível, combine as condições com operadores lógicos:

```js
if (possuiCadastro && senhaEstaCorreta) {
  console.log("Acesso liberado.");
}
```

### Operador ternário

Forma compacta de escolher entre **dois valores**:

```js
// condição ? valorSeVerdadeiro : valorSeFalso
const resultado = media >= 7 ? "aprovado" : "reprovado";
```

É muito útil dentro de template strings:

```js
`Você tem ${quantidade} ${quantidade === 1 ? "falta" : "faltas"}.`;
```

> **Boa prática:** use o ternário apenas em escolhas simples. Ternários aninhados são difíceis de ler; nesses casos, prefira `if / else if`.

### `switch`

Compara **um valor** com vários casos possíveis, usando igualdade estrita (`===`):

```js
switch (opcaoEscolhida) {
  case 1:
    console.log("Consultar notas");
    break;
  case 2:
    console.log("Emitir histórico");
    break;
  default:
    console.log("Opção inválida");
}
```

- **`break`** encerra o `switch`. Sem ele, a execução continua nos casos seguintes.
- **`default`** é executado quando nenhum caso corresponde ao valor (equivale ao `else`).
- **Vários `case` seguidos** podem compartilhar o mesmo bloco:

  ```js
  case "sábado":
  case "domingo":
      console.log("A biblioteca está fechada.");
      break;
  ```

### Qual estrutura usar?

| Situação                                            | Estrutura recomendada |
| --------------------------------------------------- | --------------------- |
| executar algo apenas se uma condição for verdadeira | `if`                  |
| escolher entre dois caminhos                        | `if / else`           |
| escolher entre dois **valores**                     | operador ternário     |
| testar faixas de valores ou condições diferentes    | `if / else if`        |
| comparar **um** valor com vários valores exatos     | `switch`              |

> **Boa prática:** use sempre as chaves `{ }`, mesmo quando o bloco tiver uma única linha. Isso evita erros ao acrescentar novas linhas depois.

### Exemplos no `script.js`

| Função                    | O que demonstra                                                 |
| ------------------------- | --------------------------------------------------------------- |
| `exemploIf`               | `if` simples, com condição verdadeira e falsa                   |
| `exemploIfElse`           | dois caminhos e condições com valores truthy/falsy              |
| `exemploElseIf`           | conversão de nota em conceito                                   |
| `exemploIfAninhado`       | `if` dentro de `if` e a simplificação com `&&`                  |
| `exemploOperadorTernario` | ternário x `if / else` e uso em template strings                |
| `exemploSwitch`           | menu de opções e casos agrupados                                |
| `exemploBoletimDoAluno`   | **aplicação prática:** boletim completo com a situação do aluno |

---

## 8. Laços de repetição

Os laços (_loops_) **repetem um bloco de código** enquanto uma condição for verdadeira ou para cada item de uma sequência. Eles evitam copiar e colar o mesmo código várias vezes.

### `for`

Ideal quando **sabemos quantas vezes** o bloco deve se repetir.

```js
for (let contador = 1; contador <= 5; contador++) {
  console.log("Repetição número", contador);
}
```

O `for` tem três partes, separadas por `;`:

1. **Inicialização** (`let contador = 1`): executada uma única vez, antes de tudo.
2. **Condição** (`contador <= 5`): testada **antes** de cada repetição. Se for falsa, o laço termina.
3. **Atualização** (`contador++`): executada **depois** de cada repetição.

A atualização pode ser qualquer operação: `contador -= 2` conta de 2 em 2, de trás para frente.

### Acumuladores e contadores

Dois padrões aparecem em quase todos os programas com laços:

- **Acumulador:** variável que **soma** valores a cada repetição. Começa, normalmente, em `0`.
- **Contador:** variável que **conta** quantas vezes algo acontece. Também começa em `0` e é incrementada com `++`.

```js
let soma = 0;
for (let numero = 1; numero <= 100; numero++) {
  soma += numero; // acumulador
}
// soma vale 5050
```

### `while`

Repete **enquanto** a condição for verdadeira. É ideal quando **não sabemos** quantas repetições serão necessárias.

```js
while (saldo < valorInicial * 2) {
  saldo *= 1.1;
  anos++;
}
```

### `do...while`

Executa o bloco **primeiro** e testa a condição **depois**. Por isso, o bloco sempre é executado **pelo menos uma vez**, mesmo que a condição seja falsa desde o início.

```js
do {
  valorDoDado = Math.floor(Math.random() * 6) + 1;
} while (valorDoDado !== 6);
```

> **Cuidado com laços infinitos:** se a condição nunca se tornar falsa, o laço não termina e a página trava. Garanta que algo dentro do laço altere a variável usada na condição.

### `for...of`

Percorre, um a um, os **itens de uma sequência**. Em uma string, cada item é um caractere:

```js
for (const letra of "JavaScript") {
  console.log(letra);
}
```

O `for...of` é ainda mais usado com arrays ([tópico 11](#11-arrays)). Existe também o `for...in`, que percorre as chaves de um objeto ([tópico 10](#10-objetos)).

### `break` e `continue`

- **`break`** encerra o laço imediatamente. Útil quando o que se procurava já foi encontrado.
- **`continue`** pula o restante do bloco e passa para a próxima repetição.

```js
for (let numero = 1; numero <= 10; numero++) {
  if (numero % 2 === 0) {
    continue; // pula os pares
  }
  console.log(numero); // 1, 3, 5, 7, 9
}
```

### Laços aninhados

Um laço pode ficar dentro de outro. Para **cada** repetição do laço externo, o laço interno é executado por completo. Esse padrão é usado em tabelas, matrizes e desenhos com caracteres.

### Qual laço usar?

| Situação                                        | Laço recomendado |
| ----------------------------------------------- | ---------------- |
| quantidade de repetições conhecida              | `for`            |
| repetir até uma condição mudar                  | `while`          |
| executar pelo menos uma vez                     | `do...while`     |
| percorrer os itens de uma string ou de um array | `for...of`       |
| percorrer as chaves de um objeto                | `for...in`       |

> **Sobre nomes:** é comum ver `i`, `j` e `k` como nomes de variáveis de controle. Nos exemplos, usamos nomes descritivos (`contador`, `multiplicador`, `prova`) para facilitar a leitura.

### Exemplos no `script.js`

| Função                       | O que demonstra                                              |
| ---------------------------- | ------------------------------------------------------------ |
| `exemploFor`                 | as três partes do `for` e uma tabuada                        |
| `exemploAcumuladorEContador` | soma de 1 a 100, contagem de múltiplos e acumulação de texto |
| `exemploWhile`               | tempo para um investimento dobrar                            |
| `exemploDoWhile`             | lançamento de dado até sair 6 e a execução mínima garantida  |
| `exemploForOfComStrings`     | percorrer caracteres e contar vogais                         |
| `exemploBreakEContinue`      | interromper o laço e pular repetições                        |
| `exemploLacosAninhados`      | um triângulo desenhado com laço dentro de laço               |
| `exemploSimulandoProvas`     | **aplicação prática:** média, maior e menor nota de 4 provas |

---

## 9. Funções e arrow functions

Uma **função** é um bloco de código com nome, que executa uma tarefa específica e pode ser **reutilizado** quantas vezes for necessário. Funções evitam a repetição de código e dividem um problema grande em partes menores.

### Anatomia de uma função

```js
function calcularMedia(primeiraNota, segundaNota) {
  // nome e parâmetros
  const media = (primeiraNota + segundaNota) / 2; // corpo
  return media; // valor devolvido
}

const mediaDaAna = calcularMedia(8, 9); // chamada, com argumentos
```

- **Parâmetros** são as "variáveis de entrada", definidas entre parênteses na criação da função.
- **Argumentos** são os valores enviados na chamada da função.
- A função só é executada quando é **chamada**, com o nome seguido de parênteses: `calcularMedia(8, 9)`.

### `return`

- Devolve um valor para quem chamou a função.
- **Encerra a função imediatamente:** o código depois de um `return` executado não roda.
- Uma função sem `return` devolve `undefined`.

```js
function verificarAprovacao(media) {
  if (media >= 7) {
    return "aprovado";
  }
  return "reprovado";
}
```

### Parâmetros com valor padrão

Se um argumento não for enviado, o parâmetro recebe `undefined`. Um **valor padrão** evita isso:

```js
function cumprimentar(nome, saudacao = "Olá") {
  return `${saudacao}, ${nome}!`;
}

cumprimentar("Diego"); // "Olá, Diego!"
cumprimentar("Diego", "Bom dia"); // "Bom dia, Diego!"
```

### Três formas de criar funções

```js
// 1. Declaração de função
function converterComDeclaracao(celsius) {
  return celsius * 1.8 + 32;
}

// 2. Expressão de função (função anônima guardada em uma variável)
const converterComExpressao = function (celsius) {
  return celsius * 1.8 + 32;
};

// 3. Arrow function
const converterComArrow = (celsius) => celsius * 1.8 + 32;
```

| Característica                                               | Declaração                     | Expressão                      | Arrow function             |
| ------------------------------------------------------------ | ------------------------------ | ------------------------------ | -------------------------- |
| Pode ser chamada antes da linha em que foi criada (hoisting) | sim                            | não                            | não                        |
| Sintaxe                                                      | mais longa                     | mais longa                     | mais curta                 |
| Tem `this` próprio                                           | sim                            | sim                            | **não**                    |
| Uso comum                                                    | funções principais do programa | funções guardadas em variáveis | callbacks e funções curtas |

### Variações da arrow function

```js
// Corpo com várias linhas: chaves e return são obrigatórios
const calcularImc = (peso, altura) => {
  const imc = peso / altura ** 2;
  return imc.toFixed(1);
};

// Uma única expressão: retorno implícito (sem chaves e sem return)
const calcularDobro = (numero) => numero * 2;

// Um único parâmetro: os parênteses são opcionais
const calcularTriplo = (numero) => numero * 3;

// Sem parâmetros: os parênteses são obrigatórios
const gerarSaudacao = () => "Olá, turma!";
```

> Arrow functions **não têm `this` próprio**. Por isso, não devem ser usadas como métodos de objetos (veja o [tópico 10](#10-objetos)).

### Callbacks

Em JavaScript, funções são **valores**: podem ser guardadas em variáveis e passadas como argumento para outras funções. Uma função passada como argumento é chamada de **callback**.

```js
function aplicarOperacao(primeiroNumero, segundoNumero, operacao) {
  return operacao(primeiroNumero, segundoNumero);
}

aplicarOperacao(10, 5, (primeiro, segundo) => primeiro + segundo); // 15
```

Esse padrão é a base dos métodos de arrays, como `map`, `filter` e `forEach` ([tópico 11](#11-arrays)).

### Escopo de função

- Variáveis criadas **dentro** de uma função são **locais**: existem apenas dentro dela.
- Uma função **pode acessar** as variáveis do escopo externo, onde ela foi criada.
- O contrário não é possível: de fora, não se acessa uma variável local da função.

### Boas práticas

- **Uma responsabilidade por função:** `calcularMedia` só calcula; quem exibe o resultado é outra função.
- **Nomes que começam com verbo** e descrevem o que a função faz: `calcularFrequencia`, `obterSituacao`, `formatarNome`.
- **Funções pequenas:** se uma função ficou longa demais, provavelmente ela pode ser dividida.
- **Prefira retornar valores** em vez de exibi-los diretamente. Assim, a função pode ser reaproveitada em mais situações.

### Exemplos no `script.js`

| Função                      | O que demonstra                                                           |
| --------------------------- | ------------------------------------------------------------------------- |
| `exemploDeclaracaoDeFuncao` | criação, chamada, parâmetros, argumentos e `return`                       |
| `exemploReturn`             | encerramento com `return`, uso do retorno e `undefined`                   |
| `exemploParametrosPadrao`   | argumentos ausentes e valores padrão                                      |
| `exemploExpressaoDeFuncao`  | função guardada em variável e diferença de hoisting                       |
| `exemploArrowFunctions`     | as três formas de criar funções e as variações da arrow                   |
| `exemploCallbacks`          | funções passadas como argumento                                           |
| `exemploEscopoDeFuncao`     | variáveis locais e acesso ao escopo externo                               |
| `exemploBoletimComFuncoes`  | **aplicação prática:** boletim de vários alunos com funções reutilizáveis |

---

## 10. Objetos

Um **objeto** agrupa dados relacionados em pares `chave: valor`, chamados de **propriedades**. Ele permite representar entidades do mundo real (um aluno, um livro, uma conta bancária) em uma única variável.

```js
const aluno = {
  nome: "Fernanda Lima",
  matricula: "2025001",
  idade: 21,
  estaAtivo: true,
};
```

### Acessando propriedades

```js
aluno.nome; // notação de ponto (forma mais comum)
aluno["matricula"]; // notação de colchetes: a chave é uma string

const propriedadeDesejada = "idade";
aluno[propriedadeDesejada]; // colchetes permitem usar uma chave guardada em variável

aluno.telefone; // propriedade inexistente: undefined
```

### Alterando, adicionando e removendo

```js
livro.ano = 2023; // altera uma propriedade existente
livro.editora = "Editora Exemplo"; // adiciona uma nova propriedade
delete livro.autor; // remove uma propriedade
"titulo" in livro; // verifica se a propriedade existe: true
```

> Isso funciona mesmo que `livro` tenha sido declarado com `const`. A constante impede a reatribuição da variável (`livro = {}`), mas não a alteração do conteúdo do objeto.

### Propriedades abreviadas e funções fábrica

Quando uma variável tem o mesmo nome da chave, basta escrever o nome uma vez:

```js
const nome = "Gustavo";
const curso = "Medicina";
const aluno = { nome, curso }; // o mesmo que { nome: nome, curso: curso }
```

Funções que criam e retornam objetos são conhecidas como **funções fábrica**. Em uma arrow function, o objeto retornado precisa ficar **entre parênteses**, para não ser confundido com o corpo da função:

```js
const criarProfessor = (nome, departamento) => ({ nome, departamento });
```

### Métodos e `this`

Um **método** é uma função guardada como propriedade de um objeto. Dentro do método, a palavra-chave **`this`** representa o próprio objeto:

```js
const contaBancaria = {
  titular: "Gabriel",
  saldo: 500,

  depositar(valor) {
    this.saldo += valor; // this é a própria contaBancaria
  },
};

contaBancaria.depositar(200); // saldo passa a ser 700
```

> Arrow functions não têm `this` próprio. Se `depositar` fosse uma arrow function, `this` não seria a conta bancária, e o método não funcionaria como esperado.

### Percorrendo objetos com `for...in`

O `for...in` percorre as **chaves** de um objeto. Como a chave fica em uma variável, o valor é acessado com colchetes:

```js
for (const disciplina in notasPorDisciplina) {
  console.log(disciplina, notasPorDisciplina[disciplina]);
}
```

### Objetos aninhados e encadeamento opcional

Uma propriedade pode guardar outro objeto: `estudante.endereco.cidade`.

Acessar uma propriedade de algo que não existe gera erro: se `estudante.estagio` é `undefined`, então `estudante.estagio.empresa` gera um `TypeError`. O **encadeamento opcional (`?.`)** evita esse erro e retorna `undefined`:

```js
estudante.estagio?.empresa; // undefined, sem erro
estudante.estagio?.empresa ?? "sem estágio"; // combinado com ?? (tópico 6)
```

### Desestruturação

Cria variáveis a partir das propriedades de um objeto:

```js
const { nome, departamento } = professor;

// renomeando a variável e definindo um valor padrão
const { sala: numeroDaSala, email = "não informado" } = professor;

// direto nos parâmetros de uma função
function exibirDisciplina({ codigo, cargaHoraria }) {
  /* ... */
}
```

### Spread (`...`)

Copia as propriedades de um objeto para um **novo** objeto, permitindo sobrescrever ou acrescentar propriedades:

```js
const professorAtualizado = { ...professor, sala: "C-101" };
```

### Cópia e comparação por referência

Diferente dos primitivos ([tópico 2](#2-tipos-primitivos)), objetos são **copiados por referência**. Ao atribuir um objeto a outra variável, **as duas passam a apontar para o mesmo objeto** na memória:

```js
const turmaOriginal = { nome: "Turma A", vagas: 40 };
const outraVariavel = turmaOriginal;
outraVariavel.vagas = 35;
// turmaOriginal.vagas também passou a ser 35

const copiaIndependente = { ...turmaOriginal }; // cópia de verdade
```

Pelo mesmo motivo, a comparação de objetos compara a **referência**, e não o conteúdo. Dois objetos com propriedades idênticas são diferentes para o `===`, a menos que sejam o mesmo objeto.

> **Atenção:** o spread faz uma cópia **rasa**. Se o objeto tiver outro objeto dentro dele, esse objeto interno continua sendo compartilhado entre o original e a cópia.

### Exemplos no `script.js`

| Função                          | O que demonstra                                             |
| ------------------------------- | ----------------------------------------------------------- |
| `exemploCriandoObjetos`         | criação e acesso com ponto e colchetes                      |
| `exemploModificandoObjetos`     | alterar, adicionar, remover e o operador `in`               |
| `exemploPropriedadesAbreviadas` | propriedades abreviadas e funções fábrica                   |
| `exemploMetodosEThis`           | métodos e `this` em uma conta bancária                      |
| `exemploPercorrendoObjetos`     | `for...in` e cálculo de média                               |
| `exemploObjetosAninhados`       | objetos dentro de objetos, `?.` e `??`                      |
| `exemploDesestruturacaoESpread` | desestruturação (inclusive em parâmetros) e spread          |
| `exemploReferenciaDeObjetos`    | cópia e comparação por referência                           |
| `exemploAlunoComoObjeto`        | **aplicação prática:** aluno com dados e métodos de cálculo |

---

## 11. Arrays

Um **array** é uma **lista ordenada** de valores. Cada item tem uma posição (**índice**) que começa em `0`. É o último tópico porque reúne todos os anteriores: arrays são percorridos com laços, processados com funções e, na prática, costumam guardar objetos.

```js
const disciplinas = ["Cálculo", "Algoritmos", "Física"];

disciplinas.length; // 3
disciplinas[0]; // "Cálculo"
disciplinas[disciplinas.length - 1]; // "Física"
disciplinas.at(-1); // "Física"
disciplinas[10]; // undefined
disciplinas[1] = "Programação"; // altera um item
```

- Um array pode guardar valores de qualquer tipo, inclusive objetos e outros arrays.
- `typeof` retorna `"object"` para arrays. Para saber se um valor é um array, use `Array.isArray(valor)`.

### Adicionando e removendo itens

| Método                                  | O que faz                                    | Retorna                         |
| --------------------------------------- | -------------------------------------------- | ------------------------------- |
| `push(item)`                            | adiciona no **final**                        | o novo tamanho                  |
| `pop()`                                 | remove do **final**                          | o item removido                 |
| `unshift(item)`                         | adiciona no **início**                       | o novo tamanho                  |
| `shift()`                               | remove do **início**                         | o item removido                 |
| `splice(posicao, quantidade, ...novos)` | remove e/ou insere itens em qualquer posição | um array com os itens removidos |

```js
disciplinas.splice(1, 2); // remove 2 itens a partir do índice 1
disciplinas.splice(1, 0, "Estatística"); // insere no índice 1, sem remover nada
```

Todos esses métodos **alteram o array original**.

### Percorrendo arrays

```js
// for clássico: quando o índice é necessário
for (let indice = 0; indice < notas.length; indice++) {
  console.log(indice, notas[indice]);
}

// for...of: a forma mais simples quando só os valores interessam
for (const nota of notas) {
  console.log(nota);
}

// forEach: executa um callback para cada item (recebe o item e o índice)
notas.forEach((nota, indice) => {
  console.log(`Prova ${indice + 1}: ${nota}`);
});
```

### Buscando itens

| Método                | Retorna                                           | Exemplo com `[7, 4.5, 9, 6, 10]` | Resultado |
| --------------------- | ------------------------------------------------- | -------------------------------- | --------- |
| `includes(valor)`     | se o valor existe                                 | `includes(9)`                    | `true`    |
| `indexOf(valor)`      | posição do valor (`-1` se não existir)            | `indexOf(6)`                     | `3`       |
| `find(callback)`      | o **primeiro item** que passa no teste            | `find((nota) => nota >= 9)`      | `9`       |
| `findIndex(callback)` | a **posição** do primeiro item que passa no teste | `findIndex((nota) => nota < 5)`  | `1`       |
| `some(callback)`      | se **algum** item passa no teste                  | `some((nota) => nota < 5)`       | `true`    |
| `every(callback)`     | se **todos** os itens passam no teste             | `every((nota) => nota >= 0)`     | `true`    |

O `find` é muito usado para localizar um objeto em uma lista: `alunos.find((aluno) => aluno.matricula === 102)`. Se nenhum item for encontrado, ele retorna `undefined`.

### Transformando arrays: `map`, `filter` e `reduce`

Esses três métodos recebem um callback e **não alteram o array original**:

- **`map`** cria um novo array com **o resultado do callback para cada item**. O novo array tem o mesmo tamanho do original.

  ```js
  const situacoes = notas.map((nota) => (nota >= 7 ? "aprovado" : "reprovado"));
  ```

- **`filter`** cria um novo array **apenas com os itens que passam no teste** (callback que retorna `true`).

  ```js
  const notasAcimaDaMedia = notas.filter((nota) => nota >= 7);
  ```

- **`reduce`** percorre o array e **acumula um único resultado**. O callback recebe o _acumulador_ e o _item atual_ e retorna o novo valor do acumulador. O segundo argumento do `reduce` é o valor inicial do acumulador.

  ```js
  const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
  // com [7.5, 8, 6.5, 9]: 0 → 7.5 → 15.5 → 22 → 31
  ```

Como `map` e `filter` retornam arrays, eles podem ser **encadeados**:

```js
const nomesDosAprovados = alunos
  .filter((aluno) => aluno.nota >= 7)
  .map((aluno) => aluno.nome);
```

### Ordenando arrays

O `sort` **altera o array original** e, sem argumentos, **ordena os itens como texto**:

```js
[10, 1, 25, 3].sort(); // [1, 10, 25, 3]  ← "10" vem antes de "3" como texto
```

Para ordenar corretamente, passe uma **função de comparação**. Ela recebe dois itens e deve retornar:

- um número **negativo**, se o primeiro deve vir antes;
- um número **positivo**, se o segundo deve vir antes;
- **zero**, se a ordem entre eles não importa.

```js
[...numeros].sort((primeiro, segundo) => primeiro - segundo); // crescente
[...numeros].sort((primeiro, segundo) => segundo - primeiro); // decrescente

// textos em português, tratando acentos e maiúsculas corretamente
[...nomes].sort((primeiro, segundo) =>
  primeiro.localeCompare(segundo, "pt-BR"),
);
```

O `[...array]` cria uma cópia antes de ordenar, preservando o original. O mesmo vale para o `reverse()`, que inverte a ordem e também altera o array.

### Arrays e strings: `split` e `join`

- **`split(separador)`** transforma uma string em um array.
- **`join(separador)`** transforma um array em uma string.

```js
"Ana;Bruno;Carla"
  .split(";") // ["Ana", "Bruno", "Carla"]
  [("Ana", "Bruno")].join(", "); // "Ana, Bruno"

// primeira letra maiúscula em cada palavra
"ana paula costa"
  .split(" ")
  .map((palavra) => palavra[0].toUpperCase() + palavra.slice(1))
  .join(" "); // "Ana Paula Costa"
```

### Spread, rest e desestruturação

Os três pontos `...` têm dois papéis opostos:

- **Rest** (nos parâmetros): **reúne** os argumentos recebidos em um array.

  ```js
  function calcularMedia(...notas) {
    /* notas é um array */
  }
  calcularMedia(6, 7, 8, 10);
  ```

- **Spread** (em chamadas e na criação de arrays): **espalha** os itens de um array.

  ```js
  Math.max(...notas); // passa cada nota como um argumento
  const todos = [...turmaA, ...turmaB]; // junta dois arrays
  const copia = [...turmaA]; // cópia independente
  ```

A **desestruturação** de arrays cria variáveis a partir das **posições**:

```js
const [primeiroLugar, segundoLugar, ...demaisColocados] = ranking;
```

> Assim como objetos, arrays são **copiados por referência**. `const mesmaTurma = turmaA` não cria uma cópia: as duas variáveis apontam para o mesmo array.

### Arrays e objetos juntos

Na prática, a forma mais comum de representar uma lista de registros é um **array de objetos**:

```js
const alunos = [
  { nome: "Ana", curso: "Direito" },
  { nome: "Bruno", curso: "Medicina" },
];

alunos[1].nome; // "Bruno"
alunos.filter((aluno) => aluno.curso === "Direito"); // [{ nome: "Ana", ... }]
```

Os métodos abaixo transformam um objeto em arrays:

| Método                   | Retorna                   | Exemplo com `{ calculo: 8.5, fisica: 6.5 }` |
| ------------------------ | ------------------------- | ------------------------------------------- |
| `Object.keys(objeto)`    | as chaves                 | `["calculo", "fisica"]`                     |
| `Object.values(objeto)`  | os valores                | `[8.5, 6.5]`                                |
| `Object.entries(objeto)` | os pares `[chave, valor]` | `[["calculo", 8.5], ["fisica", 6.5]]`       |

```js
for (const [disciplina, nota] of Object.entries(notasPorDisciplina)) {
  console.log(`${disciplina}: ${nota}`);
}
```

### Quais métodos alteram o array original?

| Alteram o original                                             | Não alteram (retornam um valor novo)                                                                 |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `push`, `pop`, `unshift`, `shift`, `splice`, `sort`, `reverse` | `map`, `filter`, `reduce`, `slice`, `concat`, `join`, `find`, `includes`, `indexOf`, `some`, `every` |

### Exemplos no `script.js`

| Função                              | O que demonstra                                              |
| ----------------------------------- | ------------------------------------------------------------ |
| `exemploCriandoArrays`              | criação, índices, `length`, `at()` e `Array.isArray`         |
| `exemploAdicionandoERemovendo`      | `push`, `pop`, `unshift`, `shift` e `splice`                 |
| `exemploPercorrendoArrays`          | `for`, `for...of` e `forEach`                                |
| `exemploBuscandoEmArrays`           | `includes`, `indexOf`, `find`, `findIndex`, `some` e `every` |
| `exemploMapEFilter`                 | transformação, filtragem e encadeamento                      |
| `exemploReduce`                     | soma, maior valor e contagem com `reduce`                    |
| `exemploOrdenandoArrays`            | `sort` com função de comparação, `localeCompare` e `reverse` |
| `exemploArraysEStrings`             | `split` e `join`; formatação de nomes e iniciais             |
| `exemploSpreadRestEDesestruturacao` | rest, spread, desestruturação e cópia por referência         |
| `exemploArraysEObjetos`             | arrays de objetos e `Object.keys/values/entries`             |
| `exemploRelatorioDaTurma`           | **aplicação prática final:** ranking e estatísticas da turma |

---

## Parte 2 — JavaScript no navegador

Na Parte 1, os exemplos se comunicavam apenas pelo console. Nesta parte, o JavaScript passa a **interagir com a página**: ler e alterar o seu conteúdo, encontrar elementos e reagir às ações do usuário, como cliques e teclas pressionadas.

Os tópicos continuam a numeração da Parte 1 e usam tudo o que foi visto nela, principalmente funções e callbacks ([tópico 9](#9-funções-e-arrow-functions)), objetos ([tópico 10](#10-objetos)) e arrays ([tópico 11](#11-arrays)).

| Tópico                     | Pergunta que responde                                      |
| -------------------------- | ---------------------------------------------------------- |
| 12. DOM                    | como o JavaScript enxerga e altera a página?               |
| 13. Seletores de elementos | como encontrar um elemento que já existe no HTML?          |
| 14. Eventos                | como executar um código quando o usuário faz alguma coisa? |

> **Sobre a ordem dos tópicos:** os seletores (tópico 13) vêm antes dos eventos (tópico 14) porque, para reagir ao clique em um botão, primeiro é preciso encontrar esse botão na página.

### Como testar os trechos desta parte

Os trechos desta parte não estão no `script.js`. Como eles leem e alteram a página, a forma mais simples de testá-los é pelo **console do navegador**, com o `index.html` aberto (veja [Pelo console do navegador](#2-pelo-console-do-navegador)). O console tem acesso à página aberta, então dá para experimentar com os elementos do próprio material. Cada tópico termina com sugestões em **Experimente no console**.

> Toda alteração feita pelo console é **temporária**: ela muda apenas a página aberta, e não o arquivo `index.html`. Para desfazer tudo, basta recarregar a página (`F5`).

Os trechos que dependem de um HTML próprio, como os formulários do [tópico 14](#14-eventos), podem ser testados em um arquivo `.html` novo, criado a partir deste modelo:

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Testando o DOM</title>
  </head>
  <body>
    <!-- cole aqui o HTML do exemplo -->

    <script>
      // cole aqui o código JavaScript do exemplo
    </script>
  </body>
</html>
```

---

## 12. DOM

Quando o navegador abre um arquivo HTML, ele lê o código e monta, na memória, uma representação da página formada por **objetos**. Essa representação é o **DOM** (_Document Object Model_, ou Modelo de Objetos do Documento).

O JavaScript não altera o arquivo HTML: ele altera o DOM. E toda alteração no DOM aparece **imediatamente** na tela.

```
 arquivo .html ──► navegador ──► DOM ──► página na tela
                                  ▲
                                  └── o JavaScript lê e altera o DOM
```

### A árvore do DOM

O DOM organiza a página como uma **árvore**. Cada tag do HTML vira um **nó** (_node_), e as tags que estão dentro de outra são seus **filhos**:

```html
<html>
  <head>
    <title>Turma A</title>
  </head>
  <body>
    <h1>Notas da turma</h1>
    <ul>
      <li>Ana: 8.5</li>
      <li>Bruno: 6.0</li>
    </ul>
  </body>
</html>
```

```
document
└── html
    ├── head
    │   └── title
    │       └── "Turma A"
    └── body
        ├── h1
        │   └── "Notas da turma"
        └── ul
            ├── li
            │   └── "Ana: 8.5"
            └── li
                └── "Bruno: 6.0"
```

Os termos usados para descrever a árvore lembram os de uma árvore genealógica:

| Termo        | Significado                                         | No exemplo                                    |
| ------------ | --------------------------------------------------- | --------------------------------------------- |
| raiz         | o nó do topo, de onde a árvore parte                | `document`                                    |
| pai          | o elemento que contém outro diretamente             | `ul` é pai dos dois `li`                      |
| filho        | o elemento que está diretamente dentro de outro     | `h1` e `ul` são filhos de `body`              |
| irmãos       | elementos com o mesmo pai                           | os dois `li`                                  |
| ancestrais   | o pai, o pai do pai, e assim por diante             | `ul`, `body` e `html` são ancestrais dos `li` |
| descendentes | os filhos, os filhos dos filhos, e assim por diante | todos os elementos são descendentes de `html` |

Há dois tipos principais de nós:

- **Nós de elemento:** as tags (`body`, `h1`, `li`...). É com eles que mais trabalhamos.
- **Nós de texto:** o texto dentro das tags (`"Ana: 8.5"`). Os espaços e as quebras de linha entre as tags também viram nós de texto.

### O objeto `document`

O **`document`** é o ponto de entrada do DOM: um objeto disponível em qualquer script da página, que representa o documento inteiro. A partir dele, é possível chegar a qualquer elemento.

| Propriedade                | O que representa                            |
| -------------------------- | ------------------------------------------- |
| `document.documentElement` | o elemento `<html>`                         |
| `document.head`            | o elemento `<head>`                         |
| `document.body`            | o elemento `<body>`                         |
| `document.title`           | o título da página (o texto exibido na aba) |

Cada elemento também é um **objeto**, com propriedades e métodos ([tópico 10](#10-objetos)). Para ver todas as propriedades de um elemento no console, use `console.dir` em vez de `console.log`:

```js
console.log(document.body); // mostra o elemento no formato de HTML
console.dir(document.body); // mostra o elemento como objeto, com suas propriedades
```

> O `document` é uma propriedade do objeto **`window`**, que representa a janela (ou a aba) do navegador. Por isso, `document` e `window.document` são a mesma coisa.

### Onde colocar a tag `<script>`

O navegador lê o HTML **de cima para baixo**. Se um script for executado antes de um elemento ser lido, esse elemento ainda não existe no DOM, e o JavaScript não consegue encontrá-lo.

Há duas formas simples de garantir que o HTML já foi lido quando o script for executado:

1. **Colocar o `<script>` no final do `<body>`**, como no `index.html` deste projeto:

   ```html
   <body>
     <h1>Notas da turma</h1>

     <script src="script.js"></script>
   </body>
   ```

2. **Usar o atributo `defer`** em um `<script>` dentro do `<head>`. O script é baixado enquanto o HTML é lido, mas só é executado depois que a leitura termina:

   ```html
   <head>
     <script src="script.js" defer></script>
   </head>
   ```

Uma terceira forma, com o evento `DOMContentLoaded`, é apresentada no [tópico 14](#14-eventos).

### Navegando pela árvore

A partir de um elemento, é possível chegar aos elementos próximos dele:

| Propriedade              | Retorna                             |
| ------------------------ | ----------------------------------- |
| `parentElement`          | o elemento pai                      |
| `children`               | uma coleção com os elementos filhos |
| `firstElementChild`      | o primeiro filho                    |
| `lastElementChild`       | o último filho                      |
| `nextElementSibling`     | o próximo irmão                     |
| `previousElementSibling` | o irmão anterior                    |

Usando o HTML da árvore acima:

```js
const titulo = document.body.firstElementChild; // o <h1>
const lista = titulo.nextElementSibling; // o <ul>

lista.children.length; // 2
lista.children[0]; // o primeiro <li>
lista.lastElementChild.parentElement; // o próprio <ul>
lista.lastElementChild.nextElementSibling; // null: o último <li> não tem próximo irmão
```

Quando o elemento procurado não existe, o resultado é `null`, como na última linha.

> Existem também as propriedades `childNodes`, `firstChild` e `nextSibling`, sem a palavra `Element`. Elas incluem os nós de texto (inclusive os espaços entre as tags) e, por isso, costumam trazer resultados inesperados. Prefira as versões com `Element`.

> Navegar pela árvore depende da posição exata de cada elemento no HTML: se a estrutura mudar, o código para de funcionar. Na maioria dos casos, é melhor **buscar o elemento diretamente**, com os seletores do [tópico 13](#13-seletores-de-elementos).

### Lendo e alterando o conteúdo

| Propriedade   | O que faz                                        |
| ------------- | ------------------------------------------------ |
| `textContent` | lê ou substitui o **texto** do elemento          |
| `innerHTML`   | lê ou substitui o **HTML** de dentro do elemento |

```js
titulo.textContent; // "Notas da turma"
titulo.textContent = "Notas da Turma A"; // a página muda na hora

titulo.textContent = "<em>Turma A</em>"; // as tags aparecem como texto
titulo.innerHTML = "<em>Turma A</em>"; // as tags são interpretadas: "Turma A" em itálico
```

> **Atenção:** nunca use `innerHTML` com textos digitados pelo usuário. Se o texto tiver tags, elas serão interpretadas, inclusive as que executam código malicioso. Esse tipo de ataque se chama _XSS_ (_Cross-Site Scripting_). Para exibir textos, use sempre `textContent`.

Existe também o `innerText`, parecido com o `textContent`, mas que considera a aparência da página (por exemplo, ignora o texto de elementos escondidos). Na maioria dos casos, o `textContent` é suficiente.

### Atributos

Os atributos do HTML (`id`, `href`, `src`, `type`...) podem ser lidos e alterados de duas formas:

```js
// 1. Com os métodos de atributos
link.getAttribute("href"); // lê o valor
link.setAttribute("href", "https://developer.mozilla.org"); // altera ou cria
link.hasAttribute("target"); // verifica se existe: true ou false
link.removeAttribute("target"); // remove

// 2. Como propriedades do elemento (a forma mais comum)
link.href = "https://developer.mozilla.org";
imagem.src = "foto-da-turma.jpg";
botao.disabled = true; // desativa o botão
paragrafo.hidden = true; // esconde o elemento
campo.value; // o texto digitado em um campo de formulário
```

Atributos personalizados começam com `data-` e são acessados pela propriedade **`dataset`**. Nomes com hífen viram camelCase: `data-ano-de-ingresso` é lido como `dataset.anoDeIngresso`.

```html
<li data-matricula="2025001" data-ano-de-ingresso="2025">Ana</li>
```

```js
item.dataset.matricula; // "2025001" (sempre uma string)
item.dataset.anoDeIngresso; // "2025"
item.dataset.curso = "Direito"; // cria o atributo data-curso
```

### Classes

A propriedade **`classList`** manipula as classes CSS de um elemento, uma de cada vez:

| Método                            | O que faz                                              |
| --------------------------------- | ------------------------------------------------------ |
| `classList.add(classe)`           | adiciona a classe                                      |
| `classList.remove(classe)`        | remove a classe                                        |
| `classList.toggle(classe)`        | adiciona, se não existir; remove, se existir           |
| `classList.toggle(classe, cond)`  | adiciona, se `cond` for `true`; remove, se for `false` |
| `classList.contains(classe)`      | verifica se o elemento tem a classe                    |
| `classList.replace(antiga, nova)` | troca uma classe por outra                             |

```js
item.classList.add("aprovado");
item.classList.remove("reprovado");
item.classList.toggle("destaque"); // liga e desliga a cada chamada
item.classList.toggle("reprovado", media < 7); // depende da condição
item.classList.contains("aprovado"); // true
```

> A propriedade `className` também existe, mas ela substitui **todas** as classes do elemento de uma vez. Para adicionar ou remover uma classe específica, use `classList`.

### Estilos

A propriedade **`style`** altera o CSS de um elemento diretamente. Os nomes das propriedades CSS são escritos em **camelCase**, e os valores são **strings**, com a unidade de medida:

```js
titulo.style.color = "darkblue";
titulo.style.backgroundColor = "lightyellow"; // background-color no CSS
titulo.style.fontSize = "32px"; // font-size no CSS
```

> **Boa prática:** prefira definir os estilos no arquivo CSS, em uma classe, e usar o JavaScript apenas para **adicionar ou remover essa classe**. Assim, a aparência fica no CSS, o comportamento fica no JavaScript, e os dois ficam mais fáceis de manter.

```css
.reprovado {
  color: crimson;
  font-weight: bold;
}
```

```js
item.classList.add("reprovado"); // em vez de alterar cada estilo com style
```

### Criando, inserindo e removendo elementos

Um novo elemento é criado com **`document.createElement`**, mas ele só aparece na página depois de ser **inserido** no DOM:

```js
const aviso = document.createElement("p"); // cria um <p>, ainda fora da página
aviso.textContent = "As notas foram atualizadas.";
aviso.classList.add("aviso");

document.body.append(aviso); // insere no final do <body>: agora ele aparece
```

| Método                          | O que faz                                     |
| ------------------------------- | --------------------------------------------- |
| `pai.append(...novos)`          | insere dentro de `pai`, no **final**          |
| `pai.prepend(...novos)`         | insere dentro de `pai`, no **início**         |
| `referencia.before(...novos)`   | insere **antes** de `referencia`, como irmão  |
| `referencia.after(...novos)`    | insere **depois** de `referencia`, como irmão |
| `pai.replaceChildren(...novos)` | substitui **todo o conteúdo** de `pai`        |
| `elemento.remove()`             | remove o próprio elemento da página           |

Esses métodos aceitam vários elementos de uma vez, e também textos: `paragrafo.append("Média: ", destaque)`. Chamado sem argumentos, o `replaceChildren()` esvazia o elemento.

> Um elemento só pode estar em **um lugar** do DOM. Inserir um elemento que já está na página **move** esse elemento, em vez de copiá-lo.

> Em códigos mais antigos, aparece o `appendChild`, que funciona como o `append`, mas aceita apenas um elemento por vez.

Combinando esses métodos com arrays e laços ([tópico 11](#11-arrays)), é possível montar uma lista inteira a partir dos dados:

```js
const alunos = [
  { nome: "Ana", media: 8.5 },
  { nome: "Bruno", media: 6 },
  { nome: "Carla", media: 9.2 },
];

const listaDeAlunos = document.createElement("ul");

for (const aluno of alunos) {
  const item = document.createElement("li");
  item.textContent = `${aluno.nome}: ${aluno.media.toFixed(1)}`;
  item.classList.toggle("reprovado", aluno.media < 7);
  listaDeAlunos.append(item);
}

document.body.append(listaDeAlunos);
```

### Resumo

| Tarefa                       | Como fazer                                               |
| ---------------------------- | -------------------------------------------------------- |
| alterar o texto              | `elemento.textContent = "..."`                           |
| alterar um atributo          | `elemento.href = "..."` ou `setAttribute("href", "...")` |
| adicionar ou remover classes | `classList.add`, `remove` e `toggle`                     |
| esconder um elemento         | `elemento.hidden = true`                                 |
| criar um elemento            | `document.createElement("tag")`                          |
| inserir na página            | `append`, `prepend`, `before` e `after`                  |
| remover da página            | `elemento.remove()`                                      |

### Experimente no console

Com o `index.html` aberto, digite no console:

```js
document.title = "Estudando o DOM"; // o texto da aba muda
console.dir(document.body.firstElementChild); // o <header> da página, como objeto

const aviso = document.createElement("p");
aviso.textContent = "Este parágrafo foi criado pelo JavaScript!";
aviso.style.padding = "16px";
aviso.style.backgroundColor = "gold";
document.body.prepend(aviso); // aparece no topo da página

aviso.remove(); // e desaparece
```

---

## 13. Seletores de elementos

No tópico anterior, os elementos foram criados pelo próprio JavaScript, então já havia uma variável apontando para cada um. Mas a maior parte dos elementos de uma página já está escrita no HTML. Para alterá-los, primeiro é preciso **encontrá-los** no DOM, e os métodos que fazem isso usam **seletores**.

O resultado da busca é uma **referência** ao elemento ([tópico 10](#10-objetos)): alterar o elemento por meio da variável altera o próprio elemento na página.

### Revisão: seletores CSS

O JavaScript usa os mesmos seletores do CSS:

| Seletor              | Seleciona                                         | Exemplo               |
| -------------------- | ------------------------------------------------- | --------------------- |
| `tag`                | os elementos com aquela tag                       | `li`                  |
| `.classe`            | os elementos com a classe                         | `.aprovado`           |
| `#id`                | o elemento com o id                               | `#lista-de-alunos`    |
| `[atributo]`         | os elementos que têm o atributo                   | `[data-matricula]`    |
| `[atributo="valor"]` | os elementos com o atributo igual ao valor        | `[type="email"]`      |
| `a b`                | `b` em qualquer nível dentro de `a` (descendente) | `#lista-de-alunos li` |
| `a > b`              | `b` diretamente dentro de `a` (filho)             | `ul > li`             |
| `a, b`               | os elementos que correspondem a `a` **ou** a `b`  | `h1, h2`              |
| `tag.classe`         | os elementos com a tag **e** a classe             | `li.aprovado`         |
| `:first-child`       | os elementos que são o primeiro filho do seu pai  | `li:first-child`      |
| `:checked`           | as caixas de seleção e opções marcadas            | `input:checked`       |
| `:not(seletor)`      | os elementos que **não** correspondem ao seletor  | `li:not(.aprovado)`   |

> Cuidado com os espaços: `li.aprovado` é um `li` que tem a classe `aprovado`, enquanto `li .aprovado` é um elemento com a classe `aprovado` **dentro** de um `li`.

### `getElementById`

Busca um elemento pelo seu `id`. Como o `id` deve ser único na página, o resultado é **um único elemento**, ou `null`, se nenhum for encontrado.

```js
const listaDeAlunos = document.getElementById("lista-de-alunos"); // sem o #
```

### `querySelector`

Recebe **qualquer seletor CSS** e retorna o **primeiro** elemento que corresponde a ele, ou `null`, se nenhum for encontrado:

```js
const titulo = document.querySelector("h1");
const listaDeAlunos = document.querySelector("#lista-de-alunos"); // com o #
const primeiroAprovado = document.querySelector("li.aprovado");
const campoEmail = document.querySelector('input[type="email"]');
```

### `querySelectorAll`

Retorna **todos** os elementos que correspondem ao seletor, em uma **`NodeList`**. Se nenhum for encontrado, a lista fica vazia (`length` igual a `0`); o resultado nunca é `null`.

```js
const itens = document.querySelectorAll("#lista-de-alunos li");

itens.length; // quantidade de itens encontrados
itens[0]; // o primeiro item

itens.forEach((item) => {
  item.classList.add("destaque");
});

for (const item of itens) {
  console.log(item.textContent);
}
```

A `NodeList` se parece com um array, mas **não é um array**: ela tem `length`, índices e `forEach`, mas não tem `map`, `filter` nem `reduce`. Para usar esses métodos, converta a lista em um array com o spread ([tópico 11](#11-arrays)) ou com `Array.from`:

```js
const nomes = [...itens].map((item) => item.textContent);
const aprovados = Array.from(itens).filter((item) =>
  item.classList.contains("aprovado"),
);
```

### `getElementsByClassName` e `getElementsByTagName`

São métodos mais antigos, que buscam pelo nome de uma classe (sem o `.`) ou de uma tag. Eles retornam uma **`HTMLCollection`**, que também se parece com um array, mas **não tem `forEach`** (o `for...of` funciona normalmente).

```js
const aprovados = document.getElementsByClassName("aprovado"); // sem o .
const paragrafos = document.getElementsByTagName("p");
```

### Coleções estáticas e vivas

- A `NodeList` do `querySelectorAll` é **estática**: ela é uma "foto" do momento da busca. Elementos adicionados depois não aparecem nela.
- A `HTMLCollection` é **viva**: ela se atualiza sozinha quando o DOM muda.

```js
// suponha uma lista com 3 itens
const itensEstaticos = document.querySelectorAll("li");
const itensVivos = document.getElementsByTagName("li");

const novoItem = document.createElement("li");
document.querySelector("ul").append(novoItem);

itensEstaticos.length; // 3 (não mudou)
itensVivos.length; // 4 (atualizou sozinha)
```

### Comparativo

| Método                   | Recebe               | Retorna                        | Se não encontrar |
| ------------------------ | -------------------- | ------------------------------ | ---------------- |
| `getElementById`         | o id, sem `#`        | um elemento                    | `null`           |
| `querySelector`          | qualquer seletor CSS | o primeiro elemento encontrado | `null`           |
| `querySelectorAll`       | qualquer seletor CSS | uma `NodeList` estática        | lista vazia      |
| `getElementsByClassName` | a classe, sem `.`    | uma `HTMLCollection` viva      | coleção vazia    |
| `getElementsByTagName`   | o nome da tag        | uma `HTMLCollection` viva      | coleção vazia    |

> **Boa prática:** no dia a dia, use `querySelector` e `querySelectorAll`. Eles aceitam qualquer seletor CSS e deixam o código uniforme. O `getElementById` continua sendo uma boa opção para buscar um elemento pelo id.

### Buscando dentro de um elemento

O `querySelector` e o `querySelectorAll` existem em **todos os elementos**, e não só no `document`. Nesse caso, a busca acontece apenas **dentro** daquele elemento:

```js
const formulario = document.querySelector("#formulario-de-cadastro");
const campos = formulario.querySelectorAll("input"); // só os campos deste formulário
const botaoEnviar = formulario.querySelector("button");
```

Isso deixa a busca mais precisa e evita encontrar, sem querer, elementos parecidos em outras partes da página.

### `closest` e `matches`

- **`elemento.closest(seletor)`** procura **para cima** na árvore: começa pelo próprio elemento e sobe pelos ancestrais até encontrar um que corresponda ao seletor. Se não encontrar, retorna `null`.
- **`elemento.matches(seletor)`** verifica se o próprio elemento corresponde ao seletor e retorna `true` ou `false`.

```html
<li class="aluno" data-matricula="2025001">
  <span>Ana</span>
  <button class="botao-remover">Remover</button>
</li>
```

```js
const botaoRemover = document.querySelector(".botao-remover");

botaoRemover.closest(".aluno"); // o <li> que contém o botão
botaoRemover.closest(".aluno").dataset.matricula; // "2025001"
botaoRemover.matches("button"); // true
botaoRemover.matches(".aluno"); // false
```

O `closest` é muito usado com eventos, como será visto no [tópico 14](#14-eventos).

### Quando o elemento não é encontrado

Se nada for encontrado, o `querySelector` e o `getElementById` retornam `null`. Tentar usar esse `null` como se fosse um elemento gera um dos erros mais comuns do JavaScript no navegador:

```js
const titulo = document.querySelector("#titulo-principal"); // não existe na página
titulo.textContent = "Olá"; // TypeError: Cannot set properties of null (setting 'textContent')
```

As causas mais frequentes são:

- um erro de digitação no seletor (`#lista-alunos` em vez de `#lista-de-alunos`);
- esquecer o `#` ou o `.` no `querySelector`, ou colocá-los no `getElementById`;
- executar o script **antes** de o elemento existir (veja [onde colocar a tag `<script>`](#onde-colocar-a-tag-script)).

Quando um elemento pode não existir, verifique antes de usá-lo:

```js
const mensagem = document.querySelector(".mensagem");

if (mensagem) {
  mensagem.textContent = "Cadastro realizado!";
}

// para apenas ler um valor, o encadeamento opcional (tópico 10) também resolve
const textoDaMensagem = mensagem?.textContent ?? "";
```

> O encadeamento opcional serve apenas para **ler**: `mensagem?.textContent = "..."` gera um erro de sintaxe.

### Boas práticas

- **Busque uma vez e guarde o resultado em uma constante**, no início do código, em vez de repetir a mesma busca várias vezes.
- **Use nomes que indiquem o tipo do elemento:** `botaoEnviar`, `campoEmail`, `listaDeAlunos`, `mensagemDeErro`.
- **Use `id` para elementos únicos e classes para grupos de elementos.**
- No HTML, ids e classes costumam usar letras minúsculas separadas por hífen (`lista-de-alunos`). No JavaScript, a variável correspondente segue o camelCase (`listaDeAlunos`), como visto em [Convenções de nomenclatura](#convenções-de-nomenclatura).

### Experimente no console

Com o `index.html` aberto:

```js
document.querySelector("h1").textContent; // "Introdução ao JavaScript"
document.getElementById("loops"); // a seção do tópico de laços de repetição
document.querySelectorAll(".topico").length; // 11: uma seção para cada tópico

// contorna de vermelho todos os botões "Executar" da página
document.querySelectorAll(".botao--principal").forEach((botao) => {
  botao.style.outline = "3px solid red";
});
```

---

## 14. Eventos

Um **evento** é algo que acontece na página: um clique, uma tecla pressionada, um texto digitado, o envio de um formulário, o fim do carregamento. O JavaScript pode **escutar** esses eventos e executar uma função sempre que eles acontecerem.

Até aqui, o código era executado de cima para baixo, uma única vez. Com eventos, parte do código fica **esperando**: a função só é executada quando o evento acontece, e pode ser executada muitas vezes.

### `addEventListener`

O método **`addEventListener`** registra uma função para ser executada quando um evento acontecer em um elemento. Essa função é chamada de **ouvinte** (_listener_) ou **manipulador** (_handler_) do evento, e é um exemplo de callback ([tópico 9](#9-funções-e-arrow-functions)).

```html
<button id="botao-saudar">Saudar</button>
```

```js
const botaoSaudar = document.querySelector("#botao-saudar");

function exibirSaudacao() {
  console.log("Olá, turma!");
}

// elemento.addEventListener(tipoDoEvento, funcaoOuvinte);
botaoSaudar.addEventListener("click", exibirSaudacao);
```

Também é comum escrever a função diretamente na chamada, como arrow function:

```js
botaoSaudar.addEventListener("click", () => {
  console.log("Olá, turma!");
});
```

> **Erro comum:** escrever `addEventListener("click", exibirSaudacao())`, com parênteses. Assim, a função é **executada imediatamente**, e o que fica registrado como ouvinte é o seu retorno (`undefined`). Passe a função **sem parênteses**: quem vai chamá-la é o navegador, quando o evento acontecer.

Um mesmo elemento pode ter vários ouvintes, inclusive para o mesmo evento. Todos são executados, na ordem em que foram registrados.

### Principais eventos

| Categoria  | Evento             | Quando acontece                                        |
| ---------- | ------------------ | ------------------------------------------------------ |
| mouse      | `click`            | o elemento é clicado                                   |
| mouse      | `dblclick`         | o elemento recebe um clique duplo                      |
| mouse      | `mouseenter`       | o ponteiro do mouse entra no elemento                  |
| mouse      | `mouseleave`       | o ponteiro do mouse sai do elemento                    |
| teclado    | `keydown`          | uma tecla é pressionada                                |
| teclado    | `keyup`            | uma tecla é solta                                      |
| formulário | `input`            | o valor de um campo muda (a cada caractere digitado)   |
| formulário | `change`           | o valor de um campo é confirmado                       |
| formulário | `submit`           | um formulário é enviado                                |
| formulário | `focus`            | o elemento recebe o foco (o cursor entra no campo)     |
| formulário | `blur`             | o elemento perde o foco                                |
| página     | `DOMContentLoaded` | o HTML foi lido e o DOM está pronto (no `document`)    |
| página     | `load`             | tudo foi carregado, inclusive as imagens (no `window`) |

A diferença entre `input` e `change`: o `input` acontece a cada alteração, enquanto o `change` acontece quando a alteração é concluída, por exemplo, ao sair de um campo de texto ou ao escolher uma opção em uma lista de seleção.

### O objeto do evento

Quando o evento acontece, o navegador chama a função ouvinte e envia a ela um **objeto com informações sobre o evento**. Para usá-lo, basta declarar um parâmetro, normalmente chamado de `evento` (em códigos em inglês, `event` ou apenas `e`):

```js
botaoSaudar.addEventListener("click", (evento) => {
  console.log(evento.type); // "click"
  console.log(evento.target); // o elemento clicado
});
```

| Propriedade ou método      | O que contém ou faz                          |
| -------------------------- | -------------------------------------------- |
| `evento.type`              | o tipo do evento (`"click"`, `"keydown"`...) |
| `evento.target`            | o elemento em que o evento **começou**       |
| `evento.currentTarget`     | o elemento que tem o ouvinte                 |
| `evento.key`               | a tecla pressionada (`"a"`, `"Enter"`...)    |
| `evento.preventDefault()`  | cancela o comportamento padrão do navegador  |
| `evento.stopPropagation()` | interrompe a propagação do evento            |

### Eventos de teclado

O `evento.key` informa qual tecla foi pressionada. Por exemplo, para fazer uma busca ao pressionar `Enter`:

```js
const campoDeBusca = document.querySelector("#campo-de-busca");

campoDeBusca.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") {
    console.log(`Buscando por: ${campoDeBusca.value}`);
  }
});
```

### Campos de formulário

O valor de um campo fica na propriedade `value` e é **sempre uma string**, mesmo quando o usuário digita um número. Por isso, valem as conversões do [tópico 2](#2-tipos-primitivos) e os cuidados com textos do [tópico 3](#3-manipulação-de-strings).

O evento `input` permite reagir **enquanto** o usuário digita. Um uso comum é filtrar uma lista:

```html
<input type="text" id="campo-de-busca" placeholder="Buscar aluno" />

<ul id="lista-de-alunos">
  <li>Ana Souza</li>
  <li>Bruno Lima</li>
  <li>Carla Dias</li>
</ul>
```

```js
const campoDeBusca = document.querySelector("#campo-de-busca");
const itensDaLista = document.querySelectorAll("#lista-de-alunos li");

campoDeBusca.addEventListener("input", () => {
  const termoBuscado = campoDeBusca.value.trim().toLowerCase();

  for (const item of itensDaLista) {
    const nomeDoAluno = item.textContent.toLowerCase();
    item.hidden = !nomeDoAluno.includes(termoBuscado);
  }
});
```

### `preventDefault` e o envio de formulários

Alguns eventos têm um **comportamento padrão** no navegador: clicar em um link abre outra página, e enviar um formulário **recarrega a página**, apagando tudo o que o JavaScript fez nela. O método `evento.preventDefault()` cancela esse comportamento:

```html
<form id="formulario-de-nota">
  <input type="text" id="campo-nome" placeholder="Nome do aluno" />
  <input type="text" id="campo-nota" placeholder="Nota" />
  <button type="submit">Adicionar</button>
</form>

<p id="mensagem"></p>
<ul id="lista-de-notas"></ul>
```

```js
const formulario = document.querySelector("#formulario-de-nota");
const campoNome = document.querySelector("#campo-nome");
const campoNota = document.querySelector("#campo-nota");
const mensagem = document.querySelector("#mensagem");
const listaDeNotas = document.querySelector("#lista-de-notas");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); // impede o recarregamento da página

  const nome = campoNome.value.trim();
  const notaDigitada = campoNota.value.trim().replace(",", ".");
  const nota = Number(notaDigitada);

  const temNome = nome !== "";
  const ehNotaValida = notaDigitada !== "" && nota >= 0 && nota <= 10;

  if (!temNome || !ehNotaValida) {
    mensagem.textContent = "Informe o nome e uma nota de 0 a 10.";
    return;
  }

  const item = document.createElement("li");
  item.textContent = `${nome}: ${nota.toFixed(1)}`;
  listaDeNotas.append(item);

  mensagem.textContent = "";
  formulario.reset(); // limpa os campos do formulário
  campoNome.focus(); // coloca o cursor de volta no primeiro campo
});
```

O exemplo reúne vários conteúdos da Parte 1:

- `trim` e `replace` padronizam o texto digitado e aceitam a nota com vírgula (tópicos 2 e 3);
- a verificação `notaDigitada !== ""` é necessária porque `Number("")` resulta em `0`, e não em `NaN` (tópico 2);
- se a nota digitada não for um número, `nota` vale `NaN`, e as comparações `nota >= 0` e `nota <= 10` resultam em `false` (tópico 5);
- o `return` encerra a função antes de o item ser adicionado (tópico 9).

> Ouça o evento `submit` no **formulário**, e não o `click` no botão. Assim, o envio também funciona quando o usuário pressiona `Enter` dentro de um campo.

### Propagação de eventos

A maioria dos eventos, depois de acontecer em um elemento, **sobe pela árvore do DOM**: passa pelo pai, pelo pai do pai e assim por diante, até chegar ao `document`. Esse comportamento é chamado de **propagação** (em inglês, _bubbling_, ou borbulhamento).

```
document                 ▲  ...até chegar ao document
└── body                 │
    └── ul               │  sobe pelos ancestrais...
        └── li           │
            └── button   │  o clique acontece aqui
```

Por isso, um ouvinte registrado em um elemento pai também é executado quando o evento acontece em um de seus filhos. Nesse caso, o `evento.target` indica onde o evento começou (o `button`), e o `evento.currentTarget`, o elemento que tem o ouvinte (por exemplo, o `ul`).

O `evento.stopPropagation()` interrompe a propagação, mas deve ser usado com moderação, pois outros códigos da página podem depender dela.

### Delegação de eventos

A propagação permite uma técnica muito útil: em vez de registrar um ouvinte em **cada** item de uma lista, registra-se **um único ouvinte no elemento pai**, e o `evento.target` indica onde foi o clique. Essa técnica é chamada de **delegação de eventos**.

```html
<ul id="lista-de-alunos">
  <li>Ana Souza <button class="botao-remover">Remover</button></li>
  <li>Bruno Lima <button class="botao-remover">Remover</button></li>
</ul>
```

```js
const listaDeAlunos = document.querySelector("#lista-de-alunos");

listaDeAlunos.addEventListener("click", (evento) => {
  const botaoRemover = evento.target.closest(".botao-remover");

  if (botaoRemover) {
    botaoRemover.closest("li").remove();
  }
});
```

O `closest` ([tópico 13](#13-seletores-de-elementos)) garante que o código funcione mesmo se o clique acontecer em algo **dentro** do botão, como um ícone. Se o clique for em outra parte da lista, `botaoRemover` é `null`, e o `if` ignora o clique.

Vantagens da delegação:

- **um único ouvinte**, em vez de um para cada item;
- **funciona com elementos criados depois**, com `createElement` ([tópico 12](#12-dom)), sem precisar registrar novos ouvintes.

### Removendo um ouvinte

O `removeEventListener` remove um ouvinte, mas precisa receber **a mesma função** que foi registrada. Por isso, ele não funciona com funções escritas diretamente na chamada:

```js
botaoSaudar.addEventListener("click", exibirSaudacao);
botaoSaudar.removeEventListener("click", exibirSaudacao); // remove

botaoSaudar.addEventListener("click", () => console.log("Olá!"));
// não remove: a arrow function abaixo é uma nova função, diferente da anterior
botaoSaudar.removeEventListener("click", () => console.log("Olá!"));
```

Para um ouvinte que deve ser executado **uma única vez**, use a opção `{ once: true }`. Ele é removido automaticamente depois da primeira execução:

```js
botaoConfirmar.addEventListener("click", confirmarMatricula, { once: true });
```

### Outras formas de registrar eventos

Em códigos antigos, é comum encontrar duas outras formas:

```html
<!-- 1. Atributo "on" + nome do evento, no HTML -->
<button onclick="exibirSaudacao()">Saudar</button>
```

```js
// 2. Propriedade "on" + nome do evento, no JavaScript
botaoSaudar.onclick = exibirSaudacao;
```

As duas funcionam, mas têm desvantagens: a propriedade aceita **apenas uma função por evento** (uma nova atribuição substitui a anterior), e o atributo mistura JavaScript com HTML.

> **Boa prática:** use sempre `addEventListener`. Ele permite vários ouvintes para o mesmo evento e mantém o JavaScript separado do HTML.

> Dentro de um ouvinte criado com `function`, `this` representa o elemento que tem o ouvinte (o mesmo que `evento.currentTarget`). Em uma arrow function, isso não acontece, porque ela não tem `this` próprio ([tópico 9](#9-funções-e-arrow-functions)). Para evitar confusão, prefira usar `evento.currentTarget` ou a variável do elemento.

### Esperando o DOM ficar pronto

Se o script estiver no `<head>` sem o atributo `defer`, ele será executado antes de os elementos existirem. Nesse caso, o código pode ficar dentro de um ouvinte do evento **`DOMContentLoaded`**, que acontece assim que o HTML termina de ser lido:

```js
document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.querySelector("h1"); // aqui o <h1> já existe
  titulo.textContent = "Página pronta!";
});
```

Em projetos novos, as formas vistas no [tópico 12](#onde-colocar-a-tag-script) (o script no final do `<body>` ou com `defer`) são mais simples.

### Resumo

| Tarefa                                    | Como fazer                                   |
| ----------------------------------------- | -------------------------------------------- |
| reagir a um evento                        | `elemento.addEventListener("tipo", funcao)`  |
| saber onde o evento começou               | `evento.target`                              |
| ler o valor de um campo                   | `campo.value` (sempre uma string)            |
| impedir o recarregamento de um formulário | `evento.preventDefault()` no evento `submit` |
| tratar vários itens com um único ouvinte  | delegação: ouvinte no pai + `closest`        |
| executar o ouvinte uma única vez          | opção `{ once: true }`                       |
| remover um ouvinte                        | `removeEventListener`, com a mesma função    |

### Experimente no console

Com o `index.html` aberto:

```js
// 1. Execute estas linhas e depois clique no título da página
const titulo = document.querySelector("h1");
titulo.addEventListener("click", () => {
  titulo.textContent = titulo.textContent.toUpperCase();
});

// 2. Execute, clique em qualquer parte da página e pressione algumas teclas
document.addEventListener("keydown", (evento) => {
  console.log(`Tecla pressionada: ${evento.key}`);
});

// 3. O método click() simula um clique: o primeiro exemplo da página é executado
document.querySelector(".botao--principal").click();
```

---

## Estudo de caso: o `pagina.js`

Com os três tópicos desta parte, já é possível ler o `pagina.js`, o arquivo que monta a página deste material. Ele é um exemplo real de uso do DOM: o `index.html` tem apenas a estrutura básica (cabeçalho, sumário vazio e área de conteúdo vazia), e **todo o resto é criado pelo JavaScript**, a partir da lista `topicos` do `script.js`.

- **`criarElemento`** cria um elemento com classe e texto opcionais, usando `createElement`, `className` e `textContent` (tópico 12).
- **`criarCartaoDeExemplo`** monta o cartão de cada exemplo. Usa `classList.add` para destacar as aplicações práticas, `append` para juntar as partes, `hidden` para esconder a saída até a primeira execução e `addEventListener("click", ...)` no botão **Executar** (tópicos 12 e 14). A cada execução, `replaceChildren` troca as linhas de saída anteriores pelas novas.
- **`criarSecaoDoTopico`** e **`criarItemDoSumario`** montam a seção de cada tópico e o link do sumário, definindo propriedades como `id` e `href` (tópico 12). O botão **Executar todos** também recebe um ouvinte de `click` (tópico 14).
- **`montarPagina`** encontra os elementos `#lista-do-sumario` e `#conteudo` com `getElementById` e insere neles tudo o que foi criado (tópicos 12 e 13).
- **`destacarSintaxe`** e **`destacarTopicoVisivel`** usam `querySelectorAll` com `forEach` para percorrer os blocos de código e os links do sumário, e `classList.toggle(classe, condicao)` para destacar o link do tópico visível (tópicos 12 e 13).

Alguns detalhes que valem a observação:

- **Todo texto é inserido com `textContent`**, nunca com `innerHTML`. Assim, o código dos exemplos, que contém caracteres como `<` e `>`, aparece exatamente como foi escrito, sem ser interpretado como HTML.
- **Os elementos são montados por completo antes de entrar na página:** cada cartão e cada seção são criados e preenchidos, e só no final a função `montarPagina` os insere no DOM.
- **A ordem dos scripts no `index.html` importa:** o `script.js` vem antes do `pagina.js`, porque o `pagina.js` usa a lista `topicos`, definida no `script.js`. E os dois ficam no final do `<body>`, para que `#lista-do-sumario` e `#conteudo` já existam quando o `pagina.js` for executado (tópico 12).

> O `pagina.js` também usa dois recursos que vão além deste material: o `IntersectionObserver`, que detecta quais seções estão visíveis na tela, e a substituição temporária do `console.log`, que captura a saída dos exemplos para exibi-la na página.

---

## Referências

- [Guia de JavaScript — MDN Web Docs (em português)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide)
- [Referência de JavaScript — MDN Web Docs (em português)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference)
- [JavaScript.info — tutorial moderno de JavaScript (em português)](https://pt.javascript.info/)
- [Introdução ao DOM — MDN Web Docs (em português)](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction)
- [`querySelector` — MDN Web Docs (em português)](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelector)
- [`addEventListener` — MDN Web Docs (em português)](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener)
