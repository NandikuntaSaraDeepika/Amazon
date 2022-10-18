const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".fa-x");
const black = document.querySelector(".black");
const sidebtn = document.querySelector(".second-1");

sidebtn.addEventListener("click", ( ) => {
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
    document.body.classList.add("stop-scroll")
});
cross.addEventListener("click", ( ) => {
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");
    document.body.classList.remove("stop-scroll")
});

window.onload = couponload()

function couponload(){
    document.querySelector(".main").style.visibility='visible';
    document.querySelector(".carouselslide").style.opacity = '0.4'
    // document.querySelector(".productp").style.opacity = '0.4'

    document.body.classList.add("stop-scroll")
};
function couponclose(){
    document.querySelector(".main").style.visibility='hidden';
    document.querySelector(".carouselslide").style.opacity = '1'
    // document.querySelector(".productp").style.opacity = '0.4'
    document.body.classList.remove("stop-scroll")
};
 
let body = document.querySelector('body');
let dark_mode_btn = document.querySelector('.dark_mode_btn');
let dark_mode_status = false;            
    dark_mode_btn.addEventListener('click', function(){
    body.classList.toggle('dark_mode_active');
    if (dark_mode_status == false) {
    this.innerHTML = '<i class="fa-sharp fa-solid fa-sun" aria-hidden="true">';
    dark_mode_status = true;
    }else{
    this.innerHTML = '<i class="fa-solid fa-moon" aria-hidden="true"></i>';
    dark_mode_status = false;
    }
    });
    