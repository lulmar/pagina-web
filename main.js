let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app,{
    loop: true,
    delay:75,
    cursor: "<span style'color:#fb4993;'>|</span>",
});

typewriter
    .pauseFor(2500)
    .typeString('<span style="color:rgb(25, 25, 119);">Es uno de los mejores novelistas de su generacion, haciendo principal mente genero de terror.</span>')
    .pauseFor(200)
    .deleteChars(10)
    .start();9