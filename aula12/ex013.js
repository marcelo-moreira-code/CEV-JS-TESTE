var agora = new Date()
var dia_semana = agora.getDay()
/* 
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado
*/

console.log(dia_semana)
/*
if (dia_semana == 1) {
    console.log(`Hoje é Segunda-Feira!`)
} else if (dia_semana == 2) {
    console.log('Hoje é Terça-Feira!')
} else if (dia_semana == 3) {
    console.log(`Hoje é Quarta-Feira!`)
} else if (dia_semana == 4) {
    console.log(`Hoje é Quinta-Feira!`)
} else if (dia_semana == 5) {
    console.log(`Hoje é Sexta-feira!`)
} else if (dia_semana == 6) {
    console.log(`Hoje é Sábado!`)
} else {
    console.log(`Hoje é Domingo!`)
}
*/
switch (dia_semana) 
{
    case 0:
        console.log('Domingo!')
        break
    case 1:
        console.log('Segunda!')
        break
    case 2:
        console.log('Terça!')
        break
    case 3:
        console.log('Quarta!')
        break
    case 4:
        console.log('Quinta!')
        break
    case 5:
        console.log('Sexta!')
        break
    case 6:
        console.log('Sábado!')
        break 
    default:
        console.log('[ERRO] Dia Inválido!')
        break                                
}
