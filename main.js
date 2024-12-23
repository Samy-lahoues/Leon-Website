// Select DOM elements
const links = document.getElementById("links");
const secondSpan = document.querySelector(".links .icon span:nth-child(2)")
const nav = document.querySelector(".links ul");
nav.style.display = "none";
links.onclick = () =>{
    if (nav.style.display === "none"){
        secondSpan.style.width = "100%";
        nav.style.display = "inline-block";
        nav.style.transition = "all 0.5s";
    }
    else{
        nav.style.display = "none";
        secondSpan.style.width = "70%";
    }
        console.log(`class list : ${nav.classList}` );
}