const userEmail = document.getElementById("email")
const button = document.getElementById("button")
const errorMessage = document.getElementById("error-message")


button.onclick = (e) => {
    e.preventDefault();
    if(userEmail.value === ""){
        errorMessage.textContent = "Please enter your email address"
    }
    else{
        errorMessage.style.display = "none"
    }
}