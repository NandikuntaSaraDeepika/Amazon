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
/*
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
 */
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


    
//geo with Weather


//initiliazing all elements constant

const temparatureField = document.querySelector(".weather1 span")
const cityField = document.querySelector(".weather2 p")
const dateField = document.querySelector(".weather2 span")
const emojiField = document.querySelector(".weather3 img")
const weatherField = document.querySelector(".weather3 span")
const searchField = document.querySelector(".searchField")
const form = document.querySelector("form")

//Adding eventListener to the form

form.addEventListener("submit",search)

//Default Location

let target = "Hyderabad"

//function to fetch data from API

const fetchData = async(target) =>{
try {
    const url = `https://api.weatherapi.com/v1/current.json?key=eb25ae7039054da5840154151222310&q=${target}`
    const response = await fetch(url);
    const data = await response.json();


    
//destructuring

    const {
        
        current:{
            temp_c,
            condition:{text,icon},
        },
        location:{name,localtime},


    } = data
//calling the update function

    updateDom(temp_c,name,localtime,icon,text);
} catch (e) {
    alert(`Location not found!`)
}
};

//function to manipulatedom

function updateDom (temparature,city,time,emoji,text){
    const exactTime = time.split(" ")[1];
    const exactDate = time.split(" ")[0];
    const exactDay = getDayName(new Date(exactDate).getDay());

    temparatureField.innerText = temparature;
    cityField.innerText = city;
    dateField.innerText = `${exactTime} - ${exactDay} ${exactDate}`
    emojiField.src = emoji;
    weatherField.innerText = text;
}

//function to search loction name

fetchData(target);

function search (e){
    e.preventDefault();
    target = searchField.value;
    fetchData(target)
}


//function for getting the full name of the day

function getDayName (num){
    switch (num){
        case 0:
            return "Sunday"; 
            case 1: 
                return "Monday"
                case 2: 
                    return "Tuesday"
                    case 3: 
                        return "Wednesday"
                        case 4: 
                            return "Thursday"
                            case 5: 
                                return "Friday"
                                case 6: 
                                    return "Saturday"
        default:
            return "Don't know"
    }
}

    