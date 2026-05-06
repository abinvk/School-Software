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



function nextPage2(){
    window.location.href = "class-page3.html";

}



function nextPage3(){
    window.location.href = "divisionpage-page4.html";
}


function nextPage4(){
    window.location.href = "divisionpage-page4.html";
}

function nextPage5(){
    window.location.href = "studentdeatils-page5.html";
}



function nextPage6(){
    window.location.href = "deatilspage-pag6.html";
}