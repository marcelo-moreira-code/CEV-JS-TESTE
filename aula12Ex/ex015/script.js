function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var formulário_ano = window.document.getElementById('txtano')
   var res = document.getElementById('res') // document.querySelector('div#res')
   if (formulário_ano.value.length == 0 || formulário_ano.value > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
   } else {
        var formulário_sex = document.getElementsByName('radsex')
        var idade = ano - Number(formulário_ano.value)
        //res.innerHTML = `Idade calculada é ${idade}`  // testando idade
        var gênero = ``
        
        var img = document.createElement('img') // igual <img id='foto'> no HTML 
        img.setAttribute('id', 'foto')

        if (formulário_sex[0].checked) {
            gênero = `Homem`
            if (idade >=0 && idade <10) {
                // criança
                img.setAttribute('src','bebe-m.png')
            } else if (idade < 21) {
               // Jovem 
               img.setAttribute('src','jovem-m.png')    
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src' , 'adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src' , 'idoso-m.png')
            }
        } else if (formulário_sex[1].checked) {
            gênero = `Mulher`
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src','bebe-f.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src' , 'jovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src','adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src' , 'idoso-f.png')
            }
        }
        res.style.textAlign = 'center' // centralizar o texto
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) // adicionando um elemento
   }
}