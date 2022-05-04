window.addEventListener('click', function (){
    console.log("==The window was clicked")
})


function boxClickListener(event) {
    console.log("== A box was clicked")    
console.log("== event.target", event.target)
console.log("== event.currentTarget", event.currentTarget)
}

var boxes = document.getElementsByClassName('box')

for (var i=0; i<boxes.length; i++){
    boxes[i].addEventListener('click', boxClickListener)
}