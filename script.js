var cartaCorinthians = {
  nome: "Corinthians",
  imagem: "http://midias.folhavitoria.com.br/files/2017/01/escudo-corinthians-paulista.jpg",
  atributos: {
    "Campeonato Brasileiro": 7,
    "Ano de fundação": 1910,
    "Títulos Nacionais": 11,
    "Títulos Internaconais": 4
  }
};
var cartaPalmeiras = {
  nome: "Palmeiras",
  imagem: "https://images8.alphacoders.com/972/thumb-350-972226.jpg",
  atributos: {
    "Campeonato Brasileiro": 10,
    "Ano de fundação": 1924,
    "Títulos Nacionais": 15,
    "Títulos Internaconais": 4
  }
};

var cartaSantos = {
  nome: "Santos",
  imagem: "http://pm1.narvii.com/6735/661e265b79b116242839dcf5d461ff2e29ad7eb1v2_00.jpg",
  atributos: {
    "Campeonato Brasileiro": 8,
    "Ano de fundação": 1912,
    "Títulos Nacionais": 5,
    "Títulos Internaconais": 8
  }
};

var cartaSaoPaulo = {
  nome: "São Paulo",
  imagem: "https://i.pinimg.com/originals/c4/b7/5b/c4b75bc62a7d87aebfce7cd69ce5465f.jpg",
  atributos: {
    "Campeonato Brasileiro": 6,
    "Ano de fundação": 1930,
    "Títulos Nacionais": 6,
    "Títulos Internaconais": 12
  }
};

var cartaMaquina; 
var cartaJogador;
var cartas = [cartaCorinthians, cartaPalmeiras, cartaSantos, cartaSaoPaulo];

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }

  cartaJogador = cartas[0];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  console.log("chamou");
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
 
  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
	htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
	htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
	htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;
  
  document.getElementById('btnJogar').disabled = true;
  exibirCartaMaquina()
 
} 

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador")
  divCartaJogador.style.backgroundImage= `url(${cartaJogador.imagem})`
  // divCartaJogador.style.backgroundImage=`url("cartaJogador.imagem + ")"
  var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>"

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + ": " + cartaJogador.atributos[atributo] + "<br>" ;
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
	'<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
 
  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
	opcoesTexto +=
  	"<p type='text' name='atributo' value='" +
  	atributo +
      "'>" +
  	atributo +
  	": " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
 
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}