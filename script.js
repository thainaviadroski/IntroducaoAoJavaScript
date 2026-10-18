/*
 * ============================================================================
 *  INTRODUÇÃO AO JAVASCRIPT — EXEMPLOS PRÁTICOS
 * ============================================================================
 *
 *  Cada exemplo deste arquivo é uma função independente. Para ver o
 *  resultado, abra o index.html no navegador e clique em "Executar".
 *  Também é possível chamar qualquer função pelo console do navegador
 *  (F12 > Console), digitando o nome dela. Exemplo: exemploDeclaracaoComLet()
 *
 *  PROGRESSÃO DOS TÓPICOS
 *  Os tópicos seguem uma ordem de evolução: cada um usa apenas o que já foi
 *  apresentado nos anteriores. Dentro de cada tópico, os exemplos vão do mais
 *  simples ao mais completo, e o último é sempre uma APLICAÇÃO PRÁTICA, que
 *  evolui o mesmo cenário: um pequeno sistema acadêmico de notas.
 *
 *  SUMÁRIO
 *    1.  Declaração de variáveis (var, let, const)
 *    2.  Tipos primitivos
 *    3.  Manipulação de strings
 *    4.  Operadores aritméticos
 *    5.  Operadores relacionais
 *    6.  Operadores lógicos
 *    7.  Estruturas de tomada de decisão
 *    8.  Laços de repetição (loops)
 *    9.  Funções e arrow functions
 *    10. Objetos
 *    11. Arrays
 *
 *  As explicações detalhadas de cada tópico estão no readme.md.
 * ============================================================================
 */


// ============================================================================
// 1. DECLARAÇÃO DE VARIÁVEIS (var, let, const)
// ----------------------------------------------------------------------------
// Ponto de partida: guardar valores com um nome e exibi-los com console.log.
// ============================================================================

function exemploDeclaracaoComLet() {
    // let cria uma variável cujo valor PODE ser alterado (reatribuído).
    let quantidadeDeAlunos = 30;
    console.log("Quantidade inicial:", quantidadeDeAlunos);

    quantidadeDeAlunos = 32; // reatribuição: a variável recebe um novo valor
    console.log("Após novas matrículas:", quantidadeDeAlunos);

    // Uma variável let pode ser declarada sem valor. Ela começa como undefined.
    let notaDaProva;
    console.log("Nota antes da correção:", notaDaProva);

    notaDaProva = 8.5;
    console.log("Nota depois da correção:", notaDaProva);
}

function exemploDeclaracaoComConst() {
    // const cria uma variável que NÃO pode ser reatribuída.
    // Por isso, ela precisa receber um valor já na declaração.
    const nomeDaUniversidade = "Universidade Federal";
    console.log("Universidade:", nomeDaUniversidade);

    // Valores fixos, conhecidos antes da execução, costumam ser escritos
    // em MAIÚSCULAS, com as palavras separadas por _
    const NOTA_MINIMA_PARA_APROVACAO = 7;
    const FREQUENCIA_MINIMA = 75;
    console.log("Nota mínima:", NOTA_MINIMA_PARA_APROVACAO);
    console.log("Frequência mínima (%):", FREQUENCIA_MINIMA);

    // A linha abaixo gera um erro DE PROPÓSITO: não é possível reatribuir uma const.
    // Veja a mensagem de erro na saída.
    nomeDaUniversidade = "Outra Universidade";
}

function exemploDeclaracaoComVar() {
    // var é a forma antiga de declarar variáveis (anterior a 2015).
    // Ainda funciona, mas tem comportamentos que facilitam erros.

    // 1) Hoisting: a declaração com var é "içada" para o topo da função.
    //    A variável já existe, valendo undefined, antes da linha da declaração.
    console.log("Antes da declaração:", disciplina); // undefined, sem erro
    var disciplina = "Algoritmos";
    console.log("Depois da declaração:", disciplina);

    // 2) var permite declarar a mesma variável de novo, sem nenhum aviso.
    //    Em um código grande, isso pode sobrescrever um valor sem querer.
    var disciplina = "Estruturas de Dados";
    console.log("Após redeclarar:", disciplina);

    // 3) Com let (e const), usar a variável antes da declaração gera erro.
    //    A linha abaixo gera um erro DE PROPÓSITO.
    console.log("Usando let antes da declaração:", semestre);
    let semestre = 1;
}

function exemploEscopoDeBloco() {
    // Bloco é qualquer trecho de código entre chaves { }.
    // let e const só existem DENTRO do bloco em que foram declaradas.
    // var ignora o bloco e continua visível fora dele.
    {
        var mensagemComVar = "declarada com var";
        let mensagemComLet = "declarada com let";
        console.log("Dentro do bloco:", mensagemComVar, "|", mensagemComLet);
    }

    console.log("Fora do bloco (var):", mensagemComVar); // continua existindo

    // A linha abaixo gera um erro DE PROPÓSITO: mensagemComLet não existe aqui.
    console.log("Fora do bloco (let):", mensagemComLet);
}

function exemploFichaDoAluno() {
    // APLICAÇÃO PRÁTICA: os dados de um aluno ao longo do semestre.
    // Regra: use const para o que não muda e let para o que pode mudar.
    const nomeDoAluno = "Mariana Costa"; // o nome não muda
    const matricula = "2025001";         // a matrícula também não
    let periodoAtual = 1;                // muda a cada semestre
    let notaParcial = 6.5;               // pode ser revisada

    console.log("Nome:", nomeDoAluno);
    console.log("Matrícula:", matricula);
    console.log("Período:", periodoAtual);
    console.log("Nota parcial:", notaParcial);

    // Após a revisão da prova e a mudança de semestre:
    notaParcial = 7.5;
    periodoAtual = 2;

    console.log("--- Dados atualizados ---");
    console.log("Período:", periodoAtual);
    console.log("Nota parcial:", notaParcial);
}


// ============================================================================
// 2. TIPOS PRIMITIVOS
// ----------------------------------------------------------------------------
// Usa: variáveis (tópico 1).
// ============================================================================

function exemploTiposPrimitivos() {
    // JavaScript possui 7 tipos primitivos.
    // O operador typeof informa, em forma de texto, o tipo de um valor.
    const nome = "Carlos";                // string: texto
    const idade = 20;                     // number: números inteiros...
    const altura = 1.75;                  // ...e decimais (o mesmo tipo)
    const populacaoMundial = 8000000000n; // bigint: inteiros muito grandes (sufixo n)
    const estaMatriculado = true;         // boolean: true ou false
    let telefone;                         // undefined: ainda sem valor
    const orientador = null;              // null: ausência de valor intencional
    const identificador = Symbol("id");   // symbol: valor único

    console.log("nome:", nome, "| tipo:", typeof nome);
    console.log("idade:", idade, "| tipo:", typeof idade);
    console.log("altura:", altura, "| tipo:", typeof altura);
    console.log("populacaoMundial:", populacaoMundial, "| tipo:", typeof populacaoMundial);
    console.log("estaMatriculado:", estaMatriculado, "| tipo:", typeof estaMatriculado);
    console.log("telefone:", telefone, "| tipo:", typeof telefone);
    console.log("orientador:", orientador, "| tipo:", typeof orientador);
    console.log("identificador:", identificador, "| tipo:", typeof identificador);

    // Curiosidade: typeof null retorna "object". É um erro antigo da linguagem,
    // mantido por compatibilidade. null é, sim, um tipo primitivo.
}

function exemploNullEUndefined() {
    // undefined: a variável existe, mas NENHUM valor foi atribuído a ela.
    // É o valor que o próprio JavaScript coloca automaticamente.
    let apelido;
    console.log("apelido:", apelido);

    // null: o programador indica, de propósito, que ainda não há valor.
    let dataDeFormatura = null; // o aluno ainda não se formou
    console.log("dataDeFormatura:", dataDeFormatura);

    // Quando o valor existir, basta atribuí-lo
    dataDeFormatura = "15/12/2028";
    console.log("dataDeFormatura:", dataDeFormatura);
}

function exemploTipoNumber() {
    // Inteiros, decimais e negativos são todos do tipo number.
    // Em JavaScript, o separador decimal é o PONTO, não a vírgula.
    const quantidadeDeCreditos = 24;
    const coeficienteDeRendimento = 8.37;
    const temperaturaMinima = -3;
    console.log("quantidadeDeCreditos:", quantidadeDeCreditos, "| tipo:", typeof quantidadeDeCreditos);
    console.log("coeficienteDeRendimento:", coeficienteDeRendimento, "| tipo:", typeof coeficienteDeRendimento);
    console.log("temperaturaMinima:", temperaturaMinima, "| tipo:", typeof temperaturaMinima);

    // Valores especiais, que também são do tipo number:
    // NaN (Not a Number): resultado de uma operação numérica inválida
    // Infinity: valor maior que qualquer outro número
    console.log("NaN | tipo:", typeof NaN);
    console.log("Infinity | tipo:", typeof Infinity);

    // O tipo number representa inteiros com segurança somente até este limite.
    // Para valores maiores, existe o bigint.
    console.log("Maior inteiro seguro:", Number.MAX_SAFE_INTEGER);
    console.log("Um bigint:", 123456789012345678901234567890n);
}

function exemploConversaoDeTipos() {
    // Texto para número: Number(), parseInt() e parseFloat()
    const notaEmTexto = "8.5";
    const notaEmNumero = Number(notaEmTexto);
    console.log(notaEmTexto, typeof notaEmTexto, "->", notaEmNumero, typeof notaEmNumero);

    console.log('Number("42"):', Number("42"));
    console.log('Number("abc"):', Number("abc"));             // NaN: não é um número válido
    console.log('Number(""):', Number(""));                   // 0 (cuidado!)
    console.log('parseInt("42px"):', parseInt("42px"));       // 42: lê até onde conseguir
    console.log('parseInt("7.9"):', parseInt("7.9"));         // 7: só a parte inteira
    console.log('parseFloat("7.9kg"):', parseFloat("7.9kg")); // 7.9

    // Número para texto: String()
    const ano = 2025;
    const anoEmTexto = String(ano);
    console.log(ano, typeof ano, "->", anoEmTexto, typeof anoEmTexto);

    // Qualquer valor para boolean: Boolean()
    console.log("Boolean(1):", Boolean(1));
    console.log("Boolean(0):", Boolean(0));

    // Para verificar se uma conversão falhou, use Number.isNaN()
    console.log('Number.isNaN(Number("abc")):', Number.isNaN(Number("abc")));
}

function exemploTruthyEFalsy() {
    // Quando usado como condição, todo valor é tratado como verdadeiro
    // (truthy) ou falso (falsy). Boolean(valor) mostra como ele será tratado.

    // Os valores FALSY são poucos (além destes, 0n e -0):
    console.log("Boolean(false):", Boolean(false));
    console.log("Boolean(0):", Boolean(0));
    console.log('Boolean(""):', Boolean(""));
    console.log("Boolean(null):", Boolean(null));
    console.log("Boolean(undefined):", Boolean(undefined));
    console.log("Boolean(NaN):", Boolean(NaN));

    // Todo o resto é TRUTHY, inclusive alguns casos que surpreendem:
    console.log('Boolean("0"):', Boolean("0"));
    console.log('Boolean("false"):', Boolean("false"));
    console.log('Boolean(" "):', Boolean(" ")); // string com um espaço não é vazia
    console.log("Boolean(-1):", Boolean(-1));
}

function exemploCopiaPorValor() {
    // Primitivos são copiados POR VALOR: a cópia é independente do original.
    const notaOriginal = 6;
    let notaCopiada = notaOriginal; // copia o valor 6
    notaCopiada = 9;                // altera apenas a cópia

    console.log("notaOriginal:", notaOriginal); // 6
    console.log("notaCopiada:", notaCopiada);   // 9

    // Guarde esta ideia: objetos e arrays (tópicos 10 e 11) se comportam
    // de forma diferente, pois são copiados POR REFERÊNCIA.
}

function exemploDadosDoFormulario() {
    // APLICAÇÃO PRÁTICA: tudo o que é digitado em um formulário chega como TEXTO.
    // Antes de usar os dados, é preciso convertê-los para o tipo correto.
    const idadeDigitada = "19";
    const notaDigitada = "8.5";
    const notaDigitadaComVirgula = "8,5";
    const telefoneDigitado = "";

    console.log("Tipo da idade digitada:", typeof idadeDigitada);

    const idade = parseInt(idadeDigitada);
    const nota = Number(notaDigitada);
    console.log("idade:", idade, "| tipo:", typeof idade);
    console.log("nota:", nota, "| tipo:", typeof nota);

    // Atenção: com vírgula, a conversão falha e resulta em NaN.
    // No próximo tópico (strings), veremos como trocar a vírgula por ponto.
    const notaComVirgula = Number(notaDigitadaComVirgula);
    console.log("nota com vírgula:", notaComVirgula, "| falhou?", Number.isNaN(notaComVirgula));

    // Um campo vazio é falsy: serve para saber se ele foi preenchido
    console.log("Telefone foi preenchido?", Boolean(telefoneDigitado));
}


// ============================================================================
// 3. MANIPULAÇÃO DE STRINGS
// ----------------------------------------------------------------------------
// Usa: variáveis e tipos primitivos (tópicos 1 e 2).
// ============================================================================

function exemploCriandoStrings() {
    // Strings podem ser criadas com aspas simples, aspas duplas ou crase
    const comAspasSimples = 'Olá, turma!';
    const comAspasDuplas = "Olá, turma!";
    const comCrase = `Olá, turma!`;
    console.log(comAspasSimples);
    console.log(comAspasDuplas);
    console.log(comCrase);

    // Para usar aspas dentro do texto, alterne o tipo de aspas...
    console.log('Ela disse: "JavaScript é divertido!"');

    // ...ou use a barra invertida (\) para "escapar" o caractere
    console.log("Ela disse: \"JavaScript é divertido!\"");

    // Outros caracteres especiais: \n (quebra de linha) e \t (tabulação)
    console.log("Linha 1\nLinha 2");
    console.log("Nome:\tAna");
}

function exemploConcatenacaoEInterpolacao() {
    const nomeDaAluna = "Beatriz";
    const curso = "Engenharia";
    const periodo = 3;

    // Concatenação: juntar strings com o operador +
    const fraseConcatenada = "A aluna " + nomeDaAluna + " cursa " + curso + ".";
    console.log(fraseConcatenada);

    // Interpolação: com crase, as variáveis são inseridas com ${ }
    const fraseInterpolada = `A aluna ${nomeDaAluna} cursa ${curso}.`;
    console.log(fraseInterpolada);

    // Dentro de ${ } pode ir qualquer expressão, não apenas variáveis
    console.log(`Ela está no ${periodo}º período. Faltam ${10 - periodo} para concluir.`);

    // Com crase, a string pode ocupar várias linhas.
    // Os espaços no início das linhas também fazem parte do texto.
    const cartaoDeIdentificacao = `Aluna: ${nomeDaAluna}
Curso: ${curso}
Período: ${periodo}º`;
    console.log(cartaoDeIdentificacao);
}

function exemploAcessandoCaracteres() {
    const linguagem = "JavaScript";

    // length: quantidade de caracteres
    console.log("Tamanho:", linguagem.length);

    // Cada caractere tem uma posição (índice), que começa em 0:
    //   J  a  v  a  S  c  r  i  p  t
    //   0  1  2  3  4  5  6  7  8  9
    console.log("Índice 0:", linguagem[0]);
    console.log("Índice 4:", linguagem[4]);
    console.log("Último (índice length - 1):", linguagem[linguagem.length - 1]);
    console.log("Último com at(-1):", linguagem.at(-1));
    console.log("Índice inexistente:", linguagem[50]); // undefined

    // Strings são imutáveis: tentar trocar um caractere não tem efeito
    linguagem[0] = "j";
    console.log("Após tentar alterar o índice 0:", linguagem);
}

function exemploTransformandoStrings() {
    const nomeDigitado = "   ana PAULA   ";

    // Os métodos NÃO alteram a string original: retornam uma string NOVA
    console.log(`Original:      "${nomeDigitado}"`);
    console.log(`trim():        "${nomeDigitado.trim()}"`);        // remove espaços das pontas
    console.log(`toUpperCase(): "${nomeDigitado.toUpperCase()}"`); // tudo em maiúsculas
    console.log(`toLowerCase(): "${nomeDigitado.toLowerCase()}"`); // tudo em minúsculas

    // Métodos podem ser encadeados: o resultado de um é usado pelo próximo
    const nomePadronizado = nomeDigitado.trim().toLowerCase();
    console.log(`Encadeados:    "${nomePadronizado}"`);

    // replace troca a 1ª ocorrência; replaceAll troca todas
    const frase = "Eu gosto de Java. Java é legal.";
    console.log("replace():   ", frase.replace("Java", "JavaScript"));
    console.log("replaceAll():", frase.replaceAll("Java", "JavaScript"));

    // Completar e repetir
    console.log("padStart():", "7".padStart(3, "0"));          // "007"
    console.log("padEnd():  ", "Nota".padEnd(10, ".") + "9.5"); // "Nota......9.5"
    console.log("repeat():  ", "-".repeat(20));
}

function exemploBuscandoEExtraindo() {
    const email = "joao.silva@universidade.edu.br";

    // Métodos de busca: retornam true/false ou uma posição
    console.log('includes("@"):', email.includes("@"));
    console.log('startsWith("joao"):', email.startsWith("joao"));
    console.log('endsWith(".br"):', email.endsWith(".br"));
    console.log('indexOf("@"):', email.indexOf("@")); // posição do primeiro "@"
    console.log('indexOf("#"):', email.indexOf("#")); // -1 significa "não encontrado"

    // slice(início, fim): extrai um trecho. A posição "fim" NÃO é incluída.
    const posicaoDoArroba = email.indexOf("@");
    const usuario = email.slice(0, posicaoDoArroba);
    const dominio = email.slice(posicaoDoArroba + 1); // sem o "fim", vai até o final
    console.log("Usuário:", usuario);
    console.log("Domínio:", dominio);

    // Índices negativos contam a partir do final
    console.log("slice(-6):", email.slice(-6)); // "edu.br"
}

function exemploPadronizandoCadastro() {
    // APLICAÇÃO PRÁTICA: padronizar os dados digitados em um cadastro.
    const nomeDigitado = "   mariana COSTA   ";
    const matriculaDigitada = "317";
    const notaDigitada = "7,5"; // com vírgula, o problema do tópico anterior

    // 1) Nome: remover espaços, padronizar e deixar a 1ª letra maiúscula
    const nomeEmMinusculas = nomeDigitado.trim().toLowerCase();
    const nomeFormatado = nomeEmMinusculas[0].toUpperCase() + nomeEmMinusculas.slice(1);
    console.log("Nome:", nomeFormatado);
    // (No tópico 11, com arrays, deixaremos maiúscula a 1ª letra de CADA palavra.)

    // 2) E-mail institucional: os espaços viram pontos
    const emailInstitucional = nomeEmMinusculas.replaceAll(" ", ".") + "@universidade.edu.br";
    console.log("E-mail:", emailInstitucional);

    // 3) Matrícula sempre com 6 dígitos
    const matriculaFormatada = matriculaDigitada.padStart(6, "0");
    console.log("Matrícula:", matriculaFormatada);

    // 4) Nota: trocar a vírgula por ponto e só então converter para number
    const nota = Number(notaDigitada.replace(",", "."));
    console.log("Nota:", nota, "| tipo:", typeof nota);
}


// ============================================================================
// 4. OPERADORES ARITMÉTICOS
// ----------------------------------------------------------------------------
// Usa: variáveis, tipos primitivos e strings (tópicos 1 a 3).
// ============================================================================

function exemploOperadoresBasicos() {
    const primeiroNumero = 17;
    const segundoNumero = 5;
    console.log(`primeiroNumero = ${primeiroNumero} | segundoNumero = ${segundoNumero}`);

    console.log("Adição (+):", primeiroNumero + segundoNumero);        // 22
    console.log("Subtração (-):", primeiroNumero - segundoNumero);     // 12
    console.log("Multiplicação (*):", primeiroNumero * segundoNumero); // 85
    console.log("Divisão (/):", primeiroNumero / segundoNumero);       // 3.4
    console.log("Resto da divisão (%):", primeiroNumero % segundoNumero); // 2
    console.log("Potência (**):", primeiroNumero ** 2);                // 289

    // Divisão por zero não gera erro em JavaScript
    console.log("Divisão por zero:", primeiroNumero / 0); // Infinity
}

function exemploDivisaoEResto() {
    // / retorna o resultado exato; % retorna o RESTO da divisão inteira
    console.log("17 / 5 =", 17 / 5); // 3.4
    console.log("17 % 5 =", 17 % 5); // 2, pois 17 = 5 x 3 + 2

    // Par ou ímpar: todo número par tem resto 0 na divisão por 2
    console.log("10 % 2 =", 10 % 2, "-> par");
    console.log("7 % 2 =", 7 % 2, "-> ímpar");

    // Converter minutos em horas e minutos
    const totalDeMinutos = 135;
    const minutosRestantes = totalDeMinutos % 60;               // 15
    const horas = (totalDeMinutos - minutosRestantes) / 60;     // 2
    console.log(`${totalDeMinutos} minutos = ${horas}h ${minutosRestantes}min`);
}

function exemploIncrementoEDecremento() {
    let contador = 0;

    contador++; // o mesmo que: contador = contador + 1
    console.log("Após contador++:", contador);

    contador--; // o mesmo que: contador = contador - 1
    console.log("Após contador--:", contador);

    // Pós-fixado (valor++): usa o valor atual e DEPOIS incrementa
    // Pré-fixado (++valor): incrementa PRIMEIRO e depois usa o valor
    let valor = 5;
    console.log("valor++ retorna:", valor++, "| valor agora:", valor); // 5 | 6
    console.log("++valor retorna:", ++valor, "| valor agora:", valor); // 7 | 7
}

function exemploAtribuicaoComposta() {
    // Atribuição composta: faz a operação e guarda o resultado na própria variável
    let saldo = 100;
    console.log("Saldo inicial:", saldo);

    saldo += 50; // saldo = saldo + 50
    console.log("saldo += 50  ->", saldo);

    saldo -= 30; // saldo = saldo - 30
    console.log("saldo -= 30  ->", saldo);

    saldo *= 2; // saldo = saldo * 2
    console.log("saldo *= 2   ->", saldo);

    saldo /= 4; // saldo = saldo / 4
    console.log("saldo /= 4   ->", saldo);

    saldo %= 7; // saldo = saldo % 7
    console.log("saldo %= 7   ->", saldo);

    saldo **= 2; // saldo = saldo ** 2
    console.log("saldo **= 2  ->", saldo);

    // Com strings, += concatena
    let mensagem = "Olá";
    mensagem += ", turma!";
    console.log(mensagem);
}

function exemploPrecedencia() {
    // Ordem de avaliação: ( ) -> ** -> * / % -> + -
    // Operadores de mesma prioridade são avaliados da esquerda para a direita.
    console.log("2 + 3 * 4 =", 2 + 3 * 4);     // 14: multiplicação primeiro
    console.log("(2 + 3) * 4 =", (2 + 3) * 4); // 20: parênteses primeiro
    console.log("2 * 3 ** 2 =", 2 * 3 ** 2);   // 18: potência primeiro
    console.log("10 - 4 - 2 =", 10 - 4 - 2);   // 4: da esquerda para a direita

    // Erro comum: esquecer os parênteses no cálculo da média
    const primeiraNota = 7.5;
    const segundaNota = 8;
    const terceiraNota = 6.5;

    const mediaErrada = primeiraNota + segundaNota + terceiraNota / 3;
    const mediaCorreta = (primeiraNota + segundaNota + terceiraNota) / 3;
    console.log("Média sem parênteses:", mediaErrada);  // só a 3ª nota foi dividida
    console.log("Média com parênteses:", mediaCorreta);
}

function exemploOperadorMaisComStrings() {
    // O operador + tem dois papéis:
    //  - entre números, ele SOMA;
    //  - se um dos lados for string, ele CONCATENA (junta os textos).
    console.log("5 + 3 =", 5 + 3);         // 8
    console.log('"5" + 3 =', "5" + 3);     // "53"
    console.log('"5" + "3" =', "5" + "3"); // "53"

    // Os outros operadores aritméticos convertem strings em números
    console.log('"5" - 3 =', "5" - 3);     // 2
    console.log('"5" * "2" =', "5" * "2"); // 10
    console.log('"abc" * 2 =', "abc" * 2); // NaN

    // Como a avaliação é da esquerda para a direita, a ordem importa
    console.log('1 + 2 + "3" =', 1 + 2 + "3"); // "33": soma 1 + 2 e depois concatena
    console.log('"1" + 2 + 3 =', "1" + 2 + 3); // "123": concatena tudo

    // Erro comum: somar valores digitados (que são texto) sem converter
    const primeiraParcela = "100";
    const segundaParcela = "50";
    console.log("Sem converter:", primeiraParcela + segundaParcela);              // "10050"
    console.log("Convertendo:", Number(primeiraParcela) + Number(segundaParcela)); // 150
}

function exemploObjetoMath() {
    // Math reúne funções matemáticas prontas para uso
    console.log("Math.round(4.5):", Math.round(4.5)); // 5: arredonda para o mais próximo
    console.log("Math.floor(4.9):", Math.floor(4.9)); // 4: arredonda para baixo
    console.log("Math.ceil(4.1):", Math.ceil(4.1));   // 5: arredonda para cima
    console.log("Math.abs(-8):", Math.abs(-8));       // 8: valor absoluto
    console.log("Math.sqrt(81):", Math.sqrt(81));     // 9: raiz quadrada
    console.log("Math.max(3, 9, 1):", Math.max(3, 9, 1));
    console.log("Math.min(3, 9, 1):", Math.min(3, 9, 1));
    console.log("Math.PI:", Math.PI);

    // Math.random() gera um decimal aleatório de 0 até 1 (sem incluir o 1)
    const valorDoDado = Math.floor(Math.random() * 6) + 1; // inteiro de 1 a 6
    console.log("Lançamento do dado:", valorDoDado);

    // Cuidado com a precisão de decimais (acontece em quase todas as linguagens)
    console.log("0.1 + 0.2 =", 0.1 + 0.2);                // 0.30000000000000004
    console.log("Com toFixed(2):", (0.1 + 0.2).toFixed(2)); // "0.30" (retorna string)
}

function exemploCalculandoMediaEFrequencia() {
    // APLICAÇÃO PRÁTICA: calcular o desempenho de um aluno na disciplina.
    const nomeDoAluno = "Mariana Costa";
    const primeiraNota = 7.5;
    const segundaNota = 6;
    const terceiraNota = 9;
    const totalDeAulas = 64;
    const aulasAssistidas = 52;

    // Média aritmética: a soma dividida pela quantidade (atenção aos parênteses!)
    const mediaAritmetica = (primeiraNota + segundaNota + terceiraNota) / 3;

    // Média ponderada: a 3ª prova tem peso 2, as demais têm peso 1
    const mediaPonderada = (primeiraNota * 1 + segundaNota * 1 + terceiraNota * 2) / 4;

    // Frequência em porcentagem
    const frequencia = (aulasAssistidas / totalDeAulas) * 100;

    // Faltas: com frequência mínima de 75%, é possível faltar em até 25% das aulas
    const faltas = totalDeAulas - aulasAssistidas;
    const limiteDeFaltas = Math.floor(totalDeAulas * 0.25);

    console.log(`Aluno: ${nomeDoAluno}`);
    console.log(`Média aritmética: ${mediaAritmetica.toFixed(1)}`);
    console.log(`Média ponderada: ${mediaPonderada.toFixed(1)}`);
    console.log(`Frequência: ${frequencia.toFixed(1)}%`);
    console.log(`Faltas: ${faltas} (limite: ${limiteDeFaltas})`);
}


// ============================================================================
// 5. OPERADORES RELACIONAIS (DE COMPARAÇÃO)
// ----------------------------------------------------------------------------
// Usa: tópicos 1 a 4.
// ============================================================================

function exemploComparacoesNumericas() {
    const notaDoAluno = 6.5;
    const notaMinima = 7;
    console.log(`notaDoAluno = ${notaDoAluno} | notaMinima = ${notaMinima}`);

    console.log("notaDoAluno > notaMinima:", notaDoAluno > notaMinima);   // maior que
    console.log("notaDoAluno < notaMinima:", notaDoAluno < notaMinima);   // menor que
    console.log("notaDoAluno >= notaMinima:", notaDoAluno >= notaMinima); // maior ou igual
    console.log("notaDoAluno <= notaMinima:", notaDoAluno <= notaMinima); // menor ou igual

    // >= e <= também são verdadeiros quando os valores são iguais
    console.log("7 >= 7:", 7 >= 7);
    console.log("7 > 7:", 7 > 7);

    // O resultado de toda comparação é um boolean, que pode ser guardado
    const atingiuNotaMinima = notaDoAluno >= notaMinima;
    console.log("atingiuNotaMinima:", atingiuNotaMinima, "| tipo:", typeof atingiuNotaMinima);
}

function exemploIgualdadeEstritaESolta() {
    // ==  (igualdade solta): converte os tipos antes de comparar
    // === (igualdade estrita): compara o valor E o tipo, sem converter
    console.log('5 == "5":', 5 == "5");     // true
    console.log('5 === "5":', 5 === "5");   // false
    console.log("0 == false:", 0 == false); // true
    console.log("0 === false:", 0 === false); // false
    console.log('"" == 0:', "" == 0);       // true (!)
    console.log("null == undefined:", null == undefined);   // true
    console.log("null === undefined:", null === undefined); // false

    // Diferença: != (solta) e !== (estrita)
    console.log('5 != "5":', 5 != "5");   // false
    console.log('5 !== "5":', 5 !== "5"); // true

    // Caso especial: NaN não é igual a nada, nem a ele mesmo.
    // Para verificar NaN, use Number.isNaN (tópico 2).
    console.log("NaN === NaN:", NaN === NaN); // false

    // Boa prática: use sempre === e !== para evitar conversões inesperadas.
}

function exemploComparandoStrings() {
    // Strings são comparadas caractere por caractere, pela ordem da tabela Unicode
    console.log('"abacaxi" < "banana":', "abacaxi" < "banana"); // true
    console.log('"Zebra" < "abelha":', "Zebra" < "abelha");     // true: maiúsculas vêm antes
    console.log('"10" < "9":', "10" < "9");                     // true: compara como texto!
    console.log("10 < 9:", 10 < 9);                             // false: compara como número

    // A igualdade diferencia maiúsculas de minúsculas
    const linguagemDigitada = "JavaScript";
    const linguagemEsperada = "javascript";
    console.log("Comparação direta:", linguagemDigitada === linguagemEsperada);

    // Para ignorar essa diferença, padronize os textos antes (tópico 3)
    const saoIguais = linguagemDigitada.toLowerCase() === linguagemEsperada.toLowerCase();
    console.log("Com toLowerCase():", saoIguais);
}

function exemploVerificandoCriterios() {
    // APLICAÇÃO PRÁTICA: verificar, um a um, os critérios de aprovação.
    const NOTA_MINIMA = 7;
    const FREQUENCIA_MINIMA = 75;

    // Dados vindos de um formulário chegam como texto (tópico 2)
    const notaDigitada = "7";
    const frequenciaDigitada = "72.5";
    const codigoDigitado = "  alg101 ";
    const CODIGO_DA_DISCIPLINA = "ALG101";

    // === diferencia o texto "7" do número 7
    console.log("notaDigitada === 7:", notaDigitada === 7);

    // Por isso, convertemos antes de comparar
    const nota = Number(notaDigitada);
    const frequencia = Number(frequenciaDigitada);
    console.log("nota === 7:", nota === 7);

    const atingiuNotaMinima = nota >= NOTA_MINIMA;
    const atingiuFrequenciaMinima = frequencia >= FREQUENCIA_MINIMA;
    console.log(`Nota ${nota} atinge o mínimo de ${NOTA_MINIMA}?`, atingiuNotaMinima);
    console.log(`Frequência ${frequencia}% atinge o mínimo de ${FREQUENCIA_MINIMA}%?`, atingiuFrequenciaMinima);

    // Comparação de textos com padronização (tópico 3)
    const codigoConfere = codigoDigitado.trim().toUpperCase() === CODIGO_DA_DISCIPLINA;
    console.log("O código da disciplina confere?", codigoConfere);
}


// ============================================================================
// 6. OPERADORES LÓGICOS
// ----------------------------------------------------------------------------
// Usa: tópicos 1 a 5 (principalmente os operadores relacionais).
// ============================================================================

function exemploOperadoresLogicos() {
    // && (E): resulta em true somente se OS DOIS lados forem verdadeiros
    console.log("true && true:", true && true);
    console.log("true && false:", true && false);
    console.log("false && false:", false && false);

    // || (OU): resulta em true se PELO MENOS UM dos lados for verdadeiro
    console.log("true || false:", true || false);
    console.log("false || true:", false || true);
    console.log("false || false:", false || false);

    // ! (NÃO): inverte o valor lógico
    console.log("!true:", !true);
    console.log("!false:", !false);
}

function exemploCombinandoCondicoes() {
    const idade = 19;
    const temCarteiraDeEstudante = true;
    const possuiHabilitacao = false;
    const ehFeriado = false;

    // || : meia-entrada para menores de 18 OU estudantes
    const temDireitoAMeiaEntrada = idade < 18 || temCarteiraDeEstudante;
    console.log("Tem direito à meia-entrada?", temDireitoAMeiaEntrada);

    // && : para dirigir, é preciso ter 18 anos ou mais E habilitação
    const podeDirigir = idade >= 18 && possuiHabilitacao;
    console.log("Pode dirigir?", podeDirigir);

    // ! : a biblioteca abre quando NÃO é feriado
    const bibliotecaEstaAberta = !ehFeriado;
    console.log("A biblioteca está aberta?", bibliotecaEstaAberta);
}

function exemploPrecedenciaLogica() {
    // Ordem de avaliação: primeiro !, depois &&, por último ||
    console.log("true || false && false:", true || false && false);     // true (&& primeiro)
    console.log("(true || false) && false:", (true || false) && false); // false
    console.log("!false && false:", !false && false);                   // false

    // Verificar se um valor está DENTRO de um intervalo: use &&
    const nota = 6;
    const estaNaFaixaDeRecuperacao = nota >= 5 && nota < 7;
    console.log(`A nota ${nota} está entre 5 e 7?`, estaNaFaixaDeRecuperacao);

    // Verificar se um valor está FORA de um intervalo: use ||
    const notaDigitada = 11;
    const notaEhInvalida = notaDigitada < 0 || notaDigitada > 10;
    console.log(`A nota ${notaDigitada} é inválida?`, notaEhInvalida);

    // Boa prática: na dúvida, use parênteses para deixar a intenção explícita.
}

function exemploCurtoCircuito() {
    // Curto-circuito: a avaliação para assim que o resultado já é conhecido.
    //  - && para no primeiro valor falsy (se não houver, retorna o último);
    //  - || para no primeiro valor truthy (se não houver, retorna o último).
    // Por isso, eles retornam um dos VALORES, e não necessariamente true/false.
    console.log('"Ana" && "Bruno":', "Ana" && "Bruno"); // "Bruno"
    console.log('0 && "Bruno":', 0 && "Bruno");         // 0
    console.log('"Ana" || "Bruno":', "Ana" || "Bruno"); // "Ana"
    console.log('0 || "Bruno":', 0 || "Bruno");         // "Bruno"

    // Uso comum do ||: definir um valor padrão
    const nomeInformado = "";
    const nomeDeExibicao = nomeInformado || "Visitante";
    console.log("Nome de exibição:", nomeDeExibicao);

    // ?? (coalescência nula): usa o padrão SOMENTE se o valor for null ou undefined
    const quantidadeDeFaltas = 0;
    console.log("Faltas com ||:", quantidadeDeFaltas || "não informado"); // 0 é falsy
    console.log("Faltas com ??:", quantidadeDeFaltas ?? "não informado"); // 0 é mantido

    // Uso comum do &&: executar algo somente se a condição for verdadeira
    const usuarioEstaLogado = true;
    usuarioEstaLogado && console.log("Bem-vindo de volta!");
}

function exemploRegrasDeAprovacao() {
    // APLICAÇÃO PRÁTICA: combinar os critérios do tópico 5 em regras completas.
    const NOTA_MINIMA = 7;
    const NOTA_MINIMA_RECUPERACAO = 5;
    const FREQUENCIA_MINIMA = 75;

    const nomeCivil = "Mariana Costa";
    const nomeSocial = null; // não informado
    const media = 6.2;
    const frequencia = 80;

    const atingiuFrequencia = frequencia >= FREQUENCIA_MINIMA;

    const estaAprovado = media >= NOTA_MINIMA && atingiuFrequencia;
    const ficaDeRecuperacao =
        media >= NOTA_MINIMA_RECUPERACAO && media < NOTA_MINIMA && atingiuFrequencia;
    const estaReprovado = !estaAprovado && !ficaDeRecuperacao;

    // ?? : usa o nome social, se existir; caso contrário, o nome civil
    const nomeDeExibicao = nomeSocial ?? nomeCivil;

    console.log(`Aluno(a): ${nomeDeExibicao}`);
    console.log(`Média: ${media} | Frequência: ${frequencia}%`);
    console.log("Aprovado?", estaAprovado);
    console.log("Recuperação?", ficaDeRecuperacao);
    console.log("Reprovado?", estaReprovado);
}


// ============================================================================
// 7. ESTRUTURAS DE TOMADA DE DECISÃO
// ----------------------------------------------------------------------------
// Usa: tópicos 1 a 6 (as condições são expressões relacionais e lógicas).
// ============================================================================

function exemploIf() {
    const temperatura = 32;

    // if: executa o bloco SOMENTE se a condição for verdadeira
    if (temperatura > 30) {
        console.log("Está muito quente. Beba água!");
    }

    // Se a condição for falsa, o bloco é ignorado e o programa continua
    if (temperatura < 10) {
        console.log("Está frio. Leve um casaco!"); // não será exibido
    }

    console.log("Fim da verificação.");
}

function exemploIfElse() {
    const idade = 17;

    // if / else: escolhe entre DOIS caminhos
    if (idade >= 18) {
        console.log("É maior de idade.");
    } else {
        console.log("É menor de idade.");
    }

    // A condição pode ser qualquer valor, tratado como truthy/falsy (tópico 2)
    const emailInformado = "";
    if (emailInformado) {
        console.log("E-mail:", emailInformado);
    } else {
        console.log("E-mail não informado.");
    }
}

function exemploElseIf() {
    // Converte uma nota em conceito.
    // Altere o valor da nota e execute de novo para testar outros caminhos.
    const nota = 8.3;
    let conceito;

    // As condições são testadas de cima para baixo, e apenas o
    // PRIMEIRO bloco cuja condição for verdadeira é executado.
    if (nota >= 9) {
        conceito = "A";
    } else if (nota >= 7) {
        conceito = "B";
    } else if (nota >= 5) {
        conceito = "C";
    } else {
        conceito = "D";
    }

    console.log(`Nota ${nota}: conceito ${conceito}`);
}

function exemploIfAninhado() {
    const possuiCadastro = true;
    const senhaEstaCorreta = false;

    // Um if pode ficar dentro de outro (if aninhado)
    if (possuiCadastro) {
        if (senhaEstaCorreta) {
            console.log("Acesso liberado.");
        } else {
            console.log("Senha incorreta.");
        }
    } else {
        console.log("Usuário não cadastrado.");
    }

    // Muitos níveis de aninhamento dificultam a leitura.
    // Quando possível, combine as condições com operadores lógicos (tópico 6).
    if (possuiCadastro && senhaEstaCorreta) {
        console.log("Acesso liberado.");
    } else {
        console.log("Não foi possível entrar.");
    }
}

function exemploOperadorTernario() {
    // Sintaxe: condição ? valorSeVerdadeiro : valorSeFalso
    const media = 7.8;
    const resultado = media >= 7 ? "aprovado" : "reprovado";
    console.log(`Média ${media}: ${resultado}`);

    // O mesmo resultado com if/else ocupa mais linhas:
    let resultadoComIf;
    if (media >= 7) {
        resultadoComIf = "aprovado";
    } else {
        resultadoComIf = "reprovado";
    }
    console.log("Com if/else:", resultadoComIf);

    // O ternário é muito útil dentro de template strings (tópico 3)
    const quantidadeDeFaltas = 1;
    console.log(`Você tem ${quantidadeDeFaltas} ${quantidadeDeFaltas === 1 ? "falta" : "faltas"}.`);

    // Boa prática: use o ternário em escolhas simples e evite aninhá-los.
}

function exemploSwitch() {
    // switch compara um valor (usando ===) com cada "case"
    const opcaoEscolhida = 2;

    switch (opcaoEscolhida) {
        case 1:
            console.log("Abrindo: consultar notas");
            break; // break encerra o switch; sem ele, os cases seguintes também rodam
        case 2:
            console.log("Abrindo: emitir histórico");
            break;
        case 3:
            console.log("Abrindo: rematrícula");
            break;
        default: // executado quando nenhum case corresponde ao valor
            console.log("Opção inválida");
    }

    // Vários cases podem compartilhar o mesmo bloco
    const diaDaSemana = "sábado";

    switch (diaDaSemana) {
        case "sábado":
        case "domingo":
            console.log("A biblioteca está fechada.");
            break;
        default:
            console.log("A biblioteca abre das 8h às 22h.");
    }
}

function exemploBoletimDoAluno() {
    // APLICAÇÃO PRÁTICA: um boletim que reúne tudo o que foi visto até aqui.
    // Altere os dados abaixo e execute de novo para testar outros caminhos.
    const NOTA_MINIMA = 7;
    const NOTA_MINIMA_RECUPERACAO = 5;
    const FREQUENCIA_MINIMA = 75;

    const nomeDigitado = "  mariana costa ";
    const primeiraNota = 6.5;
    const segundaNota = 5;
    const terceiraNota = 7;
    const totalDeAulas = 64;
    const aulasAssistidas = 50;

    // Strings (tópico 3) e operadores aritméticos (tópico 4)
    const nome = nomeDigitado.trim().toUpperCase();
    const media = (primeiraNota + segundaNota + terceiraNota) / 3;
    const frequencia = (aulasAssistidas / totalDeAulas) * 100;

    // Decisão com operadores relacionais (tópicos 5 e 7)
    let situacao;
    if (frequencia < FREQUENCIA_MINIMA) {
        situacao = "REPROVADO POR FALTA";
    } else if (media >= NOTA_MINIMA) {
        situacao = "APROVADO";
    } else if (media >= NOTA_MINIMA_RECUPERACAO) {
        situacao = "RECUPERAÇÃO";
    } else {
        situacao = "REPROVADO POR NOTA";
    }

    // Ternário para uma mensagem complementar
    const pontosQueFaltam = NOTA_MINIMA - media;
    const observacao = media >= NOTA_MINIMA
        ? "Parabéns pelo desempenho!"
        : `Faltaram ${pontosQueFaltam.toFixed(1)} ponto(s) para a média.`;

    console.log("=".repeat(40));
    console.log(`Aluno(a): ${nome}`);
    console.log(`Média: ${media.toFixed(1)} | Frequência: ${frequencia.toFixed(1)}%`);
    console.log(`Situação: ${situacao}`);
    console.log(observacao);
    console.log("=".repeat(40));
}


// ============================================================================
// 8. LAÇOS DE REPETIÇÃO (LOOPS)
// ----------------------------------------------------------------------------
// Usa: tópicos 1 a 7 (todo laço depende de uma condição).
// ============================================================================

function exemploFor() {
    // for (inicialização; condição; atualização) { bloco }
    //  1. inicialização: executada uma única vez, no início
    //  2. condição: testada ANTES de cada repetição
    //  3. atualização: executada DEPOIS de cada repetição
    for (let contador = 1; contador <= 5; contador++) {
        console.log("Repetição número", contador);
    }

    // Tabuada: o mesmo bloco, repetido 10 vezes com valores diferentes
    const numero = 7;
    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
        console.log(`${numero} x ${multiplicador} = ${numero * multiplicador}`);
    }
}

function exemploAcumuladorEContador() {
    // Acumulador: variável que SOMA valores a cada repetição
    let soma = 0;
    for (let numero = 1; numero <= 100; numero++) {
        soma += numero;
    }
    console.log("Soma de 1 a 100:", soma);

    // Contador: variável que CONTA quantas vezes algo acontece
    let quantidadeDeMultiplosDe3 = 0;
    for (let numero = 1; numero <= 30; numero++) {
        if (numero % 3 === 0) {
            quantidadeDeMultiplosDe3++;
        }
    }
    console.log("Múltiplos de 3 entre 1 e 30:", quantidadeDeMultiplosDe3);

    // A mesma ideia funciona com textos (aqui, contando de 2 em 2, de trás para frente)
    let contagemRegressiva = "";
    for (let contador = 10; contador >= 0; contador -= 2) {
        contagemRegressiva += contador + " ";
    }
    console.log("Contagem regressiva:", contagemRegressiva);
}

function exemploWhile() {
    // while: repete ENQUANTO a condição for verdadeira.
    // Útil quando não sabemos quantas repetições serão necessárias.
    // Pergunta: em quantos anos um investimento dobra, rendendo 10% ao ano?
    const valorInicial = 1000;
    let saldo = valorInicial;
    let anos = 0;

    while (saldo < valorInicial * 2) {
        saldo *= 1.1; // rende 10%
        anos++;
        console.log(`Ano ${anos}: R$ ${saldo.toFixed(2)}`);
    }

    console.log(`O valor dobrou em ${anos} anos.`);

    // Cuidado: se a condição nunca se tornar falsa, o laço é infinito
    // e trava a página. Algo dentro do laço precisa alterar a condição.
}

function exemploDoWhile() {
    // do...while: executa o bloco PRIMEIRO e testa a condição DEPOIS.
    // Por isso, o bloco sempre roda pelo menos uma vez.
    // Lança um dado até sair 6 (execute várias vezes: o resultado muda).
    let valorDoDado;
    let quantidadeDeLancamentos = 0;

    do {
        valorDoDado = Math.floor(Math.random() * 6) + 1;
        quantidadeDeLancamentos++;
        console.log(`Lançamento ${quantidadeDeLancamentos}: ${valorDoDado}`);
    } while (valorDoDado !== 6);

    console.log(`Saiu 6 após ${quantidadeDeLancamentos} lançamento(s).`);

    // Mesmo com a condição falsa desde o início, o bloco executa uma vez
    const numero = 10;
    do {
        console.log("Executou uma vez, mesmo com a condição (numero < 5) falsa.");
    } while (numero < 5);
}

function exemploForOfComStrings() {
    // for...of percorre, um a um, os itens de uma sequência.
    // Em uma string, cada item é um caractere.
    const palavra = "JavaScript";
    let letrasSeparadas = "";
    for (const letra of palavra) {
        letrasSeparadas += letra + " ";
    }
    console.log(letrasSeparadas);

    // Contando as vogais de uma frase (com métodos de string do tópico 3)
    const frase = "Programar é resolver problemas";
    const VOGAIS = "aeiouáéíóúâêôãõ";
    let quantidadeDeVogais = 0;

    for (const caractere of frase.toLowerCase()) {
        if (VOGAIS.includes(caractere)) {
            quantidadeDeVogais++;
        }
    }
    console.log(`"${frase}" tem ${quantidadeDeVogais} vogais.`);
}

function exemploBreakEContinue() {
    // break: encerra o laço imediatamente
    // Procurando o primeiro múltiplo de 7 maior que 50
    for (let numero = 51; numero <= 100; numero++) {
        if (numero % 7 === 0) {
            console.log("Primeiro múltiplo de 7 após 50:", numero);
            break; // não é preciso continuar procurando
        }
    }

    // continue: pula o restante do bloco e passa para a próxima repetição
    let numerosImpares = "";
    for (let numero = 1; numero <= 10; numero++) {
        if (numero % 2 === 0) {
            continue; // pula os números pares
        }
        numerosImpares += numero + " ";
    }
    console.log("Ímpares de 1 a 10:", numerosImpares);
}

function exemploLacosAninhados() {
    // Um laço dentro de outro: para CADA repetição do laço externo,
    // o laço interno é executado por completo.
    for (let linha = 1; linha <= 4; linha++) {
        let desenho = "";
        for (let coluna = 1; coluna <= linha; coluna++) {
            desenho += "* ";
        }
        console.log(desenho);
    }
}

function exemploSimulandoProvas() {
    // APLICAÇÃO PRÁTICA: simular as notas de 4 provas e analisar o desempenho.
    // As notas são aleatórias: execute várias vezes para ver resultados diferentes.
    const QUANTIDADE_DE_PROVAS = 4;
    const NOTA_MINIMA = 7;

    let somaDasNotas = 0;         // acumulador
    let provasAbaixoDaMinima = 0; // contador
    let maiorNota = 0;
    let menorNota = 10;

    for (let prova = 1; prova <= QUANTIDADE_DE_PROVAS; prova++) {
        // Nota aleatória de 0 a 10, com uma casa decimal (tópico 4)
        const nota = Math.round(Math.random() * 100) / 10;
        console.log(`Prova ${prova}: ${nota.toFixed(1)}`);

        somaDasNotas += nota;

        if (nota < NOTA_MINIMA) {
            provasAbaixoDaMinima++;
        }
        if (nota > maiorNota) {
            maiorNota = nota;
        }
        if (nota < menorNota) {
            menorNota = nota;
        }
    }

    const media = somaDasNotas / QUANTIDADE_DE_PROVAS;

    console.log("-".repeat(30));
    console.log(`Média: ${media.toFixed(1)}`);
    console.log(`Maior nota: ${maiorNota.toFixed(1)} | Menor nota: ${menorNota.toFixed(1)}`);
    console.log(`Provas abaixo de ${NOTA_MINIMA}: ${provasAbaixoDaMinima}`);
    console.log(media >= NOTA_MINIMA ? "Situação: aprovado" : "Situação: reprovado");
}


// ============================================================================
// 9. FUNÇÕES E ARROW FUNCTIONS
// ----------------------------------------------------------------------------
// Usa: tópicos 1 a 8. Funções organizam e reaproveitam o que já sabemos fazer.
// ============================================================================

function exemploDeclaracaoDeFuncao() {
    // Declaração de função: function + nome + (parâmetros) + { corpo }
    // A função só é executada quando é CHAMADA.
    function exibirBoasVindas() {
        console.log("Bem-vindo(a) ao sistema acadêmico!");
    }

    exibirBoasVindas(); // chamada da função
    exibirBoasVindas(); // pode ser chamada quantas vezes for preciso

    // Parâmetros: "variáveis de entrada" da função
    // return: devolve um resultado para quem chamou a função
    function calcularMedia(primeiraNota, segundaNota) {
        const media = (primeiraNota + segundaNota) / 2;
        return media;
    }

    // Argumentos: os valores enviados na chamada
    const mediaDaAna = calcularMedia(8, 9);
    const mediaDoBruno = calcularMedia(5.5, 7);
    console.log("Média da Ana:", mediaDaAna);
    console.log("Média do Bruno:", mediaDoBruno);
}

function exemploReturn() {
    // return encerra a função imediatamente e devolve um valor
    function verificarAprovacao(media) {
        if (media >= 7) {
            return "aprovado";
        }
        return "reprovado"; // só chega aqui se o return de cima não foi executado
    }

    console.log("Média 8:", verificarAprovacao(8));
    console.log("Média 5:", verificarAprovacao(5));

    // O valor retornado pode ser usado diretamente em outras expressões
    console.log(`Resultado: ${verificarAprovacao(7.5).toUpperCase()}`);

    // Uma função sem return devolve undefined
    function exibirMensagem(texto) {
        console.log("Mensagem:", texto);
    }

    const retorno = exibirMensagem("Olá!");
    console.log("Retorno de uma função sem return:", retorno);
}

function exemploParametrosPadrao() {
    // Se um argumento não for enviado, o parâmetro fica com undefined
    function apresentar(nome, curso) {
        return `${nome} cursa ${curso}.`;
    }
    console.log(apresentar("Elisa", "Direito"));
    console.log(apresentar("Elisa")); // curso fica undefined

    // Parâmetro com valor padrão: usado quando o argumento não é enviado
    function cumprimentar(nome, saudacao = "Olá") {
        return `${saudacao}, ${nome}!`;
    }
    console.log(cumprimentar("Diego"));
    console.log(cumprimentar("Diego", "Bom dia"));

    // Outro exemplo: desconto padrão de 10%
    function calcularValorComDesconto(valor, percentualDeDesconto = 10) {
        return valor - (valor * percentualDeDesconto) / 100;
    }
    console.log("R$ 200 com desconto padrão:", calcularValorComDesconto(200));
    console.log("R$ 200 com 25% de desconto:", calcularValorComDesconto(200, 25));
}

function exemploExpressaoDeFuncao() {
    // Expressão de função: uma função sem nome (anônima) guardada em uma variável
    const calcularAreaDoRetangulo = function (largura, altura) {
        return largura * altura;
    };
    console.log("Área de 5 x 3:", calcularAreaDoRetangulo(5, 3));

    // Como a função é um valor, ela pode ser guardada em outra variável
    const calcularArea = calcularAreaDoRetangulo;
    console.log("Área de 2 x 4:", calcularArea(2, 4));

    // Diferença importante (hoisting):
    //  - DECLARAÇÕES podem ser chamadas antes da linha em que foram escritas;
    //  - EXPRESSÕES só podem ser usadas depois da linha em que foram criadas.
    console.log("Dobro de 21:", calcularDobro(21)); // funciona: é uma declaração

    function calcularDobro(numero) {
        return numero * 2;
    }
}

function exemploArrowFunctions() {
    // A mesma função escrita de três formas: converter Celsius em Fahrenheit
    function converterComDeclaracao(celsius) {
        return celsius * 1.8 + 32;
    }
    const converterComExpressao = function (celsius) {
        return celsius * 1.8 + 32;
    };
    const converterComArrow = (celsius) => celsius * 1.8 + 32;

    console.log("Declaração:", converterComDeclaracao(25));
    console.log("Expressão:", converterComExpressao(25));
    console.log("Arrow function:", converterComArrow(25));

    // Variações da sintaxe da arrow function:
    // a) Corpo com várias linhas: chaves e return são obrigatórios
    const calcularImc = (peso, altura) => {
        const imc = peso / altura ** 2;
        return imc.toFixed(1);
    };

    // b) Uma única expressão: retorno implícito (sem chaves e sem return)
    const calcularDobro = (numero) => numero * 2;

    // c) Um único parâmetro: os parênteses são opcionais
    const calcularTriplo = numero => numero * 3;

    // d) Sem parâmetros: os parênteses são obrigatórios
    const gerarSaudacao = () => "Olá, turma!";

    console.log("calcularImc(70, 1.75):", calcularImc(70, 1.75));
    console.log("calcularDobro(8):", calcularDobro(8));
    console.log("calcularTriplo(8):", calcularTriplo(8));
    console.log("gerarSaudacao():", gerarSaudacao());
}

function exemploCallbacks() {
    // Funções são valores: podem ser passadas como argumento para outras funções.
    // A função recebida como argumento é chamada de CALLBACK.
    function aplicarOperacao(primeiroNumero, segundoNumero, operacao) {
        return operacao(primeiroNumero, segundoNumero);
    }

    const somar = (primeiro, segundo) => primeiro + segundo;
    const subtrair = (primeiro, segundo) => primeiro - segundo;

    console.log("Soma:", aplicarOperacao(10, 5, somar));
    console.log("Subtração:", aplicarOperacao(10, 5, subtrair));

    // O callback também pode ser criado diretamente na chamada
    const produto = aplicarOperacao(10, 5, (primeiro, segundo) => primeiro * segundo);
    console.log("Multiplicação:", produto);

    // Um callback chamado várias vezes dentro de um laço (tópico 8)
    function repetir(quantidadeDeVezes, acao) {
        for (let vez = 1; vez <= quantidadeDeVezes; vez++) {
            acao(vez);
        }
    }
    repetir(3, (vez) => console.log(`Executando pela ${vez}ª vez`));

    // Esse padrão é a base dos métodos de arrays, como map e filter (tópico 11).
}

function exemploEscopoDeFuncao() {
    const nomeDaTurma = "Turma A"; // variável do escopo externo

    function exibirInformacoes() {
        const quantidadeDeAlunos = 25; // variável local: só existe dentro desta função
        console.log(`${nomeDaTurma} tem ${quantidadeDeAlunos} alunos.`); // acessa a externa
    }

    exibirInformacoes();

    // De fora, não é possível acessar as variáveis locais de uma função.
    // A linha abaixo gera um erro DE PROPÓSITO.
    console.log(quantidadeDeAlunos);
}

function exemploBoletimComFuncoes() {
    // APLICAÇÃO PRÁTICA: o boletim do tópico 7, agora organizado em funções.
    // Cada função tem UMA responsabilidade e pode ser reutilizada para vários alunos.
    const NOTA_MINIMA = 7;
    const NOTA_MINIMA_RECUPERACAO = 5;
    const FREQUENCIA_MINIMA = 75;
    const TOTAL_DE_AULAS = 64;

    const calcularMedia = (primeiraNota, segundaNota, terceiraNota) =>
        (primeiraNota + segundaNota + terceiraNota) / 3;

    const calcularFrequencia = (aulasAssistidas) => (aulasAssistidas / TOTAL_DE_AULAS) * 100;

    function obterSituacao(media, frequencia) {
        if (frequencia < FREQUENCIA_MINIMA) {
            return "reprovado por falta";
        }
        if (media >= NOTA_MINIMA) {
            return "aprovado";
        }
        if (media >= NOTA_MINIMA_RECUPERACAO) {
            return "recuperação";
        }
        return "reprovado por nota";
    }

    function formatarNome(nome) {
        const nomeEmMinusculas = nome.trim().toLowerCase();
        return nomeEmMinusculas[0].toUpperCase() + nomeEmMinusculas.slice(1);
    }

    // Uma função pode usar outras funções
    function exibirBoletim(nome, primeiraNota, segundaNota, terceiraNota, aulasAssistidas) {
        const media = calcularMedia(primeiraNota, segundaNota, terceiraNota);
        const frequencia = calcularFrequencia(aulasAssistidas);
        const situacao = obterSituacao(media, frequencia);
        const nomeFormatado = formatarNome(nome).padEnd(14);

        console.log(`${nomeFormatado} média ${media.toFixed(1)} | freq. ${frequencia.toFixed(0)}% | ${situacao}`);
    }

    // Reutilização: o mesmo código serve para quantos alunos forem necessários
    exibirBoletim("  mariana costa", 6.5, 5, 7, 50);
    exibirBoletim("BRUNO LIMA", 8, 9, 7.5, 60);
    exibirBoletim("carla souza ", 4, 5, 3.5, 58);
    exibirBoletim("diego alves", 9, 8.5, 10, 40);

    // Observe que exibirBoletim recebe 5 parâmetros soltos.
    // No próximo tópico, os objetos vão organizar melhor esses dados.
}


// ============================================================================
// 10. OBJETOS
// ----------------------------------------------------------------------------
// Usa: tópicos 1 a 9. Objetos agrupam dados (propriedades) e funções (métodos).
// ============================================================================

function exemploCriandoObjetos() {
    // Objeto: agrupa dados relacionados em pares chave: valor (as propriedades)
    const aluno = {
        nome: "Fernanda Lima",
        matricula: "2025001",
        idade: 21,
        estaAtivo: true,
    };
    console.log("Objeto completo:", aluno);

    // Notação de ponto: a forma mais comum de acessar uma propriedade
    console.log("Nome:", aluno.nome);

    // Notação de colchetes: a chave é escrita como string
    console.log("Matrícula:", aluno["matricula"]);

    // Com colchetes, a chave pode vir de uma variável
    const propriedadeDesejada = "idade";
    console.log("Propriedade dinâmica:", aluno[propriedadeDesejada]);

    // Acessar uma propriedade que não existe retorna undefined
    console.log("Telefone:", aluno.telefone);
}

function exemploModificandoObjetos() {
    // Lembre-se do tópico 1: const impede REATRIBUIR a variável,
    // mas o CONTEÚDO do objeto pode ser alterado normalmente.
    const livro = {
        titulo: "Lógica de Programação",
        autor: "Ana Souza",
        ano: 2019,
    };
    console.log("Original:", livro);

    livro.ano = 2023;                  // altera uma propriedade existente
    livro.editora = "Editora Exemplo"; // adiciona uma nova propriedade
    delete livro.autor;                // remove uma propriedade
    console.log("Modificado:", livro);

    // O operador in verifica se uma propriedade existe
    console.log('"titulo" in livro:', "titulo" in livro);
    console.log('"autor" in livro:', "autor" in livro);
}

function exemploPropriedadesAbreviadas() {
    // Quando a variável tem o mesmo nome da chave, basta escrever o nome uma vez
    const nome = "Gustavo";
    const curso = "Medicina";
    const aluno = { nome, curso }; // o mesmo que { nome: nome, curso: curso }
    console.log("Aluno:", aluno);

    // Funções que criam e retornam objetos (conhecidas como "fábricas")
    function criarDisciplina(codigo, nomeDaDisciplina, cargaHoraria) {
        return { codigo, nome: nomeDaDisciplina, cargaHoraria };
    }
    console.log("Disciplina:", criarDisciplina("ALG101", "Algoritmos", 60));

    // Em uma arrow function, o objeto retornado precisa estar entre parênteses
    const criarProfessor = (nomeDoProfessor, departamento) => ({
        nome: nomeDoProfessor,
        departamento,
    });
    console.log("Professor:", criarProfessor("Helena", "Computação"));
}

function exemploMetodosEThis() {
    // Método: uma função guardada como propriedade de um objeto.
    // this: dentro de um método, representa o próprio objeto.
    const contaBancaria = {
        titular: "Gabriel",
        saldo: 500,

        depositar(valor) {
            this.saldo += valor;
            console.log(`Depósito de R$ ${valor}. Saldo: R$ ${this.saldo}`);
        },

        sacar(valor) {
            if (valor > this.saldo) {
                console.log(`Saque de R$ ${valor} negado: saldo insuficiente.`);
                return;
            }
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor}. Saldo: R$ ${this.saldo}`);
        },
    };

    console.log(`Conta de ${contaBancaria.titular}. Saldo inicial: R$ ${contaBancaria.saldo}`);
    contaBancaria.depositar(200);
    contaBancaria.sacar(1000);
    contaBancaria.sacar(300);

    // Atenção: arrow functions não têm this próprio. Evite usá-las como métodos.
}

function exemploPercorrendoObjetos() {
    // for...in percorre as CHAVES de um objeto (laços: tópico 8)
    const notasPorDisciplina = {
        calculo: 8.5,
        algoritmos: 9,
        fisica: 6.5,
    };

    let somaDasNotas = 0;
    let quantidadeDeDisciplinas = 0;

    for (const disciplina in notasPorDisciplina) {
        const nota = notasPorDisciplina[disciplina]; // colchetes: a chave está em uma variável
        console.log(`${disciplina}: ${nota}`);
        somaDasNotas += nota;
        quantidadeDeDisciplinas++;
    }

    console.log("Média geral:", (somaDasNotas / quantidadeDeDisciplinas).toFixed(2));
}

function exemploObjetosAninhados() {
    // Uma propriedade pode guardar outro objeto
    const estudante = {
        nome: "Igor",
        endereco: {
            cidade: "Recife",
            estado: "PE",
        },
    };
    console.log("Cidade:", estudante.endereco.cidade);
    console.log("Estado:", estudante.endereco["estado"]);

    // Encadeamento opcional (?.): se algo no caminho não existir,
    // o resultado é undefined, em vez de um erro
    console.log("Empresa do estágio:", estudante.estagio?.empresa);

    // Combinado com ?? (tópico 6), permite definir um texto padrão
    console.log("Empresa do estágio:", estudante.estagio?.empresa ?? "sem estágio");

    // Sem o ?., acessar algo dentro de uma propriedade inexistente gera erro.
    // A linha abaixo gera um erro DE PROPÓSITO.
    console.log(estudante.estagio.empresa);
}

function exemploDesestruturacaoESpread() {
    const professor = {
        nome: "Helena",
        departamento: "Computação",
        sala: "B-204",
    };

    // Desestruturação: cria variáveis a partir das propriedades de um objeto
    const { nome, departamento } = professor;
    console.log("nome:", nome, "| departamento:", departamento);

    // É possível renomear a variável e definir um valor padrão
    const { sala: numeroDaSala, email = "não informado" } = professor;
    console.log("numeroDaSala:", numeroDaSala, "| email:", email);

    // A desestruturação também pode ser feita nos parâmetros de uma função
    function exibirDisciplina({ codigo, cargaHoraria }) {
        console.log(`Disciplina ${codigo}: ${cargaHoraria} horas`);
    }
    exibirDisciplina({ codigo: "ALG101", nome: "Algoritmos", cargaHoraria: 60 });

    // Spread (...): copia as propriedades para um NOVO objeto,
    // podendo sobrescrever ou acrescentar propriedades
    const professorAtualizado = { ...professor, sala: "C-101", email: "helena@uf.edu.br" };
    console.log("Original:", professor);
    console.log("Atualizado:", professorAtualizado);
}

function exemploReferenciaDeObjetos() {
    // Diferente dos primitivos (tópico 2), objetos são copiados POR REFERÊNCIA:
    // as duas variáveis apontam para o MESMO objeto na memória.
    const turmaOriginal = { nome: "Turma A", vagas: 40 };
    const outraVariavel = turmaOriginal;

    outraVariavel.vagas = 35;
    console.log("turmaOriginal.vagas:", turmaOriginal.vagas); // 35: mudou também!

    // Para criar uma cópia independente, use o spread
    const copiaIndependente = { ...turmaOriginal };
    copiaIndependente.vagas = 50;
    console.log("turmaOriginal.vagas:", turmaOriginal.vagas);         // 35
    console.log("copiaIndependente.vagas:", copiaIndependente.vagas); // 50

    // Comparar objetos compara a REFERÊNCIA, e não o conteúdo
    console.log("turmaOriginal === outraVariavel:", turmaOriginal === outraVariavel);
    console.log("turmaOriginal === copiaIndependente:", turmaOriginal === copiaIndependente);
}

function exemploAlunoComoObjeto() {
    // APLICAÇÃO PRÁTICA: o boletim do tópico 9, agora com objetos.
    // Os dados do aluno e as funções que trabalham com eles ficam juntos.
    const NOTA_MINIMA = 7;
    const NOTA_MINIMA_RECUPERACAO = 5;
    const FREQUENCIA_MINIMA = 75;
    const TOTAL_DE_AULAS = 64;

    // Função fábrica: cria um objeto aluno com propriedades e métodos
    function criarAluno(nome, notas, aulasAssistidas) {
        return {
            nome,
            notas,
            aulasAssistidas,

            calcularMedia() {
                return (this.notas.primeira + this.notas.segunda + this.notas.terceira) / 3;
            },

            calcularFrequencia() {
                return (this.aulasAssistidas / TOTAL_DE_AULAS) * 100;
            },

            obterSituacao() {
                const media = this.calcularMedia();
                if (this.calcularFrequencia() < FREQUENCIA_MINIMA) {
                    return "reprovado por falta";
                }
                if (media >= NOTA_MINIMA) {
                    return "aprovado";
                }
                if (media >= NOTA_MINIMA_RECUPERACAO) {
                    return "recuperação";
                }
                return "reprovado por nota";
            },

            gerarResumo() {
                return `${this.nome}: média ${this.calcularMedia().toFixed(1)} | ${this.obterSituacao()}`;
            },
        };
    }

    const mariana = criarAluno("Mariana Costa", { primeira: 6.5, segunda: 5, terceira: 7 }, 50);
    const bruno = criarAluno("Bruno Lima", { primeira: 8, segunda: 9, terceira: 7.5 }, 60);

    console.log(mariana.gerarResumo());
    console.log(bruno.gerarResumo());

    // Ao alterar os dados, os métodos passam a refletir a mudança
    mariana.notas.segunda = 8; // revisão da 2ª prova
    console.log("Após a revisão da 2ª prova:");
    console.log(mariana.gerarResumo());

    // Desestruturação para ler apenas os dados necessários
    const { nome, aulasAssistidas } = bruno;
    console.log(`${nome} assistiu a ${aulasAssistidas} de ${TOTAL_DE_AULAS} aulas.`);

    // As notas ainda são fixas (primeira, segunda e terceira).
    // No próximo tópico, um array permitirá qualquer quantidade de provas.
}


// ============================================================================
// 11. ARRAYS
// ----------------------------------------------------------------------------
// Usa: todos os tópicos anteriores. É o tópico que junta tudo.
// ============================================================================

function exemploCriandoArrays() {
    // Array: lista ORDENADA de valores. Cada item tem um índice, começando em 0.
    const disciplinas = ["Cálculo", "Algoritmos", "Física"];
    console.log("Array:", disciplinas);
    console.log("Quantidade de itens:", disciplinas.length);
    console.log("Primeiro item:", disciplinas[0]);
    console.log("Último item:", disciplinas[disciplinas.length - 1]);
    console.log("Último com at(-1):", disciplinas.at(-1));
    console.log("Índice inexistente:", disciplinas[10]); // undefined

    // Alterando um item pelo índice
    disciplinas[1] = "Programação";
    console.log("Após alterar o índice 1:", disciplinas);

    // Um array aceita qualquer tipo de valor, inclusive objetos e outros arrays
    const valoresVariados = [42, "texto", true, null, { sigla: "UF" }, [1, 2]];
    console.log("Valores variados:", valoresVariados);

    // typeof não identifica arrays; para isso, use Array.isArray
    console.log("typeof disciplinas:", typeof disciplinas); // "object"
    console.log("Array.isArray(disciplinas):", Array.isArray(disciplinas));
}

function exemploAdicionandoERemovendo() {
    const filaDeAtendimento = ["Ana", "Bruno"];
    console.log("Fila inicial:", filaDeAtendimento);

    filaDeAtendimento.push("Carla"); // adiciona no FINAL
    console.log('push("Carla"):', filaDeAtendimento);

    filaDeAtendimento.unshift("Diego"); // adiciona no INÍCIO
    console.log('unshift("Diego"):', filaDeAtendimento);

    const removidoDoFinal = filaDeAtendimento.pop(); // remove do FINAL
    console.log("pop() removeu", removidoDoFinal, "->", filaDeAtendimento);

    const removidoDoInicio = filaDeAtendimento.shift(); // remove do INÍCIO
    console.log("shift() removeu", removidoDoInicio, "->", filaDeAtendimento);

    // splice(posição, quantidadeParaRemover, ...itensParaInserir)
    const disciplinas = ["Cálculo", "Física", "Química", "Algoritmos"];
    const removidas = disciplinas.splice(1, 2); // remove 2 itens a partir do índice 1
    console.log("splice(1, 2) removeu", removidas, "->", disciplinas);

    disciplinas.splice(1, 0, "Estatística"); // insere no índice 1, sem remover nada
    console.log('splice(1, 0, "Estatística"):', disciplinas);
}

function exemploPercorrendoArrays() {
    const notas = [7.5, 8, 6.5, 9];

    // 1) for clássico (tópico 8): útil quando precisamos do índice
    for (let indice = 0; indice < notas.length; indice++) {
        console.log(`Índice ${indice}: ${notas[indice]}`);
    }

    // 2) for...of (tópico 8): a forma mais simples quando só precisamos dos valores
    let somaDasNotas = 0;
    for (const nota of notas) {
        somaDasNotas += nota;
    }
    console.log("Média:", somaDasNotas / notas.length);

    // 3) forEach: recebe um callback (tópico 9), executado para cada item.
    //    O callback recebe o item e, opcionalmente, o índice.
    notas.forEach((nota, indice) => {
        console.log(`Prova ${indice + 1}: ${nota}`);
    });
}

function exemploBuscandoEmArrays() {
    const notas = [7, 4.5, 9, 6, 10];
    console.log("Notas:", notas);

    // Busca por valor
    console.log("includes(9):", notas.includes(9)); // true
    console.log("indexOf(6):", notas.indexOf(6));   // 3 (posição)
    console.log("indexOf(3):", notas.indexOf(3));   // -1 (não encontrado)

    // Busca por condição: recebem um callback que testa cada item
    console.log("find(nota >= 9):", notas.find((nota) => nota >= 9));          // 1º item que passa
    console.log("findIndex(nota < 5):", notas.findIndex((nota) => nota < 5)); // posição dele
    console.log("some(nota < 5):", notas.some((nota) => nota < 5));           // algum passa?
    console.log("every(nota >= 0):", notas.every((nota) => nota >= 0));       // todos passam?

    // find é muito usado para localizar um objeto em uma lista
    const alunos = [
        { matricula: 101, nome: "Ana" },
        { matricula: 102, nome: "Bruno" },
    ];
    console.log("Matrícula 102:", alunos.find((aluno) => aluno.matricula === 102));
    console.log("Matrícula 999:", alunos.find((aluno) => aluno.matricula === 999));
}

function exemploMapEFilter() {
    const notas = [7, 4.5, 9, 6, 10];

    // map: cria um NOVO array com o resultado do callback para cada item
    const notasComBonus = notas.map((nota) => Math.min(nota + 0.5, 10)); // no máximo 10
    console.log("Notas com bônus:", notasComBonus);

    const situacoes = notas.map((nota) => (nota >= 7 ? "aprovado" : "reprovado"));
    console.log("Situações:", situacoes);

    // filter: cria um NOVO array apenas com os itens que passam no teste
    const notasAcimaDaMedia = notas.filter((nota) => nota >= 7);
    console.log("Notas maiores ou iguais a 7:", notasAcimaDaMedia);

    // Os métodos podem ser encadeados: o resultado de um é usado pelo próximo
    const notasBaixasComBonus = notas
        .filter((nota) => nota < 7)
        .map((nota) => nota + 0.5);
    console.log("Notas abaixo de 7, com bônus:", notasBaixasComBonus);

    // O array original não é alterado por map nem por filter
    console.log("Original:", notas);
}

function exemploReduce() {
    const notas = [7.5, 8, 6.5, 9];

    // reduce(callback, valorInicial): percorre o array acumulando UM resultado.
    // O callback recebe o acumulador e o item atual e retorna o novo acumulador.
    const somaDasNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    // Passo a passo: 0 + 7.5 = 7.5 -> 7.5 + 8 = 15.5 -> 15.5 + 6.5 = 22 -> 22 + 9 = 31
    console.log("Soma:", somaDasNotas);
    console.log("Média:", somaDasNotas / notas.length);

    // Encontrando o maior valor
    const maiorNota = notas.reduce((maior, nota) => (nota > maior ? nota : maior), notas[0]);
    console.log("Maior nota:", maiorNota);

    // Contando os itens que atendem a uma condição
    const quantidadeAcimaDe7 = notas.reduce(
        (contador, nota) => (nota > 7 ? contador + 1 : contador),
        0
    );
    console.log("Notas acima de 7:", quantidadeAcimaDe7);
}

function exemploOrdenandoArrays() {
    // Atenção: sort() e reverse() ALTERAM o array original.
    // Por isso, criamos uma cópia com [...array] antes de ordenar.
    const numeros = [10, 1, 25, 3];

    // sort() sem argumento ordena como TEXTO: "10" vem antes de "3"
    console.log("sort() sem callback:", [...numeros].sort());

    // Para ordenar números, passe uma função de comparação
    console.log("Crescente:", [...numeros].sort((primeiro, segundo) => primeiro - segundo));
    console.log("Decrescente:", [...numeros].sort((primeiro, segundo) => segundo - primeiro));

    // Para textos em português, use localeCompare (trata acentos e maiúsculas)
    const nomes = ["Mariana", "Álvaro", "bruna", "Carlos"];
    console.log("sort() simples:", [...nomes].sort());
    console.log(
        "Com localeCompare:",
        [...nomes].sort((primeiro, segundo) => primeiro.localeCompare(segundo, "pt-BR"))
    );

    // reverse() inverte a ordem
    console.log("reverse():", [...numeros].reverse());
    console.log("Original intacto:", numeros);
}

function exemploArraysEStrings() {
    // split: transforma uma string em array; join: transforma um array em string
    const listaDeNomes = "Ana;Bruno;Carla";
    const nomes = listaDeNomes.split(";");
    console.log("split(';'):", nomes);
    console.log("join(', '):", nomes.join(", "));

    // 1ª letra maiúscula em CADA palavra (o que não foi possível no tópico 3)
    const nomeDigitado = "ana paula costa";
    const nomeFormatado = nomeDigitado
        .split(" ")
        .map((palavra) => palavra[0].toUpperCase() + palavra.slice(1))
        .join(" ");
    console.log("Nome formatado:", nomeFormatado);

    // Iniciais do nome
    const iniciais = nomeDigitado
        .split(" ")
        .map((palavra) => palavra[0].toUpperCase())
        .join("");
    console.log("Iniciais:", iniciais);

    // Inverter uma palavra
    const palavra = "roma";
    console.log(`"${palavra}" invertida:`, palavra.split("").reverse().join(""));
}

function exemploSpreadRestEDesestruturacao() {
    // Rest (...) nos parâmetros: reúne os argumentos recebidos em um array
    function calcularMedia(...notas) {
        const somaDasNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
        return somaDasNotas / notas.length;
    }
    console.log("calcularMedia(7, 8):", calcularMedia(7, 8));
    console.log("calcularMedia(6, 7, 8, 10):", calcularMedia(6, 7, 8, 10));

    // Spread (...) faz o contrário: "espalha" os itens de um array
    const notas = [7, 4.5, 9, 6, 10];
    console.log("Math.max(...notas):", Math.max(...notas));

    // Spread para juntar arrays
    const turmaA = ["Ana", "Bruno"];
    const turmaB = ["Carla", "Diego"];
    const todosOsAlunos = [...turmaA, ...turmaB];
    console.log("Todos os alunos:", todosOsAlunos);

    // Desestruturação: cria variáveis a partir das POSIÇÕES do array
    const [primeiroLugar, segundoLugar, ...demaisColocados] = todosOsAlunos;
    console.log("1º:", primeiroLugar, "| 2º:", segundoLugar, "| demais:", demaisColocados);

    // Arrays, assim como objetos, são copiados por referência (tópico 10)
    const mesmaTurma = turmaA;       // mesma referência
    const copiaDaTurma = [...turmaA]; // cópia independente
    mesmaTurma.push("Elisa");
    console.log("turmaA:", turmaA);             // mudou junto com mesmaTurma
    console.log("copiaDaTurma:", copiaDaTurma); // não mudou
}

function exemploArraysEObjetos() {
    // Array de objetos: a forma mais comum de representar uma lista de registros
    const alunos = [
        { nome: "Ana", curso: "Direito", periodo: 3 },
        { nome: "Bruno", curso: "Medicina", periodo: 1 },
        { nome: "Carla", curso: "Direito", periodo: 5 },
    ];
    console.log("Nome do segundo aluno:", alunos[1].nome);

    for (const aluno of alunos) {
        console.log(`${aluno.nome} - ${aluno.curso} (${aluno.periodo}º período)`);
    }

    const alunosDeDireito = alunos.filter((aluno) => aluno.curso === "Direito");
    console.log("Alunos de Direito:", alunosDeDireito.map((aluno) => aluno.nome));

    // Um objeto também pode ter um array como propriedade
    const disciplina = { nome: "Algoritmos", notas: [8, 6.5, 9] };
    console.log("Última nota de Algoritmos:", disciplina.notas.at(-1));

    // Object.keys, Object.values e Object.entries transformam um objeto em arrays
    const notasPorDisciplina = { calculo: 8.5, algoritmos: 9, fisica: 6.5 };
    console.log("Chaves:", Object.keys(notasPorDisciplina));
    console.log("Valores:", Object.values(notasPorDisciplina));
    console.log("Pares [chave, valor]:", Object.entries(notasPorDisciplina));

    // Object.entries + for...of + desestruturação
    for (const [nomeDaDisciplina, nota] of Object.entries(notasPorDisciplina)) {
        console.log(`${nomeDaDisciplina}: ${nota}`);
    }
}

function exemploRelatorioDaTurma() {
    // APLICAÇÃO PRÁTICA FINAL: relatório de uma turma, combinando todos os tópicos.
    const NOTA_MINIMA = 7;
    const NOTA_MINIMA_RECUPERACAO = 5;
    const FREQUENCIA_MINIMA = 75;
    const TOTAL_DE_AULAS = 64;

    // Array de objetos; agora as notas são um array (qualquer quantidade de provas)
    const turma = [
        { nome: "mariana costa", notas: [6.5, 5, 7], aulasAssistidas: 50 },
        { nome: "BRUNO LIMA", notas: [8, 9, 7.5], aulasAssistidas: 60 },
        { nome: "carla souza", notas: [4, 5, 3.5], aulasAssistidas: 58 },
        { nome: "diego alves", notas: [9, 8.5, 10], aulasAssistidas: 40 },
        { nome: "elisa martins", notas: [7, 8, 9.5, 8], aulasAssistidas: 62 },
    ];

    // Funções auxiliares (tópicos 3, 4, 7 e 9)
    const formatarNome = (nome) =>
        nome
            .toLowerCase()
            .split(" ")
            .map((palavra) => palavra[0].toUpperCase() + palavra.slice(1))
            .join(" ");

    const calcularMedia = (notas) =>
        notas.reduce((soma, nota) => soma + nota, 0) / notas.length;

    function obterSituacao(media, frequencia) {
        if (frequencia < FREQUENCIA_MINIMA) {
            return "reprovado por falta";
        }
        if (media >= NOTA_MINIMA) {
            return "aprovado";
        }
        if (media >= NOTA_MINIMA_RECUPERACAO) {
            return "recuperação";
        }
        return "reprovado por nota";
    }

    // 1) Processar cada aluno: map cria um novo array de objetos (tópico 10)
    const resultados = turma.map((aluno) => {
        const media = calcularMedia(aluno.notas);
        const frequencia = (aluno.aulasAssistidas / TOTAL_DE_AULAS) * 100;
        return {
            nome: formatarNome(aluno.nome),
            media,
            frequencia,
            situacao: obterSituacao(media, frequencia),
        };
    });

    // 2) Ranking: ordenar pela média, da maior para a menor
    const ranking = [...resultados].sort((primeiro, segundo) => segundo.media - primeiro.media);

    console.log("RELATÓRIO DA TURMA");
    console.log("=".repeat(56));
    ranking.forEach((aluno, indice) => {
        const posicao = `${indice + 1}º`.padEnd(4);
        const nome = aluno.nome.padEnd(16);
        const media = aluno.media.toFixed(1).padStart(4);
        const frequencia = `${aluno.frequencia.toFixed(0)}%`.padStart(5);
        console.log(`${posicao}${nome}${media}  ${frequencia}  ${aluno.situacao}`);
    });
    console.log("=".repeat(56));

    // 3) Estatísticas com filter, reduce e some
    const aprovados = resultados.filter((aluno) => aluno.situacao === "aprovado");
    const somaDasMedias = resultados.reduce((soma, aluno) => soma + aluno.media, 0);
    const mediaGeral = somaDasMedias / resultados.length;
    const taxaDeAprovacao = (aprovados.length / resultados.length) * 100;
    const houveReprovacaoPorFalta = resultados.some(
        (aluno) => aluno.situacao === "reprovado por falta"
    );

    console.log(`Média geral da turma: ${mediaGeral.toFixed(2)}`);
    console.log(`Aprovados: ${aprovados.map((aluno) => aluno.nome).join(", ")}`);
    console.log(`Taxa de aprovação: ${taxaDeAprovacao.toFixed(0)}%`);
    console.log(`Maior média: ${ranking[0].nome}`);
    console.log("Houve reprovação por falta?", houveReprovacaoPorFalta);
}


// ============================================================================
// REGISTRO DOS EXEMPLOS
// ----------------------------------------------------------------------------
// Esta lista organiza os exemplos por tópico e é usada pelo pagina.js para
// montar a página. Para criar um novo exemplo: escreva a função na seção
// correta (acima) e adicione-a à lista "exemplos" do tópico correspondente.
// ============================================================================

const topicos = [
    {
        id: "variaveis",
        titulo: "Declaração de variáveis",
        resumo: "Variáveis guardam valores para serem usados depois. Use const por padrão, let quando o valor precisar mudar e evite var em códigos novos.",
        exemplos: [
            { titulo: "let: valores que podem mudar", funcao: exemploDeclaracaoComLet },
            { titulo: "const: valores que não são reatribuídos", funcao: exemploDeclaracaoComConst },
            { titulo: "var: hoisting e redeclaração", funcao: exemploDeclaracaoComVar },
            { titulo: "Escopo de bloco: var x let", funcao: exemploEscopoDeBloco },
            { titulo: "Ficha do aluno", funcao: exemploFichaDoAluno, ehAplicacaoPratica: true },
        ],
    },
    {
        id: "primitivos",
        titulo: "Tipos primitivos",
        resumo: "Os 7 tipos primitivos (string, number, bigint, boolean, undefined, null e symbol) representam valores simples. Saber o tipo de um dado evita muitos erros.",
        exemplos: [
            { titulo: "Os 7 tipos e o operador typeof", funcao: exemploTiposPrimitivos },
            { titulo: "null e undefined", funcao: exemploNullEUndefined },
            { titulo: "O tipo number", funcao: exemploTipoNumber },
            { titulo: "Conversão de tipos", funcao: exemploConversaoDeTipos },
            { titulo: "Valores truthy e falsy", funcao: exemploTruthyEFalsy },
            { titulo: "Cópia por valor", funcao: exemploCopiaPorValor },
            { titulo: "Dados vindos de um formulário", funcao: exemploDadosDoFormulario, ehAplicacaoPratica: true },
        ],
    },
    {
        id: "strings",
        titulo: "Manipulação de strings",
        resumo: "Strings representam textos. Elas são imutáveis: seus métodos sempre retornam uma nova string, sem alterar a original.",
        exemplos: [
            { titulo: "Criando strings e caracteres especiais", funcao: exemploCriandoStrings },
            { titulo: "Concatenação e interpolação", funcao: exemploConcatenacaoEInterpolacao },
            { titulo: "Tamanho e acesso a caracteres", funcao: exemploAcessandoCaracteres },
            { titulo: "Métodos de transformação", funcao: exemploTransformandoStrings },
            { titulo: "Métodos de busca e extração", funcao: exemploBuscandoEExtraindo },
            { titulo: "Padronizando um cadastro", funcao: exemploPadronizandoCadastro, ehAplicacaoPratica: true },
        ],
    },
    {
        id: "aritmeticos",
        titulo: "Operadores aritméticos",
        resumo: "Realizam cálculos matemáticos. Atenção à ordem de precedência e ao operador +, que concatena quando há uma string envolvida.",
        exemplos: [
            { titulo: "Operadores básicos", funcao: exemploOperadoresBasicos },
            { titulo: "Divisão e resto (%)", funcao: exemploDivisaoEResto },
            { titulo: "Incremento e decremento", funcao: exemploIncrementoEDecremento },
            { titulo: "Atribuição composta", funcao: exemploAtribuicaoComposta },
            { titulo: "Precedência de operadores", funcao: exemploPrecedencia },
            { titulo: "O operador + com strings", funcao: exemploOperadorMaisComStrings },
            { titulo: "Objeto Math", funcao: exemploObjetoMath },
            { titulo: "Calculando média e frequência", funcao: exemploCalculandoMediaEFrequencia, ehAplicacaoPratica: true },
        ],
    },
    {
        id: "relacionais",
        titulo: "Operadores relacionais",
        resumo: "Comparam dois valores e sempre resultam em um boolean (true ou false). Prefira === e !== às versões == e !=.",
        exemplos: [
            { titulo: "Maior, menor e suas variações", funcao: exemploComparacoesNumericas },
            { titulo: "Igualdade estrita (===) x solta (==)", funcao: exemploIgualdadeEstritaESolta },
            { titulo: "Comparando strings", funcao: exemploComparandoStrings },
            { titulo: "Verificando critérios de aprovação", funcao: exemploVerificandoCriterios, ehAplicacaoPratica: true },
        ],
    },
    {
        id: "logicos",
        titulo: "Operadores lógicos",
        resumo: "Combinam ou invertem condições: && (E), || (OU) e ! (NÃO). Também são usados para definir valores padrão.",
        exemplos: [
            { titulo: "&&, || e ! (tabela-verdade)", funcao: exemploOperadoresLogicos },
            { titulo: "Combinando condições", funcao: exemploCombinandoCondicoes },
            { titulo: "Precedência e intervalos", funcao: exemploPrecedenciaLogica },
            { titulo: "Curto-circuito e coalescência nula (??)", funcao: exemploCurtoCircuito },
            { titulo: "Regras de aprovação", funcao: exemploRegrasDeAprovacao, ehAplicacaoPratica: true },
        ],
    },
    {
        id: "decisao",
        titulo: "Estruturas de tomada de decisão",
        resumo: "Permitem que o programa siga caminhos diferentes de acordo com condições: if, else, else if, operador ternário e switch.",
        exemplos: [
            { titulo: "if", funcao: exemploIf },
            { titulo: "if / else", funcao: exemploIfElse },
            { titulo: "else if: várias condições em sequência", funcao: exemploElseIf },
            { titulo: "if aninhado", funcao: exemploIfAninhado },
            { titulo: "Operador ternário", funcao: exemploOperadorTernario },
            { titulo: "switch", funcao: exemploSwitch },
            { titulo: "Boletim do aluno", funcao: exemploBoletimDoAluno, ehAplicacaoPratica: true },
        ],
    },
    {
        id: "loops",
        titulo: "Laços de repetição (loops)",
        resumo: "Repetem um bloco de código enquanto uma condição for verdadeira ou para cada item de uma sequência.",
        exemplos: [
            { titulo: "for", funcao: exemploFor },
            { titulo: "Acumulador e contador", funcao: exemploAcumuladorEContador },
            { titulo: "while", funcao: exemploWhile },
            { titulo: "do...while", funcao: exemploDoWhile },
            { titulo: "for...of com strings", funcao: exemploForOfComStrings },
            { titulo: "break e continue", funcao: exemploBreakEContinue },
            { titulo: "Laços aninhados", funcao: exemploLacosAninhados },
            { titulo: "Simulando as provas do semestre", funcao: exemploSimulandoProvas, ehAplicacaoPratica: true },
        ],
    },
    {
        id: "funcoes",
        titulo: "Funções e arrow functions",
        resumo: "Funções agrupam instruções reutilizáveis: recebem dados (parâmetros), processam e podem devolver um resultado (return).",
        exemplos: [
            { titulo: "Declaração de função", funcao: exemploDeclaracaoDeFuncao },
            { titulo: "return", funcao: exemploReturn },
            { titulo: "Parâmetros com valor padrão", funcao: exemploParametrosPadrao },
            { titulo: "Expressão de função", funcao: exemploExpressaoDeFuncao },
            { titulo: "Arrow functions", funcao: exemploArrowFunctions },
            { titulo: "Callbacks: funções como argumento", funcao: exemploCallbacks },
            { titulo: "Escopo de função", funcao: exemploEscopoDeFuncao },
            { titulo: "Boletim com funções reutilizáveis", funcao: exemploBoletimComFuncoes, ehAplicacaoPratica: true },
        ],
    },
    {
        id: "objetos",
        titulo: "Objetos",
        resumo: "Objetos agrupam dados (propriedades) e comportamentos (métodos) relacionados. São copiados e comparados por referência.",
        exemplos: [
            { titulo: "Criando e acessando objetos", funcao: exemploCriandoObjetos },
            { titulo: "Alterando, adicionando e removendo propriedades", funcao: exemploModificandoObjetos },
            { titulo: "Propriedades abreviadas e funções fábrica", funcao: exemploPropriedadesAbreviadas },
            { titulo: "Métodos e this", funcao: exemploMetodosEThis },
            { titulo: "Percorrendo objetos com for...in", funcao: exemploPercorrendoObjetos },
            { titulo: "Objetos aninhados e encadeamento opcional (?.)", funcao: exemploObjetosAninhados },
            { titulo: "Desestruturação e spread", funcao: exemploDesestruturacaoESpread },
            { titulo: "Cópia e comparação por referência", funcao: exemploReferenciaDeObjetos },
            { titulo: "Aluno como objeto", funcao: exemploAlunoComoObjeto, ehAplicacaoPratica: true },
        ],
    },
    {
        id: "arrays",
        titulo: "Arrays",
        resumo: "Arrays são listas ordenadas de valores, com métodos para adicionar, remover, buscar, transformar e ordenar itens. Este tópico reúne tudo o que foi visto.",
        exemplos: [
            { titulo: "Criando e acessando arrays", funcao: exemploCriandoArrays },
            { titulo: "Adicionando e removendo itens", funcao: exemploAdicionandoERemovendo },
            { titulo: "Percorrendo arrays", funcao: exemploPercorrendoArrays },
            { titulo: "Buscando itens", funcao: exemploBuscandoEmArrays },
            { titulo: "map e filter", funcao: exemploMapEFilter },
            { titulo: "reduce", funcao: exemploReduce },
            { titulo: "Ordenando arrays", funcao: exemploOrdenandoArrays },
            { titulo: "Arrays e strings: split e join", funcao: exemploArraysEStrings },
            { titulo: "Spread, rest e desestruturação", funcao: exemploSpreadRestEDesestruturacao },
            { titulo: "Arrays e objetos juntos", funcao: exemploArraysEObjetos },
            { titulo: "Relatório da turma", funcao: exemploRelatorioDaTurma, ehAplicacaoPratica: true },
        ],
    },
];
