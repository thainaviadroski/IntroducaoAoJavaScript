# Introdução ao JavaScript

Material de apoio com os fundamentos da linguagem JavaScript Cada conceito é explicado neste guia e demonstrado em exemplos curtos que podem ser executados no navegador.

## Sumário

- [Estrutura do projeto](#estrutura-do-projeto)
- [Como executar os exemplos](#como-executar-os-exemplos)
- [Como os exemplos estão organizados](#como-os-exemplos-estão-organizados)
- [Convenções de nomenclatura](#convenções-de-nomenclatura)
- Tópicos
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
- **`pagina.js`** apenas cria a interface: lê a lista `topicos`, mostra o código de cada exemplo e exibe a saída quando você clica em **Executar**. Ele usa recursos que vão além do básico (manipulação do DOM) e **não faz parte do conteúdo da aula**.

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

## Referências

- [Guia de JavaScript — MDN Web Docs (em português)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide)
- [Referência de JavaScript — MDN Web Docs (em português)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference)
- [JavaScript.info — tutorial moderno de JavaScript (em português)](https://pt.javascript.info/)
