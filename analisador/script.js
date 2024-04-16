function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        if (fsex[0].checked) {
            genero = 'Homen'
        if (idade >=0 && idade  < 12) {
            //criança
            img.setAttribute('src', 'neneme.png')
        } else if (idade < 21){
            //jovem
            img.setAttribute('src', 'jovemme.png')
        } else if (idade < 50){
            //adulto
            img.setAttribute('src', 'homem.png')
        } else {
            //idoso 
            img.setAttribute('src', 'idoso.png')
        }

    } else if (fsex[1].checked){
            genero = 'Mulher'
        if (idade >=0 && idade  < 12) {
                //criança
                img.setAttribute('src', 'nenemu.png')
        } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemmu.png')
        } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'mulher.png')
        } else {
                //idoso 
                img.setAttribute('src', 'idosa.png')
        }
        }
        res.style.textAlign = 'center'
        res.innerHTML =`Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
    