// -======= Navigation Bar -============== //
let navBtn = document.querySelector(".nav-btn");

let showMenu = document.querySelector(".menu");

navBtn.addEventListener("click", function () {
  showMenu.classList.toggle("show-menu");
  navBtn.classList.toggle("buttonPosition");
});


// -======= For auto navigation of Carousel -============== //
let count = 1;
setInterval(function(){
  document.getElementById("radio-" + count).checked = true; 
  count++;
  if(count > 4){
    count = 1;
  }
}, 8000);


// -======= For Contact -============== //
let phoneNumber = document.querySelector(".uil-phone");
phoneNumber.addEventListener("click", function(){
  alert("Phone Number: 09305193102");
});

let gmail = document.querySelector(".uil-envelope-check");
gmail.addEventListener("click", function(){
  alert("Gmail add: keemchardtamio@gmail.com");
});