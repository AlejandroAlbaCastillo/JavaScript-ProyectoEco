/**
 * @version 2.0
 */

var fotos = Array("https://viajes.nationalgeographic.com.es/medio/2020/09/30/foto_43a9fdcb_1280x720.jpg",
    "https://d500.epimg.net/cincodias/imagenes/2019/06/04/lifestyle/1559679036_977776_1559679371_noticia_normal.jpg",
    "https://images.pexels.com/photos/1252983/pexels-photo-1252983.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://imborrable.com/wp-content/uploads/2022/10/fotos-gratis-de-stock-1.jpg");





generarCarousel("Recomendados");
generarCarousel("Últimos subidos");
generarCarousel("Más Buscados");

function generarCarousel(tipo) {
    
    let section = document.createElement("section");
    let tituloTexto = document.createTextNode(tipo);
    let titulo = document.createElement("h2");
    titulo.append(tituloTexto);
    section.append(titulo);
    section.setAttribute("class", "carousel");
    section.setAttribute("aria-label", "Gallery")

    let lista = document.createElement("ol");
    lista.setAttribute("class", "carousel__viewport");

    let botones = document.createElement("aside");
    botones.setAttribute("class", "carousel__navigation");

    lista_botones = document.createElement("ol");
    lista_botones.setAttribute("class", "carousel__navigation-list")

    for (const index in fotos) {
        let enlace1 = document.createElement("a");
        if (index == (0)) {
            enlace1.setAttribute("href", "#carousel__"+tipo + (fotos.length - 1));
        } else {
            let antes = index - 1;
            enlace1.setAttribute("href", "#carousel__"+tipo + antes);
        }
        enlace1.setAttribute("class", "carousel__prev");

        let enlace2 = document.createElement("a");
        if (index == (fotos.length - 1)) {
            enlace2.setAttribute("href", "#carousel__"+tipo+"0");
        } else {
            let siguiente = parseInt(index) + 1;
            enlace2.setAttribute("href", "#carousel__"+tipo + siguiente);
        }
        enlace2.setAttribute("class", "carousel__next");

        let div__contenedor = document.createElement("div");

        div__contenedor.setAttribute("class", "carousel__snapper")

        let li = document.createElement("li");
        li.setAttribute("id", "carousel__"+tipo + index)
        li.setAttribute("tabindex", "0")
        li.setAttribute("class", "carousel__slide")
        li.setAttribute("style", " list-style:none; background-image: url('" + fotos[index] + "'); background-size: 100%; background-repeat: no-repeat; background-position-y: center;")//Comentar las lineas 115 y 120 del fichero css

        li.append(div__contenedor);
        li.append(enlace1)
        li.append(enlace2)

        lista.append(li);
        let enlace = document.createElement("a");
        enlace.setAttribute("href", "#carousel__"+tipo + index);
        enlace.setAttribute("class", "carousel__navigation-button");

        let elemento = document.createElement("li");
        elemento.setAttribute("class", "carousel__navigation-item")

        elemento.append(enlace);
        lista_botones.append(elemento);

    }
    botones.append(lista_botones)
    section.append(lista);
    section.append(botones);

    document.getElementById("contenedor").append(section);

}



