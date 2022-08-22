
const HamburgerBtn = document.getElementsByClassName('hamburger')[0];
const NavMenu = document.getElementsByClassName('nav-menu')[0];

const NavLink = document.getElementsByClassName('nav-link');

HamburgerBtn.addEventListener('click',()=>{

    HamburgerBtn.classList.toggle('active')
    NavMenu.classList.toggle('active')
 
})

Array.from(NavLink).forEach((link)=>{

    link.addEventListener('click',()=>{

        HamburgerBtn.classList.toggle('active')
        NavMenu.classList.toggle('active')

    })

})