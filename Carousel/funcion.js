/**
 * @author Alejandro Alba Castillo
 * @version 1.0
 * Objetivo: Se necesita que se muestren varias imagenes en un carousel con la funcionalidad de los botones correspondientes
 */

//Se crea un array con las rutas de las fotos de los productos del carousel que se vaya a mostrar
//Las rutas se obtendrian del servidor
var fotos = Array("https://viajes.nationalgeographic.com.es/medio/2020/09/30/foto_43a9fdcb_1280x720.jpg",
    "https://d500.epimg.net/cincodias/imagenes/2019/06/04/lifestyle/1559679036_977776_1559679371_noticia_normal.jpg",
    "https://images.pexels.com/photos/1252983/pexels-photo-1252983.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");

   
for (const iterator in fotos) {
    let foto = document.createElement("img");//Se crea una imagen
    foto.setAttribute("src", fotos[iterator]);//Se le asigna la ruta a la imagen creada
    foto.setAttribute("id", "foto" + iterator);//Se le asigna un id propio a la imagen
    if (iterator == 0) {
        foto.setAttribute("class", "visible");//Si es la primera imagen se le asigna la clase ".visible"
    } else {
        foto.setAttribute("class", "oculto");//Si no es la primera imagen se le asigna la clase ".oculto"
    }
    document.getElementById("fotos").append(foto);//Se añade la foto al div que lo va a contener
}
/**
 * @param tiempo se inicializa una variable vacia
 */
let tiempo;
/**
 * @param cooldown se inicializa una variable vacia
 */
let cooldown;

//Se llama a la funcion que inicia el intervalo
iniciar()

//Se le asigna el evento para pasar a la anterior foto al boton con id "before"
document.getElementById("before").addEventListener("click", anterior);
//Se le asigna el evento para pasar a la siguiente foto al boton con id "next"
document.getElementById("next").addEventListener("click", siguiente1);

/**
 * Pasa a la siguiente foto del array "fotos"
 * @author Alejandro Alba Castillo
 * @param {Number} - Recoge la posicion de una foto en el array "fotos"
 */
function siguiente() {
    let indice = fotos.indexOf(document.getElementsByClassName("visible")[0].getAttribute("src"));//Se recoge la posicion del elemento con la clase ".visible", se especifica la posicion 0 ya que solo hay uno
    document.getElementById("foto" + indice).className = "oculto";//Se la asigna la clase ".oculto" a la foto cuyo id es foto concatenado con el indice
    if (fotos[indice + 1] == null || fotos[indice + 1] == undefined) {//Se comprueba si es la última foto del array
        document.getElementById("foto0").className = "visible";//Si es la última foto del array, se le asigna a la primera foto la clase ".visible"
    } else {
        document.getElementById("foto" + (indice + 1)).className = "visible";//Si no es la última foto del array, se le asigna a la siguiente foto la clase ".visible"
    }
}

/**
 * Es la función que se ejecutará al darle al botón con id "next"
 * @author Alejandro Alba Castillo
 */
function siguiente1() {
    parar();//Se llama a la parar
    if (cooldown == null) {//Se comprueba si la variable cooldown tiene algun valor
        siguiente();//Se llama a la función siguiente();
        iniciarCont();//Se llama a la función iniciarCont();
    } else {
        clearTimeout(cooldown);//Se borra el timeout de la variable cooldown
        cooldown = null;//Se le quita el valor a la variable cooldown
        siguiente1();//Se llama a si misma recursivamente
    }

}

/**
 * Es la función que inicializa el tiempo de espera para que se ejecute la función iniciar
 * @author Alejandro Alba Castillo
 */
function iniciarCont() {
    cooldown = setTimeout(iniciar, 3000);//Número de milisegundos  ((Se acambia al numero de milisegundos que se quiera esperar hasta que se ejecute la función iniciar))
}

/**
 * Es la función que se ejecuta al darle al boton con id "before" y tambien la que permite pasar a la foto anterior del array
 * @author Alejandro Alba Castillo
 */
function anterior() {
    parar()//Se llama a la función parar
    if (cooldown == null) {//Se comprueba si la variable cooldown tiene algun valor
        let indice = fotos.indexOf(document.getElementsByClassName("visible")[0].getAttribute("src"));//Se recoge la posicion del elemento con la clase ".visible", se especifica la posicion 0 ya que solo hay uno
        document.getElementById("foto" + indice).className = "oculto";//Se la asigna la clase ".oculto" a la foto cuyo id es foto concatenado con el indice
        if (fotos[indice - 1] == null || fotos[indice - 1] == undefined) {//Se comprueba si es la primera foto del array
            document.getElementById("foto" + (fotos.length - 1)).className = "visible";//Si es la primera foto del array, se le asigna a la última foto la clase ".visible"
        } else {
            document.getElementById("foto" + (indice - 1)).className = "visible";//Si no es la primera foto del array, se le asigna a la anterior foto la clase ".visible"
        }
        iniciarCont();//Se llama a la función iniciarCont();
    } else {
        clearTimeout(cooldown);//Se borra el timeout de la variable cooldown
        cooldown = null;//Se le quita el valor a la variable cooldown
        anterior();//Se lama a si misma recursivamente
    }
}
/**
 * Función que para el intervalo
 * @author Alejandro Alba Castillo
 */
function parar() {
    clearInterval(tiempo);
}
/**
 * Función que inicializa el intervalo 
 */
function iniciar() {
    tiempo = setInterval(siguiente, 1500);//Se inicaliza el intervalo que llama cada 1.5 segundos a la función siguiente
}