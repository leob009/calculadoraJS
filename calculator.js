


function AddNumber(num){
    document.getElementById("tela").innerHTML += num
}

function BackSpace(){
    const elemento =  document.getElementById("tela").innerHTML
    const novoElemento = elemento.split("")

    novoElemento.splice((novoElemento.length -1),1)
    document.getElementById("tela").innerHTML = novoElemento.join('')
   
}

function CleanAll(){
    document.getElementById("tela").innerHTML = ""
}

class operaçao{
    constructor(operador){
        this.operador = operador
    }

    get mostrarNaTela(){
        return this.operador
       
    }

    separar(){
        const elemento =  document.getElementById("tela").innerHTML
        const novoElemento = elemento.split(this.operador)
        return novoElemento

    }

   
}

class Divirir extends operaçao{
    constructor(operador){
        super(operador)
    }

    operaçao(){
       const operadores = document.getElementById("tela").innerHTML.separar
       const resultado = operadores[0]/operadores[1]
       return resultado

    }
   

}

function Chamar(operador){
    document.getElementById("tela").innerHTML += operador.mostrarNaTela
}

function operar(){

}

CleanAll()