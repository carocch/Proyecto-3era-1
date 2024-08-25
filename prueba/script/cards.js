console.log("cards cargado");

const dataCards = [
    {
        "tittle": "Ingenieria Industrial",
        "url_image": "./Images/ingenieria-industrial.png",
        "desc": "Optimiza procesos, sistemas u organizaciones complejos mediante el desarrollo, la mejora y la implementación de sistemas integrados de personas (recursos humanos), riqueza, conocimiento, información y equipamiento, energía, materiales y procesos.",
        "cta": "Mostrar mas...",
        "link": "./ingenieria-industrial.php"
    },
    {
        "tittle": "Ingenieria en Sistemas",
        "url_image": "./Images/ingenieria-sistemas.png",
        "desc": "Revisa minuciosamente los datos para la creación de programas, aplicativos y herramientas que faciliten los procesos empresariales en un entorno de información segura y protegida.",
        "cta": "Mostrar mas...",
        "link": "./ingenieria-sistemas.php"
    },
    {
        "tittle": "Administracion",
        "url_image": "./Images/administracion.png",
        "desc": "Asegura el funcionamiento óptimo de cada elemento dentro de la organización, promoviendo el uso eficiente de los recursos aplicándolos para la obtención de las rentabilidades propuestas.",
        "cta": "Mostrar mas...",
        "link": "./administracion.php"
    }
];

    (function () {
        let CARD = {
            init: function () {
                let _self = this;
                // Llamar a la función
                this.insertData(_self);
            },

            insertData: function (_self) {
                dataCards.forEach(function (item, index) {
                    document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));
                });
            },
            tplCardItem: function (item, index) {
                return (`<div class='card-item' id="card-number-${index}">
                <img src="${item.url_image}" alt="${item.tittle}"/>
                <div class='card-info'>
                <p class='card-title'>${item.tittle}</p>
                <p class='card-desc'>${item.desc}</p>
                <a class='card-cta' target='_blank' href='${item.link}'>${item.cta}</a>
                </div>
                </div>`);
            }
        }
        CARD.init();
    })();