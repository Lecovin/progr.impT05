function menumicroondas(prato,tempo){

switch (prato){
    case  "pipoca":
    
    if (tempo <10) {
console.log ("Tempo insuficiente") //  menor que o padrão "tempo insuficiente"
    }
    else if (tempo > 10*2 && tempo <10*3){
        console.log("Comida Queimou")
    }
    else if (tempo > 10*3){
        console.log("Kabum")
    }
    else {
        console.log("Prato pronto, bom apetite!!!")
    }

    break;

case  "macarrão":
    
    if (tempo < 8) {
console.log ("Tempo insuficiente") //  menor que o padrão "tempo insuficiente"
    }
    else if (tempo > 8*2 && tempo <8*3){
        console.log("Comida Queimou")
    }
    else if (tempo > 8*3){
        console.log("Kabum")
    }
    else {
        console.log("Prato pronto, bom apetite!!!")
    }
    break;

    case  "carne":
   
    if (tempo <15) {
console.log ("Tempo insuficiente") //  menor que o padrão "tempo insuficiente"
    }
    else if (tempo > 15*2 && tempo <15*3){
        console.log("Comida Queimou")
    }
    else if (tempo >15*3){
        console.log("Kabum")
    }
    else {
        console.log("Prato pronto, bom apetite!!!")
    }
    break;

    case  "feijão": 
    if (tempo <12) {
console.log ("Tempo insuficiente") //  menor que o padrão "tempo insuficiente"
    }
    else if (tempo > 12*2 && tempo <12*3){
        console.log("Comida Queimou")
    }
    else if (tempo >12*3){
        console.log("Kabum")
    }
    else {
        console.log("Prato pronto, bom apetite!!!")
    }
    break;

    case  "brigadeiro":
    if (tempo <8) {
console.log ("Tempo insuficiente") //  menor que o padrão "tempo insuficiente"
    }
    else if (tempo > 8*2){
        console.log("Comida Queimou")
    }
    else if (tempo >8*3){
        console.log("Kabum")
    }
    else {
        console.log("Prato pronto, bom apetite!!!")
    }

    break;

    default: 
    console.log ("Prato inexistente"); // - Opções não listadas no menu, "Prato inexistente"
}

}


//Entrada de Dados
menumicroondas ("pipoca", 40)
