function escreve(texto){
    var visor = document.getElementsByClassName("visor")[0].value;
    console.log(visor);
    var maximo_visor = 20;
    if(visor.length < maximo_visor){
        document.getElementsByClassName("visor")[0].value = visor + texto;
    }else{
        alert("O visor atingiu seu limite de caracteres");
    }
}

function apaga_caracter(){
    var visor = document.getElementsByClassName("visor")[0].value;
    document.getElementsByClassName("visor")[0].value = visor.substring(0, visor.length - 1);
}

function limpa_visor(){
    document.getElementsByClassName("visor")[0].value = "";
}


function resolve_equação(){
    var equação = document.getElementsByClassName("visor")[0].value;
    // Descobrir que tipo de operação matematica está sendo feita e em que posicao o operador está
    for(var i = 0; i < equação.length; i++){
        if (equação[i] == "+" || equação[i] == "-" || equação[i] == "*" || equação[i] == "/" || equação[i] == "^"){
            operador = equação[i]
            ind_operador = i
        }
    }
    // Separar os dois termos da operacao
    var termo = ["", ""];

    for(var i = 0; i < equação.length; i++){
        if (i < ind_operador){
            termo[0] += equação[i];
        }else if(i > ind_operador){
            termo[1] += equação[i];
        }    
    }   
    self.limpa_visor();

    var resultado = 0;
    
    // Realizando a operacao
    if (operador == "+"){
        resultado = parseFloat(termo[0]) + parseFloat(termo[1]);
    } else if (operador == "-"){
        resultado = parseFloat(termo[0]) - parseFloat(termo[1]);
    }else if (operador == "*"){
        resultado = parseFloat(termo[0]) * parseFloat(termo[1]);
    }else if (operador == "/"){
        resultado = parseFloat(termo[0]) / parseFloat(termo[1])
    }else if (operador == "^"){
        resultado = parseFloat(termo[0]) ** parseFloat(termo[1])
    }

    document.getElementsByClassName("visor")[0].value = resultado.toString();
}

function raiz_quadrada(){
    var num = parseFloat(document.getElementsByClassName("visor")[0].value);

    document.getElementsByClassName("visor")[0].value = Math.sqrt(num);
}



function conversor_R$_US$(){
    
}