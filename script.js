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

  if (imc < 18.5) {
    mensagem += 'Você está abaixo do peso.';
  } else if (imc < 25) {
    mensagem += 'Você está no peso ideal.';
  } else if (imc < 30) {
    mensagem += 'Você está com sobrepeso.';
  } else if (imc < 35) {
    mensagem += 'Você está com obesidade leve.';
  } else if (imc < 40) {
    mensagem += 'Você está com obesidade moderada.';
  } else {
    mensagem += 'Você está com obesidade grave.';
  }

  resultado.textContent = mensagem;
  resultado.style.color = '#d2f7dc';
});
