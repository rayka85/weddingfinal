
function pa1(){

let p1 = document.getElementById("name").value;
let p2 = document.getElementById("sname").value;
let firstChar = p1.charAt(0);
let firstCharG = p2.charAt(0);
document.getElementById("show1-5").innerHTML= p1 + " & " + p2;
  document.getElementById("show1").innerHTML= firstChar + "   &  " + firstCharG;

 }

 function pa3(){
  let lName = document.getElementById("lname").value;
  document.getElementById("show2").innerHTML = lName;

 }

 function pa4(){
  let date = document.getElementById("date").value;
  document.getElementById("show3").innerHTML = date;

 }

 function pa5(){
  let location = document.getElementById("location").value;
  document.getElementById("show4").innerHTML = location;

 }

 function formalStyle(){
  document.getElementById("col2").style.backgroundImage = "url('img/p4.jpg')";
  document.getElementById("col2").style.backgroundSize = "cover";
  document.getElementById("col2").style.fontFamily = "'Heebo', sans-serif";
  document.getElementById("col2").style.fontSize = "1.5rem";
  document.getElementById("col2").style.fontStyle ="italic";
  document.getElementById("col2").style.color = "RGB(99, 153, 129)";//RGB(8, 153, 129)
 }
 
 function springStyle(){
  document.getElementById("col2").style.backgroundImage = "url('img/spring.jpg')";
  document.getElementById("col2").style.backgroundSize = "cover";
  document.getElementById("col2").style.fontFamily = "'Dancing Script', cursive";
  document.getElementById("col2").style.fontSize = "1.7rem";
  document.getElementById("col2").style.color = "RGB(0, 0, 20)";
  }

 function artStyle(){
  document.getElementById("col2").style.backgroundImage = "url('img/art.jpg')";
  document.getElementById("col2").style.backgroundSize = "cover";
  document.getElementById("col2").style.fontFamily = "'Artifika', serif";
  document.getElementById("col2").style.fontSize = "1.7rem";
  document.getElementById("col2").style.color = "RGB(255, 255, 255)";
 }


 function clearText(){
  document.getElementById('name').value = "";
  document.getElementById('sname').value = "";
  document.getElementById('lname').value = "";
  document.getElementById('date').value = "";
  document.getElementById('location').value = "";
 }





