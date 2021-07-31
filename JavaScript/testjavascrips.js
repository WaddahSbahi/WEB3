function bgImage() {
    var imgArray =
        ['url("images/02.jpg")', 'url("images/03.jpg")'
            , 'url("images/01.jpg")', 'url("images/04.jpg")'
        ];

    var lindingPage = document.querySelector(".linding-page");

    var bg = imgArray[Math.floor(Math.random() * imgArray.length)];

    lindingPage.style.backgroundImage = bg;

};
setInterval(bgImage, 10000);

//Open Setting

var setting = document.getElementById('setting');
var open = document.getElementById('open');

open.onclick = function () {

    setting.classList.toggle("open");
    open.classList.toggle("fa-spin")
};
// Main Color
var mainColor = localStorage.getItem("color-option");
if (mainColor !== null) {
    document.documentElement.style.setProperty('--maincolor', localStorage.getItem("color-option"));

}
//Colors

var colorLi = document.querySelectorAll(".colors-list li");
colorLi.forEach(li => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty('--maincolor', e.target.dataset.color);
        localStorage.setItem("color-option" , e.target.dataset.color);

        handleActive(e);
    });
});


// Skills Selector

var allSkills = document.querySelectorAll(".skill-box .skill-progress span");

window.onscroll = function () {
    if (this.scrollY > 1150) {

        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });
    };

};
//Gallery
var ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach(img => {
    img.addEventListener('click', (e) => {

        var overlay = document.createElement("div");
        overlay.className = 'popup-overlay';
        document.body.appendChild(overlay);
        var popupBox = document.createElement("div");
        popupBox.className = 'popup-box';
        var popupImage = document.createElement("img");
        popupImage.src = img.src;
        popupBox.appendChild(popupImage);
        document.body.appendChild(popupBox);
        var closeButton = document.createElement("span");
        var closeButtonText = document.createTextNode("X");
        closeButton.appendChild(closeButtonText);
        closeButton.className = 'close-button';
        popupBox.appendChild(closeButton);
        closeButton.onclick = function () {
            document.querySelector(".popup-overlay").remove();
            document.querySelector(".popup-box").remove();
        };
    });
});

//LinksSmooth

var allBullets = document.querySelectorAll(".nav-bullets .bullets");
var allLinks = document.querySelectorAll(".link a");

function scrollTo(elements){

    elements.forEach(ele => {
        ele.addEventListener("click" , (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};
scrollTo(allLinks);
scrollTo(allBullets);

//Handle Active Class

function handleActive (ac){

    ac.target.parentElement.querySelectorAll(".active").forEach(element =>{
        element.classList.remove("active");
    });

    ac.target.classList.add("active");
};


//menu

var btn = document.querySelector(".menu");
var link = document.querySelector(".header-area .link");
btn.onclick = function(e){
    e.stopPropagation();
    link.classList.toggle("open");
    btn.classList.toggle("menu-active");
};
link.onclick = function(e){
    handleActive(e);
}

// click anywhere outside menu
document.addEventListener("click" , (e) =>{
    if (e.target !== btn  &&  e.target !== link ) {
        link.classList.remove("open");
        btn.classList.remove("menu-active");
    }
});
link.onclick = function(e){
    e.stopPropagation();
};

