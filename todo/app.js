/*
 * ============================================================================
 *  APP.JS — LISTA DE TAREFAS
 * ============================================================================
 *  Uma lista de tarefas feita apenas com HTML, CSS e JavaScript. Ela usa o
 *  conteúdo da Parte 2 do material (DOM, seletores e eventos) e guarda as
 *  tarefas no localStorage, para que elas continuem lá ao recarregar a página.
 *
 *  Cada tarefa é um objeto, e a lista é um array desses objetos:
 *
 *      { id: 1730000000000, texto: "Estudar arrays", estaConcluida: false }
 *
 *  Sempre que a lista muda, ela é salva no localStorage e exibida de novo.
 * ============================================================================
 */


// ----------------------------------------------------------------------------
// Elementos da página
// ----------------------------------------------------------------------------

const formulario = document.querySelector("#formulario-de-tarefa");
const campoTarefa = document.querySelector("#campo-tarefa");
const listaDeTarefas = document.querySelector("#lista-de-tarefas");
const mensagemListaVazia = document.querySelector("#mensagem-lista-vazia");
const rodape = document.querySelector("#rodape");
const contadorDePendentes = document.querySelector("#contador-de-pendentes");
const botaoLimparConcluidas = document.querySelector("#botao-limpar-concluidas");


// ----------------------------------------------------------------------------
// Armazenamento no localStorage
// ----------------------------------------------------------------------------

// Nome sob o qual as tarefas ficam guardadas no localStorage
const CHAVE_DAS_TAREFAS = "todo:tarefas";

// O localStorage só guarda textos. Por isso, ao salvar, o array é convertido
// em texto com JSON.stringify e, ao carregar, convertido de volta com JSON.parse.
function salvarTarefas(tarefasParaSalvar) {
    localStorage.setItem(CHAVE_DAS_TAREFAS, JSON.stringify(tarefasParaSalvar));
}

function carregarTarefas() {
    const textoSalvo = localStorage.getItem(CHAVE_DAS_TAREFAS);

    // Na primeira visita ainda não há nada salvo, e o getItem retorna null
    if (textoSalvo === null) {
        return [];
    }

    // Se o texto salvo tiver sido alterado e não for um JSON válido,
    // o JSON.parse gera um erro. Nesse caso, a lista começa vazia.
    try {
        const tarefasSalvas = JSON.parse(textoSalvo);
        return Array.isArray(tarefasSalvas) ? tarefasSalvas : [];
    } catch (erro) {
        console.error("Não foi possível ler as tarefas salvas:", erro);
        return [];
    }
}


// ----------------------------------------------------------------------------
// A lista de tarefas
// ----------------------------------------------------------------------------

let tarefas = carregarTarefas();

// Único lugar em que a lista é trocada: guarda a nova lista, salva e exibe.
function atualizarTarefas(novasTarefas) {
    tarefas = novasTarefas;
    salvarTarefas(tarefas);
    exibirTarefas();
}

function adicionarTarefa(texto) {
    const novaTarefa = { id: Date.now(), texto, estaConcluida: false };
    atualizarTarefas([...tarefas, novaTarefa]);
}

function alternarConclusao(id) {
    atualizarTarefas(
        tarefas.map((tarefa) =>
            tarefa.id === id ? { ...tarefa, estaConcluida: !tarefa.estaConcluida } : tarefa
        )
    );
}

function removerTarefa(id) {
    atualizarTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
}

function limparConcluidas() {
    atualizarTarefas(tarefas.filter((tarefa) => !tarefa.estaConcluida));
}


// ----------------------------------------------------------------------------
// Exibição na página
// ----------------------------------------------------------------------------

// Cria o <li> de uma tarefa, com esta estrutura:
//
//     <li class="tarefa" data-id="1730000000000">
//         <label class="tarefa__rotulo">
//             <input class="tarefa__caixa" type="checkbox">
//             <span class="tarefa__texto">Estudar arrays</span>
//         </label>
//         <button class="tarefa__remover">✕</button>
//     </li>
function criarItemDaTarefa(tarefa) {
    const caixaDeSelecao = document.createElement("input");
    caixaDeSelecao.type = "checkbox";
    caixaDeSelecao.className = "tarefa__caixa";
    caixaDeSelecao.checked = tarefa.estaConcluida;

    // textContent (e não innerHTML): o texto digitado nunca é interpretado como HTML
    const texto = document.createElement("span");
    texto.className = "tarefa__texto";
    texto.textContent = tarefa.texto;

    const rotulo = document.createElement("label");
    rotulo.className = "tarefa__rotulo";
    rotulo.append(caixaDeSelecao, texto);

    const botaoRemover = document.createElement("button");
    botaoRemover.type = "button";
    botaoRemover.className = "tarefa__remover";
    botaoRemover.textContent = "✕";
    botaoRemover.title = "Remover tarefa";
    botaoRemover.setAttribute("aria-label", `Remover a tarefa "${tarefa.texto}"`);

    const item = document.createElement("li");
    item.className = "tarefa";
    item.classList.toggle("tarefa--concluida", tarefa.estaConcluida);
    item.dataset.id = tarefa.id;
    item.append(rotulo, botaoRemover);
    return item;
}

// 0 -> "Nenhuma tarefa pendente", 1 -> "1 tarefa pendente", 3 -> "3 tarefas pendentes"
function descreverPendentes(quantidade) {
    if (quantidade === 0) {
        return "Nenhuma tarefa pendente";
    }
    return `${quantidade} ${quantidade === 1 ? "tarefa pendente" : "tarefas pendentes"}`;
}

// Monta a lista inteira de novo a partir do array de tarefas.
function exibirTarefas() {
    listaDeTarefas.replaceChildren(...tarefas.map(criarItemDaTarefa));

    const quantidadeDePendentes = tarefas.filter((tarefa) => !tarefa.estaConcluida).length;
    const temTarefas = tarefas.length > 0;
    const temConcluidas = quantidadeDePendentes < tarefas.length;

    contadorDePendentes.textContent = descreverPendentes(quantidadeDePendentes);
    botaoLimparConcluidas.disabled = !temConcluidas;
    mensagemListaVazia.hidden = temTarefas;
    rodape.hidden = !temTarefas;
}


// ----------------------------------------------------------------------------
// Eventos
// ----------------------------------------------------------------------------

// O id de cada tarefa fica no atributo data-id do <li>. Como o dataset
// sempre retorna texto, o id é convertido em número.
function obterIdDaTarefa(elemento) {
    return Number(elemento.closest(".tarefa").dataset.id);
}

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); // impede que o envio do formulário recarregue a página

    const texto = campoTarefa.value.trim();
    if (texto !== "") {
        adicionarTarefa(texto);
    }

    formulario.reset();
    campoTarefa.focus();
});

// Delegação de eventos: um único ouvinte na lista atende a todas as tarefas,
// inclusive às que forem criadas depois.
listaDeTarefas.addEventListener("change", (evento) => {
    if (!evento.target.matches(".tarefa__caixa")) {
        return;
    }

    const id = obterIdDaTarefa(evento.target);
    alternarConclusao(id);

    // A lista foi montada de novo: devolve o foco à caixa de seleção da tarefa
    listaDeTarefas.querySelector(`[data-id="${id}"] .tarefa__caixa`).focus();
});

listaDeTarefas.addEventListener("click", (evento) => {
    const botaoRemover = evento.target.closest(".tarefa__remover");
    if (botaoRemover) {
        removerTarefa(obterIdDaTarefa(botaoRemover));
    }
});

botaoLimparConcluidas.addEventListener("click", limparConcluidas);


// ----------------------------------------------------------------------------
// Início
// ----------------------------------------------------------------------------

exibirTarefas();
