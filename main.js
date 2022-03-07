// Start website theme
let websiteTheme = document.getElementById("website-theme"),
    Themes = document.querySelector('.themes')
    root = document.querySelector(':root');
window.onload = () => {
    if(localStorage.panelTheme === undefined){
        localStorage.setItem('panelTheme','#10cab7')
        Array.from(Themes.children).forEach(element =>{ 
            return element.getAttribute("data-color") === localStorage.panelTheme ? element.classList.add("active") : element.classList.remove("active");
        })
    }else{
        root.style.setProperty('--main-color', localStorage.panelTheme);
    }
}
Array.from(Themes.children).forEach(element =>{ 
    return element.getAttribute("data-color") === localStorage.panelTheme ? element.classList.add("active") : element.classList.remove("active");
})
websiteTheme.onmouseover = function(){
    websiteTheme.style.cursor = 'pointer'
    Themes.style.display = 'flex';
    websiteTheme.style.paddingLeft = '30px';
};
websiteTheme.onmouseleave = () => {
    Themes.style.display = 'none';
    websiteTheme.style.paddingLeft = '15px';
};
Themes.onmouseover = function(){
    Themes.style.display = 'flex';
    websiteTheme.style.paddingLeft = '30px';
};
Themes.onmouseleave = () => {
    Themes.style.display = 'none';
    websiteTheme.style.paddingLeft = '15px';
};
Array.from(Themes.children).forEach(element => {
    element.onclick = () => {
        root.style.setProperty('--main-color', element.getAttribute("data-color"));
        localStorage.setItem('panelTheme', element.getAttribute("data-color"));
        Array.from(Themes.children).forEach(element1 =>{ 
            return element1.getAttribute("data-color") === localStorage.panelTheme ? element1.classList.add("active") : element1.classList.remove("active");
        })
    }
});
// End website theme
// nav menu
let navbar = document.querySelector("nav");
navbar.onclick = () => {
    if(window.getComputedStyle(navbar.children[0].children[1]).width === "15px" && window.getComputedStyle(navbar.children[1]).display === 'none'){
        navbar.children[0].children[1].style.width = '100%';
        navbar.children[1].style.display = "block";
    }else{
        navbar.children[0].children[1].style.width = '50%';
        navbar.children[1].style.display = "none";
    }
}
// end nav menu
// scroll to top arrow
let upArrow = document.querySelector('.arrow');
window.onscroll = function(){
    if(window.scrollY >= 100){
        upArrow.style.display = "flex";
        window.setTimeout(function() {
            upArrow.classList.add('fade-in')
        }, 50)
    }
    if(window.scrollY <= 100){
        upArrow.style.display = "none";
        window.setTimeout(function() {
            upArrow.classList.remove('fade-in')
        }, 100)
    }
}
upArrow.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth',
    })
})
// end scroll to top arrow
// special heading
let specialHeadingh1 = document.querySelectorAll(".special-heading-h1");
Array.from(specialHeadingh1).forEach(element => {
    if( window.getComputedStyle(element.parentElement.parentElement).backgroundColor === "rgba(0, 0, 0, 0)"){
        element.style.color = "#f6f6f6";
    }else {
        element.style.color = "#ececec";
    }
})
// end special heading