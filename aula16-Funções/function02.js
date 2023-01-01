function soma(n1, n2) { 
    return n1 + n2
}

console.log(soma(2,9))

// caso não seja especificado um parâmetro válido depois , pode deixar pré-def um valor antes  n1=1.. n2 = 1.. 

function mult(n1=0 , n2=0) {  
    return n1 * n2
}
console.log(mult(5,9))