function avaliar() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "<p>Obrigado por participar! Reavalie sua postura e ambiente de trabalho com frequência.</p>";
}

function enviarFormulario(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const resposta = document.getElementById("respostaForm");
  resposta.innerHTML = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
}
