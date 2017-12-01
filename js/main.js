document.addEventListener('DOMContentLoaded', function() {
    
//    znikajacy napis na boxach - obrazkach
    
    var imgTitle = document.querySelectorAll(".img-title");  
    var boxes = document.querySelectorAll("#boxes .image");
    
    for(var i = 0; i < boxes.length; i++){
         
        boxes[i].addEventListener("mouseover",function(){
            this.querySelector(".img-title").classList.toggle("img-title-hide");
        })
        
        boxes[i].addEventListener("mouseout",function(){
            this.querySelector(".img-title").classList.remove("img-title-hide");
        })
    }
    
// slider
    
var next = document.getElementById("arrow-right");
var prev = document.getElementById("arrow-left");
    console.log(next);
var tab = [];
var lista = document.querySelectorAll(".slider ul li");

    for(var i = 0; i < lista.length; i++) {
        tab.push(lista[i]);
    }

var imageNum = 0;
tab[imageNum].classList.add("visible");//dodajemy klasę visible do obrazków

next.addEventListener('click', function(){
    tab[imageNum].classList.remove("visible");
    imageNum++;
    
    if(imageNum >= tab.length){
      imageNum = 0;  
    }
    
    tab[imageNum].classList.add("visible");
    
})
    
prev.addEventListener('click', function(){
    tab[imageNum].classList.remove("visible");
    imageNum--;
    
    if(imageNum < 0){
      imageNum =  tab.length - 1;  
    }
    
    tab[imageNum].classList.add("visible");
})
    
    
    //kalkulator
var arrows = document.querySelectorAll(".form .drop_down_list .list_arrow");
    

//pokazanie się i chowanie panelow po nacisnieciu strzalki
for (var i=0; i<arrows.length; i++) {
    arrows[i].addEventListener("click", function () {
        this.nextElementSibling.classList.toggle("hider");
    });
}


/*POLA WYBORU I PODSUMOWANIA*/
//typ fotela
var lista = document.querySelectorAll(".form .drop_down_list .lista");
    //tytuł wyboru pola
var allLabels = document.querySelectorAll(".list_label");
    //podmenu z typami

var sum = document.querySelector(".sum");
var costs = document.querySelector(".panel_right").children;
var totalSum = 0;
var sumType = 0;
var sumColor = 0;
var sumTransport = 0;
var sumPattern = 0;

var typeOfChairLabel = allLabels[0]; //selektor do pierwszej listy
var choiceTypeOfChair = document.querySelector(".panel_left h4");
var priceTypeOfChair = document.querySelector(".panel_right h4");
var typeOfChair = lista[0].children;//lista rozwijalna rodzaju


for (var i=0; i<typeOfChair.length; i++) {
    typeOfChair[i].addEventListener("click", function () {
            typeOfChairLabel.innerText = this.innerText;
            choiceTypeOfChair.innerText = this.innerText;
            priceTypeOfChair.innerText = this.dataset.price;
            sumType = parseInt(priceTypeOfChair.innerText);
            totalSum = sumType + sumColor + sumPattern + sumTransport;
            sum.innerText = totalSum;
            
        lista[0].classList.add("hider"); //ukrycie listy po wybraniu
    });
}


//kolor fotela
var colorOfChairLabel = allLabels[1];
var choiceColorOfChair = document.querySelector(".panel_left .color");
var priceColorOfChair = document.querySelector(".panel_right .color");
var colorOfChair = lista[1].children;

for (var i=0; i<typeOfChair.length; i++) {
    colorOfChair[i].addEventListener("click", function () {
            colorOfChairLabel.innerText = this.innerText;
            choiceColorOfChair.innerText = this.innerText;
            priceColorOfChair.innerText = this.dataset.price;
            sumColor = parseInt(priceColorOfChair.innerText);
            totalSum = sumType + sumColor + sumPattern + sumTransport;
            sum.innerText = totalSum;
        
        lista[1].classList.add("hider");
    });
}

//rodzaj materialu
var patternOfChairLabel = allLabels[2];
var choicePatternOfChair = document.querySelector(".panel_left .pattern");
var pricePatternOfChair = document.querySelector(".panel_right .pattern");
var patternOfChair = lista[2].children;

for (var i=0; i<patternOfChair.length; i++) {
    patternOfChair[i].addEventListener("click", function () {
            patternOfChairLabel.innerText = this.innerText;
            choicePatternOfChair.innerText = this.innerText;
            pricePatternOfChair.innerText = this.dataset.price;
            sumPattern = parseInt(pricePatternOfChair.innerText);
            totalSum = sumType + sumColor + sumPattern + sumTransport;
            sum.innerText = totalSum;
        
        lista[2].classList.add("hider");
    });
}

//wybor transportu
var checkboxTransport = document.querySelector("#transport");
var choiceTransport = document.querySelector(".panel_left .transport");
var priceTransport = document.querySelector(".panel_right .transport");

checkboxTransport.addEventListener("click", function () {
    if (this.checked) {
        choiceTransport.innerText = "Transport";
        priceTransport.innerText = this.dataset.price;
        sumTransport = Number(priceTransport.innerText);
        totalSum = sumType + sumColor + sumPattern + sumTransport;
        sum.innerText = totalSum;
    } else {
        sumTransport = 0;
        choiceTransport.innerText = "";
        priceTransport.innerText = "";
        totalSum = sumType + sumColor + sumPattern;
        sum.innerText = totalSum;
    }
});
    
    
    
    
    
})