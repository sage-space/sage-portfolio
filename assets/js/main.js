/*==================== MENU SHOW Y HIDDEN ====================*/
const navmenu = document.getElementById('nav-menu')
const navtoggle = document.getElementById('nav-toggle')
const navclose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navtoggle){
    navtoggle.addeventlistener('click', () =>{
        navmenu.classList.add(show-menu)
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navclose){
    navclose.addeeventlistener('click',() =>{
        navmenu.classList.remove(show-menu)
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== ACCORDION SKILLS ====================*/
const skillscontent = document.getElementsByClassName('skills_content')
const skillsheader = document.querySelectorAll('skills__header')

function toggleskills(){
    let itemClass = this.parentNode.ClassName

    for(i=0; i < skillscontent.length; i++){
        skillscontent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'

    }
}

skillsheader.forEach((el) =>{
    el.addEventListener('click', toggleskills)
})

/*==================== QUALIFICATION TABS ====================*/
/* const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content')

tabs.forEach(tab =>{
    tab.addEventListener('clicl', () =>{
        const target = document.querySelectorAll(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
        tab.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})
 */
/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal')
const modalbtns = document.querySelectorAll('.services__button')
const modalcloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalbtns.forEach((modalbtn,i) =>{
    modalbtn.addEventListener('click',() =>{
        modal(i)
    })
})

modalcloses.forEach((modalclose) =>{
modalclose.addEventListener('click',() =>{
    modalViews.forEach((modalview) =>{
        modalview.classList.remove('active_modal')
    })
})
})

/*==================== PORTFOLIO SWIPER  ====================*/
