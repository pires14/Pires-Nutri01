var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener('click',
    function(event){
        event.preventDefault();
        
        //Seleciona a tag <form> a partir do id
        var formulario = document.querySelector('#form-adiciona');
        
 //Variáveis para acessar o valor do <input> a partir do name
        var paciente = dadosPacientesFormulario(formulario);
        console.log(paciente);
        //Cria o elemento <tr>
        var pacienteTr = document.createElement("tr");

        //Cria as tags <td>
        var nomeTd = document.createElement("td");
        var pesoTd = document.createElement("td");
        var alturaTd = document.createElement("td");
        var gorduraTd = document.createElement("td");
        var imcTd = document.createElement("td");

        //adiciona os valores digitados a <td> criada
        nomeTd.textContent = paciente.nome;
        pesoTd.textContent = peso;
        alturaTd.textContent = altura;
        gorduraTd.textContent = paciente.gordura;
        imcTd.textContent = CalculaIMC(peso,altura);

//para que os elementos sejam visíveis
        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);
        pacienteTr.appendChild(imcTd);
        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);
    }
);

 
function dadosPacientesFormulario(formulario){ //criação da função e o formulário foi buscado
    var paciente = {
    nome:  formulario.nome.value, 
    peso: formulario.peso.value,
    altura: formulario.altura.value,
    gordura: formulario.gordura.value,
    IMC: CalculaIMC(formulario.peso.value, formulario.altura.value)
    
    }
    return paciente;
}