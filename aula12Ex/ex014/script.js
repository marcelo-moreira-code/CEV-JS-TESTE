function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 1
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        console.log(`Bom dia!`)
        img.src = 'manha.png'
        document.body.style.background = '#ffd25f'
    } else if (hora >= 12 && hora < 18) {
        console.log(`Boa Tarde!`)
        img.src = 'tarde.png'
        document.body.style.background = '#c32800'
    } else {
        console.log(`Boa Noite!`)
        img.src = 'noite.png'
        document.body.style.background = '#1f1f21'
    }
}