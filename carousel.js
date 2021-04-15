// HW1: Constante se definec cu declaratia: const.
// Spre deosebire de variabile, valoarea unei constante nu poate fi schimbata si nu poate fi redeclarata, valoarea lor ramane aceeasi, fixa.
// Ca si variabilele, constantele se folosesc specificand numele lor, si rezulta valoarea care este atribuita.
// Numele constantelor nu trebuie sa coincida cu denumirea variabililor sau functiilor  de aceea ii preferintial sa fie scrise cu litere majuscule.
const IMAGES = [   // type - Array
    "images/1-800x600.jpg", // 0
    "images/2-800x600.jpg", // 1
    "images/3-800x600.jpg"  // 2
]
const TITLES = [
    "BRIDGE",
    "The silence of the sea",
    "City"
]
// start/current slide
let currentIndex = 0
const EFECTS = [
    "animate__bounceInLeft",
    "animate__bounceInRight",
    "animate__fadeInLeft",
    "animate__fadeInRight"
]

function showImage( n ) {
    let i = Math.round(Math.random() * 3)
     carouselSlides.innerHTML = 
     `
     <img src="${IMAGES[n]}" class="animate__animated ${EFECTS[i]}"/>
     `
}

function showTitle( n ) {
    let i = Math.round(Math.random() * 3)
    carouselTitles.innerHTML =
    // HW7: efect title
     `
     <h4 class="animate__animated ${EFECTS[i]}">${TITLES[n]}</h4>
     `
}

function showIndicators( n ) {
    carouselIndicators.innerHTML = ``
    for (let i=0; i<IMAGES.length; i++) {
    if(i == n) {
        carouselIndicators.innerHTML += ` ⦿ `  
    } else {
        carouselIndicators.innerHTML += ` ⦾ ` 
    }
  } 
}

function show() {
    showImage(currentIndex)
    showTitle(currentIndex)
    showIndicators(currentIndex)  
}

function next() {
    // HW2:  boundaries/limits - if/else
      if(currentIndex >= 2){currentIndex = 0} 
      else {currentIndex++}
    
    show()
}

function action() { // HW8: keyboard
    switch(event.key) {
        case "ArrowRight": next(); break 
        case "ArrowLeft": prev(); break
    }
}

function prev() { // HW4: function create 
    
    if(currentIndex <= 0){ currentIndex = 2} 
    else {currentIndex--}
    
    show()
}

show()


carouselPlay.innerHTML = `>`
// Cum se poate de oprit functia? prin a doua oara click?
function play() {
setInterval( next , 3000)       
carouselPlay.innerHTML = `=`
}

