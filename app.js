// Guess Number

function result1() {
  let userNum1 = +document.getElementById("userNum1").value;
  let showUserInp1 = (document.getElementById(
    "showInp1"
  ).innerHTML = `<h3>Your Number ${userNum1}</h3>`);
  let comRes1 = 9999 - userNum1;
  let showComRes1 = (document.getElementById(
    "comRes1"
  ).innerHTML = `<h3>Computer Response ${comRes1}</h3>`);

  document.getElementById("userNum1").value = "";
  return false;
}
function result2() {
  let userNum2 = +document.getElementById("userNum2").value;
  let showUserInp2 = (document.getElementById(
    "showInp2"
  ).innerHTML = `<h3>Your Number ${userNum2}</h3>`);
  let comRes2 = 9999 - userNum2;
  let showComRes2 = (document.getElementById(
    "comRes2"
  ).innerHTML = `<h3>Computer Response ${comRes2}</h3>`);

  document.getElementById("userNum2").value = "";

  return false;
}

function calcAns() {
  let finalAns = (document.getElementById(
    "finalAns"
  ).innerHTML = `<h2>Your final answer is${9999 + 9999}</h2>`);
}

function showAns() {
  let ans = (document.getElementById("ans").innerHTML =
    "<br /><h3>Your Answer Will be 19998 </h3>");
  console.log(ans);

  return false;
}
