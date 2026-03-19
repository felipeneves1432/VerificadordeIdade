function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.getElementById('res')
if (fano.value.length == 0 || fano.value > ano )
    {
    window.alert('[ERROR]  os dados e tente novamente')
} else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement ('img')
    img.setAttribute('id','foto')

    if (fsex[0].checked) {
        genero ='Homem'
        if (idade >=0 && idade<11){
            //crianca
            img.setAttribute('src', 'menino-fotor-.png')
        } else if(idade >=11 && idade < 30){
            //jovem
            img.setAttribute('src', 'novs-fotor.png')
        } else if(idade >= 30 &&idade  < 60 ) {
          //adulto
            img.setAttribute('src', 'adulto-fotor-.png')
        } else{
            //idoso
            img.setAttribute('src', 'idoso-fotor-.png')
        }
    } else if (fsex[1].checked){
       genero='Mulher'
        if (idade >=0 && idade<11){
            //crianca
            img.setAttribute('src', 'menina-fotor-.png')
        } else if(idade >=11 && idade < 30){
            //jovem
            img.setAttribute('src', 'jovem-fotor-.png')
        } else if(idade >= 30 &&idade  < 60 ) {
          //adulto
            img.setAttribute('src', 'adulta-fotor-.png')
        } else{
            //idoso
            img.setAttribute('src', 'idosa-fotor-.png')
        }
    }
   res.style.textAlign = `center`
    res.innerHTML =`Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
}
}
