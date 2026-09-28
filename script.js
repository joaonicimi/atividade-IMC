const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const botao = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

botao.addEventListener('click', function () {
  const pesoValor = parseFloat(peso.value);
  const alturaValor = parseFloat(altura.value);

  if (isNaN(pesoValor) || isNaN(alturaValor) || pesoValor <= 0 || alturaValor <= 0) {
    resultado.textContent = 'Digite valores válidos.';
    resultado.style.color = '#ff8f8f';
    return;
  }

  const alturaEmMetros = alturaValor / 100;
  const imc = pesoValor / (alturaEmMetros * alturaEmMetros);
  let mensagem = 'Seu IMC é ' + imc.toFixed(1) + '. ';

  if (imc < 16) {
    mensagem += 'Magreza grave.';
  } else if (imc < 17) {
    mensagem += 'Magreza moderada.';
  } else if (imc < 18.5) {
    mensagem += 'Magreza leve.';
  } else if (imc < 25) {
    mensagem += 'Peso normal.';
  } else if (imc < 30) {
    mensagem += 'Sobrepeso.';
  } else if (imc < 35) {
    mensagem += 'Obesidade grau I.';
  } else if (imc < 40) {
    mensagem += 'Obesidade grau II.';
  } else {
    mensagem += 'Obesidade grau III.';
  }

  resultado.textContent = mensagem;
  resultado.style.color = '#d2f7dc';
});
