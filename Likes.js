var countElement1 = document.querySelector("#counting1");
var countElement2 = document.querySelector("#counting2");
var countElement3 = document.querySelector("#counting3");
var count1 = 1;
var count2 = 1;
var count3 = 1;

function add1() {
    count1++;
    countElement1.innerText = count1 + " like(s)";
    console.log(count1);
}
function add2() {
    count2++;
    countElement2.innerText = count2 + " like(s)";
    console.log(count2);
}
function add3() {
    count3++;
    countElement3.innerText = count3 + " like(s)";
    console.log(count3);
}