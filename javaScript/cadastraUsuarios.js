var funcionario = JSON.parse(localStorage.getItem('inputValue'));

var tbody = $("tbody").addClass("formatacao_Tabela");
var linha = $("<tr>").addClass("funcionario");
var span = $("<span>").addClass("incial_verde_claro").addClass("inicial-nome");
var ancora = $("<a>").addClass("tooltip")
var select = $("<select>").addClass("permissao_opcoes");
var input = $("<input>").attr("type","checkbox").addClass("checkbox");

select.append($("<option>").text("Aluno")).append($("<option>").text("Professor"));

var primeiraColuna = $("<td>").append($("<input>").attr("type","checkbox").addClass("checkbox"));
var segundaColuna = $("<td>").append($("<span>").text("B").addClass("incial_verde_claro").addClass("inicial-nome")).append($("<a>").text(funcionario[0]).attr("href","#").addClass("tooltip"));
var terceiraColuna = $("<td>").addClass("sobrenome").text(funcionario[1]);
var quartaColuna = $("<td>").addClass("email").text(funcionario[2]);
var selecao = $("<td>").addClass("permissao").append(select);

linha.append(primeiraColuna);
linha.append(segundaColuna);
linha.append(terceiraColuna);
linha.append(quartaColuna);
linha.append(selecao);
tbody.append(linha)


