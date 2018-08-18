
console.log("hello world");

const kite = document.querySelector('.kite');

const harness = document.querySelector('.harness');
const surfboard = document.querySelector('.surfboard');
console.dir(kite);
console.dir(harness);
// When I scroll to a certain position, I apply animations

window.addEventListener('scroll', (event)=> {
    console.log(scrollY);
    if (scrollY >= kite.offsetHeight ) {
        kite.classList.add('pulse');
    }
    if (scrollY >= kite.offsetHeight * 2 ) {
        harness.classList.add('pulse');
    }
    
    if (scrollY >= kite.offsetHeight * 3 ) {
        surfboard.classList.add('pulse');
    }
    
})