const slidePage = document.querySelector(".slidepage");
const firstNextBtn = document.querySelector(".nextBtn");
const secondPrevBtn = document.querySelector(".prev1");
const secondNextBtn = document.querySelector(".next1");
const thirdPrevBtn = document.querySelector(".prev2");
const thirdNextBtn = document.querySelector(".next2");
const fourthPrevBtn = document.querySelector(".prev3");
const submitBtn = document.querySelector(".submit");
const processStep1 = document.querySelectorAll(".step p");
const processStep2 = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");

let max = 4;
let curr = 1;


firstNextBtn.addEventListener("click", function(){
    slidePage.style.marginLeft = "-30%";

    bullet[curr-1].classList.add("active");
    processStep1[curr-1].classList.add("active");
    processStep2[curr-1].classList.add("active");
    curr+=1;
});

secondPrevBtn.addEventListener("click", function(){
    slidePage.style.marginLeft = "0%";

    bullet[curr-2].classList.remove("active");
    processStep1[curr-2].classList.remove("active");
    processStep2[curr-2].classList.remove("active");
    curr-=1;
});

secondNextBtn.addEventListener("click", function(){
    slidePage.style.marginLeft = "-60%";

    bullet[curr-1].classList.add("active");
    processStep1[curr-1].classList.add("active");
    processStep2[curr-1].classList.add("active");
    curr+=1;
});

thirdPrevBtn.addEventListener("click", function(){
    slidePage.style.marginLeft = "-30%";

    bullet[curr-2].classList.remove("active");
    processStep1[curr-2].classList.remove("active");
    processStep2[curr-2].classList.remove("active");
    curr-=1;
});

thirdNextBtn.addEventListener("click", function(){
    slidePage.style.marginLeft = "-90%";

    bullet[curr-1].classList.add("active");
    processStep1[curr-1].classList.add("active");
    processStep2[curr-1].classList.add("active");
    curr+=1;
});

fourthPrevBtn.addEventListener("click", function(){
    slidePage.style.marginLeft = "-60%";

    bullet[curr-2].classList.remove("active");
    processStep1[curr-2].classList.remove("active");
    processStep2[curr-2].classList.remove("active");
    curr-=1;
});

submitBtn.addEventListener("click", function(){
    var fname= document.getElementById("FName").value;
    var lname= document.getElementById("LName").value;
    var email= document.getElementById("email").value;
    var phoneNumber= document.getElementById("phoneNumber").value;
    var date= document.getElementById("date").value;
    var gender= document.getElementById("gender").value;
    var username= document.getElementById("username").value;
    var password= document.getElementById("password").value;
    if(fname.length < 5 || fname.length>20)
    {
        alert("First Name must be 5 - 20 character");
        return false;
    }
    if(lname.length < 5 || lname.length>20)
    {
        alert("Last name must be 5 - 20 character");
        return false;
    }
    if(email.length<6||email.length>20)
    {
        alert("Email not valid!");
        return false;
    }
    if(phoneNumber.length!=12)
    {
        alert("Phone number not valid!");
        return false;
    }
    if(date=="")
    {
        alert("Date not valid!");
        return false;
    }
    if(gender=="")
    {
        alert("Gender not valid!");
        return false;
    }
    if(username.length<5||username.length>20)
    {
        alert("Username must be 5 - 20 character");
        return false;
    }
    if(password.length < 8 || password.length>20)
    {
        alert("Password must be 8 - 20 character");
        return false;
    }

    setTimeout(function(){
        alert("Registration Success...")
        location.replace("home.html");
    }, 500)
});

