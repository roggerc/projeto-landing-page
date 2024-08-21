var setaDireita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo");
var samanta = window.document.getElementById("samanta");
var bruna = window.document.getElementById("bruna");
var setaEsquerda = window.document.getElementById("seta-esquerda")

function rolarParaDireita(){
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:55px"
}
function rolarParaEsquerda(){
    bruna.style = "display:none"
    leonardo.style = "display:flex"
    setaDireita.style = "display:flex; margin-top:55px"
    setaEsquerda.style = "display:none" 
}