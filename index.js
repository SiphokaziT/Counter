

var x = document.getElementById("increment");
var y = document.getElementById("increment");


interger = 0;

function myFunction() {
    interger += 1;
    document.getElementById("number").innerHTML = interger;
}

function myFunction1() {
    interger = 0;
    document.getElementById("number").innerHTML = interger;
}

function myFunction2() {

    interger -= 1;
    document.getElementById("number").innerHTML = interger;
}