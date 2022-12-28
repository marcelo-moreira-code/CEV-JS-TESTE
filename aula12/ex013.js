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
if (dia_semana == 2) {
    console.log('Hoje é Terça-Feira!')
}
