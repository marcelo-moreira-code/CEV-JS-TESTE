var hora_atual = new Date()
var min_atual = new Date()
var seg_atual = new Date()
var hora = hora_atual.getHours()
var min = min_atual.getMinutes()
var seg = seg_atual.getSeconds()
var hora_cliente = hora_atual.getUTCHours()
console.log(`Agora são exatamente ${hora}`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else if (hora => 18 ) {
    console.log('Boa noite!')} 
