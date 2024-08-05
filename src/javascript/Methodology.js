function initMethodology() {
    let methodologyCarrousel = document.getElementById('methodoly_custom_carrousel');
    methodologyCarrousel?.addEventListener('scroll', () => {
        if (methodologyCarrousel) {
            [...document.getElementsByClassName(`methodology_navigation`)]?.map((item) => {
                item.classList.remove('active');
            });
            [...document.getElementsByClassName(`methodology_card`)]?.map((item) => {
                item.classList.remove('active');
            });
            let navigation =
                Math.floor(methodologyCarrousel?.scrollLeft / ((methodologyCarrousel?.scrollWidth - methodologyCarrousel?.offsetWidth) / 3.5)) + 1;
            document.getElementById(`methodology_navigation_${navigation}`).classList.add('active');
            document.getElementById(`methodology_card_${navigation}`).classList.add('active');
        }
    });
    document.getElementById('methodology_card_last')?.addEventListener('click', () => {
        methodologyCarrousel.scrollLeft = methodologyCarrousel.scrollWidth;
    });
    document.getElementById('methodology_card_first')?.addEventListener('click', () => {
        methodologyCarrousel.scrollLeft = 0;
    });
    [...document.getElementsByClassName('methodology_card')]?.map((item, index) => {
        item?.addEventListener('click', () => {
            let navigation = (methodologyCarrousel.scrollWidth - methodologyCarrousel.offsetWidth) / 3;
            methodologyCarrousel.scrollLeft = index * navigation;
        });
    });
    [...document.getElementsByClassName('methodology_navigation')]?.map((item, index) => {
        item?.addEventListener('click', () => {
            let navigation = (methodologyCarrousel.scrollWidth - methodologyCarrousel.offsetWidth) / 3;
            methodologyCarrousel.scrollLeft = index * navigation;
        });
    });
}

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initMethodology);
}