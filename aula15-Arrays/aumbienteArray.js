let num = [5,8,9,2,0,7]

num.push(-3) // adiciona elementos no final 
/* .sort() ->ordena  .push()    .length -> mede tamnho

console.log(`Nosso vetor é ${num}`)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O vetor organizado em ordem crescente fica ${num.sort()}`)
console.log(`${num[3]}`)
*/

// Percorrendo uma lista com for 
for (let pos = 0; pos < num.length; pos++ ) {
    console.log(num[pos])
}