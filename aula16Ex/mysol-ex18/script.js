/* Minha bagunça 
function adicionar() {
    let nums = []
    nums.push(Number(document.getElementById('txtn').value))
    let res = document.getElementById('res')
    let n = nums

    if ( n < 0 || n > 100) {
        window.alert(`[Erro] Digite um valor entre 0 e 100!`)
    } else {
        //window.alert(`Tudie Okei ain!`)
        if (n in nums) {
            window.alert(`Valor já existe na lista!`)
            res.innerHTML = ``
        }
        res.innerHTML += `<br>`
        res.innerHTML += `Valor ${nums} adicionado.`
    }
}

function finalizar() {
    window.alert(`Cabô!`)
}
// Bagunça 2 


function adicionar() {

    let num = Number(document.getElementById('txtn').value)
    let n = Number(num)
    let lista = document.getElementById('flista')
    let res = document.querySelector('div#res')
    let valores = []

    if (n < 0 || n > 100 || n == '') {
        window.alert(`[Erro] Digite um valor entre 0 e 100`)
    } else {
        window.alert(`Okie!`)
    }
}


function finalizar() {

}
*/
/// Do professor

let num = document.querySelector('input#txtn')
let lista = document.querySelector(`input#flista`)
let res = document.querySelector('input#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}   

function adicionar() {
    if(isNumero(num.value) && ! inLista(num.value)) {
        window.alert('Tudo Ok!')
    } else {
        window.alert(`Valor inválido ou já encontrado na lista.`)
    }
}
