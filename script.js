function clicou(num) {
    var botao = document.getElementById('calcula')
    botao.innerHTML += `${num}`
}

function limpar() {
    var lim = document.getElementById('calcula')
    lim.innerHTML = ''
}

function somar() {
    var apag = document.getElementById('calcula').innerHTML
    document.getElementById('calcula').innerHTML = eval(apag)
}
function apaga() {
    var som = document.getElementById('calcula').innerHTML
    document.getElementById('calcula').innerHTML = som.substring(0, som.length -1)
    
}