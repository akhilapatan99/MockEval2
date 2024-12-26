const validEmail = "empher@gmail.com";
const validPassword = "empher@123";

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === validEmail && password === validPassword) {
        alert("Login Success, you are redirecting to quiz page");
        window.location.href = "quiz.html"; //Redirect to quiz.html
    }else {
        alert("Inavalid credentials. Please try again.");
    }
});