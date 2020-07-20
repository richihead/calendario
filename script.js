//Permite utilizar la funcion Date de Javascript y guardarla en una variable date.Si no proporciona argumentos, el constructor crea un objeto Date con la hora y fecha de hoy según la hora local.
// Si proporciona algunos argumentos, debe proporcionar al menos 2 argumentos. Los argumentos vacíos se establecen a 0 (ó 1 si falta el día). 
// La fecha se mide en milisegundos desde la media noche exacta del 01 de enero de 1970 en formato UTC. Un día contiene 86.400.000 milisegundos. El rango del objeto Date va desde -100,000,000 días hasta 100,000,000 días respecto del 01 de enero de 1970 UTC.
// El objeto Date proporciona un comportamiento uniforme entre plataformas.
// El objeto Date soporta métodos UTC (universales), además de métodos horarios locales. UTC, también conocido como Greenwich Mean Time (GMT), se refiere a la hora según el Estádar Horario Mundial (World Time Standard). La hora local es la hora establecida por el ordenador donde se ejecuta JavaScript.

const date = new Date();

//crea una funcion constante que permitira realizar la renderización del calendario, que es la que guarda toda la lógica para la creacion del calendario. 

const renderCalendar = () => {
    date.setDate(1); //El setDate() método establece el día del mes para el objeto de fecha. en este caso se usa el dia "1" para inicializar cualquiera de los meses en los que se esta trabajando.

    const monthDays = document.querySelector(".days"); //Hemos visto que JavaScript provee métodos para acceder y manipular nodos del DOM, en concreto getElementById, getElementsByTagName y getElementsByName, que nos permiten acceder a un elemento por su valor de atributo id, o a la colección de elementos cuya etiqueta es de un determinado tipo o tiene como atributo name un valor concreto. Veremos ahora métodos que nos permiten acceder a cualquier nodo identificado por un selector CSS específico. Si recordamos la sintaxis CSS, a través de selectores podíamos definir de forma muy específica cómo se debían a aplicar estilos dentro de nuestra página web. Por ejemplo a través de la regla:
    // #menu1 div.destacado a {background-color: yellow;}
    // Se consigue que los elementos a (links) dentro de elementos div cuyo atributo class es “destacado” y están dentro de un elemento con id menu1 se muestren con color de fondo amarillo.
    // El selector #menu1 div.destacado a es un selector complejo que no resultaría alcanzable con las técnicas de acceso a nodos que hemos visto hasta el momento. Por ello surgen los métodos querySelector y querySelectorAll, que permiten acceder a nodos a través de un selector CSS. ////// En este caso el identificador que se esta trabajando en el DOM es el de la clase days. En la constante monthDays vamos a guardar lo que nos traiga el querySelector de .days

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    document.querySelector(".date h1").innerHTML = months[date.getMonth()];

    document.querySelector(".date p").innerHTML = new Date().toDateString();

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
};

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();