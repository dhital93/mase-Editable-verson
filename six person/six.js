function one() {
  var name = document.getElementById("name").value;
  window.location.reload();
  window.localStorage.setItem("user1", name);
}

function two() {
  var name = document.getElementById("name2").value;
  window.location.reload();
  window.localStorage.setItem("user2", name);
}
function three() {
  var name = document.getElementById("name3").value;
  window.location.reload();
  window.localStorage.setItem("user3", name);
}

function four() {
  var name = document.getElementById("name4").value;
  window.location.reload();
  window.localStorage.setItem("user4", name);
}

function five() {
  var name = document.getElementById("name5").value;
  window.location.reload();
  window.localStorage.setItem("user5", name);
}
function six() {
  var name = document.getElementById("name6").value;
  window.location.reload();
  window.localStorage.setItem("user6", name);
}

//function to doisplay the nAME
function name() {
  var name1 = window.localStorage.getItem("user1");
  var name2 = window.localStorage.getItem("user2");
  var name3 = window.localStorage.getItem("user3");
  var name4 = window.localStorage.getItem("user4");
  var name5 = window.localStorage.getItem("user5");
  var name6 = window.localStorage.getItem("user6");
  document.getElementById("nameOne").innerHTML = name1;
  document.getElementById("nameTwo").innerHTML = name2;
  document.getElementById("nameThree").innerHTML = name3;
  document.getElementById("nameFour").innerHTML = name4;
  document.getElementById("nameFive").innerHTML = name5;
  document.getElementById("nameSix").innerHTML = name6;
  document.getElementById("nameT1").innerHTML = name1;
  document.getElementById("nameT2").innerHTML = name2;
  document.getElementById("nameT3").innerHTML = name3;
  document.getElementById("nameT4").innerHTML = name4;
  document.getElementById("nameT5").innerHTML = name5;
  document.getElementById("nameT6").innerHTML = name6;
}
//function for calculate the total expenses of user1
function expUser1() {
  var expenses = eval(document.getElementById("expenses1").value);
  document.getElementById("totalExpenses1").value = expenses;
}
setInterval(expUser1, 100);

function expUser2() {
  var expenses = eval(document.getElementById("expenses2").value);
  document.getElementById("totalExpenses2").value = expenses;
}

setInterval(expUser2, 100);
function expUser3() {
  var expenses = eval(document.getElementById("expenses3").value);
  document.getElementById("totalExpenses3").value = expenses;
}
setInterval(expUser3, 100);

function expUser4() {
  var expenses = eval(document.getElementById("expenses4").value);
  document.getElementById("totalExpenses4").value = expenses;
}
setInterval(expUser4, 100);

function expUser5() {
  var expenses = eval(document.getElementById("expenses5").value);
  document.getElementById("totalExpenses5").value = expenses;
}
setInterval(expUser5, 100);

function expUser6() {
  var expenses = eval(document.getElementById("expenses6").value);
  document.getElementById("totalExpenses6").value = expenses;
}
setInterval(expUser6, 100);
//function for total expenses
function total() {
  var totalUser1 = document.getElementById("totalExpenses1").value * 1;
  var totalUser2 = document.getElementById("totalExpenses2").value * 1;
  var totalUser3 = document.getElementById("totalExpenses3").value * 1;
  var totalUser4 = document.getElementById("totalExpenses4").value * 1;
  var totalUser5 = document.getElementById("totalExpenses5").value * 1;
  var totalUser6 = document.getElementById("totalExpenses6").value * 1;
  document.getElementById("total").value =
    totalUser1 + totalUser2 + totalUser3 + totalUser4 + totalUser5 + totalUser6;
}
setInterval(total, 100);
//function for to calculate the per head
function perHead() {
  var total = document.getElementById("total").value * 1;
  document.getElementById("perhead").value = total / 6;
}
setInterval(perHead, 100);
//function for grand total
function grandTotal() {
  var user1Exp = document.getElementById("totalExpenses1").value * 1;
  var user2Exp = document.getElementById("totalExpenses2").value * 1;
  var user3Exp = document.getElementById("totalExpenses3").value * 1;
  var user4Exp = document.getElementById("totalExpenses4").value * 1;
  var user5Exp = document.getElementById("totalExpenses5").value * 1;
  var user6Exp = document.getElementById("totalExpenses6").value * 1;
  var perHead = document.getElementById("perhead").value;
  document.getElementById("grandTotal1").value = user1Exp - perHead;
  document.getElementById("grandTotal2").value = user2Exp - perHead;
  document.getElementById("grandTotal3").value = user3Exp - perHead;
  document.getElementById("grandTotal4").value = user4Exp - perHead;
  document.getElementById("grandTotal5").value = user5Exp - perHead;
  document.getElementById("grandTotal6").value = user6Exp - perHead;
}
setInterval(grandTotal, 100);
