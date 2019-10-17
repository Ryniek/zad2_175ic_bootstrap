/*eslint-env browser*/

//1st script
var x = document.getElementsByClassName("badge-light");
x[0].innerHTML = 6;
x[1].innerHTML = 10;
//2nd script
var z = document.getElementById("hello");
console.log(z);
z.innerHTML = "Hello, Michu";
//3rd script
var node = document.createElement("li");
var textnode = document.createTextNode("Czwarta opcja"); 
node.appendChild(textnode);
node.classList.add("list-group-item");
document.getElementById("my-list").appendChild(node);
//4th script
function mouseOver() {
    document.getElementById("hello").style.color = "red"
}
function mouseOut() {
    document.getElementById("hello").style.color = "blue";
}
//5th script
function myFunction() {
    var x, i;
    x = document.querySelectorAll(".jakasklasa");
    for(i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "blue";
    }
}
//6th script
function colorChanging() {
    var colors = ['red', 'blue', 'green', 'yellow', 'black', 'orange', 'purple', 'grey']
    var x = document.getElementsByClassName("form-control");
    random = Math.floor(Math.random() * 8);
    x[0].style.color = colors[random];
}
//7th script
function pageResizing() {
    var y = window.outerWidth;
    var x = window.outerHeight;
     var txt = "Window size: width=" + y + ", height=" + x;
    document.getElementById("demo").innerHTML = txt;
}
//8th script
function opacityChanger() {
    var x = document.getElementById('page-header');
    x.style.opacity = 1 - window.scrollY / 700;
}
//9th script
var counter = 0;
var weight = 0;
function clickCounter() {
    var x = document.getElementsByClassName("clicker");
    counter++;
    x[0].innerHTML = counter;
    weight += 100;
    x[0].style.fontWeight = weight;
    if(counter == 5)
        x[0].style.color = "orange";
}
//10th script
function dbClickTable() {
    var node = document.createElement("tr");
    var nodetd = node.appendChild()
    node.classList.add("list-group-item");
}


