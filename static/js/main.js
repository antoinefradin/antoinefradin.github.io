/*==================== MOBILE NAV MENU ====================*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*==== MENU SHOW ====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu') /*Ajoute la classe spécifiée*/
    })
}

/*==== MENU HIDDEN ====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu') /*Ajoute la classe spécifiée*/
    })
}


/*==== REMOVE MOBILE MENU ====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction)) 


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
//highlight menu icon
/********************************************************************/
/************* A ADAPTER EN FONCTION DES PAGES **********************/
/********************************************************************/
//const sections = document.querySelectorAll('section[id]');

//function scrollActive(){
//    const scrollY = window.pageYOffset
//
//    sections.forEach(current=> {
//        const sectionHeight = current.offsetHeight; /*La valeur en pixels de la hauteur totale de l'élément identifé par id*/
//        /*const sectionTop = current.offsetTop - 50; /*Returns the top position (in pixels) relative to the top of the offsetParent element
//        sectionId = current.getAttribute('id')
//
//        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
//        }else{
//            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
//        }
//    })
//}

//window.addEventListener('scroll',scrollActive)
/********************************************************************/
/********************************************************************/
/********************************************************************/

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const nav = document.getElementById('header');
    //  When the scroll is greater than 80 viewport height, add the scroll-header class

    if(this.scrollY >= 80){ //'window' is the whole web page. 'this' depends on the function you are in.
        nav.classList.add('scroll-header')
    }else{
        nav.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll',scrollHeader)



/*######################## PORTFOLIO ########################*/
/*==================== PORTFOLIO PROJECTS MENU ====================*/
const projectsList = document.querySelector('.projects__list');
const selector = '.projects__link';
const projectsLink = document.querySelectorAll('.projects__link');


function linkAction_projectsMenu(evt){
    const target = evt.target;
    if(target){
        projectsLink.forEach( elem => elem.classList.remove('active-link'));
        target.classList.add('active-link');
        
        const projectsAll = document.querySelectorAll('.project');
        projectsAll.forEach( elem => elem.classList.remove('show-project'));

        switch(target.innerText){
            case "All" : 
                projectsAll.forEach( elem => elem.classList.add('show-project'));
                break;
            case "AI/Data" : 
                projectsAll.forEach(function(elem){
                    if (elem.classList.contains("data")) {
                        elem.classList.add('show-project');
                    }
                });
                break;
            case "Flutter" : 
                projectsAll.forEach(function(elem){
                    if (elem.classList.contains("flutter")) {
                        elem.classList.add('show-project');
                    }
                });
                break;
            case "Golf" :
                projectsAll.forEach(function(elem){
                    if (elem.classList.contains("golf")) {
                        elem.classList.add('show-project');
                    }
                });
                break;
            } 
    }
};
projectsLink.forEach(n => n.addEventListener('click',linkAction_projectsMenu)) 




