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
