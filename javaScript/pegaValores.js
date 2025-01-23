$(".botao").click(function () {

    var funcionario = []
    
    var nome = $("#nome").val();
    var sobrenome = $("#sobrenome").val();
    var email = $("#email").val();
    var permissao = $("#permissao").val();

    funcionario.push(nome);
    funcionario.push(sobrenome);
    funcionario.push(email);
    funcionario.push(permissao);

    console.log(funcionario);

    localStorage.setItem("inputValue", JSON.stringify(funcionario));
});


