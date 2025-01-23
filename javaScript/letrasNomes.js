$(function(){
    $('.tooltip').tooltipster({
         theme: 'tooltipster-borderless'
    });

    mostraNumeroLetras();
})


function mostraNumeroLetras() {
    var funcionario = $(".funcionario");
    var somaNomeSobrenome = [];
    for(i=0; i < funcionario.length; i++){
        var primeiroNome = $(funcionario[i]).find("td:nth-child(2)").find("a").text();
        var sobrenome = $(funcionario[i]).find("td:nth-child(3)").text();
        var soma = primeiroNome.length + sobrenome.length + " letras";
        somaNomeSobrenome.push(soma);
        $(funcionario[i]).find(".tooltip").tooltipster("content", somaNomeSobrenome[i]);
    }
}




