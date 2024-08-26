console.log("Acordion cargado");

const dataAccordion = [
    {
        "title": "Eventos",
       
        "desc": "Participamos en los eventos de tiro Con arco mas importantes del pais. Las fechas son anunciadas en nuestras redes sociales"
        
    },
    {
        "title": "Premiaciones",
        "desc": "Somos medallistas nacionales e internacionales. Además tenemos ranking interno"
    },
    {
        "title": "Contáctenos",
        "desc": "Con gusto le atenderemos y evacuaremos cualquier duda tel: 8316-7985/8847-1774."

    },


];

(function () {
    let ACCORDION = {
        init: function () {
            let _self = this
            //llamamos las funciones
            this.insertData(_self);
            this.eventhandler(_self);

        },
        insertData: function (_self) {
            dataAccordion.map(function (item, index) {
                document.querySelector('.main-accordion-container').insertAdjacentHTML('beforeend', _self.tplaccordionItem(item));


            });
        },

        eventhandler: function (_self) {
            let arrayRefs = document.querySelectorAll('.accordion-title');
            for (let x = 0; x < arrayRefs.length; x++) {
                arrayRefs[x].addEventListener('click', function (event) {
                    console.log('event: ', event);
                    _self.showTab(event.target);

                });
            }

        },

        tplaccordionItem: function (item) {
            return (
                `<div class= 'accordion-item'>
<div class= 'accordion-title'><p>${item.title}</p></div>
<div class= 'accordion-desc'><p>${item.desc}</p></div>
</div>`

            )
        },
        showTab: function (refItem) {
            let activeTab = document.querySelector('.tab-active')
            if (activeTab) {
                activeTab.classList.remove('tab-active');
            }
            console.log('showtab: ', refItem);
            refItem.parentElement.classList.toggle('tab-active');

        },


    }
    ACCORDION.init()

})();