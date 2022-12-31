function contar() {
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        res.innerHTML = `Impossível contar!`
        //window.alert('[ERRO] Faltam dados!')
        
    } else {
        res.innerHTML = 'Contando: <br>' 
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert(`Passo Inválido! Considerando PASSO 1`)
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for(let c = i ; c <= f ; c += p) {
            //res.innerHTML += ` ${c} \u{1F449} ` // U+1F525 para JS tira U+ e coloca \u{}
                res.innerHTML += ` ${c} \u{27A1}`
        }
        res.innerHTML += `\u{1F3C1}`
       } else {
            // Contagem Regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
       } 
    }
    
} 