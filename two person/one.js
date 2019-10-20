function one() {
  var name = document.getElementById("name").value;
  window.location.reload();
  window.localStorage.setItem("user1", name);
}
function name() {
  var name1 = window.localStorage.getItem("user1");
  var name2 = window.localStorage.getItem("user2");
  document.getElementById("nameOne").innerHTML = name1;
  document.getElementById("nameTwo").innerHTML = name2;
  document.getElementById("nameT1").innerHTML = name1;
  document.getElementById("nameT2").innerHTML = name2;
}
function two() {
  var name = document.getElementById("name2").value;
  window.location.reload();
  window.localStorage.setItem("user2", name);
}
//function for calculate the total expenses of user1
function expUser1() {
  var expenses = eval(document.getElementById("expenses1").value);
  document.getElementById("totalExpenses1").value = expenses;
}
setInterval(expUser1, 100);
//function for calculation the total expenses of user2
function expUser2() {
  var expenses = eval(document.getElementById("expenses2").value);
  document.getElementById("totalExpenses2").value = expenses;
}
setInterval(expUser2, 100);
//function for total expenses
function total() {
  var totalUser1 = document.getElementById("totalExpenses1").value * 1;
  var totalUser2 = document.getElementById("totalExpenses2").value * 1;
  document.getElementById("total").value = totalUser1 + totalUser2;
}
setInterval(total, 100);
//function for to calculate the per head
function perHead() {
  var total = document.getElementById("total").value * 1;
  document.getElementById("perhead").value = total / 2;
}
setInterval(perHead, 100);
//function for grand total
function grandTotal() {
  var user1Exp = document.getElementById("totalExpenses1").value * 1;
  var user2Exp = document.getElementById("totalExpenses2").value * 1;
  var perHead = document.getElementById("perhead").value;
  document.getElementById("grandTotal1").value = user1Exp - perHead;
  document.getElementById("grandTotal2").value = user2Exp - perHead;
}
setInterval(grandTotal,100);