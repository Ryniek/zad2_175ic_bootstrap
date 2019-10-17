/*eslint-env browser*/

//1st script +
var x = document.getElementsByClassName("badge-light");
x[0].innerHTML = 6;
x[1].innerHTML = 10;
//2nd script +
var z = document.getElementById("hello");
console.log(z);
z.innerHTML = "Skrypt nr 2 i 4";
//3rd script +
var node = document.createElement("li");
var textnode = document.createTextNode("Czwarta opcja dodana za pomocą js, skrypt nr 3"); 
node.appendChild(textnode);
node.classList.add("list-group-item");
document.getElementById("my-list").appendChild(node);
//4th script +
function mouseOver() {
    document.getElementById("hello").style.color = "red"
}
function mouseOut() {
    document.getElementById("hello").style.color = "blue";
}
//5th script +
function myFunction() {
    var x, i;
    x = document.querySelectorAll(".jakasklasa");
    for(i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "blue";
    }
}
//6th script +
function colorChanging() {
    var colors = ['red', 'blue', 'green', 'yellow', 'black', 'orange', 'purple', 'grey']
    var x = document.getElementsByClassName("form-control");
    random = Math.floor(Math.random() * 8);
    x[0].style.color = colors[random];
}
//7th script +
function pageResizing() {
    var y = window.outerWidth;
    var x = window.outerHeight;
     var txt = "Window size: width=" + y + ", height=" + x;
    document.getElementById("demo").innerHTML = txt;
}
//8th script +
function opacityChanger() {
    var x = document.getElementById('page-header');
    x.style.opacity = 1 - window.scrollY / 700;
}
//9th script +
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
//10th script +
function dbClickImage() {
    var x = document.getElementById('penguin-img').style.transform = "rotate(90deg)" ;
}

//11th script +
var flag = true;
function showHideAbove() {
    if(flag == true){
        document.getElementById('image2').style.display='block';
        flag = false;
    } else {
        document.getElementById('image2').style.display='none';
        flag = true;
    }
}

//12th script +
function Append() {
    var x = document.getElementById('first-field').value;
    var first_field = parseInt(x);
    var y = document.getElementById('second-field').value;
    var second_field = parseInt(y);
    var result = document.getElementsByClassName("wynik");
    result[0] = first_field + second_field;
}

//13th script
function Random() {
    var x = document.getElementById('first-random').value;
    var first_random = parseInt(x);
    var y = document.getElementById('second-random').value;
    var second_random = parseInt(y);
    var result = document.getElementsByClassName("result");
    var random = Math.floor(Math.random() * second_random) + first_random;
    result[0].innerHTML = random;
}
















