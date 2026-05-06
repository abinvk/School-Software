function login(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Correct username and password
    let correctUsername = "abin";
    let correctPassword = "1234";

    if(username === correctUsername && password === correctPassword){

        // Move to next page
        window.location.href = "dashboard.html";

    }else{

        document.getElementById("message").innerText =
        "Wrong Username or Password";

    }
}