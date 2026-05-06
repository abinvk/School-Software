function login(){

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById("password").value;


    let correctUsername = "abin";
    let correctPassword = "1234";


    if(username === correctUsername &&
       password === correctPassword){

        // Move to dashboard page
        window.location.href = "dashboard-page2.html";

    }else{

        document.getElementById("message").innerText =
        "Wrong Username or Password";

    }

}

// Move to 3rd page
function nextPage3(){
    window.location.href = "class-page3.html";

}

// Move to 4th page

function nextPage4(){
    window.location.href = "divisionpage-page4.html";
}
// move to 5th page

function next(){
    window.location.href = "deatilspage.html";
}

// move to 6th page

function next(){
    window.location.href = "studentdeatils.html";
}

//Move to 7th page

function next(){
    window.location.href = "parentesdeatils.html";
}