let hamburger = document.querySelector('.hamburger');//ボタンを押したら変数
let nav = document.querySelector("nav");//navを検索する
let home = document.querySelector(".home");//ほーむ
let showcaseLink = document.querySelector(".showcase_link");
let serviceslink = document.querySelector('.services_link');
let designerslink = document.querySelector('.designers_link');
let pacagelink = document.querySelector('.pacage_link');
let contactlink = document.querySelector('.contact_link');
hamburger.onclick = function(){//ボタンを押すと機能がオンになります
    hamburger.classList.toggle('hamburger_active');//スイッチを押すとクラスが切り替わります
    nav.classList.toggle("nav_active")//以下同文
}
home.onclick = function(){
    hamburger.classList.remove('hamburger_active');//スイッチを押すとクラスが切り替わります
    nav.classList.remove("nav_active")//以下同文
}
showcaseLink.onclick = function(){
    hamburger.classList.remove('hamburger_active');//スイッチを押すとクラスが切り替わります
    nav.classList.remove("nav_active")//以下同文
}
serviceslink.onclick = function(){
    hamburger.classList.remove('hamburger_active');//スイッチを押すとクラスが切り替わります
    nav.classList.remove("nav_active")//以下同文
}
designerslink.onclick = function(){
    hamburger.classList.remove('hamburger_active');//スイッチを押すとクラスが切り替わります
    nav.classList.remove("nav_active")//以下同文
}
pacagelink.onclick = function(){
    hamburger.classList.remove('hamburger_active');//スイッチを押すとクラスが切り替わります
    nav.classList.remove("nav_active")//以下同文
}
contactlink.onclick = function(){
    hamburger.classList.remove('hamburger_active');//スイッチを押すとクラスが切り替わります
    nav.classList.remove("nav_active")//以下同文
}