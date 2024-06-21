function gerar() {
    let num = window.document.getElementById('txtn')
    let res = window.document.getElementById('res')

    var n = Number(num.value)

    if (n == 0) {
        window.alert(`[Erro] Digite um número válido!`)

    } else {
        var c = 1

        for (n; c <= 10; c++) {
            res.innerHTML += (`${n} x ${c} = ${n * c}<br>`)
        }

    }

}

function limpar() {
    res.innerHTML = ""
    tab.innerHTML = ``
}