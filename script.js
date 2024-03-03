function toggleMode(){
    const html = document.documentElement
    
    // essa linha resume td o condicional de baixo
    //html.classList.toggle('light')

    if(html.classList.contains('light')){
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }

    //pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if(html.classList.contains('light')){
        // se tiver light mode
        img.setAttribute('src',  './assets/avatar-light-arthur.png')
    } else {
        // se tiver sem light mode
        img.setAttribute('src', './assets/avatar.png')
    }

}