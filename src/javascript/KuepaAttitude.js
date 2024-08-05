function initKuepaAttitude() {
    let attitude_custom_carrousel = document.getElementById('attitude_custom_carrousel');
    attitude_custom_carrousel?.addEventListener('scroll', () => {
        if (attitude_custom_carrousel) {
            [...document.getElementsByClassName(`attitude_navigation`)]?.map((item) => {
                item.classList.remove('active');
            });
            let navigation =
                Math.floor(
                    attitude_custom_carrousel?.scrollLeft / ((attitude_custom_carrousel?.scrollWidth - attitude_custom_carrousel?.offsetWidth) / 5)
                ) + 1;
            document.getElementById(`attitude_navigation_${navigation}`).classList.add('active');
        }
    });
    [...document.getElementsByClassName('attitude_card')]?.map((item, index) => {
        item?.addEventListener('click', () => {
            let navigation = (attitude_custom_carrousel.scrollWidth - attitude_custom_carrousel.offsetWidth) / 5;
            attitude_custom_carrousel.scrollLeft = index * navigation;
        });
    });
    [...document.getElementsByClassName('attitude_navigation')]?.map((item, index) => {
        item?.addEventListener('click', () => {
            let navigation = (attitude_custom_carrousel.scrollWidth - attitude_custom_carrousel.offsetWidth) / 5;
            attitude_custom_carrousel.scrollLeft = index * navigation;
        });
    });
}

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initOurStories);
}