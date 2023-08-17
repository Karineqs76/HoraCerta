function carregar()
{
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`
    if (hora >= 5 && hora < 9)
    {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#BA55D3'
    }
    else if (hora >= 9 && hora < 12)
    {
        img.src = 'imagens/manhaa.png'
        document.body.style.background = '#FF6347'
    }
    else if (hora >= 12 && hora < 17)
    {
        img.src = 'imagens/tardee.png'
        document.body.style.background = '#FFD700'
    }
    else if (hora >= 17 && hora < 19)
    {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#B22222'
    }
    else if (hora >= 19 && hora < 22)
    {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#0000CD'
    }
    else
    {
        img.src = 'imagens/noitee.png'
        document.body.style.background = '#483D8B'
    }
}
