var decreaseBtn = document.getElementById("decreaseBtn");
var increaseBtn = document.getElementById("increaseBtn");
var counter = document.getElementById("counter");

var count = 0;
function decrease() {
    count = count - 1;
    counter.innerText = count;
}

function increase() {
    count = count + 1;
    counter.innerText = count;
}