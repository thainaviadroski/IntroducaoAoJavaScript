/*
 * ============================================================================
 *  PAGINA.JS — MONTAGEM DA PÁGINA
 * ============================================================================
 *  Este arquivo monta a página a partir da lista "topicos", definida no
 *  script.js, e executa os exemplos quando os botões são clicados.
 *
 *  Ele usa recursos que vão além do conteúdo da aula (manipulação do DOM),
 *  então não se preocupe se ainda não entender tudo por aqui. O conteúdo de
 *  estudo está no script.js.
 * ============================================================================
 */


// ----------------------------------------------------------------------------
// Formatação da saída
// ----------------------------------------------------------------------------

// Converte um valor em texto, de forma parecida com o console do navegador.
function formatarValor(valor, estaDentroDeOutroValor = false) {
    if (typeof valor === "string") {
        return estaDentroDeOutroValor ? `"${valor}"` : valor;
    }
    if (typeof valor === "bigint") {
        return `${valor}n`;
    }
    if (typeof valor === "symbol") {
        return valor.toString();
    }
    if (typeof valor === "function") {
        return `[Function: ${valor.name || "anônima"}]`;
    }
    if (Array.isArray(valor)) {
        const itens = valor.map((item) => formatarValor(item, true));
        return `[${itens.join(", ")}]`;
    }
    if (valor !== null && typeof valor === "object") {
        const propriedades = Object.entries(valor).map(
            ([chave, item]) => `${chave}: ${formatarValor(item, true)}`
        );
        return propriedades.length > 0 ? `{ ${propriedades.join(", ")} }` : "{}";
    }
    return String(valor); // number, boolean, undefined e null
}


// ----------------------------------------------------------------------------
// Execução dos exemplos
// ----------------------------------------------------------------------------

// Executa a função de um exemplo e captura tudo o que ela enviar ao console.log.
// Retorna uma lista de linhas no formato { texto, ehErro }.
function executarECapturarSaida(exemplo) {
    const linhas = [];
    const consoleLogOriginal = console.log;

    // Substitui temporariamente o console.log para guardar cada mensagem
    console.log = (...valores) => {
        const texto = valores.map((valor) => formatarValor(valor)).join(" ");
        linhas.push({ texto, ehErro: false });
        consoleLogOriginal(...valores); // a mensagem continua aparecendo no console (F12)
    };

    console.group(`▶ ${exemplo.titulo}`);
    try {
        exemplo.funcao();
    } catch (erro) {
        // Alguns exemplos geram erros de propósito, para demonstração
        linhas.push({ texto: `${erro.name}: ${erro.message}`, ehErro: true });
        console.error(erro);
    } finally {
        console.log = consoleLogOriginal; // restaura o console.log original
        console.groupEnd();
    }

    return linhas;
}


// ----------------------------------------------------------------------------
// Criação dos elementos da página
// ----------------------------------------------------------------------------

// Cria um elemento HTML com classe e texto opcionais.
function criarElemento(tag, classe, texto) {
    const elemento = document.createElement(tag);
    if (classe) {
        elemento.className = classe;
    }
    if (texto !== undefined) {
        elemento.textContent = texto;
    }
    return elemento;
}

// 1 -> "01", 10 -> "10"
function formatarNumeroDoTopico(numero) {
    return String(numero).padStart(2, "0");
}

// Texto que indica em quais tópicos anteriores o tópico atual se apoia.
function descreverBaseDoTopico(numero) {
    if (numero === 1) {
        return "Ponto de partida";
    }
    if (numero === 2) {
        return "Usa o que foi visto no tópico 1";
    }
    return `Usa o que foi visto nos tópicos 1 a ${numero - 1}`;
}

function criarLinhaDeSaida(linha) {
    const classe = linha.ehErro ? "saida__linha saida__linha--erro" : "saida__linha";
    return criarElemento("div", classe, linha.texto);
}

function criarCartaoDeExemplo(exemplo) {
    const cartao = criarElemento("article", "exemplo");
    if (exemplo.ehAplicacaoPratica) {
        cartao.classList.add("exemplo--pratica");
    }

    // Cabeçalho: selo (opcional), título, nome da função e botão
    const informacoes = criarElemento("div", "exemplo__informacoes");
    if (exemplo.ehAplicacaoPratica) {
        informacoes.append(criarElemento("span", "exemplo__selo", "Aplicação prática"));
    }
    informacoes.append(
        criarElemento("h3", "exemplo__titulo", exemplo.titulo),
        criarElemento("code", "exemplo__funcao", `${exemplo.funcao.name}()`)
    );

    const botaoExecutar = criarElemento("button", "botao botao--principal", "▶ Executar");
    botaoExecutar.type = "button";

    const cabecalho = criarElemento("header", "exemplo__cabecalho");
    cabecalho.append(informacoes, botaoExecutar);

    // O código exibido é o próprio código-fonte da função, lido do script.js
    const codigo = criarElemento("code", "language-javascript", exemplo.funcao.toString());
    const blocoDeCodigo = criarElemento("pre", "codigo");
    blocoDeCodigo.append(codigo);

    // Área de saída, exibida após a primeira execução
    const listaDeLinhas = criarElemento("div", "saida__linhas");
    const saida = criarElemento("div", "saida");
    saida.hidden = true;
    saida.append(criarElemento("span", "saida__rotulo", "Saída"), listaDeLinhas);

    function executar() {
        const linhas = executarECapturarSaida(exemplo);
        if (linhas.length === 0) {
            listaDeLinhas.replaceChildren(criarElemento("div", "saida__vazia", "(nenhuma saída)"));
        } else {
            listaDeLinhas.replaceChildren(...linhas.map(criarLinhaDeSaida));
        }
        saida.hidden = false;
    }

    botaoExecutar.addEventListener("click", executar);

    cartao.append(cabecalho, blocoDeCodigo, saida);
    return { elemento: cartao, executar };
}

function criarSecaoDoTopico(topico, numero) {
    const botaoExecutarTodos = criarElemento("button", "botao botao--secundario", "Executar todos");
    botaoExecutarTodos.type = "button";

    const linhaDoTitulo = criarElemento("div", "topico__linha-do-titulo");
    linhaDoTitulo.append(
        criarElemento("span", "topico__numero", formatarNumeroDoTopico(numero)),
        criarElemento("h2", "topico__titulo", topico.titulo),
        botaoExecutarTodos
    );

    const cabecalho = criarElemento("header", "topico__cabecalho");
    cabecalho.append(
        linhaDoTitulo,
        criarElemento("p", "topico__resumo", topico.resumo),
        criarElemento("p", "topico__base", descreverBaseDoTopico(numero))
    );

    const cartoes = topico.exemplos.map((exemplo) => criarCartaoDeExemplo(exemplo));
    const listaDeExemplos = criarElemento("div", "topico__exemplos");
    listaDeExemplos.append(...cartoes.map((cartao) => cartao.elemento));

    botaoExecutarTodos.addEventListener("click", () => {
        cartoes.forEach((cartao) => cartao.executar());
    });

    const secao = criarElemento("section", "topico");
    secao.id = topico.id;
    secao.append(cabecalho, listaDeExemplos);
    return secao;
}

function criarItemDoSumario(topico, numero) {
    const link = criarElemento("a", "sumario__link");
    link.href = `#${topico.id}`;
    link.append(
        criarElemento("span", "sumario__numero", formatarNumeroDoTopico(numero)),
        criarElemento("span", "sumario__texto", topico.titulo)
    );

    const item = criarElemento("li");
    item.append(link);
    return item;
}


// ----------------------------------------------------------------------------
// Comportamentos da página
// ----------------------------------------------------------------------------

// Destaca no sumário o tópico que está visível na tela.
function destacarTopicoVisivel() {
    const links = document.querySelectorAll(".sumario__link");

    const observador = new IntersectionObserver(
        (entradas) => {
            for (const entrada of entradas) {
                if (entrada.isIntersecting) {
                    links.forEach((link) => {
                        const estaAtivo = link.hash === `#${entrada.target.id}`;
                        link.classList.toggle("sumario__link--ativo", estaAtivo);
                    });
                }
            }
        },
        { rootMargin: "-15% 0px -75% 0px" }
    );

    document.querySelectorAll(".topico").forEach((secao) => observador.observe(secao));
}

// Aplica as cores de sintaxe nos códigos, se a biblioteca highlight.js carregou.
// Sem internet, a página funciona normalmente, apenas sem as cores.
function destacarSintaxe() {
    if (!window.hljs) {
        return;
    }
    document.querySelectorAll(".codigo code").forEach((bloco) => {
        window.hljs.highlightElement(bloco);
    });
}

function montarPagina() {
    const listaDoSumario = document.getElementById("lista-do-sumario");
    const conteudo = document.getElementById("conteudo");

    topicos.forEach((topico, indice) => {
        const numero = indice + 1;
        listaDoSumario.append(criarItemDoSumario(topico, numero));
        conteudo.append(criarSecaoDoTopico(topico, numero));
    });

    destacarSintaxe();
    destacarTopicoVisivel();
}

montarPagina();
