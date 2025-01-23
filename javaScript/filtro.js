var setaParaCimaNome = document.querySelector(".setaParaCimaNome");
var setaParaBaixoNome = document.querySelector(".setaParaBaixoNome");
var funcionarios = document.querySelectorAll(".funcionario");

var setaParaCimaSobrenome = document.querySelector(".setaParaCimaSobrenome");
var setaParaBaixoSobrenome = document.querySelector(".setaParaBaixoSobrenome");

var setaParaCimaEmail = document.querySelector(".setaParaCimaEmail");
var setaParaBaixoEmail = document.querySelector(".setaParaBaixoEmail");

var setaParaCimaPermissao = document.querySelector(".setaParaCimaPermissao");
var setaParaBaixoPermissao = document.querySelector(".setaParaBaixoPermissao");

setaParaBaixoPermissao.addEventListener("click", function () {
  ordenarTabela(false); 
});

setaParaCimaPermissao.addEventListener("click", function () {
  ordenarTabela(true); 
});

setaParaBaixoEmail.addEventListener("click", function () {
  ordenarTabela(false); 
});

setaParaCimaEmail.addEventListener("click", function () {
  ordenarTabela(true); 
});

setaParaBaixoSobrenome.addEventListener("click", function () {
  ordenarTabela(false); 
});

setaParaCimaSobrenome.addEventListener("click", function () {
  ordenarTabela(true); 
});

setaParaBaixoNome.addEventListener("click", function () {
  ordenarTabela(false); 
});


setaParaCimaNome.addEventListener("click", function () {
  ordenarTabela(true); 
});


function ordenarTabela(ordemCrescente) {
  var arrayInicialNome = [];
  var arrayTrFuncionarios = [];

  
  for (var i = 0; i < funcionarios.length; i++) {
    var tdInicialNome = funcionarios[i].querySelector(".inicial-nome");
    var inicialNome = tdInicialNome.textContent.trim(); 
    arrayInicialNome.push(inicialNome);
    arrayTrFuncionarios.push(funcionarios[i]);
  }


  if (ordemCrescente) {
    arrayInicialNome.sort(); 
  } else {
    arrayInicialNome.sort().reverse(); 
  }

  var ordenadoTr = [];
  for (var j = 0; j < arrayInicialNome.length; j++) {
    for (var k = 0; k < arrayTrFuncionarios.length; k++) {
      var tdNomeAtual = arrayTrFuncionarios[k].querySelector(".inicial-nome");
      if (tdNomeAtual.textContent.trim() === arrayInicialNome[j]) {
        ordenadoTr.push(arrayTrFuncionarios[k]); 
        arrayTrFuncionarios.splice(k, 1); 
        break;
      }
    }
  }
  
  var corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = ""; 
  ordenadoTr.forEach((tr) => corpoTabela.appendChild(tr)); 
}















