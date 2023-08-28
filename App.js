const form = document.getElementById('Login-Form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const username = document.getElementById('Username').value;
    const password = document.getElementById('Password').value;

    if(username ==="Yadynesh" && password ==="Systems2023"){
         window.location.href="About.html";
        /*alert("Logged In !!");*/
    }
    else{
        document.getElementById("error-msg").textContent="Invalid username or password";
    }
});