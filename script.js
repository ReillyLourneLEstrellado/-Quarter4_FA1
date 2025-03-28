document.getElementById("signupForm").addEventListener("submit", function(event) {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let sexChecked = document.querySelector('input[name="sex"]:checked');
    let errorMessage = document.getElementById("error-message");
    
    if (!firstName || !lastName || !email || !sexChecked) {
        event.preventDefault();
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
    }
});
