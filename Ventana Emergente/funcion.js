

const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');




    let curiosidades = Array("Generamos 21,5 millones de toneladas de residuos alimenticios cada año. Si se compostasen estos residuos, se reduciría la misma cantidad de gases de efecto invernadero que retirar 2 millones de automóviles de la carretera.",
        "Las latas de aluminio se pueden reciclar y volver a poner en el estante de una tienda en tan sólo unos 2 meses.",
        "Nuestra basura se compone de: 45% materia orgánica, 22% papel y cartón, 10% plástico, 7% vidrio, 4% metal, 2% brik y 10% otros residuos.",
        "Al reciclar una botella de plástico ahorramos la energía necesaria para mantener una bombilla encendida durante 6 horas.");


    let estaDentro = false;
    while (estaDentro == false) {
        let numeroAleatorio = parseInt(Math.random() * 10);
        if (numeroAleatorio >= 0 && numeroAleatorio < curiosidades.length) {


            let texto = document.createTextNode(curiosidades[numeroAleatorio]);
            let p = document.createElement("p");
            p.append(texto);
            document.getElementById("close").parentElement.insertBefore(p,document.getElementById("close"));

            
            estaDentro = true;
        } else {
            estaDentro = false;
        }
    }

   // verifica que el localStorage sea null para mostrar el mensaje
if( !sessionStorage.getItem('ingreso') ){

    modal_container.classList.add('show');  
    // estableces el sessionStorage en 1 para que no se vuelva a cumplir la condicion
    sessionStorage.setItem('ingreso',1); 

}
close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});