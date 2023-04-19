// <!-- /* RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
// Assessment: Assignment 1
// Author: Le Dang Quang
// ID: s3977794
// Acknowledgement: 
// icon:https://fontawesome.com/
// books:
// https://markmanson.net/best-books/fiction#:~:text=The%2047%20Best%20Fiction%20Books%20of%20All%20Time,to%20Napoleon%20himself.%20The%20modern%20epic.%20More%20items
// https://reedsy.com/discovery/blog/best-nonfiction-books
// https://www.goodhousekeeping.com/life/entertainment/g26143680/best-romance-novels/
// https://www.ereads.com/best-science-fiction-books/#:~:text=Best%20Science%20Fiction%20Books%201%20Dune%20by%20Frank,Sheep%3F%20by%20Philip%20K.%20Dick%20...%20More%20items
// stationary:https://www.fahasa.com/ */ -->

const toggleBtn = document.getElementById('toggleBtn');
const dropDownContent = document.getElementById('dropDownContent');
toggleBtn.addEventListener('click', () => {
    if(dropDownContent.style.display === 'none'){
        dropDownContent.style.display = 'block';
    }
    else{
        dropDownContent.style.display = 'none';
    }
})

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


function Added() {
    alert("Your item has been added to cart!");
}

function noty() {
    alert("Our customer care will contact you later. Thank you!");
}
