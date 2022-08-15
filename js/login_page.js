document.getElementById('btn-submit').addEventListener('click', function(){
    const inputEmail = document.getElementById('user-email');
    const email = inputEmail.value;
    const inputPass = document.getElementById('user-password');
    const pass = inputPass.value;

    if(email === 'email@domain.com' && pass === 'password'){
        location.href = 'dashboard.html'
    }
    else{
        alert("Email Or Password Doe's Not Matched!")
    }
});