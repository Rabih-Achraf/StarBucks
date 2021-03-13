

const col2 = document.querySelector(".col2");
const col1 = document.querySelector(".col1");

const tl = new TimelineMax({});

tl.fromTo(col1,1.5,{ x : "139%" },{ x : "0%", ease: Power2.easeIn}),
tl.fromTo(col2,1.5,{ y : "100%" },{ y : "0%", ease: Power2.easeOut}, "-=0.5");




/* scroll animation 


document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
    .from('.imgeffect', 4, {
        y: -100,
        x: -150,
        ease: Power3.easeInOut
    })

    let scene = new ScrollMagic.Scene({
        triggerElement: '.effect',
        duration: '100%',
        triggerHook: 0,
        offset: '100'
    })
    .setTween(timeline)
    .setPin('.effect')
    .addTo(controller);

})

*/
