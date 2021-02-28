//opdracht1
let BTN = document.getElementById("mybutton");

BTN.addEventListener('click', function(){ alert("button clicked")});

//opdracht2
let BTN2 = document.getElementById("mybutton2");

const changeColor = function(){
    BTN2.addEventListener('click', function(){ BTN2.classList.add("red-background")}
}

//opdracht3

const toggleColor = function(){
    BTN2.addEventListener('click', function(){ BTN2.classList.toggle("red-background")}
