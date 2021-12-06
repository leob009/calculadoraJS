let saveAction

function AddNumber(num){
    let CurrentNumber = document.getElementById("tela").innerHTML
    if (CurrentNumber.length <= 12){
        if(CurrentNumber == 0 && !CurrentNumber.includes(".")){
            document.getElementById("tela").innerHTML = ""
        } 
        document.getElementById("tela").innerHTML += num
    }    
}

function AddCom(){
    var CurrentNumber = document.getElementById("tela").innerHTML

    if(!CurrentNumber.includes(".")){
        document.getElementById("tela").innerHTML += '.'
    }
}

function BackSpace(){
    const elemento =  document.getElementById("tela").innerHTML
    const novoElemento = elemento.split("")

    novoElemento.splice((novoElemento.length -1),1)
    if(document.getElementById("tela").innerHTML.length > 1){
        document.getElementById("tela").innerHTML = novoElemento.join('')
        
    } else{
        document.getElementById("tela").innerHTML = 0
    }
   
}

function CleanAll(){
    document.getElementById("tela").innerHTML = "0"
    document.getElementById("acumulador").innerHTML = ""
}

function CleanCurrent(){
    document.getElementById("tela").innerHTML = "0"

}

function CalcAction(action){
    let CurrentNumber = document.getElementById("tela").innerHTML
    saveAction = action

    if(!document.getElementById("acumulador").innerHTML.includes(action)){
        document.getElementById("acumulador").innerHTML += CurrentNumber + action
        
    }

    if(document.getElementById("acumulador").innerHTML.includes('=')){
        document.getElementById("acumulador").innerHTML = CurrentNumber + action
    }
    
    document.getElementById("tela").innerHTML = ""

}

function result(){
    let CurrentNumber = document.getElementById("tela").innerHTML
    const operador1 = Number(document.getElementById("acumulador").innerHTML.replace(saveAction, ""))
    const operador2 = Number(document.getElementById("tela").innerHTML)
    const resultado = proccessAction(operador1,operador2, saveAction)

    document.getElementById("acumulador").innerHTML += CurrentNumber + '='
    document.getElementById("tela").innerHTML = resultado 
    

}

function proccessAction(num1, num2, action){
    switch (action){
        case '+': return num1 + num2 
        case '-': return num1 - num2
        case 'x': return num1 * num2
        case '/': return num1 / num2
    }
}

function Porcentagem(){
    let CurrentNumber = document.getElementById("tela").innerHTML
    const operador1 = Number(document.getElementById("acumulador").innerHTML.replace(saveAction, ""))
    CurrentNumber = (CurrentNumber/100)* operador1
    document.getElementById("tela").innerHTML = CurrentNumber
}
    



CleanAll()
