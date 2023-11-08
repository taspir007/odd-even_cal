var num = Number(prompt("Enter a number:"));

if (num % 2 === 0) {
    document.querySelector("#text").innerHTML = "Even";


} else {
    document.querySelector("#text").innerHTML = "Odd!";
}
console.log("num");

