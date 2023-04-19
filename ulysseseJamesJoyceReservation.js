const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const quantity = document.getElementById("Quantity");

let number = 1
plus.addEventListener("click", () => {
    number++;
    quantity.innerText = number;
    console.log(number);
});

minus.addEventListener("click", () => {
    if(number > 1){
        number--;
        quantity.innerText = number;
    }
    console.log(number)
})
