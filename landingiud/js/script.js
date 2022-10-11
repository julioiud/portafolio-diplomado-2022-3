const foot = document.getElementById('year');

const year = new Date().getFullYear();

foot.innerHTML = year

// MENU
const buttonMenu = document.getElementById('btn-menu')
const list = document.getElementById('nav-items')

let show = true;

buttonMenu.addEventListener('click', () => {
    show = !show;
    if(show){
        list.style.display = 'block'
    }else{
        list.style.display = 'none'
    }
})

window.addEventListener('resize', () => {
    const width = screen.width
    if(width >= 425.999){
        list.style.display = 'flex'
    }else{
        list.style.display = 'none'
        show = false
    }
})

(function(){
    const width = screen.width
    if(width >= 425.999){
        list.style.display = 'flex'
    }else{
        list.style.display = 'none'
    }
})();