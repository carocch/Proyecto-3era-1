console.log("cards cargado");

const dataCards = [
    {
        "tittle": "Compañerismo",
        "url_image": "./Images/camisetas.jpg",
        "desc": "En nuestro club de tiro con arco, el compañerismo es fundamental. Valoramos el apoyo mutuo y la camaradería entre nuestros miembros. Desde los principiantes hasta los arqueros más experimentados, todos trabajamos juntos para mejorar y disfrutar del deporte. Fomentamos un ambiente en el que cada logro es celebrado en equipo, y cada desafío es una oportunidad para crecer juntos.",
        "cta": "Mostrar mas...",
        "link": "https://www.facebook.com/Asticaoficial/about?locale=es_LA&_rdr"
    },
    {
        "tittle": "Técnica",
        "url_image": "./Images/linea de tiro llena.jpg",
        "desc": "Nuestros instructores estan certificados con las normativas de World Archery y las técnicas mas actuales a nivel mundial.",
        "cta": "Mostrar mas...",
        "link": "https://www.worldarchery.sport/rankings/world-ranking?category=Compound%20Men&country=Costa%20Rica"
    },
    {
        "tittle": "torneos",
        "url_image": "./Images/Trofeos Astica.jpg",
        "desc": "Nuestro club paricipa activamente en los torneos nacionales, entrenamos utilizando las tecnologias de IANSEO para mediciones y ranking",
        "cta": "Mostrar mas...",
        "link": "https://www.ianseo.net/Details.php?toId=17822"
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