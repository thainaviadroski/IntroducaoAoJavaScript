const btnConsultar = document.getElementById("btn-consultar");

btnConsultar.addEventListener("click", async () => {
  const cep = document.getElementById("cep").value;
  const dados = await buscarCep(cep);

  mostrarDados(dados);
});

async function buscarCep(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  let res = await fetch(url);
  if (!res.ok) {
    throw new Error("Falha ao buscar o CEP");
  }

  return res.json();
}

function mostrarDados(dados) {
  const resultado = document.getElementById("resultado");
  resultado.style.display = "block";
  resultado.innerHTML = `
    <p>CEP: ${dados.cep}</p>
    <p>Logradouro: ${dados.logradouro}</p>
    <p>Bairro: ${dados.bairro}</p>
    <p>Cidade: ${dados.localidade}</p>
    <p>Estado: ${dados.uf}</p>
  `;
}
