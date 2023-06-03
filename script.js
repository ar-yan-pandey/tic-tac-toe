// variables

let i = 0
let x1 = document.getElementById("x1")
let x2 = document.getElementById("x2")
let x3 = document.getElementById("x3")
let x4 = document.getElementById("x4")
let x5 = document.getElementById("x5")
let x6 = document.getElementById("x6")
let x7 = document.getElementById("x7")
let x8 = document.getElementById("x8")
let x9 = document.getElementById("x9")
let o1 = document.getElementById("o1")
let o2 = document.getElementById("o2")
let o3 = document.getElementById("o3")
let o4 = document.getElementById("o4")
let o5 = document.getElementById("o5")
let o6 = document.getElementById("o6")
let o7 = document.getElementById("o7")
let o8 = document.getElementById("o8")
let o9 = document.getElementById("o9")

// clicking and visibility

function box1(){
    if(i % 2 == 0){
        x1.style.display="block"
        i = i+1
        document.getElementById('box1').onclick="none"
        wincheck()
    }
    else{
        o1.style.display="block"
        i = i+1
        document.getElementById('box1').onclick="none"
        wincheck()
    }
}
function box2(){
    if(i % 2 == 0){
        x2.style.display="block"
        i = i+1
        document.getElementById('box2').onclick="none"
        wincheck()
    }
    else{
        o2.style.display="block"
        i = i+1
        document.getElementById('box2').onclick="none"
        wincheck()
    }
}
function box3(){
    if(i % 2 == 0){
        x3.style.display="block"
        i = i+1
        document.getElementById('box3').onclick="none"
        wincheck()
        
    }
    else{
        o3.style.display="block"
        i = i+1
        document.getElementById('box3').onclick="none"
        wincheck()
    }
}
function box4(){
    if(i % 2 == 0){
        x4.style.display="block"
        i = i+1
        document.getElementById('box4').onclick="none"
        wincheck()
    }
    else{
        o4.style.display="block"
        i = i+1
        document.getElementById('box4').onclick="none"
        wincheck()
    }
}
function box5(){
    if(i % 2 == 0){
        x5.style.display="block"
        i = i+1
        document.getElementById('box5').onclick="none"
        wincheck()
    }
    else{
        o5.style.display="block"
        i = i+1
        document.getElementById('box5').onclick="none"
        wincheck()
    }
}
function box6(){
    if(i % 2 == 0){
        x6.style.display="block"
        i = i+1
        document.getElementById('box6').onclick="none"
        wincheck()
    }
    else{
        o6.style.display="block"
        i = i+1
        document.getElementById('box6').onclick="none"
        wincheck()
    }
}
function box7(){
    if(i % 2 == 0){
        x7.style.display="block"
        i = i+1
        document.getElementById('box7').onclick="none"
        wincheck()
    }
    else{
        o7.style.display="block"
        i = i+1
        document.getElementById('box7').onclick="none"
        wincheck()
    }
}
function box8(){
    if(i % 2 == 0){
        x8.style.display="block"
        i = i+1
        document.getElementById('box8').onclick="none"
        wincheck()
    }
    else{
        o8.style.display="block"
        i = i+1
        document.getElementById('box8').onclick="none"
        wincheck()
    }
}
function box9(){
    if(i % 2 == 0){
        x9.style.display="block"
        i = i+1
        document.getElementById('box9').onclick="none"
        wincheck()
    }
    else{
        o9.style.display="block"
        i = i+1
        document.getElementById('box9').onclick="none"
        wincheck()
    }
}


// // winning conditions
// if(x1.style.display=='block'){
//     if(x2.style.display=='block'){
//         if(x3.style.display=='block'){
//             document.getElementById('box1').style.display='none'
//         }
//     }
// }



function wincheck() {
    if (x1.style.display == "block" && x4.style.display == "block" && x7.style.display == "block") {
        setTimeout(function() { alert("X WON"); }, 200);
        setTimeout(function() { window.location = 'index.html';}, 201);
        
    }
    if(x1.style.display=="block" && x2.style.display=="block" && x3.style.display=="block"){
        setTimeout(function() { alert("X WON"); }, 200);
        setTimeout(function() { window.location = 'index.html';}, 201);
    }
    if(x4.style.display=="block" && x5.style.display=="block" && x6.style.display=="block"){
        setTimeout(function() { alert("X WON"); }, 200);
        setTimeout(function() { window.location = 'index.html';}, 201);
    }
    if(x7.style.display=="block" && x8.style.display=="block" && x9.style.display=="block"){
        setTimeout(function() { alert("X WON"); }, 200);
        setTimeout(function() { window.location = 'index.html';}, 201);
    }
    if(x2.style.display=="block" && x5.style.display=="block" && x8.style.display=="block"){
        setTimeout(function() { alert("X WON"); }, 200);
        setTimeout(function() { window.location = 'index.html';}, 201);
    }
    if(x3.style.display=="block" && x6.style.display=="block" && x9.style.display=="block"){
        setTimeout(function() { alert("X WON"); }, 200);
        setTimeout(function() { window.location = 'index.html';}, 201);
    }
    if(x1.style.display=="block" && x5.style.display=="block" && x9.style.display=="block"){
        setTimeout(function() { alert("X WON"); }, 200);
        setTimeout(function() { window.location = 'index.html';}, 201);
    }
    if(x3.style.display=="block" && x5.style.display=="block" && x7.style.display=="block"){
        setTimeout(function() { alert("X WON"); }, 200);
        setTimeout(function() { window.location = 'index.html';}, 201);
    }

    // winning o

    if (o1.style.display == "block" && o4.style.display == "block" && o7.style.display == "block") {
        setTimeout(function() { alert("O WON"); }, 200);
        setTimeout(function() { window.location = 'index.html';}, 201);
    }
    if(o1.style.display=="block" && o2.style.display=="block" && o3.style.display=="block"){
        setTimeout(function() { alert("O WON"); }, 200);
        setTimeout(function() { window.location = 'index.html';}, 201);
    }
    if(o4.style.display=="block" && o5.style.display=="block" && o6.style.display=="block"){
        setTimeout(function() { alert("O WON"); }, 200);
        setTimeout(function() { window.location = 'index.html';}, 201);
    }
    if(o7.style.display=="block" && o8.style.display=="block" && o9.style.display=="block"){
        setTimeout(function() { alert("O WON"); }, 200);
        setTimeout(function() { window.location = 'index.html';}, 201);
    }
    if(o2.style.display=="block" && o5.style.display=="block" && o8.style.display=="block"){
        setTimeout(function() { alert("O WON"); }, 200);
        setTimeout(function() { window.location = 'index.html';}, 201);
    }
    if(o3.style.display=="block" && o6.style.display=="block" && o9.style.display=="block"){
        setTimeout(function() { alert("O WON"); }, 200);
        setTimeout(function() { window.location = 'index.html';}, 201);
    }
    if(o1.style.display=="block" && o5.style.display=="block" && o9.style.display=="block"){
        setTimeout(function() { alert("O WON"); }, 200);
        setTimeout(function() { window.location = 'index.html';}, 201);
    }
    if(o3.style.display=="block" && o5.style.display=="block" && o7.style.display=="block"){
        setTimeout(function() { alert("O WON"); }, 200);
        setTimeout(function() { window.location = 'index.html';}, 201);
    }
O

}
