document.addEventListener('DOMContentLoaded',function(){
    let menuIcon = document.getElementById('menu-button');
    menuIcon.addEventListener('click', function(){
        let navBar = document.getElementById('mobile-nav');
        if (window.getComputedStyle(navBar).display === "none") {
            navBar.style.display = 'block'
        }
        else{
            navBar.style.display = 'none'
        }
    })
})